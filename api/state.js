// Shared state API. One JSON document in a private Vercel Blob store.
// GET  /api/state            -> current state (seeded on first call)
// POST /api/state {action..} -> applies one action, returns new state
//
// Yolanda actions (no PIN): setStatus (todo/filmed/sent only), toggleShot, onboardingDone
// Jacob actions (PIN):      setStatus (any), setStage, upsertPost, deletePost, setConfig, reset

const { put, get } = require("@vercel/blob");
const SEED = require("../seed.js");

const PATH = "state.json";
const YOLANDA_STATUSES = ["todo", "filmed", "sent"];
const ALL_STATUSES = ["todo", "filmed", "sent", "editing", "scheduled", "posted"];

async function load() {
  const r = await get(PATH, { access: "private", useCache: false });
  if (!r || r.statusCode !== 200 || !r.stream) return null;
  const text = await new Response(r.stream).text();
  try { return JSON.parse(text); } catch (e) { return null; }
}

async function save(state) {
  state.updatedAt = new Date().toISOString();
  await put(PATH, JSON.stringify(state), {
    access: "private",
    allowOverwrite: true,
    addRandomSuffix: false,
    contentType: "application/json"
  });
  return state;
}

function fresh() { return JSON.parse(JSON.stringify(SEED)); }

function readBody(req) {
  if (req.body && typeof req.body === "object") return Promise.resolve(req.body);
  return new Promise((resolve) => {
    let d = "";
    req.on("data", (c) => (d += c));
    req.on("end", () => { try { resolve(JSON.parse(d || "{}")); } catch (e) { resolve({}); } });
  });
}

function logEvent(state, who, text) {
  state.log = state.log || [];
  state.log.unshift({ at: new Date().toISOString(), who, text });
  state.log = state.log.slice(0, 200);
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  try {
    let state = await load();
    if (!state) { state = await save(fresh()); state.seeded = true; }

    if (req.method === "GET") return res.status(200).end(JSON.stringify(state));
    if (req.method !== "POST") return res.status(405).end(JSON.stringify({ error: "method" }));

    const b = await readBody(req);
    const isJacob = !!process.env.JACOB_PIN && b.pin === process.env.JACOB_PIN;
    const who = isJacob ? "Jacob" : "Yolanda";
    const need = () => { const e = new Error("pin"); e.code = 401; throw e; };
    const findPost = (id) => { const p = state.posts.find((p) => p.id === id); if (!p) { const e = new Error("no such post"); e.code = 404; throw e; } return p; };

    switch (b.action) {
      case "checkPin":
        return res.status(200).end(JSON.stringify({ ok: isJacob }));

      case "setStatus": {
        const p = findPost(b.id);
        if (!ALL_STATUSES.includes(b.status)) throw Object.assign(new Error("bad status"), { code: 400 });
        if (!isJacob && !YOLANDA_STATUSES.includes(b.status)) need();
        if (!isJacob && !YOLANDA_STATUSES.includes(p.status)) need(); // once it's with Jacob, only Jacob moves it
        const prev = p.status;
        p.status = b.status;
        p.history = p.history || {};
        p.history[b.status] = new Date().toISOString();
        if (b.status === "sent" && prev !== "sent") p.sentAt = p.history.sent;
        logEvent(state, who, `#${p.n} ${p.title}: ${prev} → ${b.status}`);
        break;
      }

      case "toggleShot": {
        const p = findPost(b.id);
        p.shotsDone = p.shotsDone || {};
        if (b.done) p.shotsDone[String(b.idx)] = true; else delete p.shotsDone[String(b.idx)];
        break;
      }

      case "onboardingDone": {
        state.onboarding.done = !!b.done;
        logEvent(state, who, b.done ? "Voice memo sent" : "Voice memo un-marked");
        break;
      }

      case "setStage": {
        if (!isJacob) need();
        state.stage = Object.assign({}, state.stage, {
          label: String(b.label ?? state.stage.label).slice(0, 40),
          light: ["red", "yellow", "green"].includes(b.light) ? b.light : state.stage.light,
          note: String(b.note ?? state.stage.note).slice(0, 200)
        });
        logEvent(state, who, `Stage set to ${state.stage.label} (${state.stage.light})`);
        break;
      }

      case "upsertPost": {
        if (!isJacob) need();
        const inc = b.post || {};
        if (!inc.title) throw Object.assign(new Error("title required"), { code: 400 });
        const lines = (v) => Array.isArray(v) ? v : String(v || "").split("\n").map((s) => s.trim()).filter(Boolean);
        const existing = inc.id ? state.posts.find((p) => p.id === inc.id) : null;
        const post = existing || { id: "p" + Date.now().toString(36), status: "todo", shotsDone: {} };
        Object.assign(post, {
          week: String(inc.week || post.week || ""),
          n: Number(inc.n || post.n || state.posts.length + 1),
          type: String(inc.type || post.type || "Reel"),
          title: String(inc.title),
          filmBy: String(inc.filmBy || post.filmBy || ""),
          postOn: String(inc.postOn || post.postOn || ""),
          idea: String(inc.idea ?? post.idea ?? ""),
          length: String(inc.length ?? post.length ?? ""),
          script: lines(inc.script ?? post.script),
          shots: lines(inc.shots ?? post.shots),
          send: String(inc.send ?? post.send ?? ""),
          caption: String(inc.caption ?? post.caption ?? ""),
          notes: String(inc.notes ?? post.notes ?? "")
        });
        if (!existing) state.posts.push(post);
        logEvent(state, who, `${existing ? "Edited" : "Added"} #${post.n} ${post.title}`);
        break;
      }

      case "deletePost": {
        if (!isJacob) need();
        const p = findPost(b.id);
        state.posts = state.posts.filter((x) => x.id !== b.id);
        logEvent(state, who, `Deleted #${p.n} ${p.title}`);
        break;
      }

      case "setConfig": {
        if (!isJacob) need();
        state.config = Object.assign({}, state.config, b.config || {});
        logEvent(state, who, "Settings updated");
        break;
      }

      case "reset": {
        if (!isJacob) need();
        state = fresh();
        logEvent(state, who, "Reset to seed");
        break;
      }

      default:
        return res.status(400).end(JSON.stringify({ error: "unknown action" }));
    }

    state = await save(state);
    return res.status(200).end(JSON.stringify(state));
  } catch (e) {
    const code = e.code && Number.isInteger(e.code) ? e.code : 500;
    return res.status(code).end(JSON.stringify({ error: e.message || "error" }));
  }
};

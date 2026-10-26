# THE YO METHOD

Social media system for Yolanda Ulibarri / The Yo Method (Pilates, Fort Collins CO). Instagram: @yolandbrimhallulibarri. Managed by Jacob.

**Public site:** https://theyomethod.vercel.app/

**Live dashboard (send this link to Yolanda):** https://theyomethod.vercel.app/dashboard/

**Jacob side:** https://theyomethod.vercel.app/dashboard/#jacob (tap "Jacob" at the top, enter the PIN)

## How it works

One shared site, two sides, one shared database.

**Yolanda's side (default view)**
- Stage light at the top (yellow = standby, green = full on, red = paused). Jacob controls it.
- Calendar: numbered chips on the day each post should be filmed by, dashed chips on the day it goes live.
- "To film" list: each post expands into the idea, the shot list (checkboxes), the suggested script, and what to send.
- She taps **Filmed**, then **Sent to Jacob**. Sent posts leave her list and land in Jacob's queue.
- Panels: how to send footage (folder link), how to film, the one-time voice memo questions.

**Jacob's side (PIN)**
- Stage light control + the note she sees under it.
- Queue: Sent → Editing → Scheduled → Posted, one tap each (↩ to go back).
- Posting calendar: chips on post days, 🎬 on her film days.
- "With Yolanda": everything still on her list. **+ New post** opens the form (week, number, type, title, film-by, post-on, idea, spec, shot list, script, send, caption draft, notes). Edit / Duplicate / Delete on any post.
- Settings: delivery method + folder link + footer line. Reset-to-seed button.
- Activity log of everything either of you tapped.

Both sides auto-refresh every 45 seconds and whenever the tab comes back into focus. If the site is unreachable, her phone keeps changes locally and shows an "Offline" pill.

## Files

| File | What |
|---|---|
| `index.html` | Public Pilates site. Pricing, photos, and the booking link are all set in the `SITE` block at the bottom. |
| `dashboard/index.html` | The whole dashboard (both views). Vanilla JS, no build. |
| `img/` | Logo files (flat, metallic, on cream). Drop photos here. |
| `api/state.js` | Serverless API. One JSON document in a private Vercel Blob store. Jacob-only actions are PIN-gated. |
| `seed.js` | Initial content (week 1 posts, filming basics, delivery steps, voice-memo questions). Used once when the database is empty, and as the offline fallback. |
| `BIO.md` | Instagram bio options + short/long bios. |
| `CONTENT-PLAN.md` | Pillars, weekly rhythm, captions, week 2 ideas, rules. |

## Hosting

- **Vercel project:** `theyomethod` (team bigdawgelitediesel-1259). Alias: theyomethod.vercel.app
- **Blob store:** `yomethod` (private). Env `BLOB_READ_WRITE_TOKEN` is auto-linked.
- **PIN:** env `JACOB_PIN` on the Vercel project. Change it with `vercel env rm JACOB_PIN production` then `vercel env add JACOB_PIN production`, then redeploy.
- **Deploy:** `vercel deploy --prod --yes` from this folder. Git push does NOT auto-deploy (CLI deploy, same as the DFC site).
- GitHub Pages copy of this repo also exists but has no API, so it runs in offline/local mode only. Use the Vercel link.

## Adding posts

Use the **+ New post** form on the Jacob side. No code, no deploy. `seed.js` only matters for a fresh database or a Reset.

## To do

- [ ] Create the shared Google Drive folder and paste the link in Settings
- [ ] Get Yolanda's voice memo, fill the `___` blanks in `BIO.md`
- [ ] Confirm her account is a Creator/Business account (needed for insights)
- [ ] Pick a bio option and set the link in bio
- [ ] Flip the stage light green once she has paid

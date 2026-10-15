// ============================================================
//  THE YO METHOD - seed data
//  Used ONCE to initialize the shared state when the database is empty.
//  After that, Jacob adds/edits posts from the Jacob page on the site.
//  (Also loaded by the browser as an offline fallback.)
// ============================================================
(function (root, factory) {
  if (typeof module !== "undefined" && module.exports) module.exports = factory();
  else root.SEED = factory();
})(typeof self !== "undefined" ? self : this, function () {
  return {
    stage: {
      label: "Stage 2",
      light: "yellow",
      note: "Set up and ready. Waiting on payment to go full on."
    },
    config: {
      managerName: "Jacob",
      deliveryMethod: "Google Drive",
      deliveryLink: "",
      footer: "Questions? Text Jacob. Film first, ask second. Raw and real beats perfect."
    },
    basics: [
      { h: "Vertical, always", p: "Hold the phone upright (9:16). Every Instagram reel and story is vertical. Horizontal footage gets cropped and looks bad." },
      { h: "Wipe the lens", p: "Shirt sleeve, every single time before you hit record. Most blurry footage is a smudged lens." },
      { h: "Light in front of you, not behind", p: "Face a window. If the window is behind you, you turn into a silhouette. Outside light beats any indoor light." },
      { h: "Use the back camera", p: "It is far sharper than the selfie camera. Prop the phone on a shelf, a water bottle, or a $15 tripod and use the 3-second timer, or have someone hold it." },
      { h: "Phone height", p: "Talking to camera: lens at eye level, and look INTO the lens, not at the screen. Movement: lower the phone to hip height so your whole body fits with a little room above your head and below your feet." },
      { h: "Settings", p: "Camera app, Video, 4K at 30 fps (or 1080p at 60 fps if storage is tight). Turn OFF any enhance or beauty filters. Do not film inside the Instagram app." },
      { h: "Pad every clip", p: "Hit record, wait 3 seconds, do the thing, hold still 3 seconds, stop. Jacob trims. Short clips with no padding cannot be fixed." },
      { h: "Quiet room for talking", p: "No music playing while you talk. Fans and dishwashers off. Music gets added later." },
      { h: "Do not delete anything", p: "Send the bad takes too. Outtakes are often the best content." },
      { h: "Film more than you think", p: "If it says 8 clips, 12 is better. Extra footage is never wasted." }
    ],
    delivery: [
      "Open the shared folder (button above).",
      "Open the folder for this week, then the folder for the post number.",
      "Upload the ORIGINAL video files from your camera roll. Do not screen record. Do not send through Instagram or Messenger (they crush the quality).",
      "If Drive is a pain, AirDrop or text the files to Jacob in batches, labeled with the post number.",
      "When a post is fully uploaded, tap SENT on this page. It moves to Jacob's list."
    ],
    onboarding: {
      title: "One time: 10-minute voice memo",
      why: "Jacob writes your captions and bio in your voice, so he needs your actual words. Open Voice Memos, hit record, and answer these out loud like you're talking to a friend. Rambling is good. Send the file.",
      questions: [
        "What is your Pilates certification, and when and where did you get it?",
        "How many years have you been practicing? How long teaching?",
        "What made you start Pilates in the first place?",
        "What made you decide to teach instead of just practice?",
        "Where do you teach in-person classes right now, and what days?",
        "What does 'The Yo Method' mean to you? Why that name?",
        "Who is your ideal client? Describe one real person you've helped.",
        "What is the biggest thing people get wrong about Pilates?",
        "What does a normal Tuesday look like for you, start to finish?",
        "What do you want someone to feel after one of your classes?"
      ],
      done: false
    },
    posts: [
      {
        "id": "w1p1",
        "week": "Week 1",
        "n": 1,
        "type": "Reel",
        "title": "I'm giving this a shot",
        "filmBy": "2026-10-16",
        "postOn": "2026-10-20",
        "status": "todo",
        "shotsDone": {},
        "idea": "NOT a 'hi, I'm Yolanda, I teach Pilates' intro. This is you being honest: you're a mom of three, you've never done the social media thing, you're going to try it, and you'd love people to come along. Nervous is good. Laughing at yourself is good. People support someone who is trying, not someone who is polished.",
        "length": "Final reel 30-45 sec. Film 1-2 minutes of talking plus b-roll.",
        "script": [
          "First sentence, straight into it, no 'hey guys': \"Okay. I'm a mom of three boys and I have never done anything like this, but I'm going to give it a shot.\"",
          "What 'this' is: \"I teach Pilates here in Fort Collins. I've been doing it quietly for a while. I'm finally putting it out here.\"",
          "Why now, one honest line in your own words. (Tired of waiting? The boys are older? Something changed?)",
          "The ask: \"If you've ever wanted to try Pilates, or you're just a mom who gets it, I'd really love your support. Follow along, say hi, tell me what you want to see.\"",
          "Close with something true, not a slogan: \"I don't know what I'm doing yet. But I'm doing it.\"",
          "Do the whole thing 3 times through. Keep rolling through the stumbles. If you laugh at yourself mid-take, that take is probably the one."
        ],
        "shots": [
          "Talking to camera: back camera on a tripod or shelf, lens at eye level, window light on your face, quiet room. Full run-through x3.",
          "B-roll: walking into the studio or onto your mat (5 sec).",
          "B-roll: rolling out the mat / setting up (5 sec).",
          "B-roll: one move you love, full body in frame, side angle (10 sec).",
          "B-roll: anything with the boys you are comfortable showing. Backs of heads, hands, shoes by the door all work (5 sec).",
          "B-roll: you laughing or resetting between takes. Keep rolling (5 sec)."
        ],
        "send": "The 3 talking takes + all b-roll clips, originals."
      },
      {
        "id": "w1p2",
        "week": "Week 1",
        "n": 2,
        "type": "Reel",
        "title": "Do this with me: 60 seconds",
        "filmBy": "2026-10-19",
        "postOn": "2026-10-27",
        "status": "todo",
        "shotsDone": {},
        "idea": "A short follow-along anyone can do on the floor right now, in whatever they're wearing. You cue it exactly like class. This is the one women send to a friend with 'try this.' Film it at home on your mat.",
        "length": "Final reel 45-60 sec. Film one continuous take, 2-3 times.",
        "script": [
          "First line to camera, then go: \"Get on the floor with me. Sixty seconds. You don't have to change.\"",
          "Pick 3 simple moves anyone can do: one on the back, one on hands and knees, one seated.",
          "Cue each move the way you cue in class. Short, calm, one breath cue. Example: \"Inhale, lengthen. Exhale, press the low back down.\"",
          "Last line: \"That's it. Do it again tomorrow. Save this.\""
        ],
        "shots": [
          "Phone on a tripod or propped at hip height, side angle, whole body in frame, mat on the floor, window light.",
          "One continuous take start to finish. Do it 2-3 times. Don't pick, send all of them.",
          "Optional: a second angle from the front, same flow, no talking (for cutaways)."
        ],
        "send": "All takes, originals."
      },
      {
        "id": "w1p3",
        "week": "Week 1",
        "n": 3,
        "type": "Reel",
        "title": "3 moves for a tired back",
        "filmBy": "2026-10-20",
        "postOn": "2026-10-30",
        "status": "todo",
        "shotsDone": {},
        "idea": "This is the format every Pilates woman on Instagram runs because it works: on-screen text names the move, you do 3 slow reps, cut to the next move. No talking. Music over it. Jacob adds the text. Pick three moves you'd give a mom who has been carrying kids all day.",
        "length": "Final reel 20-30 sec. Film each move for 20-25 sec, side angle.",
        "script": [
          "No talking required. The on-screen text does the work: 'Tired mom back? 3 moves.' then each move name. Jacob adds that.",
          "If you want, say the move name once to camera before each one. Jacob may cut it in, may not.",
          "Caption ends with 'Save this for tonight.'"
        ],
        "shots": [
          "Same spot for all three: phone on a tripod at hip height, side angle, full body, plain background, window light.",
          "Move 1: 3-4 slow clean reps (20 sec).",
          "Move 2: 3-4 slow clean reps (20 sec).",
          "Move 3: 3-4 slow clean reps (20 sec).",
          "At the end of each move, hold the hardest point still for 3 seconds. That's the cover photo."
        ],
        "send": "3 clips, labeled Move 1 / Move 2 / Move 3."
      },
      {
        "id": "w1p4",
        "week": "Week 1",
        "n": 4,
        "type": "Talking head",
        "title": "What Pilates actually did for me",
        "filmBy": "2026-10-22",
        "postOn": "2026-11-02",
        "status": "todo",
        "shotsDone": {},
        "idea": "Just you and the camera. No b-roll, no day-in-the-life clips, nothing to cut to. One honest talk about what Pilates did for you as a mom. This is the post that makes a woman DM you.",
        "length": "Final 30-60 sec. Film 3 takes, 1-2 minutes each.",
        "script": [
          "Open mid-thought, no intro. Something like: \"Nobody told me three kids would make me feel like a stranger in my own body.\" Use your own version.",
          "What it was like before. One honest detail, not a list.",
          "What Pilates changed. Not 'core strength.' Something real: carrying a kid without your back going, sleeping, feeling like yourself again.",
          "Why you teach it now. One sentence.",
          "Close: \"If any of that sounds like you, come to a class. Or just message me.\""
        ],
        "shots": [
          "Back camera on a tripod or shelf, lens at eye level, you looking INTO the lens.",
          "Window light on your face, quiet room, nothing moving behind you.",
          "Three full takes. Don't stop for stumbles, keep going."
        ],
        "send": "All 3 takes, originals."
      },
      {
        "id": "w1p5",
        "week": "Week 1",
        "n": 5,
        "type": "Photo",
        "title": "Behind the scenes photo",
        "filmBy": "2026-10-23",
        "postOn": "2026-11-05",
        "status": "todo",
        "shotsDone": {},
        "idea": "One real photo from while you're filming this week. Phone on the tripod, you on the mat, the living room the way it actually is. Nothing staged. Jacob posts it with a 'here's what this week looked like' caption.",
        "length": "1 post, 1-3 photos. Take 10-15 so we can pick.",
        "script": [
          "Nothing to say. If you want, text Jacob one line about how filming felt."
        ],
        "shots": [
          "Have one of the boys (or a timer) shoot from across the room: you on the mat, the phone on the tripod in the frame.",
          "One from behind the tripod looking at you. The phone screen showing you is a bonus.",
          "One of the setup alone: mat, tripod, water bottle, whatever is lying around.",
          "Phone photos. No filter, no editing."
        ],
        "send": "The 10-15 photos, originals."
      }
    ],
    log: []
  };
});

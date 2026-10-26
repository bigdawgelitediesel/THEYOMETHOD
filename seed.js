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
      deliveryLink: "https://drive.google.com/drive/folders/1B7q56LuhtMBnaRDHi-bUINoah-4yLy8N",
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
        "filmBy": "2026-11-02",
        "postOn": "2026-11-05",
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
        "n": 5,
        "type": "Reel",
        "title": "Do this with me: 60 seconds",
        "filmBy": "2026-11-04",
        "postOn": "2026-11-21",
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
        "filmBy": "2026-11-06",
        "postOn": "2026-11-15",
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
        "filmBy": "2026-11-09",
        "postOn": "2026-11-18",
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
        "n": 2,
        "type": "Photo",
        "title": "Behind the scenes photo",
        "filmBy": "2026-11-03",
        "postOn": "2026-11-12",
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
      },
      {
        "id": "pmv9rekh4",
        "week": "Week 2",
        "n": 1,
        "type": "Talking head",
        "title": "Why I named it The Yo Method",
        "filmBy": "2026-11-11",
        "postOn": "2026-11-24",
        "status": "todo",
        "shotsDone": {},
        "idea": "Just you and the camera. Where the name came from, what it means, and what you want someone to feel when they walk out of your class. This one lets people in on the business without it feeling like an ad.",
        "length": "Final 30-60 sec. Film 3 takes, 1-2 minutes each.",
        "script": [
          "Open straight in: \"People ask me why it's called The Yo Method. Honestly, ...\" then the real answer. Your nickname, your name, a joke someone made, whatever it actually was.",
          "What the 'method' part means to you in one or two sentences. Not a list of principles. What's different about an hour with you.",
          "One real moment: a client or a friend who said something after a class that stuck with you.",
          "Close: \"That's the Yo Method. Come try it.\""
        ],
        "shots": [
          "Back camera on a tripod or shelf, lens at eye level, you looking into the lens.",
          "Window light on your face, quiet room, nothing moving behind you. Your home studio is perfect for this.",
          "Three full takes. Keep rolling through stumbles."
        ],
        "send": "All 3 takes, originals."
      },
      {
        "id": "pmv9reksi",
        "week": "Week 2",
        "n": 2,
        "type": "Reel",
        "title": "Stop doing crunches, do this",
        "filmBy": "2026-11-12",
        "postOn": "2026-11-27",
        "status": "todo",
        "shotsDone": {},
        "idea": "One swap. The thing everyone does wrong, then the thing you'd have them do instead. Two clips, on-screen text does the talking. These get saved and sent to husbands.",
        "length": "Final reel 10-20 sec. Film two clips, 20 sec each.",
        "script": [
          "No talking required. Jacob adds the text: 'Stop doing this' over clip 1, 'Do this instead' over clip 2.",
          "Optional: say one line to camera at the end, \"Your neck will thank you.\" (3 sec)"
        ],
        "shots": [
          "Clip 1, the WRONG way: a regular crunch, exaggerated a little. Neck pulling, fast, sloppy. 4-5 reps, side angle, full body (20 sec).",
          "Clip 2, the RIGHT way: your swap. Slow, clean, 4-5 reps, same angle, same spot (20 sec).",
          "Hold the hardest point of the right version still for 3 seconds at the end (cover photo).",
          "Phone on a tripod at hip height, side angle, plain background, window light. Same spot for both clips."
        ],
        "send": "Both clips, labeled Wrong / Right."
      },
      {
        "id": "pmv9rel0d",
        "week": "Week 2",
        "n": 3,
        "type": "Reel",
        "title": "Come see my home studio",
        "filmBy": "2026-11-16",
        "postOn": "2026-11-30",
        "status": "todo",
        "shotsDone": {},
        "idea": "A quick walk-through of where you teach and film. Not a tour of a fancy studio. The real space: mat, props, window, the dog, the door the boys keep opening. People book with someone whose space they can picture.",
        "length": "Final reel 15-30 sec. Film 8-10 clips, 5-8 sec each.",
        "script": [
          "Optional one line to camera at the start: \"This is where it all happens.\" (3 sec)",
          "Rest is no talking. Music over it. Or record a 20-second voice memo walking through it and Jacob uses it as voiceover."
        ],
        "shots": [
          "Walking in through the door, phone held at chest height, steady (8 sec).",
          "Slow pan across the room from one corner (8 sec).",
          "The mat going down or already down, low angle from the floor (5 sec).",
          "Props: ring, band, ball, blocks, whatever you use, close up (5 sec).",
          "The window and the light coming in (5 sec).",
          "The dog, wherever the dog actually is (5 sec).",
          "You sitting down on the mat, from the front (8 sec).",
          "One move, side angle, full body, in the space (8 sec).",
          "Something real: the boys' shoes, a water bottle, the laundry basket in the corner (5 sec).",
          "Closing shot: you on the mat looking at the camera, or the dog walking out (5 sec)."
        ],
        "send": "All clips, originals. Voice memo if you did one."
      },
      {
        "id": "pmv9rel8j",
        "week": "Week 2",
        "n": 4,
        "type": "Reel",
        "title": "Working on something I can't talk about yet",
        "filmBy": "2026-11-17",
        "postOn": "2026-12-03",
        "status": "todo",
        "shotsDone": {},
        "idea": "The first tease. You say almost nothing. The point is the question in the comments. Do NOT say what it is, who it's with, or when. Keep it to 'something is happening.'",
        "length": "Final reel 10-20 sec. Film 3 takes, 20-30 sec each.",
        "script": [
          "To camera, one line, a little smile: \"So... I signed something this week that I can't talk about yet.\"",
          "Beat. Then: \"But it's big. And it's not just Pilates. That's all I can say.\"",
          "Close: \"Follow along, I'll tell you when I can.\"",
          "Nothing else. No hints about TV, no hints about who. If a take gets too specific, do it again."
        ],
        "shots": [
          "Back camera, lens at eye level, you looking into the lens. Home studio or the kitchen.",
          "Three takes. Try one sitting on the mat, one standing, one in the car with the engine off.",
          "Optional b-roll: you signing or holding papers with the text NOT visible, 5 sec."
        ],
        "send": "All takes, originals."
      },
      {
        "id": "pmv9relgn",
        "week": "Week 2",
        "n": 5,
        "type": "Photo",
        "title": "Home studio photo with the dog",
        "filmBy": "2026-11-18",
        "postOn": "2026-12-06",
        "status": "todo",
        "shotsDone": {},
        "idea": "One real photo in your home studio with your dog. Natural light, nothing staged. This is the one that gets the most comments of the whole month, because dog.",
        "length": "1 post, 1-3 photos. Take 15-20 so we can pick.",
        "script": [
          "Nothing to say. Text Jacob the dog's name and one line about them for the caption."
        ],
        "shots": [
          "You sitting on the mat, dog next to you or in your lap, both looking at the camera (5 shots).",
          "You in a move, dog doing whatever the dog does, usually lying on the mat (5 shots).",
          "Candid: you laughing at the dog, not looking at the camera (5 shots).",
          "One of just the dog on the mat (3 shots).",
          "Window light, phone at your eye level, someone else takes it or use the 10-second timer. No filter."
        ],
        "send": "All of them, originals."
      }
    ],
    log: []
  };
});

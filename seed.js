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
        id: "w1p1", week: "Week 1", n: 1, type: "Reel", title: "I'm giving this a shot",
        filmBy: "2026-10-16", postOn: "2026-10-20", status: "todo", shotsDone: {},
        idea: "NOT a 'hi, I'm Yolanda, I teach Pilates' intro. This is you being honest: you're a mom of three, you've never done the social media thing, you're going to try it, and you'd love people to come along. Nervous is good. Laughing at yourself is good. People support someone who is trying, not someone who is polished.",
        length: "Final reel 30-45 sec. Film 1-2 minutes of talking plus b-roll.",
        script: [
          "First sentence, straight into it, no 'hey guys': \"Okay. I'm a mom of three boys and I have never done anything like this, but I'm going to give it a shot.\"",
          "What 'this' is: \"I teach Pilates here in Fort Collins. I've been doing it quietly for a while. I'm finally putting it out here.\"",
          "Why now, one honest line in your own words. (Tired of waiting? The boys are older? Something changed?)",
          "The ask: \"If you've ever wanted to try Pilates, or you're just a mom who gets it, I'd really love your support. Follow along, say hi, tell me what you want to see.\"",
          "Close with something true, not a slogan: \"I don't know what I'm doing yet. But I'm doing it.\"",
          "Do the whole thing 3 times through. Keep rolling through the stumbles. If you laugh at yourself mid-take, that take is probably the one."
        ],
        shots: [
          "Talking to camera: back camera on a tripod or shelf, lens at eye level, window light on your face, quiet room. Full run-through x3.",
          "B-roll: walking into the studio or onto your mat (5 sec).",
          "B-roll: rolling out the mat / setting up (5 sec).",
          "B-roll: one move you love, full body in frame, side angle (10 sec).",
          "B-roll: anything with the boys you are comfortable showing. Backs of heads, hands, shoes by the door all work (5 sec).",
          "B-roll: you laughing or resetting between takes. Keep rolling (5 sec)."
        ],
        send: "The 3 talking takes + all b-roll clips, originals."
      },
      {
        id: "w1p2", week: "Week 1", n: 2, type: "Reel", title: "What class actually looks like",
        filmBy: "2026-10-19", postOn: "2026-10-27", status: "todo", shotsDone: {},
        idea: "No talking. Pure movement footage set to music. Shows the vibe, the space, and that you know what you are doing. If students are in frame, ask them first or shoot from behind / below the shoulders.",
        length: "Final reel 15-30 sec. Film 10-12 clips, 5-8 sec each.",
        script: [
          "Nothing. Music goes over this.",
          "Optional: a 20-second voice memo of you saying what a first-timer can expect in class. Jacob may use it as a voiceover."
        ],
        shots: [
          "Wide shot of the whole room / mat area from the doorway, phone held still (8 sec).",
          "You demonstrating a move, side angle, full body (8 sec).",
          "Same move, from the front (8 sec).",
          "Low angle: phone sitting on the floor, you moving through a sequence (8 sec).",
          "Close-up of hands pressing into the mat (5 sec).",
          "Close-up of feet / toes pointing (5 sec).",
          "Slow walk through the room while a class or warm-up is happening (8 sec).",
          "You adjusting or cueing someone, with permission (8 sec).",
          "Water bottle, towel, props on the floor, anything that looks like a studio (5 sec).",
          "Ending shot: you sitting on the mat, breathing, looking out a window or at the camera (8 sec)."
        ],
        send: "All 10+ clips, originals. Voice memo if you did one."
      },
      {
        id: "w1p3", week: "Week 1", n: 3, type: "Reel", title: "3 moves for a tired back",
        filmBy: "2026-10-20", postOn: "2026-10-30", status: "todo", shotsDone: {},
        idea: "A quick tutorial. Pick three moves you would give a mom who has been carrying kids and sitting in the pickup line all day. These posts get saved and shared, which is how new people find you.",
        length: "Final reel 30-45 sec. Film each move 15-20 sec plus a short intro line.",
        script: [
          "Intro line to camera, one take: \"Three moves I give every mom with a tired back.\" (5 sec)",
          "For each move, say its name and ONE cue to camera before you do it. Example: \"Cat cow. Move with your breath.\" (5 sec each)",
          "Optional closer: \"Save this for tonight.\" (3 sec)"
        ],
        shots: [
          "Intro line to camera, eye level (5 sec).",
          "Move 1: name + cue to camera (5 sec), then the move, side angle, full body, 4-5 slow reps (20 sec).",
          "Move 2: name + cue to camera (5 sec), then the move, side angle, full body, 4-5 slow reps (20 sec).",
          "Move 3: name + cue to camera (5 sec), then the move, side angle, full body, 4-5 slow reps (20 sec).",
          "Bonus: one 'what NOT to do' version of any move, 5 sec, exaggerated. Jacob can cut it as a before/after."
        ],
        send: "All clips, labeled Move 1 / Move 2 / Move 3 if you can."
      },
      {
        id: "w1p4", week: "Week 1", n: 4, type: "Reel", title: "A day in the life",
        filmBy: "2026-10-22", postOn: "2026-11-02", status: "todo", shotsDone: {},
        idea: "Mom of three boys who runs a Pilates business. People follow people, not businesses. This is the post that makes them like you. Film small moments all day, 3-5 seconds each. Do not stage it. Pick any weekday this week.",
        length: "Final reel 20-40 sec. Film 15-20 clips across one full day.",
        script: [
          "No talking during the clips.",
          "At the end of the day, record a 45-60 second voice memo walking through what the day was, honestly. Tired is fine. Jacob uses it as the voiceover."
        ],
        shots: [
          "Alarm / coffee / the first thing you touch in the morning (4 sec).",
          "Breakfast chaos, backs of the boys' heads is fine (4 sec).",
          "Out the door: shoes, keys, car (4 sec).",
          "School drop-off from inside the car, steering wheel view (4 sec).",
          "Driving to teach, or the studio door opening (4 sec).",
          "Mat going down (4 sec).",
          "You teaching or moving, one clip (6 sec).",
          "Lunch, or whatever you actually eat (4 sec).",
          "Setting up for an online session: laptop, phone, ring light, whatever you use (5 sec).",
          "Pickup line (4 sec).",
          "Afternoon: homework, snacks, sports practice, any of it (4 sec, 2-3 clips).",
          "Dinner (4 sec).",
          "Your own mat time at night, or sitting down for the first time (6 sec).",
          "Lights off / closing shot (4 sec)."
        ],
        send: "All clips in order if possible + the voice memo."
      },
      {
        id: "w1p5", week: "Week 1", n: 5, type: "Photo carousel", title: "Photo set for the grid",
        filmBy: "2026-10-23", postOn: "2026-11-05", status: "todo", shotsDone: {},
        idea: "Still photos. One post for the feed that looks sharp when someone lands on your profile, plus Jacob gets a bank of photos for the bio, stories, and future posts. Natural light. Someone else holds the phone for most of these.",
        length: "Final post 6-8 photos. Take 40-60 so we can pick.",
        script: [ "Nothing to say. Smile in a couple, not in the rest." ],
        shots: [
          "Portrait: chest up, facing a window, plain background, looking at the lens (10 shots, back camera, Portrait mode).",
          "Portrait: same spot, looking off camera / laughing (10 shots).",
          "Full body on the mat, seated, relaxed (5 shots).",
          "Three different moves, held at the hardest point, side angle, full body (5 shots each).",
          "Detail shots: hands on the mat, feet, water bottle, props (5 shots).",
          "One with the boys if you are comfortable. From behind, walking, is enough (5 shots).",
          "One real one: messy bun, coffee, mat in the living room (5 shots)."
        ],
        send: "All of them. Do not pre-pick. Originals, not screenshots."
      }
    ],
    log: []
  };
});

// ============================================================
//  THE YO METHOD - filming checklist content
//  Jacob edits this file to add a new week. No other file changes.
//  Add a new object to WEEKS (newest LAST). The page shows the
//  newest week by default and lets Yolanda flip back to older ones.
// ============================================================

window.CONTENT = {

  manager: {
    name: "Jacob",
    note: "Questions? Text Jacob. Film first, ask second. Raw and real beats perfect."
  },

  // How footage gets from her phone to Jacob
  delivery: {
    method: "Google Drive",
    link: "",   // paste the shared folder link here
    steps: [
      "Open the shared Google Drive folder (link above).",
      "Open the folder for this week, then the folder for the post number.",
      "Upload the ORIGINAL video files from your camera roll. Do not screen record. Do not send through Instagram or Messenger (they crush the quality).",
      "If Drive is a pain, AirDrop or text the files to Jacob in batches, labeled with the post number.",
      "When a post is fully uploaded, tap SENT on this page so we both know."
    ]
  },

  // One-time ask, not a weekly post
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
    ]
  },

  // Filming basics shown in the "How to film" panel
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

  weeks: [
    {
      id: "week-01",
      label: "Week 1",
      filmBy: "Sunday, Oct 19",
      postWeek: "Oct 20 - 24",
      intro: "Launch week. Five posts that tell people who you are, what you teach, and what it looks like. Nothing fancy. Phone, mat, you.",
      posts: [
        {
          n: 1,
          type: "Reel",
          title: "Meet Yolanda",
          idea: "A straight re-introduction. Stay-at-home mom of three boys who became a Pilates instructor and started The Yo Method in Fort Collins. This is the post people land on when they check out the account, so it does a lot of work.",
          length: "Final reel 30-45 sec. Film 1-2 minutes of talking plus b-roll.",
          say: [
            "Open with the hook as your first sentence, no 'hi guys': \"I was a stay-at-home mom for ___ years before I ever taught a Pilates class.\"",
            "Who you are: name, Fort Collins, three boys.",
            "Why Pilates: what it did for you, in one or two sentences.",
            "What The Yo Method is: classes in Fort Collins, online, and private sessions.",
            "Close: \"If you've been thinking about starting, this is your sign. Stick around.\"",
            "Do the whole thing 3 times through. Do not stop for mistakes, just keep going."
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
          n: 2,
          type: "Reel",
          title: "What class actually looks like",
          idea: "No talking. Pure movement footage set to music. Shows the vibe, the space, and that you know what you are doing. If students are in frame, ask them first or shoot from behind / below the shoulders.",
          length: "Final reel 15-30 sec. Film 10-12 clips, 5-8 sec each.",
          say: [
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
          n: 3,
          type: "Reel",
          title: "3 moves for a tired back",
          idea: "A quick tutorial. Pick three moves you would give a mom who has been carrying kids and sitting in the pickup line all day. These posts get saved and shared, which is how new people find you.",
          length: "Final reel 30-45 sec. Film each move 15-20 sec plus a short intro line.",
          say: [
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
          n: 4,
          type: "Reel",
          title: "A day in the life",
          idea: "Mom of three boys who runs a Pilates business. People follow people, not businesses. This is the post that makes them like you. Film small moments all day, 3-5 seconds each. Do not stage it.",
          length: "Final reel 20-40 sec. Film 15-20 clips across one full day.",
          say: [
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
          n: 5,
          type: "Photo carousel",
          title: "Photo set for the grid",
          idea: "Still photos. One post for the feed that looks sharp when someone lands on your profile, plus Jacob gets a bank of photos for the bio, stories, and future posts. Natural light. Someone else holds the phone for most of these.",
          length: "Final post 6-8 photos. Take 40-60 so we can pick.",
          say: [ "Nothing to say. Smile in a couple, not in the rest." ],
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
      bonus: {
        title: "If you have 10 extra minutes",
        items: [
          "Stories: film 2-3 raw vertical clips a day of anything (coffee, driving, mat, boys) and send them. Jacob posts them as stories. Zero polish.",
          "Backup reel: talking to camera, 30 sec, \"The biggest thing people get wrong about Pilates.\" One take."
        ]
      }
    }
  ]
};

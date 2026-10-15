# THE YO METHOD

Social media system for Yolanda Ulibarri / The Yo Method (Pilates, Fort Collins CO). Instagram: @yolandbrimhallulibarri. Managed by Jacob.

**Live filming list (send this link to Yolanda):** https://bigdawgelitediesel.github.io/THEYOMETHOD/

## What's in here

| File | Who it's for | What |
|---|---|---|
| `index.html` | Yolanda | The filming checklist site. Mobile-first. Checkboxes save on her phone. |
| `content.js` | Jacob edits | Every week's posts, shot lists, filming basics, delivery steps, the voice-memo questions. Edit this to add a week. |
| `BIO.md` | Jacob | Instagram bio options + short/long bios. |
| `CONTENT-PLAN.md` | Jacob | Pillars, weekly rhythm, captions, week 2 ideas, rules. |

## How it works

1. Jacob adds a week to `content.js` (copy the Week 1 block, change id/label/dates/posts, add it to the END of `weeks`).
2. `git add . && git commit -m "Week N" && git push`. GitHub Pages redeploys in about a minute.
3. Yolanda opens the link on her phone. Newest week shows by default. She expands each post, checks off shots, taps Filmed and Sent.
4. She uploads originals to the shared Drive folder (set `delivery.link` in `content.js` once the folder exists).
5. Jacob edits, captions, posts.

Checkbox state is `localStorage` on her phone only. It is a personal checklist, not a shared status board. "Sent" means she uploaded it; Jacob confirms by looking in the folder.

## To do

- [ ] Create the shared Google Drive folder, paste link into `content.js` → `delivery.link`
- [ ] Get Yolanda's voice memo, fill the `___` blanks in `BIO.md`
- [ ] Confirm her account is a Creator/Business account (needed for insights)
- [ ] Pick a bio option and set the link in bio
- [ ] Week 2 content block

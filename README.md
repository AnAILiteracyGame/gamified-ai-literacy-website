# Media folder

Round 2 (Evaluation) questions 4 and 5 need real files. Drop them here with these
exact names and the game will pick them up automatically — no code changes needed.

| File name        | What it should be                         |
| ---------------- | ----------------------------------------- |
| `image-a.jpg`    | **AI-generated** image (this is the answer) |
| `image-b.jpg`    | **Real photograph**                        |
| `audio-a.mp3`    | **AI-generated** voice (this is the answer) |
| `audio-b.mp3`    | **Real human** recording                   |

Until the files exist, the game shows a dashed placeholder box saying which file
to add. Everything else still works.

## Want to swap which one is correct?

Open `questions.js`, find the question, and change `answer: 0` to `answer: 1`
(`0` = the first choice, `1` = the second).

## Tips

- **Images:** keep them roughly 4:3 and under ~500 KB each so the page loads fast.
- **Audio:** 10–20 seconds is plenty. MP3 works everywhere.
- Make both options the same subject matter — a real portrait vs. an AI portrait
  is a fair test; a real portrait vs. an AI dragon is not.

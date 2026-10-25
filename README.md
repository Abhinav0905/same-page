# Same Page

**Two people. One conversation. Two different memories.**

Same Page compares two accounts of an everyday agreement across five concrete details: who, what, when, money and conditions. It shows the exact phrases that align or differ, then creates an editable confirmation message so the people involved can settle the gaps together.

Built for [Build With AI: Basics](https://learn-ai-basics.devpost.com/) with the Devpost Learn Skill Pack.

**[Open the live interactive demo](https://abhinav0905.github.io/same-page/)**

## Why it exists

Small disagreements often begin with two people honestly remembering the same conversation differently. A generic summary hides that difference. Same Page keeps the two accounts separate, compares them without blame and turns each mismatch into one answerable question.

## Try the proof of concept

Use the [live GitHub Pages app](https://abhinav0905.github.io/same-page/), or run it locally.

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the URL Vite prints, normally `http://localhost:5173`, then:

1. Click **Compare this example**.
2. Review the two aligned details and three gaps.
3. Edit and copy the shared confirmation message.

No API key, account or network request is needed after installation.

## What the demo proves

- Two independent accounts remain visible.
- The comparison checks People, Action, Time, Money and Conditions.
- Every result includes the words that produced it.
- Missing details stay missing. The app does not invent them.
- Neither person is labeled right or wrong.
- The result ends in an editable message. Nothing is sent automatically.

## How it works

The proof of concept uses a transparent TypeScript phrase engine. It recognizes a narrow set of everyday rent-agreement patterns, normalizes the details and compares them. This is intentionally not presented as a universal language model or a truth detector.

The event is about learning to build with an AI coding agent. The app was planned and built through the Devpost Learn Skill Pack; it does not call a model at runtime. A later version could replace the phrase engine with a model that returns validated structured data, while keeping the same evidence and uncertainty rules.

## Checks

```bash
npm test
npm run build
npm run test:e2e
```

That is five comparison tests and three browser journeys, including the audience-first opening, complete roommate example and editable reset flow.

## Planning artifacts

- [`devpost/scope.md`](devpost/scope.md)
- [`devpost/prd.md`](devpost/prd.md)
- [`devpost/spec.md`](devpost/spec.md)
- [`devpost/checklist.md`](devpost/checklist.md)

## Boundaries

Same Page is a conversation aid, not a mediator, legal tool or record of what was said. Text stays in browser memory and disappears on reset or refresh.

## License

MIT. See [`LICENSE`](LICENSE).


# Same Page — Devpost Submission Draft

## Project title

Same Page

## Tagline

Compare two memories of one agreement before a small gap becomes a big argument.

## Description

### Inspiration

Small arguments often start with two people honestly remembering the same conversation in different ways. One roommate heard "$800 by Friday." The other heard "half the rent on Monday, after the utility bill arrives." A normal summary can hide those gaps. Same Page puts them where both people can see them.

### What it does

Each person enters their version of an everyday agreement. Same Page keeps both accounts separate and compares five concrete details: people, action, time, money and conditions.

Every result includes the phrases that caused it. Matches are marked as aligned. Differences become neutral questions. Missing details stay missing. The app never calls either person wrong and never pretends to know what was really said.

The final step turns the open questions into one editable confirmation message. People can change the wording and copy it. Same Page does not send anything for them.

### How we built it

The app uses React, TypeScript and Vite. A small local phrase engine recognizes a narrow set of common agreement patterns, normalizes the five details and compares the two versions. Keeping that engine deterministic made the proof private, fast and easy to test. It also keeps the claim honest: this version is a conversation aid, not a universal language model or truth detector.

Vitest checks aligned, different, missing and unrecognized details. Playwright checks the full roommate example and reset flow in a real browser. The shipped video was assembled in Remotion from the real app screens.

### How we used the Devpost Learn Skill Pack and Codex

We started with the Learn Skill Pack's flipped-interaction flow. Codex asked about the intended audience, the one memorable product moment and what had to stay outside the first version. Those answers became a learner profile, scope, PRD, technical spec and ordered build checklist before code was written.

Codex then built one checked slice at a time: the two-account comparison, the evidence cards and the editable shared message. Each slice had a mechanical test and a visible learner check. The finished repository keeps those planning documents beside the code, plus an app map that connects the product decisions to the files that implement them.

### Challenges

The hard part was making the result useful without acting like a judge. A vague "these messages differ" warning would not help. A confident verdict would be worse. We kept the original wording visible, limited the comparison to five answerable details and used "Needs a check" instead of blame language.

### Accomplishments

- The roommate example makes two matches and three gaps clear within seconds.
- Every decision points back to evidence from both accounts.
- Text stays in browser memory. There is no account, server or API key.
- Five unit tests, two browser tests and the production build pass.
- The full planning trail is public in the repository.

### What we learned

Planning around one visible moment made the project smaller and better. The important feature was not broad text generation. It was the instant shift from two fuzzy paragraphs to five specific checks and one message people can act on.

### What's next

A later version could collect each account through a private link, add more agreement templates and use a model that returns validated structured data. The evidence and uncertainty rules would stay: quote the source, admit when a detail is missing and never decide who is telling the truth.

## Built with

- React
- TypeScript
- Vite
- Vitest
- Playwright
- Remotion
- Codex
- Devpost Learn Skill Pack

## Public links

- Repository: https://github.com/Abhinav0905/same-page
- License: https://github.com/Abhinav0905/same-page/blob/main/LICENSE
- Demo video: https://youtu.be/mtnMoL7YR4I
- Devpost project: https://devpost.com/software/same-page-yhder6

## Demo instructions

1. Open the app locally with `npm install` and `npm run dev`.
2. Click **Try the roommate example**.
3. Click **Compare our versions**.
4. Review the two aligned details and three gaps.
5. Edit and copy the shared confirmation message.

## Screenshot and thumbnail plan

- Project thumbnail: `docs/same-page-cover.png`
- Hero and problem: `video/public/images/hero.png`
- Two independent accounts: `video/public/images/versions.png`
- Evidence-backed results: `video/public/images/evidence.png`
- Editable confirmation: `video/public/images/confirmation.png`

## Proposed custom answers

- Are you submitting as an individual, a team, or an organization? **Individual**
- Country of residence: **United States**
- Organization name: **Leave blank**
- Which of these did you actually use? **None**
- Did the cost of AI affect what you did? **No, I never thought about it**
- Confidence after the project: **5 (Easily)**
- What should be fixed before the next person tries this? **Show the required submission questions and final file checks earlier in the guided flow.**
- License URL: **https://github.com/Abhinav0905/same-page/blob/main/LICENSE**
- Value created: **Saved me time; Created delight / was just fun; Let me do something I couldn't do before**
- More about the value: **The planning flow helped turn a broad consumer idea into one small, testable product loop, then ship it with a clear demo and public build record.**
- Main technology requirement: **Using the Devpost Learn Skill Pack, I used flipped interaction to turn the idea into a learner profile, scope, PRD, technical spec and build checklist. Codex then built and tested each slice. The public repo includes every planning document.**
- Age of majority: **Confirmed**
- Eligibility confirmation: **Confirmed**

## Limits

Same Page supports a narrow family of everyday agreement phrases. It does not determine truth, give legal advice, mediate disputes or send messages. No public hosted app is claimed; the required public repository and working video are the judge-facing deliverables.

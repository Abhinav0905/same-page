---
doc: checklist
status: approved
---

# Build Checklist

Build mode: fast

## Slices

- [x] **1. Two accounts become a real comparison**
  Becomes usable: A running, styled browser app where the roommate sample fills two account cards and Compare returns the five agreement dimensions.
  Why now: This proves the unique kernel on the first working slice. The scaffold, inputs and comparison logic exist only to make that visible.
  PRD ref: `prd.md > The Core Journey`, `prd.md > Two independent accounts`, `prd.md > Structured comparison`
  Spec ref: `spec.md > App Shell`, `spec.md > Account Input`, `spec.md > Comparison Engine`, `spec.md > Data Model`
  Build: Create the React/Vite project, types, sample data, extraction and comparison functions, the two input cards and a basic result list. Add unit tests for the roommate sample and missing input.
  Verify (mechanical): Run `npm test` and `npm run build`; confirm the tests pass and the production bundle completes.
  Learner check: Load the roommate sample, compare the versions and confirm People and Action align while Time, Money and Conditions need review.
  Commit: `Build the two-account comparison loop`

- [x] **2. Evidence cards make every mismatch understandable**
  Becomes usable: Each dimension has a polished, accessible status card with both evidence phrases, a clear summary and honest missing-detail behavior.
  Why now: The engine works; this slice turns its output into the visual moment a general audience can understand in seconds.
  PRD ref: `prd.md > Structured comparison`, `prd.md > Screens and Layout`, `prd.md > Look and Feel`
  Spec ref: `spec.md > Comparison Summary`, `spec.md > Comparison Card`, `spec.md > Look and Feel`
  Build: Add the summary, reusable cards, status icons, sequential reveal, responsive layout, boundary copy and reduced-motion support. Expand unit tests for aligned, missing and unrecognized details.
  Verify (mechanical): Run `npm test` and `npm run build`; inspect the app at desktop and mobile widths for readable evidence and no overflow.
  Learner check: Read the five sample cards without reading the original paragraphs and say whether each disagreement is immediately clear.
  Commit: `Turn comparison results into evidence cards`

- [x] **3. The loop ends with one shared message**
  Becomes usable: The result produces an editable confirmation message that can be copied, and the whole experience can be reset and repeated.
  Why now: This closes the product loop after the distinctive comparison is already proven.
  PRD ref: `prd.md > Shared confirmation`, `prd.md > States and Boundaries`, `prd.md > What We're Building`
  Spec ref: `spec.md > Shared Confirmation`, `spec.md > Important Failure Modes`, `spec.md > Where It Runs and How Someone Tries It`
  Build: Add confirmation generation, editable message, clipboard feedback, reset behavior, favicon, final responsive polish, README and browser tests for the sample and reset journeys.
  Verify (mechanical): Run `npm test`, `npm run build` and `npm run test:e2e`; confirm all checks pass.
  Learner check: Run the full sample, edit one line of the message, copy it, reset, then try an awkward input and note anything confusing.
  Commit: `Complete the shared confirmation journey`

## Hands-on Checkpoints

- [x] Early usable behavior explored — folded into the finished-app review for this small fast-mode build
- [x] Final kick-the-tires exploration and feedback completed

## Final Review

- [x] Final review complete — learner checked the app and confirmed it "looks much better"

## Code Tour and App Map

- [x] Learning activity complete — guided route, focused alternative, prior practice connected, or brief recap
- [x] Optional edit and transfer reflection addressed — offered/declined/already covered/not applicable as appropriate
- [x] `devpost/app-map.html` generated from finished code, checked, and shown, including a project-grounded practice to reuse

Activity and evidence: Brief evidence recap connected the goal of making a simple idea instantly clear to `prd.md > Structured comparison`, the exact 2-aligned/3-check assertions in `tests/compare.test.ts`, and the visible browser result exercised by `tests/same-page.spec.ts`.
Route and stops: Reference route recorded in the app map: `src/App.tsx > compare`, `src/lib/compare.ts > compareAccounts`, `src/components/ComparisonCard.tsx > ComparisonCard`, and `src/lib/confirmation.ts > buildConfirmation`.
Edit outcome: Not applicable; the learner requested a fast, no-question build and the final visual pass produced no retained wording edit beyond tested implementation fixes.
Reflection: Already covered by the learner's stated goal: favor one clear, general-audience product loop over a larger feature list.
Activity mode: Fast-mode brief recap plus live app, desktop and mobile checks.

## Revisions

- The installed cached toolchain resolved to TypeScript 7 and Vite 8 rather than the planned major versions; the first build and tests passed, so the spec now records the versions actually used.
- The planned early checkpoint was folded into the final finished-app review because this was a small fast-mode build; the learner checked the complete experience and approved it for shipping.

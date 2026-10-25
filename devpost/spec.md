---
doc: spec
status: approved
---

# Same Page — Technical Spec

## How This Works, In Plain Language

Same Page is a browser app with no account, server or API key. It keeps both accounts in the page while the visitor is using it. When they press Compare, a small rules engine pulls out recognizable people, actions, dates, amounts and conditions, then compares each category. The result cards and shared message are produced from that structured comparison.

This shape keeps the proof reliable, private and easy to record. It does not pretend to understand every possible agreement. The sample and supported phrases are clearly labeled, and uncertain text stays uncertain instead of being guessed.

## The Core Journey Through the System

PRD ref: `prd.md > The Core Journey`.

1. The React page loads with empty `AccountInput` cards and a visible sample action.
2. Typing changes the in-memory `AgreementDraft` values.
3. Loading the sample replaces both drafts with the bundled roommate scenario.
4. Compare passes both drafts to `compareAccounts`.
5. The parser extracts candidates for the five agreement parts and the comparer assigns `aligned`, `check` or `missing`.
6. React renders the `ComparisonSummary` and five `ComparisonCard` components from that result.
7. `buildConfirmation` turns only the result data into an editable message.
8. Copy uses the browser clipboard. Reset clears all in-memory values and returns to the top.

No network request is in the core journey.

## Stack

- **TypeScript 5** — catches inconsistent result shapes early. Documentation: https://www.typescriptlang.org/docs/
- **React 19** — fits the interactive one-page flow and the learner's previous event build. Documentation: https://react.dev/
- **Vite 7** — fast local development and a static production build. Documentation: https://vite.dev/guide/
- **Plain CSS** — enough for a distinctive visual system without adding a component library.
- **Vitest** — unit checks for parsing and comparison. Documentation: https://vitest.dev/guide/
- **Playwright** — browser checks for the sample, copy-ready result and reset loop. Documentation: https://playwright.dev/docs/intro

The tradeoff is intentional: the first proof is dependable and private, but its phrase coverage is smaller than a model-backed parser.

## Where It Runs and How Someone Tries It

The app runs in a modern desktop or mobile browser. It needs Node.js 20 or newer to install and build; it needs no key.

```bash
npm install
npm run dev
```

Open the local URL Vite prints, normally `http://localhost:5173`. For the demo, load the roommate sample, compare it, reveal the three mismatches, edit the shared message, then copy it.

Production verification:

```bash
npm test
npm run build
npm run test:e2e
```

The required public GitHub repository and 1–3 minute video will be prepared in `6-ship`. Deployment is optional; the static build can later be hosted on GitHub Pages if time allows.

## Look and Feel

Implements `prd.md > Look and Feel`.

- Warm paper background, near-black ink, coral questions and leaf green matches.
- Friendly editorial display type paired with a clean sans-serif body. Use system-safe fallbacks so the page never depends on a font network request.
- Two note cards use slightly different warm tints and subtle rotation only on wide screens.
- Results feel like a shared receipt, with clear status stamps rather than chat UI.
- Motion is brief and functional: cards enter in sequence after Compare; reduced-motion users get no animated movement.
- Copy is calm and direct. No AI buzzwords, blame language or decorative robot imagery.

## Components

### App Shell

Owns the current drafts, result, editable confirmation, copy feedback and reset flow. Connects input to analysis and results. Implements `prd.md > Screens and Layout` and `prd.md > States and Boundaries`.

### Hero and Process Strip

States the problem in one sentence, names the intended everyday use and explains the three-step loop. Includes the primary `Try the roommate example` action. Implements `prd.md > The Core Journey`.

### Account Input

Renders one person's name and account text. Reports changes upward and shows validation only when needed. Two instances remain visually equal so the interface does not imply that one account is authoritative. Implements `prd.md > Two independent accounts`.

### Comparison Engine

Pure TypeScript functions normalize input, identify evidence phrases, compare the five agreement parts and return typed results. It must prefer `missing` or `unrecognized` to a guess. Implements `prd.md > Structured comparison`.

### Comparison Summary

Displays counts and a neutral one-line reading. It renders only after comparison and includes the disclaimer that Same Page checks wording, not truth. Implements `prd.md > Structured comparison` and `prd.md > States and Boundaries`.

### Comparison Card

Displays one category, status, short explanation and evidence from both accounts. It uses text and icons as well as color. Implements `prd.md > Structured comparison`.

### Shared Confirmation

Builds and displays an editable message, then supports copy and reset. It never sends the message. Implements `prd.md > Shared confirmation`.

### Footer Boundary Note

Explains local-only processing, supported-example limits and non-mediation boundary. Implements `prd.md > States and Boundaries` and `prd.md > Non-Goals`.

## Data Model

```ts
type AgreementDraft = {
  personName: string;
  text: string;
};

type Dimension = "people" | "action" | "time" | "money" | "conditions";
type Verdict = "aligned" | "check" | "missing" | "unrecognized";

type Evidence = {
  phrase: string | null;
  normalizedValue: string | null;
};

type DimensionResult = {
  dimension: Dimension;
  verdict: Verdict;
  summary: string;
  accountA: Evidence;
  accountB: Evidence;
};

type ComparisonResult = {
  dimensions: DimensionResult[];
  alignedCount: number;
  reviewCount: number;
  confirmation: string;
};
```

All data lives in React memory. Input changes update drafts. Compare replaces the result. Editing the shared message changes only the confirmation text. Refresh or reset removes everything.

## File Structure

```text
same-page/
├── devpost/
│   ├── learner-profile.md      # ignored local learning context
│   ├── scope.md                # approved idea boundary
│   ├── prd.md                  # approved product behavior
│   └── spec.md                 # this blueprint
├── public/
│   └── favicon.svg             # simple equal-lines mark
├── src/
│   ├── components/
│   │   ├── AccountInput.tsx
│   │   ├── ComparisonCard.tsx
│   │   ├── ComparisonSummary.tsx
│   │   └── SharedConfirmation.tsx
│   ├── data/
│   │   └── roommateSample.ts
│   ├── lib/
│   │   ├── compare.ts
│   │   ├── confirmation.ts
│   │   └── extractors.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   ├── types.ts
│   └── vite-env.d.ts
├── tests/
│   ├── compare.test.ts
│   └── same-page.spec.ts
├── index.html
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
├── LICENSE
└── README.md
```

## External Services and Dependencies

There are no runtime services, model calls, databases or paid dependencies. The browser Clipboard API is used only after a user clicks Copy; if permission is unavailable, the editable message remains selectable.

NPM packages are development and UI dependencies listed in `package.json`. No credentials enter the project.

## Important Failure Modes

- **One account is blank or too short** → Compare stays disabled and the nearby hint says both versions are needed.
- **A supported detail is absent** → show `Not mentioned` with the missing side named; do not fill it in.
- **The browser blocks clipboard access** → keep the message selected and show a plain instruction to copy manually.

## What Was Simplified and Why

- **A transparent phrase comparison engine** instead of a live language-model call — it makes the sample reliable, local and free. A fuller version would need a server, key management, structured-output validation and fallbacks.
- **One shared browser session** instead of remote two-person collection — it proves the comparison without accounts, links or storage.
- **One supported scenario family** instead of claiming universal understanding — it keeps the demo honest and lets every result be tested.

## Decisions and Open Issues

- The learner asked for speed and a general-audience result, so the established React/Vite approach keeps setup familiar.
- Runtime AI is not required by this event; the build itself uses the Learn Skill Pack and an AI coding agent. The README and video must describe the phrase engine honestly.
- The genuine uncertainty is whether a simple product can still feel inventive. The build will test that through one strong visual transformation: two note cards become five evidence-backed checks and one shared message.
- No technical issue blocks the build. A model-backed parser remains a later option, not a hidden dependency.

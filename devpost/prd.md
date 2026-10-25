---
doc: prd
status: approved
---

# Same Page — Product Requirements

Same Page helps two people catch mismatched expectations before an everyday agreement becomes a conflict. Source: `scope.md > The Unique Kernel` and `scope.md > Who It's For`.

## The Core Journey

Source: `scope.md > The Core Loop`.

1. A visitor lands on the promise plus a worked roommate example that shows two memories of the same agreement side by side.
2. The example names the expected outcome before interaction: two details align and three need a check.
3. They can compare that example in one click or type Person A's and Person B's versions of another agreement.
4. The Compare button stays unavailable until both accounts contain useful text.
5. The comparison appears as five plain-language cards: People, Action, Time, Money and Conditions.
6. Each card shows `Aligned`, `Needs a check` or `Not mentioned`, plus the exact phrases from both accounts that led to that result.
7. A summary counts what matches and what needs discussion. It never declares a winner.
8. Same Page creates an editable confirmation message that asks only about unresolved details and preserves the agreed parts.
9. The visitor copies the message or resets the experience.

Success is the moment a mismatch that looked harmless in the two paragraphs becomes obvious as a specific, answerable question.

## Screens and Layout

Source: `scope.md > The POC Boundary`.

The proof of concept is one responsive page with three stacked scenes:

- **Welcome and worked example** — a crisp promise, two visibly different memories of one agreement, the expected 2-aligned/3-check result and a one-click comparison action.
- **Input** — a three-step explainer and two equal account cards for editing the sample or entering another agreement.
- **Comparison table** — a centered summary and five result cards, arranged in a row on wide screens and a vertical stack on small screens.
- **Shared agreement** — an editable message on a paper-like card with Copy and Start over actions.

The comparison stays on the same page so the video can show the entire loop without navigation or loading screens.

## Look and Feel

Source: `scope.md > Inspiration & Identity`.

Warm, calm and human. The layout resembles two handwritten notes on a kitchen table becoming one shared receipt. Use warm paper, dark ink, coral for open questions and green for aligned details. Headings have a friendly editorial character; body text stays plain and highly readable. Avoid chat bubbles, neon AI gradients, glass panels and robot imagery.

The tone is neutral. Labels say "Needs a check" rather than "Conflict" or "Wrong."

## Features and Behavior

### Two independent accounts

Source: `scope.md > The Core Loop`.

- Both account cards have a name field and a larger text area.
- The sample fills both cards with a believable roommate agreement that differs in amount, date and condition.
- Character feedback appears only near the maximum; it does not distract during normal typing.
- `Compare our versions` requires useful text from both sides.

Acceptance criteria:

- [ ] Loading the sample fills both account cards and enables comparison.
- [ ] Clearing either account disables comparison and explains what is missing.
- [ ] Editing the sample changes the next comparison.

### Structured comparison

Source: `scope.md > The Unique Kernel`.

- The app checks five parts: People, Action, Time, Money and Conditions.
- Each result cites a short phrase from each account rather than giving an unexplained score.
- If both accounts express the same meaning, the part is `Aligned`.
- If both mention a part differently, it is `Needs a check`.
- If only one account mentions a part, it is `Not mentioned` and the result names whose version lacks it.
- The page makes clear that the comparison is a conversation aid, not a truth detector.

Acceptance criteria:

- [ ] The roommate sample reports People and Action as aligned.
- [ ] The roommate sample flags Time, Money and Conditions for review.
- [ ] Each flagged card displays both conflicting phrases.
- [ ] No result calls either person correct, dishonest or at fault.

### Shared confirmation

Source: `scope.md > What "Working" Looks Like`.

- The generated message starts with the aligned topic, then asks short questions for each unresolved part.
- The user can edit it before copying.
- Copy gives immediate visible feedback and does not send anything.
- Start over clears the result and returns focus to the input area.

Acceptance criteria:

- [ ] The roommate sample creates questions about amount, due date and whether payment waits for utilities.
- [ ] The message remains editable.
- [ ] Copy feedback changes to `Copied` and then returns to its normal label.
- [ ] Start over removes the comparison and shared message.

## States and Boundaries

- **First use** — empty account cards and an obvious sample action.
- **Ready** — both accounts contain usable text and Compare is enabled.
- **Results** — summary, five evidence cards and shared confirmation are visible.
- **All aligned** — the summary celebrates agreement and the message confirms it without inventing questions.
- **Missing detail** — a card says which account did not mention the detail.
- **Unrecognized detail** — a card stays honest: "We couldn't identify this detail." It never guesses.
- **Privacy boundary** — text stays in the browser for this proof of concept and disappears on reset or refresh.

## Product Decisions

- Make the value clear to a non-technical viewer in seconds — the learner asked for a simple, catchy second entry.
- Use one strong roommate example — it is faster to understand and more reliable on video than broad claims about every type of agreement.
- Compare accounts instead of rewriting them — that is the memorable difference from generic writing tools.
- Keep the product non-judgmental — it surfaces gaps but does not mediate or choose a winner.
- Finish one end-to-end loop before adding breadth — a complete demo matters more than many weak features.

## What We're Building

- Responsive one-page experience.
- Editable two-account input and one-click sample.
- Repeatable comparison across five agreement parts.
- Evidence-backed result states.
- Editable, copyable confirmation message.
- Reset flow and clear privacy/limitations copy.
- Automated checks for the sample, validation and reset behavior.

## Deferred From the POC

- Free-form model calls — the polished local sample and supported phrases keep the demo reliable and require no key.
- Remote sharing — it needs identifiers, storage and consent rules.
- Accounts, history and reminders — they do not prove the kernel.
- Audio transcription — it creates privacy and browser-permission work.

## Possible Later Enhancements

Add a model-backed parser with structured output, private share links, more agreement templates and translations. A later version could let each person submit independently before either sees the other's account.

## Non-Goals

- Legal interpretation, contract generation or dispute mediation.
- Relationship advice or judgments about intent.
- Recording conversations.
- Sending texts or emails on the user's behalf.
- Claiming that phrase comparison proves what was actually said.

## Open Questions

None block the technical plan. Wider free-form parsing can be investigated after the proof of concept is submitted.

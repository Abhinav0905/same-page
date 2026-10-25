import type { AgreementDraft, ComparisonResult, DimensionResult } from "../types";

const shortPhrase = (result: DimensionResult, side: "accountA" | "accountB") =>
  result[side].phrase ?? "not stated";

const questionFor = (result: DimensionResult): string | null => {
  const a = shortPhrase(result, "accountA");
  const b = shortPhrase(result, "accountB");

  if (result.verdict === "aligned") return null;

  if (result.dimension === "time") return `Timing: is it ${a}, or ${b}?`;
  if (result.dimension === "money") return `Amount: is it ${a}, or ${b}?`;
  if (result.dimension === "conditions") return `Condition: should it be ${a}, or ${b}?`;
  if (result.dimension === "people") return `Person: is it ${a}, or ${b}?`;
  return `Action: is it “${a},” or “${b}”?`;
};

export const buildConfirmation = (
  accountA: AgreementDraft,
  accountB: AgreementDraft,
  result: ComparisonResult,
): string => {
  const questions = result.dimensions.map(questionFor).filter((item): item is string => Boolean(item));
  const people = result.dimensions.find((item) => item.dimension === "people");
  const action = result.dimensions.find((item) => item.dimension === "action");

  const sharedBits = [
    people?.verdict === "aligned" && action?.verdict === "aligned" && people.accountA.normalizedValue
      ? `${people.accountA.normalizedValue.charAt(0).toUpperCase()}${people.accountA.normalizedValue.slice(1)} will handle the rent payment`
      : null,
  ].filter(Boolean);

  const greeting = `Hi ${accountA.personName} and ${accountB.personName} —`;
  const agreement = sharedBits.length
    ? `We seem to agree on the main plan: ${sharedBits.join(" and ")}.`
    : "We remember the main plan a little differently.";

  if (!questions.length) {
    return `${greeting}\n\n${agreement}\n\nCan we confirm that this is the plan we are both using?`;
  }

  return `${greeting}\n\n${agreement}\n\nBefore we move forward, can we confirm:\n${questions
    .map((question) => `• ${question}`)
    .join("\n")}\n\nOnce these are clear, we will be on the same page.`;
};


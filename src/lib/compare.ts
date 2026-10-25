import { extractDimension } from "./extractors";
import type {
  AgreementDraft,
  ComparisonResult,
  Dimension,
  DimensionResult,
  Evidence,
  Verdict,
} from "../types";

const dimensions: Dimension[] = ["people", "action", "time", "money", "conditions"];

const labels: Record<Dimension, string> = {
  people: "who is responsible",
  action: "what will happen",
  time: "when it happens",
  money: "the amount",
  conditions: "what must happen first",
};

const verdictFor = (accountA: Evidence, accountB: Evidence): Verdict => {
  if (!accountA.phrase && !accountB.phrase) return "unrecognized";
  if (!accountA.phrase || !accountB.phrase) return "missing";
  if (!accountA.normalizedValue || !accountB.normalizedValue) return "unrecognized";
  return accountA.normalizedValue === accountB.normalizedValue ? "aligned" : "check";
};

const summaryFor = (dimension: Dimension, verdict: Verdict): string => {
  if (verdict === "aligned") return `Both versions agree on ${labels[dimension]}.`;
  if (verdict === "check") return `The versions describe ${labels[dimension]} differently.`;
  if (verdict === "missing") return `Only one version mentions ${labels[dimension]}.`;
  return `We couldn't identify ${labels[dimension]} in either version.`;
};

export const compareAccounts = (
  accountA: AgreementDraft,
  accountB: AgreementDraft,
): ComparisonResult => {
  const results: DimensionResult[] = dimensions.map((dimension) => {
    const evidenceA = extractDimension(accountA, dimension);
    const evidenceB = extractDimension(accountB, dimension);
    const verdict = verdictFor(evidenceA, evidenceB);

    return {
      dimension,
      verdict,
      summary: summaryFor(dimension, verdict),
      accountA: evidenceA,
      accountB: evidenceB,
    };
  });

  return {
    dimensions: results,
    alignedCount: results.filter((result) => result.verdict === "aligned").length,
    reviewCount: results.filter((result) => result.verdict !== "aligned").length,
  };
};


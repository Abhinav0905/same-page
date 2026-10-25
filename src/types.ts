export type AgreementDraft = {
  personName: string;
  text: string;
};

export type Dimension = "people" | "action" | "time" | "money" | "conditions";
export type Verdict = "aligned" | "check" | "missing" | "unrecognized";

export type Evidence = {
  phrase: string | null;
  normalizedValue: string | null;
};

export type DimensionResult = {
  dimension: Dimension;
  verdict: Verdict;
  summary: string;
  accountA: Evidence;
  accountB: Evidence;
};

export type ComparisonResult = {
  dimensions: DimensionResult[];
  alignedCount: number;
  reviewCount: number;
};


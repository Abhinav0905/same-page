import type { DimensionResult, Dimension } from "../types";

type ComparisonCardProps = {
  result: DimensionResult;
  accountAName: string;
  accountBName: string;
  index: number;
};

const dimensionMeta: Record<Dimension, { label: string; prompt: string; mark: string }> = {
  people: { label: "People", prompt: "Who is responsible?", mark: "01" },
  action: { label: "Action", prompt: "What will happen?", mark: "02" },
  time: { label: "Time", prompt: "When will it happen?", mark: "03" },
  money: { label: "Money", prompt: "How much?", mark: "04" },
  conditions: { label: "Conditions", prompt: "What has to happen first?", mark: "05" },
};

const verdictMeta = {
  aligned: { label: "Aligned", symbol: "✓" },
  check: { label: "Needs a check", symbol: "?" },
  missing: { label: "Not mentioned", symbol: "…" },
  unrecognized: { label: "Not identified", symbol: "–" },
};

export function ComparisonCard({ result, accountAName, accountBName, index }: ComparisonCardProps) {
  const dimension = dimensionMeta[result.dimension];
  const verdict = verdictMeta[result.verdict];

  return (
    <article
      className={`comparison-card verdict-${result.verdict}`}
      style={{ "--card-index": index } as React.CSSProperties}
    >
      <header>
        <span className="dimension-number">{dimension.mark}</span>
        <div>
          <p>{dimension.label}</p>
          <h3>{dimension.prompt}</h3>
        </div>
        <span className="verdict-pill"><b aria-hidden="true">{verdict.symbol}</b>{verdict.label}</span>
      </header>
      <p className="result-summary">{result.summary}</p>
      <div className="evidence-grid">
        <blockquote>
          <span>{accountAName || "Version A"}</span>
          <p>{result.accountA.phrase ? `“${result.accountA.phrase}”` : "No matching detail"}</p>
        </blockquote>
        <blockquote>
          <span>{accountBName || "Version B"}</span>
          <p>{result.accountB.phrase ? `“${result.accountB.phrase}”` : "No matching detail"}</p>
        </blockquote>
      </div>
    </article>
  );
}


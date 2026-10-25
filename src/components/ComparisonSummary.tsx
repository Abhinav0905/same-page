type ComparisonSummaryProps = {
  alignedCount: number;
  reviewCount: number;
};

export function ComparisonSummary({ alignedCount, reviewCount }: ComparisonSummaryProps) {
  const total = alignedCount + reviewCount;

  return (
    <div className="comparison-summary" aria-label={`${alignedCount} aligned and ${reviewCount} to check`}>
      <div className="score" aria-hidden="true">
        <span>{alignedCount}</span>
        <small>of {total} aligned</small>
      </div>
      <div>
        <p className="summary-kicker">A clearer conversation starts here</p>
        <h2 id="results-title">
          {reviewCount === 0 ? "You heard the same plan." : "Here is where your versions split."}
        </h2>
        <p>
          {reviewCount === 0
            ? "Every detail we could identify lines up. Confirm it once, then move forward."
            : `${reviewCount} ${reviewCount === 1 ? "detail needs" : "details need"} a quick check. The exact wording is below.`}
        </p>
      </div>
    </div>
  );
}


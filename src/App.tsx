import { useMemo, useRef, useState } from "react";
import { AccountInput } from "./components/AccountInput";
import { roommateSample } from "./data/roommateSample";
import { compareAccounts } from "./lib/compare";
import type { AgreementDraft, ComparisonResult, Dimension } from "./types";

const emptyDraft: AgreementDraft = { personName: "", text: "" };

const dimensionLabel: Record<Dimension, string> = {
  people: "People",
  action: "Action",
  time: "Time",
  money: "Money",
  conditions: "Conditions",
};

const verdictLabel = {
  aligned: "Aligned",
  check: "Needs a check",
  missing: "Not mentioned",
  unrecognized: "Not identified",
};

function App() {
  const [accountA, setAccountA] = useState<AgreementDraft>(emptyDraft);
  const [accountB, setAccountB] = useState<AgreementDraft>(emptyDraft);
  const [result, setResult] = useState<ComparisonResult | null>(null);
  const resultsRef = useRef<HTMLElement>(null);

  const canCompare = useMemo(
    () => accountA.personName.trim().length > 1 && accountA.text.trim().length > 12 && accountB.personName.trim().length > 1 && accountB.text.trim().length > 12,
    [accountA, accountB],
  );

  const loadSample = () => {
    setAccountA(roommateSample.accountA);
    setAccountB(roommateSample.accountB);
    setResult(null);
  };

  const compare = () => {
    if (!canCompare) return;
    setResult(compareAccounts(accountA, accountB));
    requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <a className="wordmark" href="#top" aria-label="Same Page home">
          <span aria-hidden="true">=</span> Same Page
        </a>
        <p className="eyebrow">A tiny clarity check for everyday agreements</p>
        <h1 id="page-title">Two people. One conversation. <em>Two different memories.</em></h1>
        <p className="hero-copy">
          Compare what each person heard before a small gap becomes a big argument. No blame. Just the details to check.
        </p>
        <button className="sample-button" onClick={loadSample}>Try the roommate example <span aria-hidden="true">→</span></button>
        <ol className="process" aria-label="How Same Page works">
          <li><span>1</span>Write each version</li>
          <li><span>2</span>Spot the gaps</li>
          <li><span>3</span>Confirm one plan</li>
        </ol>
      </section>

      <section className="input-section" id="top" aria-labelledby="input-title">
        <div className="section-heading">
          <p className="eyebrow">Step one</p>
          <h2 id="input-title">What did each person hear?</h2>
          <p>Write independently. Same Page compares the wording, not the people.</p>
        </div>

        <div className="notes-grid">
          <AccountInput label="Version A" value={accountA} onChange={setAccountA} />
          <AccountInput label="Version B" value={accountB} onChange={setAccountB} />
        </div>

        <div className="compare-row">
          <button className="compare-button" disabled={!canCompare} onClick={compare}>
            Compare our versions
          </button>
          {!canCompare && <p>Both versions need a name and a few words before we can compare them.</p>}
        </div>
      </section>

      {result && (
        <section className="results-section" ref={resultsRef} aria-labelledby="results-title">
          <div className="section-heading">
            <p className="eyebrow">Step two</p>
            <h2 id="results-title">Here is where your versions split.</h2>
            <p>{result.alignedCount} aligned · {result.reviewCount} to check</p>
          </div>
          <div className="basic-results">
            {result.dimensions.map((item) => (
              <article key={item.dimension} className={`basic-result ${item.verdict}`}>
                <div>
                  <span>{dimensionLabel[item.dimension]}</span>
                  <strong>{verdictLabel[item.verdict]}</strong>
                </div>
                <p>{item.summary}</p>
                <small>{item.accountA.phrase ?? "Not found"} · {item.accountB.phrase ?? "Not found"}</small>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default App;


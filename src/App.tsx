import { useMemo, useRef, useState } from "react";
import { AccountInput } from "./components/AccountInput";
import { ComparisonCard } from "./components/ComparisonCard";
import { ComparisonSummary } from "./components/ComparisonSummary";
import { SharedConfirmation } from "./components/SharedConfirmation";
import { roommateSample } from "./data/roommateSample";
import { compareAccounts } from "./lib/compare";
import { buildConfirmation } from "./lib/confirmation";
import type { AgreementDraft, ComparisonResult } from "./types";

const emptyDraft: AgreementDraft = { personName: "", text: "" };

function App() {
  const [accountA, setAccountA] = useState<AgreementDraft>(emptyDraft);
  const [accountB, setAccountB] = useState<AgreementDraft>(emptyDraft);
  const [result, setResult] = useState<ComparisonResult | null>(null);
  const [confirmation, setConfirmation] = useState("");
  const resultsRef = useRef<HTMLElement>(null);

  const canCompare = useMemo(
    () => accountA.personName.trim().length > 1 && accountA.text.trim().length > 12 && accountB.personName.trim().length > 1 && accountB.text.trim().length > 12,
    [accountA, accountB],
  );

  const showComparison = (left: AgreementDraft, right: AgreementDraft) => {
    const nextResult = compareAccounts(left, right);
    setResult(nextResult);
    setConfirmation(buildConfirmation(left, right, nextResult));
    window.setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  const runSample = () => {
    setAccountA(roommateSample.accountA);
    setAccountB(roommateSample.accountB);
    showComparison(roommateSample.accountA, roommateSample.accountB);
  };

  const changeAccountA = (next: AgreementDraft) => {
    setAccountA(next);
    setResult(null);
    setConfirmation("");
  };

  const changeAccountB = (next: AgreementDraft) => {
    setAccountB(next);
    setResult(null);
    setConfirmation("");
  };

  const compare = () => {
    if (!canCompare) return;
    showComparison(accountA, accountB);
  };

  const reset = () => {
    setAccountA(emptyDraft);
    setAccountB(emptyDraft);
    setResult(null);
    setConfirmation("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <a className="wordmark" href="#top" aria-label="Same Page home">
          <span aria-hidden="true">=</span> Same Page
        </a>
        <div className="hero-grid">
          <div className="hero-intro">
            <p className="eyebrow">A tiny clarity check for everyday agreements</p>
            <h1 id="page-title">Two people. One conversation. <em>Two different memories.</em></h1>
            <p className="hero-copy">
              Compare what each person heard before a small gap becomes a big argument. No blame. Just the details to check.
            </p>
            <ol className="process" aria-label="How Same Page works">
              <li><span>1</span>Write each version</li>
              <li><span>2</span>Spot the gaps</li>
              <li><span>3</span>Confirm one plan</li>
            </ol>
          </div>

          <aside className="worked-example" aria-labelledby="worked-example-title">
            <p className="example-kicker">Worked example · roommates</p>
            <h2 id="worked-example-title">One agreement. Two memories.</h2>
            <p className="example-intro">Maya and Jordan agree that Maya will pay rent. The details tell a different story.</p>
            <div className="example-memories">
              <article>
                <span>Maya remembers</span>
                <blockquote>{roommateSample.accountA.text}</blockquote>
              </article>
              <article>
                <span>Jordan remembers</span>
                <blockquote>{roommateSample.accountB.text}</blockquote>
              </article>
            </div>
            <div className="example-outcome" aria-label="Expected comparison result">
              <strong><b>2</b> details align</strong>
              <strong><b>3</b> need a quick check</strong>
            </div>
            <p className="example-explanation">Same Page turns the amount, date and utility condition into three neutral questions.</p>
            <button className="sample-button" onClick={runSample}>Compare this example <span aria-hidden="true">→</span></button>
          </aside>
        </div>
      </section>

      <section className="input-section" id="top" aria-labelledby="input-title">
        <div className="section-heading">
          <p className="eyebrow">Step one</p>
          <h2 id="input-title">What did each person hear?</h2>
          <p>Write independently. Same Page compares the wording, not the people.</p>
        </div>

        <div className="notes-grid">
          <AccountInput label="Version A" value={accountA} onChange={changeAccountA} />
          <AccountInput label="Version B" value={accountB} onChange={changeAccountB} />
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
          <p className="eyebrow">Step two</p>
          <ComparisonSummary alignedCount={result.alignedCount} reviewCount={result.reviewCount} />
          <div className="comparison-list">
            {result.dimensions.map((item, index) => (
              <ComparisonCard
                key={item.dimension}
                result={item}
                accountAName={accountA.personName}
                accountBName={accountB.personName}
                index={index}
              />
            ))}
          </div>
          <p className="truth-note">
            <span aria-hidden="true">i</span>
            Same Page compares the words you entered. It cannot know what was said, intended or promised.
          </p>
        </section>
      )}

      {result && (
        <SharedConfirmation value={confirmation} onChange={setConfirmation} onReset={reset} />
      )}

      <footer>
        <a className="wordmark footer-wordmark" href="#top"><span aria-hidden="true">=</span> Same Page</a>
        <p>Your words stay in this browser tab. Nothing is saved or sent.</p>
        <p>Built as a conversation aid, not a mediator or legal tool.</p>
      </footer>
    </main>
  );
}

export default App;


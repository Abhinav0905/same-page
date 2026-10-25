import { useRef, useState } from "react";

type SharedConfirmationProps = {
  value: string;
  onChange: (value: string) => void;
  onReset: () => void;
};

export function SharedConfirmation({ value, onChange, onReset }: SharedConfirmationProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "manual">("idle");
  const textRef = useRef<HTMLTextAreaElement>(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      textRef.current?.focus();
      textRef.current?.select();
      setCopyState("manual");
    }
  };

  const copyLabel = copyState === "copied" ? "Copied" : copyState === "manual" ? "Selected — copy manually" : "Copy message";

  return (
    <section className="confirmation-section" aria-labelledby="confirmation-title">
      <div className="confirmation-intro">
        <p className="eyebrow">Step three</p>
        <h2 id="confirmation-title">Leave with one shared version.</h2>
        <p>Edit this together. Same Page asks about the gaps and leaves the final wording to you.</p>
      </div>
      <div className="confirmation-card">
        <span className="paperclip" aria-hidden="true" />
        <label htmlFor="shared-message">Shared confirmation message</label>
        <textarea
          ref={textRef}
          id="shared-message"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={12}
        />
        <div className="confirmation-actions">
          <button className="copy-button" onClick={copy}>{copyLabel}</button>
          <button className="reset-button" onClick={onReset}>Start over</button>
        </div>
        <p className="send-note">Nothing is sent automatically. Read it together before you use it.</p>
      </div>
    </section>
  );
}


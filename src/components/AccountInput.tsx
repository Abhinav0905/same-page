import type { AgreementDraft } from "../types";

type AccountInputProps = {
  label: string;
  value: AgreementDraft;
  onChange: (next: AgreementDraft) => void;
};

export function AccountInput({ label, value, onChange }: AccountInputProps) {
  return (
    <article className="note-card">
      <span className="note-label">{label}</span>
      <label>
        Name
        <input
          aria-label={`${label} name`}
          value={value.personName}
          onChange={(event) => onChange({ ...value, personName: event.target.value })}
          placeholder="First name"
          maxLength={30}
        />
      </label>
      <label>
        What do you remember agreeing to?
        <textarea
          aria-label={`${label} agreement`}
          value={value.text}
          onChange={(event) => onChange({ ...value, text: event.target.value })}
          placeholder="Write it in your own words…"
          rows={6}
          maxLength={500}
        />
      </label>
      {value.text.length > 400 && <span className="character-count">{value.text.length}/500</span>}
    </article>
  );
}


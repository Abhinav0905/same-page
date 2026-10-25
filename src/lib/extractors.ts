import type { AgreementDraft, Dimension, Evidence } from "../types";

const tidy = (value: string) => value.replace(/\s+/g, " ").trim();

const sentenceWith = (text: string, pattern: RegExp): string | null => {
  const sentences = text.split(/(?<=[.!?])\s+/);
  return sentences.find((sentence) => pattern.test(sentence))?.replace(/[.!?]+$/, "") ?? null;
};

const extractPerson = (draft: AgreementDraft): Evidence => {
  const firstPersonAction = draft.text.match(/\bI(?:'ll| will| am going to)?\s+(?:pay|send|cover|transfer)\b/i);
  if (firstPersonAction) {
    return { phrase: firstPersonAction[0], normalizedValue: draft.personName.toLowerCase() };
  }

  const namedAction = draft.text.match(/\b([A-Z][a-z]+)\s+(?:will\s+)?(?:pay|send|cover|transfer)\b/);
  return namedAction
    ? { phrase: namedAction[0], normalizedValue: namedAction[1].toLowerCase() }
    : { phrase: null, normalizedValue: null };
};

const extractAction = (draft: AgreementDraft): Evidence => {
  const phrase = draft.text.match(/\b(?:pay|send|cover|transfer)(?:[^.!?]{0,35})\brent\b/i)?.[0] ?? null;
  return phrase
    ? { phrase: tidy(phrase), normalizedValue: "rent payment" }
    : { phrase: null, normalizedValue: null };
};

const extractTime = (draft: AgreementDraft): Evidence => {
  const phrase = draft.text.match(
    /\b(?:by|on|before|after)\s+(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)(?:,?\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2})?/i,
  )?.[0] ?? null;
  return phrase
    ? { phrase: tidy(phrase), normalizedValue: tidy(phrase).toLowerCase().replace(/^(by|on)\s+/, "") }
    : { phrase: null, normalizedValue: null };
};

const extractMoney = (draft: AgreementDraft): Evidence => {
  const sentence = sentenceWith(draft.text, /\$|\bhalf\b/i);
  if (!sentence) return { phrase: null, normalizedValue: null };

  const dollar = sentence.match(/\$\s?([\d,]+(?:\.\d{2})?)/);
  if (!dollar) return { phrase: sentence, normalizedValue: null };

  const amount = dollar[1].replace(/,/g, "");
  const isHalf = /\bhalf\b/i.test(sentence);
  const phrase = isHalf ? sentence.match(/half(?:[^.!?]{0,18})\$\s?[\d,]+/i)?.[0] ?? sentence : dollar[0];
  return { phrase: tidy(phrase), normalizedValue: isHalf ? `half-of-${amount}` : amount };
};

const extractCondition = (draft: AgreementDraft): Evidence => {
  const sentence = sentenceWith(draft.text, /\b(after|before|until|once|even if|only if|unless)\b/i);
  if (!sentence) return { phrase: null, normalizedValue: null };

  const condition = sentence.match(/\b(after|before|until|once|even if|only if|unless)\b.*$/i)?.[0] ?? sentence;
  return { phrase: tidy(condition), normalizedValue: tidy(condition).toLowerCase() };
};

export const extractDimension = (draft: AgreementDraft, dimension: Dimension): Evidence => {
  const extractors: Record<Dimension, (value: AgreementDraft) => Evidence> = {
    people: extractPerson,
    action: extractAction,
    time: extractTime,
    money: extractMoney,
    conditions: extractCondition,
  };

  return extractors[dimension](draft);
};


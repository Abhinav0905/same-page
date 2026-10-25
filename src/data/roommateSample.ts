import type { AgreementDraft } from "../types";

export const roommateSample: { accountA: AgreementDraft; accountB: AgreementDraft } = {
  accountA: {
    personName: "Maya",
    text: "Jordan and I agreed I'll pay $800 for rent by Friday, October 30. I'll pay after the utility bill arrives.",
  },
  accountB: {
    personName: "Jordan",
    text: "Maya will send half of the $1,700 rent on Monday, November 2. Her rent share is due even if the utility bill hasn't arrived.",
  },
};


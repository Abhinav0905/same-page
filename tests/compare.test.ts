import { describe, expect, it } from "vitest";
import { roommateSample } from "../src/data/roommateSample";
import { compareAccounts } from "../src/lib/compare";

describe("compareAccounts", () => {
  it("finds the intended roommate mismatches", () => {
    const result = compareAccounts(roommateSample.accountA, roommateSample.accountB);
    const verdicts = Object.fromEntries(result.dimensions.map((item) => [item.dimension, item.verdict]));

    expect(verdicts).toEqual({
      people: "aligned",
      action: "aligned",
      time: "check",
      money: "check",
      conditions: "check",
    });
    expect(result.alignedCount).toBe(2);
    expect(result.reviewCount).toBe(3);
  });

  it("keeps absent details missing instead of inventing them", () => {
    const result = compareAccounts(
      { personName: "Ari", text: "I'll pay the rent." },
      { personName: "Bea", text: "Ari will pay the rent by Friday." },
    );
    const money = result.dimensions.find((item) => item.dimension === "money");
    const time = result.dimensions.find((item) => item.dimension === "time");

    expect(money?.verdict).toBe("unrecognized");
    expect(time?.verdict).toBe("missing");
  });

  it("marks the same concrete details as aligned", () => {
    const result = compareAccounts(
      { personName: "Ari", text: "I'll pay $900 for rent by Friday. I'll pay after the invoice arrives." },
      { personName: "Bea", text: "Ari will send $900 rent by Friday. Payment happens after the invoice arrives." },
    );

    expect(result.alignedCount).toBe(5);
    expect(result.reviewCount).toBe(0);
  });

  it("labels details absent from only one version as missing", () => {
    const result = compareAccounts(
      { personName: "Ari", text: "I'll pay $900 for rent by Friday." },
      { personName: "Bea", text: "Ari will pay the rent." },
    );

    expect(result.dimensions.find((item) => item.dimension === "money")?.verdict).toBe("missing");
    expect(result.dimensions.find((item) => item.dimension === "time")?.verdict).toBe("missing");
  });
});

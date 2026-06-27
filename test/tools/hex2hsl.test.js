import { hex2hsl } from "../../src/tools/hex2hsl.js";

describe("HEX to HSL", () => {
  test.concurrent("HEX short (#eee)", async () => {
    expect(hex2hsl("#eee")).toEqual([0, 0, 93]);
  });

  test.concurrent("HEX long (#2196f3)", async () => {
    expect(hex2hsl("#2196f3")).toEqual([207, 90, 54]);
  });

  test.concurrent("HEX with alpha (#2196f3bf)", async () => {
    expect(hex2hsl("#2196f3bf")).toEqual([207, 90, 54]);
  });

  test.concurrent("HEX lowercase without hash", async () => {
    expect(hex2hsl("c2780a")).toEqual([36, 90, 40]);
  });

  test.concurrent("Exception: invalid format", async () => {
    expect(hex2hsl("zzzzzz")).toBeUndefined();
  });

  test.concurrent("Exception: empty string", async () => {
    expect(hex2hsl("")).toBeUndefined();
  });

  test.concurrent("Exception: too short", async () => {
    expect(hex2hsl("#f")).toBeUndefined();
  });

  test.concurrent("Exception: invalid array input", async () => {
    expect(hex2hsl([255, 255, 255])).toBeUndefined();
  });

  test.concurrent("Exception: undefined input", async () => {
    expect(hex2hsl()).toBeUndefined();
  });

  test.concurrent("max === g", async () => {
    expect(hex2hsl("#0f0")).toEqual([120, 100, 50]);
  });

  test.concurrent("max === b", async () => {
    expect(hex2hsl("#00f")).toEqual([240, 100, 50]);
  });

  test.concurrent("delta === 0", async () => {
    expect(hex2hsl("#888888")).toEqual([0, 0, 53]);
  });

  test.concurrent("h with (g < b) condition", async () => {
    const result = hex2hsl("#c2192f");
    expect(result[0]).toBeCloseTo(352, 0);
    expect(result[1]).toBeCloseTo(77, 0);
    expect(result[2]).toBeCloseTo(43, 0);
  });

  test.concurrent("Exception: invalid hex returns undefined", async () => {
    expect(hex2hsl("")).toBeUndefined();
    expect(hex2hsl("invalid")).toBeUndefined();
    expect(hex2hsl("#ff")).toBeUndefined();
  });
});

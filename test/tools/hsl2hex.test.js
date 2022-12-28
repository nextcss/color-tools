import { hsl2hex } from "../../src/tools/hsl2hex.js";

describe("HSL to HEX", () => {
  test.concurrent("3 digits array", async () => {
    expect(hsl2hex([238, 50, 50])).toBe("#4044bf");
  });

  test.concurrent("3 digits array with zero", async () => {
    expect(hsl2hex([238, 5, 5])).toBe("#0c0c0d");
  });

  test.concurrent("Exception: out of hue", async () => {
    expect(hsl2hex([450, 100, 100])).toBe("#ffffff");
  });

  test.concurrent("Exception: out of saturate and lightness", async () => {
    expect(hsl2hex([230, 150, 150])).toBe("#ffffff");
  });

  test.concurrent("Exception: 4 digits array", async () => {
    expect(hsl2hex([238, 238, 238, 238])).toBeUndefined();
  });

  test.concurrent("Exception: 2 digits array", async () => {
    expect(hsl2hex([238, 238])).toBeUndefined();
  });

  test.concurrent("Exception: 1 digits array", async () => {
    expect(hsl2hex([238])).toBeUndefined();
  });

  test.concurrent("Exception: empty array", async () => {
    expect(hsl2hex([])).toBeUndefined();
  });

  test.concurrent("Exception: empty string", async () => {
    expect(hsl2hex("")).toBeUndefined();
  });

  test.concurrent("Exception: empty input", async () => {
    expect(hsl2hex()).toBeUndefined();
  });
});

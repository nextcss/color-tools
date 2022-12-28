import { rgb2hex } from "../../src/tools/rgb2hex.js";

describe("RGB to HEX", () => {
  test.concurrent("4 digits array", async () => {
    expect(rgb2hex([238, 238, 238, 75])).toBe("#eeeeeebf");
  });

  test.concurrent("3 digits array", async () => {
    expect(rgb2hex([238, 238, 238])).toBe("#eeeeee");
  });

  test.concurrent("3 digits array with zero padding", async () => {
    expect(rgb2hex([10, 10, 10])).toBe("#0a0a0a");
  });

  test.concurrent("Exception: 2 digits array", async () => {
    expect(rgb2hex([238, 238])).toBeUndefined();
  });

  test.concurrent("Exception: 1 digits array", async () => {
    expect(rgb2hex([238])).toBeUndefined();
  });

  test.concurrent("Exception: empty array", async () => {
    expect(rgb2hex([])).toBeUndefined();
  });

  test.concurrent("Exception: empty string", async () => {
    expect(rgb2hex("")).toBeUndefined();
  });

  test.concurrent("Exception: empty input", async () => {
    expect(rgb2hex()).toBeUndefined();
  });
});

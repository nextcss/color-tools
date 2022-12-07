import { rgb2hex } from "../src/index.js";

describe("RGB to HEX", () => {
  test.concurrent("4 digits array", async () => {
    expect(rgb2hex([238, 238, 238, 75])).toBe("#eeeeeebf");
  });

  test.concurrent("3 digits array", async () => {
    expect(rgb2hex([238, 238, 238])).toBe("#eeeeee");
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

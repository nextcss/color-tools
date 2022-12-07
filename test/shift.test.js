import { colorShift } from "../src/index.js";

describe("Color Shift", () => {
  test.concurrent("3 digits with hash", async () => {
    expect(colorShift("#eee", 10)).toBe("#d6d6d6");
  });

  test.concurrent("3 digits without hash", async () => {
    expect(colorShift("eee", 10)).toBe("#d6d6d6");
  });

  test.concurrent("6 digits with hash", async () => {
    expect(colorShift("#eeeeee", 10)).toBe("#d6d6d6");
  });

  test.concurrent("6 digits without hash", async () => {
    expect(colorShift("eeeeee", 10)).toBe("#d6d6d6");
  });

  test.concurrent("8 digits with hash", async () => {
    expect(colorShift("#eeeeeef0", 10)).toBe("#d6d6d6f0");
  });

  test.concurrent("8 digits without hash", async () => {
    expect(colorShift("eeeeeef0", 10)).toBe("#d6d6d6f0");
  });

  test.concurrent("Exception: no percentage", async () => {
    expect(colorShift("#eee")).toBe("#eeeeee");
  });

  test.concurrent("Exception: empty string", async () => {
    expect(colorShift("", 10)).toBeUndefined();
  });

  test.concurrent("Exception: empty input", async () => {
    expect(colorShift()).toBeUndefined();
  });
});

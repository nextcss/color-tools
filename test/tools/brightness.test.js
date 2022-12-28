import { brightness } from "../../src/tools/brightness.js";

describe("Brightness", () => {
  test.concurrent("3 digits with hash", async () => {
    expect(brightness("#eee")).toBe(93);
  });

  test.concurrent("3 digits without hash", async () => {
    expect(brightness("eee")).toBe(93);
  });

  test.concurrent("6 digits with hash", async () => {
    expect(brightness("#eeeeee")).toBe(93);
  });

  test.concurrent("6 digits without hash", async () => {
    expect(brightness("eeeeee")).toBe(93);
  });

  test.concurrent("8 digits with hash", async () => {
    expect(brightness("#eeeeeeee")).toBe(93);
  });

  test.concurrent("8 digits without hash", async () => {
    expect(brightness("eeeeeeee")).toBe(93);
  });

  test.concurrent("Exception: empty string", async () => {
    expect(brightness("")).toBeUndefined();
  });

  test.concurrent("Exception: empty input", async () => {
    expect(brightness()).toBeUndefined();
  });
});

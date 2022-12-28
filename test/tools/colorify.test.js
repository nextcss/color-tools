import { colorify } from "../../src/tools/colorify.js";

describe("Colorify", () => {
  test.concurrent("Name without params", async () => {
    expect(colorify("John Doe")).toBe("#40bf79");
  });

  test.concurrent("Name with saturate", async () => {
    expect(colorify("John Doe", 25)).toBe("#609f7c");
  });

  test.concurrent("Name with saturate and lightness", async () => {
    expect(colorify("John Doe", 25, 25)).toBe("#30503e");
  });

  test.concurrent("Monogram without params", async () => {
    expect(colorify("JD")).toBe("#4090bf");
  });

  test.concurrent("Letter without params", async () => {
    expect(colorify("J")).toBe("#a2bf40");
  });

  test.concurrent("Exception: empty string", async () => {
    expect(colorify("")).toBeUndefined();
  });

  test.concurrent("Exception: empty input", async () => {
    expect(colorify()).toBeUndefined();
  });
});

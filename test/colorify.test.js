import { colorify } from "../src/index.js";

describe("Colorify", () => {
  test.concurrent("Name without params", async () => {
    expect(colorify("John Doe")).toBeDefined();
  });

  test.concurrent("Name with saturate", async () => {
    expect(colorify("John Doe", 25)).toBeDefined();
  });

  test.concurrent("Name with saturate and lightness", async () => {
    expect(colorify("John Doe", 25, 25)).toBeDefined();
  });

  test.concurrent("Monogram without params", async () => {
    expect(colorify("JD")).toBeDefined();
  });

  test.concurrent("Letter without params", async () => {
    expect(colorify("J")).toBeDefined();
  });

  test.concurrent("Exception: empty string", async () => {
    expect(colorify("")).toBeUndefined();
  });

  test.concurrent("Exception: empty input", async () => {
    expect(colorify()).toBeUndefined();
  });
});

import { random } from "../../src/utils/random.js";

describe("Utils: random", () => {
  test.concurrent("In range", async () => {
    expect(random(30, 31)).toBeGreaterThanOrEqual(30);
    expect(random(30, 31)).toBeLessThanOrEqual(31);
  });

  test.concurrent("Narrow range", async () => {
    expect(random(31, 31)).toBe(31);
  });
});

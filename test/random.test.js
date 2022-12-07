import { randomHex, randomRgb, randomHsl } from "../src/index.js";

describe("Random", () => {
  test.concurrent("HEX without param", async () => {
    expect(randomHex()).toBeDefined();
  });

  test.concurrent("HEX with saturate", async () => {
    expect(randomHex(60)).toBeDefined();
  });

  test.concurrent("HEX with saturate and lightness", async () => {
    expect(randomHex(60, 40)).toBeDefined();
  });

  test.concurrent("RGB without param", async () => {
    expect(randomRgb()).toBeDefined();
  });

  test.concurrent("RGB with saturate", async () => {
    expect(randomRgb(60)).toBeDefined();
  });

  test.concurrent("RGB with saturate and lightness", async () => {
    expect(randomRgb(60, 40)).toBeDefined();
  });

  test.concurrent("HSL without param", async () => {
    expect(randomHsl()).toBeDefined();
  });

  test.concurrent("HSL with saturate", async () => {
    expect(randomHsl(60)).toBeDefined();
  });

  test.concurrent("HSL with saturate and lightness", async () => {
    expect(randomHsl(60, 40)).toBeDefined();
  });
});

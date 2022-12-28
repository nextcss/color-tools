import { hex2rgb } from "../../src/tools/hex2rgb.js";

describe("HEX to RGB", () => {
  test.concurrent("3 digits with hash", async () => {
    expect(hex2rgb("#eee")).toEqual([238, 238, 238]);
  });

  test.concurrent("3 digits without hash", async () => {
    expect(hex2rgb("eee")).toEqual([238, 238, 238]);
  });

  test.concurrent("6 digits with hash", async () => {
    expect(hex2rgb("#eeeeee")).toEqual([238, 238, 238]);
  });

  test.concurrent("6 digits without hash", async () => {
    expect(hex2rgb("eeeeee")).toEqual([238, 238, 238]);
  });

  test.concurrent("8 digits with hash", async () => {
    expect(hex2rgb("#eeeeeeee")).toEqual([238, 238, 238, 93]);
  });

  test.concurrent("8 digits without hash", async () => {
    expect(hex2rgb("eeeeeeee")).toEqual([238, 238, 238, 93]);
  });

  test.concurrent("Exception: 4 digits", async () => {
    expect(hex2rgb("eeee")).toBeUndefined();
  });

  test.concurrent("Exception: 5 digits", async () => {
    expect(hex2rgb("eeeee")).toBeUndefined();
  });

  test.concurrent("Exception: 7 digits", async () => {
    expect(hex2rgb("eeeeeee")).toBeUndefined();
  });

  test.concurrent("Exception: 9 digits", async () => {
    expect(hex2rgb("eeeeeeeee")).toBeUndefined();
  });

  test.concurrent("Exception: empty string", async () => {
    expect(hex2rgb("")).toBeUndefined();
  });

  test.concurrent("Exception: empty input", async () => {
    expect(hex2rgb()).toBeUndefined();
  });
});

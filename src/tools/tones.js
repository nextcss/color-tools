import { hslColorShift, oklabColorShift, rgbColorShift } from "./shift.js";

const light = [-90, -85, -74, -62, -50, -40, -30, -20, -10];
const dark = [0, 11, 23, 34, 45, 56, 68, 79, 90, 97];
const tones = [...light, ...dark];

export const toneMap = (hex) =>
  tones.reduce((results, tone, key) => {
    const color = rgbColorShift(hex, tone);
    results[key * 50 + 50] = color;
    return results;
  }, {});

import { colorShift } from "./shift.js";

const light = [-90, -85, -74, -62, -50, -40, -30, -20, -10];
const dark = [0, 10, 20, 30, 40, 50, 60, 70, 80, 85];
const tones = [...light, ...dark];

export const toneMap = (hex) =>
  tones.reduce((results, tone, key) => {
    const color = colorShift(hex, tone);
    results[key * 50 + 50] = color;
    return results;
  }, {});

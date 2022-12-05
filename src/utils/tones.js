import { colorShift } from "./shift.js";

const light = [-90, -85, -74, -62, -50, -40, -30, -20, -10];
const dark = [0, 10, 20, 30, 40, 50, 60, 70, 80, 85];

export const toneMap = (hex) => {
  const results = {};

  [...light, ...dark].forEach((tone, key) => {
    const index = key * 50 + 50;
    const color = colorShift(hex, tone);

    if (color) results[index] = color;
  });

  return results;
};

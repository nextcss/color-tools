import { hslColorShift, hwbColorShift, oklabColorShift, rgbColorShift } from './shift.js';

const tones = [90, 85, 74, 62, 50, 40, 30, 20, 10, 0, -11, -23, -34, -45, -56, -68, -79, -90, -97];
const TONES_LEN = tones.length;

const shiftModes = {
  rgb: rgbColorShift,
  hsl: hslColorShift,
  hwb: hwbColorShift,
  oklab: oklabColorShift,
};

export const toneMap = (hex = '', mode = 'rgb') => {
  const result = {};
  const colorShift = shiftModes[mode] || rgbColorShift;
  for (let i = 0; i < TONES_LEN; i++) {
    result[i * 50 + 50] = colorShift(hex, tones[i]);
  }
  return result;
};

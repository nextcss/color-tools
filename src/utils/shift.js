import { hex2rgb } from './hex2rgb.js';
import { rgb2hex } from './rgb2hex.js';

const roundMinMax = (value) => Math.min(255, Math.max(0, Math.round(value)));

export const colorShift = (hex, percentage = 0) => {
  const rgb = hex2rgb(hex);
  const multiplier = percentage / 100;

  rgb?.forEach((val, key, arr) => {
    arr[key] =
      multiplier < 0
        ? roundMinMax(val + (255 - val) * Math.abs(multiplier))
        : roundMinMax(val - val * multiplier);
  });

  return rgb2hex(rgb);
};

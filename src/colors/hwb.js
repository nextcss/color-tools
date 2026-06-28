import { clamp } from '../tools/utils.js';
import { rgb2hex, rgb2hsl, rgb2oklab } from './rgb.js';

// Convert HWB to RGB
export const hwb2rgb = (hwb = []) => {
  if (!Array.isArray(hwb) || ![3, 4].includes(hwb.length)) return;

  let [h, w, b, alpha] = hwb;
  h = clamp(h, 0, 360);
  w = clamp(w, 0, 100) / 100;
  b = clamp(b, 0, 100) / 100;
  alpha = alpha !== undefined ? clamp(alpha, 0, 100) : undefined;

  const mix = 1 - w - b;

  if (mix <= 0) {
    const gray = w / (w + b);
    const value = Math.round(clamp(gray * 255, 0, 255));
    return alpha !== undefined ? [value, value, value, alpha] : [value, value, value];
  }

  const hue = ((h % 360) + 360) % 360;
  const sector = Math.floor(hue / 60);
  const fraction = hue / 60 - sector;

  const base = (() => {
    switch (sector) {
      case 0:
        return [1, fraction, 0];
      case 1:
        return [1 - fraction, 1, 0];
      case 2:
        return [0, 1, fraction];
      case 3:
        return [0, 1 - fraction, 1];
      case 4:
        return [fraction, 0, 1];
      default:
        return [1, 0, 1 - fraction];
    }
  })();

  const rgb = base.map((ch) => Math.round(clamp((ch * mix + w) * 255, 0, 255)));
  return alpha !== undefined ? [...rgb, alpha] : rgb;
};

// Convert HWB to HEX
export const hwb2hex = (hwb = []) => {
  if (!Array.isArray(hwb) || ![3, 4].includes(hwb.length)) return;
  return rgb2hex(hwb2rgb(hwb));
};

// Convert HWB to HSL
export const hwb2hsl = (hwb = []) => {
  if (!Array.isArray(hwb) || ![3, 4].includes(hwb.length)) return;
  return rgb2hsl(hwb2rgb(hwb));
};

// Convert HWB to Oklab
export const hwb2oklab = (hwb = []) => {
  if (!Array.isArray(hwb) || ![3, 4].includes(hwb.length)) return;
  return rgb2oklab(hwb2rgb(hwb));
};

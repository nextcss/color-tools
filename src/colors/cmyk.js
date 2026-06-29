import { clamp } from '../tools/utils.js';
import { rgb2hex, rgb2hsl, rgb2hwb, rgb2oklab } from './rgb.js';

// Convert CMYK to RGB
export const cmyk2rgb = (cmyk = []) => {
  const len = cmyk.length;
  if (!Array.isArray(cmyk) || (len !== 4 && len !== 5)) return;

  const c = clamp(cmyk[0], 0, 100) / 100;
  const m = clamp(cmyk[1], 0, 100) / 100;
  const y = clamp(cmyk[2], 0, 100) / 100;
  const k = clamp(cmyk[3], 0, 100) / 100;
  const alpha = len === 5 ? clamp(cmyk[4], 0, 100) : undefined;

  const inv = 1 - k;
  const r = (255 * (1 - c) * inv + 0.5) | 0;
  const g = (255 * (1 - m) * inv + 0.5) | 0;
  const b = (255 * (1 - y) * inv + 0.5) | 0;

  return alpha !== undefined ? [r, g, b, alpha] : [r, g, b];
};

// Convert CMYK to HEX
export const cmyk2hex = (cmyk = []) => {
  if (!Array.isArray(cmyk) || (cmyk.length !== 4 && cmyk.length !== 5)) return;
  return rgb2hex(cmyk2rgb(cmyk));
};

// Convert CMYK to HSL
export const cmyk2hsl = (cmyk = []) => {
  if (!Array.isArray(cmyk) || (cmyk.length !== 4 && cmyk.length !== 5)) return;
  return rgb2hsl(cmyk2rgb(cmyk));
};

// Convert CMYK to HWB
export const cmyk2hwb = (cmyk = []) => {
  if (!Array.isArray(cmyk) || (cmyk.length !== 4 && cmyk.length !== 5)) return;
  return rgb2hwb(cmyk2rgb(cmyk));
};

// Convert CMYK to Oklab
export const cmyk2oklab = (cmyk = []) => {
  if (!Array.isArray(cmyk) || (cmyk.length !== 4 && cmyk.length !== 5)) return;
  return rgb2oklab(cmyk2rgb(cmyk));
};

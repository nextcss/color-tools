import { clamp } from '../tools/utils.js';
import { rgb2cmyk, rgb2hex, rgb2hwb, rgb2oklab } from './rgb.js';

// Convert HSL to RGB
export const hsl2rgb = (hsl = []) => {
  const len = hsl.length;
  if (!Array.isArray(hsl) || (len !== 3 && len !== 4)) return;

  const h = clamp(hsl[0], 0, 360);
  const s = clamp(hsl[1], 0, 100);
  const l = clamp(hsl[2], 0, 100) / 100;
  const alpha = len === 4 ? clamp(hsl[3], 0, 100) : undefined;

  const a = (s * Math.min(l, 1 - l)) / 100;
  const h30 = h / 30;

  const f = (n) => {
    const k = (n + h30) % 12;
    const t = k - 3;
    const u = 9 - k;
    const m = t < u ? (t < 1 ? t : 1) : u < 1 ? u : 1;
    return ((l - a * (m > -1 ? m : -1)) * 255 + 0.5) | 0;
  };

  return alpha !== undefined ? [f(0), f(8), f(4), alpha] : [f(0), f(8), f(4)];
};

// Convert HSL to HEX
export const hsl2hex = (hsl = []) => {
  const len = hsl.length;
  if (!Array.isArray(hsl) || (len !== 3 && len !== 4)) return;
  return rgb2hex(hsl2rgb(hsl));
};

// Convert HSL to HWB
export const hsl2hwb = (hsl = []) => {
  const len = hsl.length;
  if (!Array.isArray(hsl) || (len !== 3 && len !== 4)) return;
  return rgb2hwb(hsl2rgb(hsl));
};

// Convert HSL to Oklab
export const hsl2oklab = (hsl = []) => {
  const len = hsl.length;
  if (!Array.isArray(hsl) || (len !== 3 && len !== 4)) return;
  return rgb2oklab(hsl2rgb(hsl));
};

// Convert HSL to CMYK
export const hsl2cmyk = (hsl = []) => {
  const len = hsl.length;
  if (!Array.isArray(hsl) || (len !== 3 && len !== 4)) return;
  return rgb2cmyk(hsl2rgb(hsl));
};

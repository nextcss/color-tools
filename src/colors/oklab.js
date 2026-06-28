import { clamp } from '../tools/utils.js';
import { rgb2hex, rgb2hsl, rgb2hwb } from './rgb.js';

const INV_2_4 = 1 / 2.4;

// Convert Oklab to HSL
export const oklab2rgb = (oklab = []) => {
  const len = oklab.length;
  if (!Array.isArray(oklab) || (len !== 3 && len !== 4)) return;

  const L = oklab[0];
  const a = oklab[1];
  const b_ = oklab[2];
  const alpha = oklab[3] !== undefined ? clamp(oklab[3], 0, 100) : undefined;

  const l_ = L + 0.3963377774 * a + 0.2158037573 * b_;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b_;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b_;

  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;

  const _r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const _g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const _b = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;

  const toSRGB = (x) => {
    if (x <= 0) return 0;
    if (x >= 1) return 255;
    return ((x <= 0.0031308 ? x * 12.92 : 1.055 * x ** INV_2_4 - 0.055) * 255 + 0.5) | 0;
  };

  const r = toSRGB(_r);
  const g = toSRGB(_g);
  const b = toSRGB(_b);

  return alpha !== undefined ? [r, g, b, alpha] : [r, g, b];
};

// Convert Oklab to HEX
export const oklab2hex = (oklab = []) => {
  const len = oklab.length;
  if (!Array.isArray(oklab) || (len !== 3 && len !== 4)) return;
  return rgb2hex(oklab2rgb(oklab));
};

// Convert Oklab to HSL
export const oklab2hsl = (oklab = []) => {
  const len = oklab.length;
  if (!Array.isArray(oklab) || (len !== 3 && len !== 4)) return;
  return rgb2hsl(oklab2rgb(oklab));
};

// Convert Oklab to HWB
export const oklab2hwb = (oklab = []) => {
  const len = oklab.length;
  if (!Array.isArray(oklab) || (len !== 3 && len !== 4)) return;
  return rgb2hwb(oklab2rgb(oklab));
};

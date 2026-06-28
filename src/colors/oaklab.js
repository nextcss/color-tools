import { clamp } from '../tools/utils.js';
import { rgb2hex, rgb2hsl, rgb2hwb } from './rgb.js';

// Convert Oklab to HEX
export const oklab2hex = (oklab = []) => {
  if (!Array.isArray(oklab) || ![3, 4].includes(oklab.length)) return;
  return rgb2hex(oklab2rgb(oklab));
};

// Convert Oklab to HSL
export const oklab2rgb = (oklab = []) => {
  if (!Array.isArray(oklab) || oklab.length < 3) return;

  const [L, a, b_] = oklab;
  const alpha = oklab[3] !== undefined ? clamp(oklab[3], 0, 100) : undefined;

  const l_ = L + 0.3963377774 * a + 0.2158037573 * b_;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b_;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b_;

  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;

  let _r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  let _g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  let _b = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;

  const toSRGB = (x) => {
    x = clamp(x, 0, 1);
    if (x <= 0.0031308) return x * 12.92;
    return 1.055 * x ** (1 / 2.4) - 0.055;
  };

  const [r, g, b] = [Math.round(toSRGB(_r) * 255), Math.round(toSRGB(_g) * 255), Math.round(toSRGB(_b) * 255)];
  return alpha !== undefined ? [r, g, b, alpha] : [r, g, b];
};

// Convert Oklab to HSL
export const oklab2hsl = (oklab = []) => {
  if (!Array.isArray(oklab) || ![3, 4].includes(oklab.length)) return;
  return rgb2hsl(oklab2rgb(oklab));
};

// Convert Oklab to HWB
export const oklab2hwb = (oklab = []) => {
  if (!Array.isArray(oklab) || ![3, 4].includes(oklab.length)) return;
  return rgb2hwb(oklab2rgb(oklab));
};

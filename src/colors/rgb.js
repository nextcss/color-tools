import { clamp } from '../tools/utils.js';

const INV_12_92 = 1 / 12.92;
const INV_1_055 = 1 / 1.055;
const POW_10_3 = 1000;

const HEX_LUT = new Array(256).fill(0).map((_, i) => i.toString(16).padStart(2, '0'));

// Convert RGB to HEX
export const rgb2hex = (rgb = []) => {
  const len = rgb.length;
  if (!Array.isArray(rgb) || (len !== 3 && len !== 4)) return;

  const r = HEX_LUT[clamp(rgb[0], 0, 255) | 0];
  const g = HEX_LUT[clamp(rgb[1], 0, 255) | 0];
  const b = HEX_LUT[clamp(rgb[2], 0, 255) | 0];

  if (len === 3) return '#' + r + g + b;

  const a = HEX_LUT[Math.round((clamp(rgb[3], 0, 100) / 100) * 255)];
  return '#' + r + g + b + a;
};

// Convert RGB to HSL
export const rgb2hsl = (rgb = []) => {
  const len = rgb.length;
  if (!Array.isArray(rgb) || (len !== 3 && len !== 4)) return;

  const r = clamp(rgb[0], 0, 255) / 255;
  const g = clamp(rgb[1], 0, 255) / 255;
  const b = clamp(rgb[2], 0, 255) / 255;
  const alpha = len === 4 ? clamp(rgb[3], 0, 100) : undefined;

  const max = r > g ? (r > b ? r : b) : g > b ? g : b;
  const min = r < g ? (r < b ? r : b) : g < b ? g : b;
  const delta = max - min;

  const _l = (max + min) / 2;
  const _s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * _l - 1));

  let _h = 0;
  if (delta !== 0) {
    if (max === r) _h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
    else if (max === g) _h = ((b - r) / delta + 2) * 60;
    else _h = ((r - g) / delta + 4) * 60;
  }

  const h = (_h + 0.5) | 0;
  const s = (_s * 100 + 0.5) | 0;
  const l = (_l * 100 + 0.5) | 0;

  return alpha !== undefined ? [h, s, l, alpha] : [h, s, l];
};

// Convert RGB to HWB
export const rgb2hwb = (rgb = []) => {
  const len = rgb.length;
  if (!Array.isArray(rgb) || (len !== 3 && len !== 4)) return;

  const r = clamp(rgb[0], 0, 255) / 255;
  const g = clamp(rgb[1], 0, 255) / 255;
  const b = clamp(rgb[2], 0, 255) / 255;
  const alpha = len === 4 ? clamp(rgb[3], 0, 100) : undefined;

  const max = r > g ? (r > b ? r : b) : g > b ? g : b;
  const min = r < g ? (r < b ? r : b) : g < b ? g : b;
  const delta = max - min;

  let _h = 0;
  if (delta !== 0) {
    if (max === r) _h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
    else if (max === g) _h = ((b - r) / delta + 2) * 60;
    else _h = ((r - g) / delta + 4) * 60;
  }

  const h = (_h + 0.5) | 0;
  const w = (min * 100 + 0.5) | 0;
  const bl = ((1 - max) * 100 + 0.5) | 0;

  return alpha !== undefined ? [h, w, bl, alpha] : [h, w, bl];
};

// Convert RGB to Oklab
export const rgb2oklab = (rgb = []) => {
  const len = rgb.length;
  if (!Array.isArray(rgb) || (len !== 3 && len !== 4)) return;

  const alpha = len === 4 ? clamp(rgb[3], 0, 100) : undefined;

  const toLinear = (x) => {
    x = clamp(rgb[x], 0, 255) / 255;
    return x <= 0.04045 ? x * INV_12_92 : ((x + 0.055) * INV_1_055) ** 2.4;
  };

  const r = toLinear(0);
  const g = toLinear(1);
  const b = toLinear(2);

  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;

  const Lr = (L * POW_10_3 + 0.5) | 0;
  const ar = (a * POW_10_3 + 0.5) | 0;
  const br = (b_ * POW_10_3 + 0.5) | 0;

  const result = [Lr / POW_10_3, ar / POW_10_3, br / POW_10_3];
  return alpha !== undefined ? (result.push(alpha), result) : result;
};

import { clamp } from '../tools/utils.js';
import { hex2hsl } from './hex.js';

// Convert RGB to HEX
export const rgb2hex = (rgb = []) => {
  if (!Array.isArray(rgb) || ![3, 4].includes(rgb.length)) return;

  const hex = rgb
    .map((ch, i) => {
      const clamped = i === 3 ? clamp(ch, 0, 100) : clamp(ch, 0, 255);
      const decimal = i === 3 ? Math.round((clamped / 100) * 255) : clamped;
      return decimal.toString(16).padStart(2, '0');
    })
    .join('');

  return '#' + hex;
};

// Convert RGB to HSL
export const rgb2hsl = (rgb = []) => {
  if (!Array.isArray(rgb) || ![3, 4].includes(rgb.length)) return;
  return hex2hsl(rgb2hex(rgb));
};

// Convert RGB to HWB
export const rgb2hwb = (rgb = []) => {
  if (!Array.isArray(rgb) || ![3, 4].includes(rgb.length)) return;

  let [r, g, b] = rgb.slice(0, 3).map((ch) => clamp(ch, 0, 255) / 255);
  const alpha = rgb[3] !== undefined ? clamp(rgb[3], 0, 100) : undefined;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let _h = 0;
  if (delta) {
    switch (max) {
      case r:
        _h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        _h = ((b - r) / delta + 2) * 60;
        break;
      case b:
        _h = ((r - g) / delta + 4) * 60;
        break;
    }
  }

  const h = Math.round(clamp(_h, 0, 360));
  const w = Math.round(clamp(min * 100, 0, 100));
  const bl = Math.round(clamp((1 - max) * 100, 0, 100));

  return alpha !== undefined ? [h, w, bl, alpha] : [h, w, bl];
};

// Convert RGB to Oklab
export const rgb2oklab = (rgb = []) => {
  if (!Array.isArray(rgb) || ![3, 4].includes(rgb.length)) return;

  let [r, g, b] = rgb.slice(0, 3).map((ch) => clamp(ch, 0, 255));
  const alpha = rgb[3] !== undefined ? clamp(rgb[3], 0, 100) : undefined;

  r /= 255;
  g /= 255;
  b /= 255;

  const toLinear = (x) => {
    if (x <= 0.04045) return x / 12.92;
    return ((x + 0.055) / 1.055) ** 2.4;
  };

  r = toLinear(r);
  g = toLinear(g);
  b = toLinear(b);

  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;
  const round = (v, d = 3) => Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
  const Lr = round(L, 3);
  const ar = round(a, 3);
  const br = round(b_, 3);

  return alpha !== undefined ? [Lr, ar, br, alpha] : [Lr, ar, br];
};

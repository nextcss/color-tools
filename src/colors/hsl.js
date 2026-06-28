import { clamp } from '../tools/utils.js';
import { rgb2hex, rgb2hwb, rgb2oklab } from './rgb.js';

// Convert HSL to RGB
export const hsl2rgb = (hsl = []) => {
  if (!Array.isArray(hsl) || ![3, 4].includes(hsl.length)) return;

  let [_h, _s, _l, alpha] = hsl;
  _h = clamp(_h, 0, 360);
  _s = clamp(_s, 0, 100);
  _l = clamp(_l, 0, 100) / 100;
  alpha = alpha !== undefined ? clamp(alpha, 0, 100) : undefined;

  const a = (_s * Math.min(_l, 1 - _l)) / 100;
  const f = (n) => {
    const k = (n + _h / 30) % 12;
    const color = _l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return clamp(Math.round(255 * color), 0, 255);
  };

  const [r, g, b] = [f(0), f(8), f(4)];
  return alpha !== undefined ? [r, g, b, alpha] : [r, g, b];
};

// Convert HSL to HEX
export const hsl2hex = (hsl = []) => {
  if (!Array.isArray(hsl) || ![3, 4].includes(hsl.length)) return;
  return rgb2hex(hsl2rgb(hsl));
};

// Convert HSL to Oklab
export const hsl2oklab = (hsl = []) => {
  if (!Array.isArray(hsl) || ![3, 4].includes(hsl.length)) return;
  return rgb2oklab(hsl2rgb(hsl));
};

// Convert HSL to HWB
export const hsl2hwb = (hsl = []) => {
  if (!Array.isArray(hsl) || ![3, 4].includes(hsl.length)) return;
  return rgb2hwb(hsl2rgb(hsl));
};

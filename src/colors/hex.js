import { rgb2hsl, rgb2hwb, rgb2oklab } from './rgb.js';

const hexRegex = /^#?([0-9a-f]{3,8})$/i;

// Convert HEX to RGB
export const hex2rgb = (hex = '') => {
  if (!hex || typeof hex !== 'string') return;

  const matches = hex.match(hexRegex);
  if (!matches) return;

  const str = matches[1];
  const len = str.length;
  if (len === 5 || len === 7) return;

  const isShort = len < 5;
  const step = isShort ? 1 : 2;
  const alphaIdx = isShort ? 3 : 6;
  const rgb = new Array((len / step) | 0);

  for (let i = 0, j = 0; i < len; i += step, j++) {
    const a = str.charCodeAt(i);
    const b = str.charCodeAt(i + step - 1);
    const hi = a < 58 ? a - 48 : (a | 32) - 87;
    const lo = b < 58 ? b - 48 : (b | 32) - 87;
    const val = isShort ? hi * 17 : (hi << 4) | lo;
    rgb[j] = i === alphaIdx ? Math.round((val / 255) * 100) : val;
  }

  return rgb;
};

// Convert HEX to HSL
export const hex2hsl = (hex = '') => {
  if (!hex || typeof hex !== 'string') return;
  return rgb2hsl(hex2rgb(hex));
};

// Convert HEX to HWB
export const hex2hwb = (hex = '') => {
  if (!hex || typeof hex !== 'string') return;
  return rgb2hwb(hex2rgb(hex));
};

// Convert HEX to Oklab
export const hex2oklab = (hex = '') => {
  if (!hex || typeof hex !== 'string') return;
  return rgb2oklab(hex2rgb(hex));
};

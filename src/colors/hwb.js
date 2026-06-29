import { clamp } from '../tools/utils.js';
import { rgb2hex, rgb2hsl, rgb2oklab } from './rgb.js';

// Convert HWB to RGB
export const hwb2rgb = (hwb = []) => {
  const len = hwb.length;
  if (!Array.isArray(hwb) || (len !== 3 && len !== 4)) return;

  const h = clamp(hwb[0], 0, 360);
  let w = clamp(hwb[1], 0, 100) / 100;
  let b = clamp(hwb[2], 0, 100) / 100;
  const alpha = len === 4 ? clamp(hwb[3], 0, 100) : undefined;

  const mix = 1 - w - b;

  if (mix <= 0) {
    const val = ((w / (w + b)) * 255 + 0.5) | 0;
    return alpha !== undefined ? [val, val, val, alpha] : [val, val, val];
  }

  const hue = h % 360;
  const sector = (hue / 60) | 0;
  const fraction = hue / 60 - sector;
  const scale = mix * 255;
  const wOff = w * 255;

  const ch = (v) => (v * scale + wOff + 0.5) | 0;

  let r, g, bl;
  switch (sector) {
    case 0:
      r = ch(1);
      g = ch(fraction);
      bl = ch(0);
      break;
    case 1:
      r = ch(1 - fraction);
      g = ch(1);
      bl = ch(0);
      break;
    case 2:
      r = ch(0);
      g = ch(1);
      bl = ch(fraction);
      break;
    case 3:
      r = ch(0);
      g = ch(1 - fraction);
      bl = ch(1);
      break;
    case 4:
      r = ch(fraction);
      g = ch(0);
      bl = ch(1);
      break;
    default:
      r = ch(1);
      g = ch(0);
      bl = ch(1 - fraction);
      break;
  }

  return alpha !== undefined ? [r, g, bl, alpha] : [r, g, bl];
};

// Convert HWB to HEX
export const hwb2hex = (hwb = []) => {
  const len = hwb.length;
  if (!Array.isArray(hwb) || (len !== 3 && len !== 4)) return;
  return rgb2hex(hwb2rgb(hwb));
};

// Convert HWB to HSL
export const hwb2hsl = (hwb = []) => {
  const len = hwb.length;
  if (!Array.isArray(hwb) || (len !== 3 && len !== 4)) return;
  return rgb2hsl(hwb2rgb(hwb));
};

// Convert HWB to Oklab
export const hwb2oklab = (hwb = []) => {
  const len = hwb.length;
  if (!Array.isArray(hwb) || (len !== 3 && len !== 4)) return;
  return rgb2oklab(hwb2rgb(hwb));
};

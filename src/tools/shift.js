import { hex2hsl, hex2hwb, hex2oklab, hex2rgb } from '../colors/hex.js';
import { hsl2hex } from '../colors/hsl.js';
import { hwb2hex } from '../colors/hwb.js';
import { oklab2hex } from '../colors/oklab.js';
import { rgb2hex } from '../colors/rgb.js';
import { clamp } from './utils.js';

const norm255 = (v = 0) => clamp((v + 0.5) | 0, 0, 255);
const norm100 = (v = 0) => clamp(v, 0, 100);

export const rgbColorShift = (hex = '', percentage = 0) => {
  const rgb = hex2rgb(hex);
  if (!rgb) return;

  const multiplier = percentage / 100;

  if (multiplier > 0) {
    rgb[0] = norm255(rgb[0] + (255 - rgb[0]) * multiplier);
    rgb[1] = norm255(rgb[1] + (255 - rgb[1]) * multiplier);
    rgb[2] = norm255(rgb[2] + (255 - rgb[2]) * multiplier);
  } else {
    const factor = 1 + multiplier;
    rgb[0] = norm255(rgb[0] * factor);
    rgb[1] = norm255(rgb[1] * factor);
    rgb[2] = norm255(rgb[2] * factor);
  }

  return rgb2hex(rgb);
};

export const hslColorShift = (hex = '', percentage = 0) => {
  const hsl = hex2hsl(hex);
  if (!hsl) return;

  const multiplier = percentage / 100;
  const l = hsl[2];

  hsl[2] = multiplier > 0 ? norm100(l + (100 - l) * multiplier) : norm100(l * (1 + multiplier));

  return hsl2hex(hsl);
};

export const hwbColorShift = (hex = '', percentage = 0) => {
  const hwb = hex2hwb(hex);
  if (!hwb) return;

  const multiplier = percentage / 100;

  if (multiplier > 0) {
    hwb[1] = norm100(hwb[1] + (100 - hwb[1]) * multiplier);
    hwb[2] = norm100(Math.min(hwb[2], 100 - hwb[1]));
  } else {
    hwb[2] = norm100(hwb[2] + (100 - hwb[2]) * -multiplier);
    hwb[1] = norm100(Math.min(hwb[1], 100 - hwb[2]));
  }

  return hwb2hex(hwb);
};

export const oklabColorShift = (hex = '', percentage = 0) => {
  const oklab = hex2oklab(hex);
  if (!oklab) return;

  const multiplier = percentage / 100;
  const L = oklab[0];

  oklab[0] = multiplier > 0 ? Math.min(L + (1 - L) * multiplier, 1) : Math.max(L * (1 + multiplier), 0);

  return oklab2hex(oklab);
};

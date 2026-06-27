import { hex2hsl, hsl2hex } from './hex-hsl.js';
import { hex2rgb, rgb2hex } from './hex-rgb.js';
import { oklab2rgb, rgb2oklab } from './oklab-rgb.js';
import { clamp } from './utils.js';

const normalize = (value) => clamp(Math.round(value), 0, 255);

export const rgbColorShift = (hex = '', percentage = 0) => {
  const rgb = hex2rgb(hex);
  const multiplier = percentage / 100;

  rgb?.forEach((ch, key, arr) => {
    if (key >= 3) return;
    arr[key] = multiplier < 0 ? normalize(ch + (255 - ch) * Math.abs(multiplier)) : normalize(ch - ch * multiplier);
  });

  return rgb2hex(rgb);
};

export const hslColorShift = (hex = '', percentage = 0) => {
  const hsl = hex2hsl(hex);
  if (!hsl) return hex;

  const [h, s, l] = hsl;
  const multiplier = percentage / 100;

  const lNew = multiplier > 0 ? clamp(l - l * multiplier, 0, 100) : clamp(l + (100 - l) * -multiplier, 0, 100);

  return hsl2hex([h, s, lNew]);
};

export const oklabColorShift = (hex = '', percentage = 0) => {
  const [r, g, b] = hex2rgb(hex);

  let [L, a, b_] = rgb2oklab([r, g, b]);

  const multiplier = percentage / 100;

  if (multiplier > 0) {
    L = clamp(L - L * multiplier, 0, 1);
  } else {
    L = clamp(L + (1 - L) * -multiplier, 0, 1);
  }

  let [rNew, gNew, bNew] = oklab2rgb([L, a, b_]);

  rNew = Math.round(rNew * 255);
  gNew = Math.round(gNew * 255);
  bNew = Math.round(bNew * 255);

  return rgb2hex([rNew, gNew, bNew]);
};

import { hsl2hex, hsl2hwb, hsl2oklab, hsl2rgb } from '../colors/hsl.js';
import { clamp, random } from './utils.js';

const ds = 70;
const dl = 50;

export const randomHsl = (s = ds, l = dl, a) => {
  const hue = random(0, 360);
  const sat = clamp(s, 0, 100);
  const light = clamp(l, 0, 100);
  return a === undefined ? [hue, sat, light] : [hue, sat, light, clamp(a, 0, 100)];
};

export const randomHex = (s, l, a) => hsl2hex(randomHsl(s, l, a));

export const randomRgb = (s, l, a) => hsl2rgb(randomHsl(s, l, a));

export const randomHwb = (s, l, a) => hsl2hwb(randomHsl(s, l, a));

export const randomOklab = (s, l, a) => hsl2oklab(randomHsl(s, l, a));

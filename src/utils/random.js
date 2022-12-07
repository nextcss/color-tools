import { hex2rgb } from "./hex2rgb.js";
import { hsl2hex } from "./hsl2hex.js";
import { limiter } from "./limiter.js";

const defaultSaturation = 70;
const defaultLightness = 50;

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomHsl = (s = defaultSaturation, l = defaultLightness) => [
  random(0, 360),
  limiter(s),
  limiter(l),
];

export const randomHex = (s = defaultSaturation, l = defaultLightness) =>
  hsl2hex(randomHsl(s, l));

export const randomRgb = (s = defaultSaturation, l = defaultLightness) =>
  hex2rgb(randomHex(s, l));

import { hex2rgb } from "./hex2rgb.js";
import { hsl2hex } from "./hsl2hex.js";
import { limiter } from "./limiter.js";

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomHsl = (s = 70, l = 50) => [
  random(0, 360),
  limiter(s),
  limiter(l),
];

export const randomHex = (s, l) => hsl2hex(randomHsl(s, l));

export const randomRgb = (s, l) => hex2rgb(randomHex(s, l));

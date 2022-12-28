import { hex2rgb } from "./hex2rgb.js";
import { hsl2hex } from "./hsl2hex.js";
import { clamp } from "../utils/clamp.js";
import { random } from "../utils/random.js";

export const randomHsl = (s = 70, l = 50) => [
  random(0, 360),
  clamp(s, 0, 100),
  clamp(l, 0, 100),
];

export const randomHex = (s, l) => hsl2hex(randomHsl(s, l));

export const randomRgb = (s, l) => hex2rgb(randomHex(s, l));

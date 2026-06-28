import { hex2rgb } from '../colors/hex.js';
import { hsl2hex } from '../colors/hsl.js';
import { clamp, random } from './utils.js';

export const randomHex = (s, l) => hsl2hex(randomHsl(s, l));

export const randomRgb = (s, l) => hex2rgb(randomHex(s, l));

export const randomHsl = (s = 70, l = 50) => [random(0, 360), clamp(s, 0, 100), clamp(l, 0, 100)];

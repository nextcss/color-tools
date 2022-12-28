import { hex2rgb } from "./hex2rgb.js";
import { rgb2hex } from "./rgb2hex.js";
import { clamp } from "../utils/clamp.js";

const normalize = (value) => clamp(Math.round(value), 0, 255);

export const colorShift = (hex, percentage = 0) => {
  const rgb = hex2rgb(hex);
  const multiplier = percentage / 100;

  rgb?.forEach((ch, key, arr) => {
    if (key >= 3) return;
    arr[key] =
      multiplier < 0
        ? normalize(ch + (255 - ch) * Math.abs(multiplier))
        : normalize(ch - ch * multiplier);
  });

  return rgb2hex(rgb);
};

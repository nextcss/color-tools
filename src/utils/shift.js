import { hex2rgb } from "./hex2rgb.js";
import { rgb2hex } from "./rgb2hex.js";
import { limiter } from "./limiter.js";

const roundMinMax = (value) => limiter(Math.round(value), 0, 255);

export const colorShift = (hex, percentage = 0) => {
  const rgb = hex2rgb(hex);
  const multiplier = percentage / 100;

  rgb?.forEach((val, key, arr) => {
    if (key >= 3) return false;
    arr[key] =
      multiplier < 0
        ? roundMinMax(val + (255 - val) * Math.abs(multiplier))
        : roundMinMax(val - val * multiplier);
  });

  return rgb2hex(rgb);
};

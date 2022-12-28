import { hex2rgb } from "./hex2rgb.js";

const percentage = (number) => Math.round((number / 255) * 100);

export const brightness = (hex) => {
  const rgb = hex2rgb(hex);

  return rgb
    ? percentage(0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2])
    : undefined;
};

import { clamp } from "../utils/clamp.js";
import { hex2rgb } from "./hex2rgb.js";

export const hex2hsl = (hex) => {
  const rgb = hex2rgb(hex);
  if (!rgb || rgb.length < 3) return;

  let [r, g, b] = rgb.map((ch) => ch / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  if (delta) {
    switch (max) {
      case r:
        h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        h = ((b - r) / delta + 2) * 60;
        break;
      case b:
        h = ((r - g) / delta + 4) * 60;
        break;
    }
  }

  return [
    Math.round(clamp(h, 0, 360)),
    Math.round(clamp(s * 100, 0, 100)),
    Math.round(clamp(l * 100, 0, 100)),
  ];
};

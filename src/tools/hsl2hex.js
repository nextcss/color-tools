import { clamp } from "../utils/clamp.js";

export const hsl2hex = (hsl) => {
  if (!Array.isArray(hsl) || hsl.length !== 3) return;

  let [h, s, l] = hsl;
  h = clamp(h, 0, 360);
  s = clamp(s, 0, 100);
  l = clamp(l, 0, 100) / 100;

  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };

  return "#" + f(0) + f(8) + f(4);
};

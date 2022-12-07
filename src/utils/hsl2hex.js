import { limiter } from "./limiter.js";

export const hsl2hex = (hsl) => {
  if (!Array.isArray(hsl) || !hsl.length === 3) return undefined;

  let [h, s, l] = hsl;
  h = limiter(h, 0, 360);
  s = limiter(s);
  l = limiter(l) / 100;

  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return color
      ? Math.round(255 * color)
          .toString(16)
          .padStart(2, "0")
      : "";
  };
  const hex = f(0) + f(8) + f(4);

  return hex ? "#" + hex : undefined;
};

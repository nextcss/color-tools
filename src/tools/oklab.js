import { clamp } from "../utils/clamp.js";

export const rgb2oklab = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;

  const toLinear = (x) => {
    if (x <= 0.04045) return x / 12.92;
    return ((x + 0.055) / 1.055) ** 2.4;
  };

  r = toLinear(r);
  g = toLinear(g);
  b = toLinear(b);

  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;

  return [L, a, b_];
};

export const oklab2rgb = (L, a, b_) => {
  // <-- itt átnevezve
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b_;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b_;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b_;

  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;

  let r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  let g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  let b = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;

  const toSRGB = (x) => {
    x = clamp(x, 0, 1);
    if (x <= 0.0031308) return x * 12.92;
    return 1.055 * x ** (1 / 2.4) - 0.055;
  };

  return [toSRGB(r), toSRGB(g), toSRGB(b)];
};

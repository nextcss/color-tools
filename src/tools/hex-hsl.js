import { hex2rgb } from './hex-rgb.js';
import { clamp } from './utils.js';

export const hex2hsl = (hex = '') => {
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

  return [Math.round(clamp(h, 0, 360)), Math.round(clamp(s * 100, 0, 100)), Math.round(clamp(l * 100, 0, 100))];
};

export const hsl2hex = (hsl = []) => {
  if (!Array.isArray(hsl) || hsl.length !== 3) return;

  let [h, s, l] = hsl;
  h = clamp(h, 0, 360);
  s = clamp(s, 0, 100);
  l = clamp(l, 0, 100) / 100;

  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return clamp(Math.round(255 * color), 0, 255)
      .toString(16)
      .padStart(2, '0');
  };

  return '#' + f(0) + f(8) + f(4);
};

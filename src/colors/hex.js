import { clamp } from '../tools/utils.js';
import { rgb2hwb, rgb2oklab } from './rgb.js';

const regex = {
  hex3d: /^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i,
  hex6d: /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
  hex8d: /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
};

// Convert HEX to RGB
export const hex2rgb = (hex = '') => {
  if (!hex || typeof hex !== 'string') return;

  const matches = hex.match(regex.hex3d) || hex.match(regex.hex6d) || hex.match(regex.hex8d);
  if (!matches) return;

  return matches.slice(1).map((ch, i) => {
    const normalized = ch.length === 1 ? ch + ch : ch;
    const decimal = parseInt(normalized, 16);
    return i === 3 ? Math.round((decimal / 255) * 100) : decimal;
  });
};

// Convert HEX to HSL
export const hex2hsl = (hex = '') => {
  if (!hex || typeof hex !== 'string') return;

  const rgb = hex2rgb(hex);
  if (!rgb || rgb.length < 3) return;

  let [r, g, b] = rgb.slice(0, 3).map((ch) => clamp(ch, 0, 255) / 255);
  const alpha = rgb[3] !== undefined ? clamp(rgb[3], 0, 100) : undefined;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let _h = 0;
  const _l = (max + min) / 2;
  const _s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * _l - 1));

  if (delta) {
    switch (max) {
      case r:
        _h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        _h = ((b - r) / delta + 2) * 60;
        break;
      case b:
        _h = ((r - g) / delta + 4) * 60;
        break;
    }
  }

  const h = Math.round(clamp(_h, 0, 360));
  const s = Math.round(clamp(_s * 100, 0, 100));
  const l = Math.round(clamp(_l * 100, 0, 100));

  return alpha !== undefined ? [h, s, l, alpha] : [h, s, l];
};

// Convert HEX to Oklab
export const hex2oklab = (hex = '') => {
  if (!hex || typeof hex !== 'string') return;
  return rgb2oklab(hex2rgb(hex));
};

// Convert HEX to HWB
export const hex2hwb = (hex = '') => {
  if (!hex || typeof hex !== 'string') return;
  return rgb2hwb(hex2rgb(hex));
};

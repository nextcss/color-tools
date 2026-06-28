import { hsl2hex } from '../colors/hsl.js';

export const colorify = (str = '', s = 50, l = 50, a) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  if (!hash) return;
  const h = (hash < 0 ? -hash : hash) % 360;
  const alpha = a !== undefined ? (a < 0 ? 0 : a > 100 ? 100 : a) : undefined;
  return hsl2hex(alpha !== undefined ? [h, s, l, alpha] : [h, s, l]);
};

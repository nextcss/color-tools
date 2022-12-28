import { hsl2hex } from "./hsl2hex.js";

export const colorify = (str = "", s = 50, l = 50) => {
  let hash = 0;

  str
    .split("")
    .map((char) => (hash = char.charCodeAt() + ((hash << 5) - hash)));

  return hash ? hsl2hex([Math.abs(hash) % 360, s, l]) : undefined;
};

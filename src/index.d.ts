declare module "@nextcss/color-tools" {
  function hex2rgb(hex: string): number[] | undefined;

  function rgb2hex(rgba: number[]): string | undefined;

  function hsl2hex(hsl: number[]): string | undefined;

  function colorShift(hex: string, percentage: number): string | undefined;

  function toneMap(hex: string): Record<number, string> | {};

  function brightness(hex: string): number | undefined;

  function colorify(
    str: string,
    saturation?: number,
    lightness?: number
  ): string | undefined;

  function randomHex(saturation?: number, lightness?: number): string;

  function randomRgb(
    saturation?: number,
    lightness?: number
  ): [number, number, number];

  function randomHsl(
    saturation?: number,
    lightness?: number
  ): [number, number, number];

  export {
    brightness,
    colorShift,
    colorify,
    hex2rgb,
    hsl2hex,
    randomHex,
    randomHsl,
    randomRgb,
    rgb2hex,
    toneMap,
  };
}

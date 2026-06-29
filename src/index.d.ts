/** A HEX or HEXA color value, which can be a string starting with or without '#' or any other string. */
export type HexValue = `#${string}` | string;

/** A color array, which can be an array of three or four numbers. */
export type ColorArray = [number, number, number] | [number, number, number, number] | number[];

/** An RGB or RGBA color value, which can be an array of three or four numbers. */
export type RgbValue = ColorArray;

/** An HSL or HSLA color value, which can be an array of three or four numbers. */
export type HslValue = ColorArray;

/** An HWB or HWBA color value, which can be an array of three or four numbers. */
export type HwbValue = ColorArray;

/** An OKLAB or OKLABA color value, which can be an array of three or four numbers. */
export type OklabValue = ColorArray;

/** A CMYK color value, which can be an array of four or five numbers. */
export type CmykValue = [number, number, number, number] | [number, number, number, number, number] | number[];

/** A map of tone steps (50–950) to HEX color strings. */
export type ToneMap = Record<ToneStep, string> & { [key: string]: string };

/** A tone step value from 50 to 950 in increments of 50. */
export type ToneStep =
  | 50
  | 100
  | 150
  | 200
  | 250
  | 300
  | 350
  | 400
  | 450
  | 500
  | 550
  | 600
  | 650
  | 700
  | 750
  | 800
  | 850
  | 900
  | 950;

/**
 * Convert a HEX color string to an RGB array.
 * @param hex The HEX color string.
 * @returns An array of RGB values or undefined if the input is invalid.
 * @example
 * const rgb = hex2rgb('#ff0000'); // [255, 0, 0]
 * const rgba = hex2rgb('#ff000080'); // [255, 0, 0, 50]
 */
export function hex2rgb(hex: HexValue): RgbValue | undefined;

/**
 * Convert a HEX color string to an HSL array.
 * @param hex The HEX color string.
 * @returns An array of HSL values or undefined if the input is invalid.
 * @example
 * const hsl = hex2hsl('#ff0000'); // [0, 100, 50]
 * const hsla = hex2hsl('#ff000080'); // [0, 100, 50, 50]
 */
export function hex2hsl(hex: HexValue): HslValue | undefined;

/**
 * Convert a HEX color string to an HWB array.
 * @param hex The HEX color string.
 * @returns An array of HWB values or undefined if the input is invalid.
 * @example
 * const hwb = hex2hwb('#ff0000'); // [0, 0, 0]
 * const hwba = hex2hwb('#ff000080'); // [0, 0, 0, 50]
 */
export function hex2hwb(hex: HexValue): HwbValue | undefined;

/**
 * Convert a HEX color string to an OKLAB array.
 * @param hex The HEX color string.
 * @returns An array of OKLAB values or undefined if the input is invalid.
 * @example
 * const oklab = hex2oklab('#ff0000'); // [0.627, 0.224, 0.125]
 * const oklaba = hex2oklab('#ff000080'); // [0.627, 0.224, 0.125, 50]
 */
export function hex2oklab(hex: HexValue): OklabValue | undefined;

/**
 * Convert a HEX color string to a CMYK array.
 * @param hex The HEX color string.
 * @returns An array of CMYK values or undefined if the input is invalid.
 * @example
 * const cmyk = hex2cmyk('#ff0000'); // [0, 100, 100, 0]
 * const cmyka = hex2cmyk('#ff000080'); // [0, 100, 100, 0, 50]
 */
export function hex2cmyk(hex: HexValue): CmykValue | undefined;

/**
 * Convert an RGB array to a HEX color string.
 * @param rgb An array of RGB or RGBA values.
 * @returns A HEX or HEXA color string or undefined if the input is invalid.
 * @example
 * const hex = rgb2hex([255, 0, 0]); // '#ff0000'
 * const hexa = rgb2hex([255, 0, 0, 50]); // '#ff000080'
 */
export function rgb2hex(rgb: RgbValue): HexValue | undefined;

/**
 * Convert an RGB array to an HSL array.
 * @param rgb An array of RGB or RGBA values.
 * @returns An array of HSL or HSLA values or undefined if the input is invalid.
 * @example
 * const hsl = rgb2hsl([255, 0, 0]); // [0, 100, 50]
 * const hsla = rgb2hsl([255, 0, 0, 50]); // [0, 100, 50, 50]
 */
export function rgb2hsl(rgb: RgbValue): HslValue | undefined;

/**
 * Convert an RGB array to an HWB array.
 * @param rgb An array of RGB or RGBA values.
 * @returns An array of HWB or HWBA values or undefined if the input is invalid.
 * @example
 * const hwb = rgb2hwb([255, 0, 0]); // [0, 0, 0]
 * const hwba = rgb2hwb([255, 0, 0, 50]); // [0, 0, 0, 50]
 */
export function rgb2hwb(rgb: RgbValue): HwbValue | undefined;

/**
 * Convert an RGB array to an OKLAB array.
 * @param rgb An array of RGB values.
 * @returns An array of OKLAB values or undefined if the input is invalid.
 * @example
 * const oklab = rgb2oklab([255, 0, 0]); // [0.627, 0.224, 0.125]
 * const oklaba = rgb2oklab([255, 0, 0, 50]); // [0.627, 0.224, 0.125, 50]
 */
export function rgb2oklab(rgb: RgbValue): OklabValue | undefined;

/**
 * Convert an RGB array to a CMYK array.
 * @param rgb An array of RGB values.
 * @returns An array of CMYK values or undefined if the input is invalid.
 * @example
 * const cmyk = rgb2cmyk([255, 0, 0]); // [0, 100, 100, 0]
 * const cmyka = rgb2cmyk([255, 0, 0, 50]); // [0, 100, 100, 0, 50]
 */
export function rgb2cmyk(rgb: RgbValue): CmykValue | undefined;

/**
 * Convert an HSL array to a HEX color string.
 * @param hsl An array of HSL or HSLA values.
 * @returns A HEX or HEXA color string or undefined if the input is invalid.
 * @example
 * const hex = hsl2hex([0, 100, 50]); // '#ff0000'
 * const hexa = hsl2hex([0, 100, 50, 50]); // '#ff000080'
 */
export function hsl2hex(hsl: HslValue): HexValue | undefined;

/**
 * Convert an HSL array to an RGB array.
 * @param hsl An array of HSL or HSLA values.
 * @returns An array of RGB or RGBA values or undefined if the input is invalid.
 * @example
 * const rgb = hsl2rgb([0, 100, 50]); // [255, 0, 0]
 * const rgba = hsl2rgb([0, 100, 50, 50]); // [255, 0, 0, 50]
 */
export function hsl2rgb(hsl: HslValue): RgbValue | undefined;

/**
 * Convert an HSL array to an HWB array.
 * @param hsl An array of HSL or HSLA values.
 * @returns An array of HWB or HWBA values or undefined if the input is invalid.
 * @example
 * const hwb = hsl2hwb([0, 100, 50]); // [0, 0, 0]
 * const hwba = hsl2hwb([0, 100, 50, 50]); // [0, 0, 0, 50]
 */
export function hsl2hwb(hsl: HslValue): HwbValue | undefined;

/**
 * Convert an HSL array to an OKLAB array.
 * @param hsl An array of HSL or HSLA values.
 * @returns An array of OKLAB or OKLAB + Alpha values or undefined if the input is invalid.
 * @example
 * const oklab = hsl2oklab([0, 100, 50]); // [0.627, 0.224, 0.125]
 * const oklaba = hsl2oklab([0, 100, 50, 50]); // [0.627, 0.224, 0.125, 50]
 */
export function hsl2oklab(hsl: HslValue): OklabValue | undefined;

/**
 * Convert an HSL array to a CMYK array.
 * @param hsl An array of HSL or HSLA values.
 * @returns An array of CMYK values or undefined if the input is invalid.
 * @example
 * const cmyk = hsl2cmyk([0, 100, 50]); // [0, 100, 100, 0]
 * const cmyka = hsl2cmyk([0, 100, 50, 50]); // [0, 100, 100, 0, 50]
 */
export function hsl2cmyk(hsl: HslValue): CmykValue | undefined;

/**
 * Convert an HWB array to a HEX color string.
 * @param hwb An array of HWB or HWBA values.
 * @returns A HEX or HEXA color string or undefined if the input is invalid.
 * @example
 * const hex = hwb2hex([0, 0, 50]); // '#ff0000'
 * const hexa = hwb2hex([0, 0, 50, 50]); // '#ff000080'
 */
export function hwb2hex(hwb: HwbValue): HexValue | undefined;

/**
 * Convert an HWB array to an RGB array.
 * @param hwb An array of HWB or HWBA values.
 * @returns An array of RGB or RGBA values or undefined if the input is invalid.
 * @example
 * const rgb = hwb2rgb([0, 0, 50]); // [255, 0, 0]
 * const rgba = hwb2rgb([0, 0, 50, 50]); // [255, 0, 0, 50]
 */
export function hwb2rgb(hwb: HwbValue): RgbValue | undefined;

/**
 * Convert an HWB array to an HSL array.
 * @param hwb An array of HWB or HWBA values.
 * @returns An array of HSL or HSLA values or undefined if the input is invalid.
 * @example
 * const hsl = hwb2hsl([0, 0, 50]); // [0, 100, 50]
 * const hsla = hwb2hsl([0, 0, 50, 50]); // [0, 100, 50, 50]
 */
export function hwb2hsl(hwb: HwbValue): HslValue | undefined;

/**
 * Convert an HWB array to an OKLAB array.
 * @param hwb An array of HWB or HWBA values.
 * @returns An array of OKLAB or OKLABA values or undefined if the input is invalid.
 * @example
 * const oklab = hwb2oklab([0, 0, 50]); // [0.627, 0.224, 0.125]
 * const oklaba = hwb2oklab([0, 0, 50, 50]); // [0.627, 0.224, 0.125, 50]
 */
export function hwb2oklab(hwb: HwbValue): OklabValue | undefined;

/**
 * Convert an HWB array to a CMYK array.
 * @param hwb An array of HWB or HWBA values.
 * @returns An array of CMYK values or undefined if the input is invalid.
 * @example
 * const cmyk = hwb2cmyk([0, 0, 50]); // [0, 100, 100, 0]
 * const cmyka = hwb2cmyk([0, 0, 50, 50]); // [0, 100, 100, 0, 50]
 */
export function hwb2cmyk(hwb: HwbValue): CmykValue | undefined;

/**
 * Convert an OKLAB array to a HEX color string.
 * @param oklab An array of OKLAB or OKLABA values.
 * @returns A HEX or HEXA color string or undefined if the input is invalid.
 * @example
 * const hex = oklab2hex([0.627, 0.224, 0.125]); // '#ff0000'
 * const hexa = oklab2hex([0.627, 0.224, 0.125, 50]); // '#ff000080'
 */
export function oklab2hex(oklab: OklabValue): HexValue | undefined;

/**
 * Convert an OKLAB array to an RGB array.
 * @param oklab An array of OKLAB or OKLABA values.
 * @returns An array of RGB or RGBA values or undefined if the input is invalid.
 * @example
 * const rgb = oklab2rgb([0.627, 0.224, 0.125]); // [255, 0, 0]
 * const rgba = oklab2rgb([0.627, 0.224, 0.125, 50]); // [255, 0, 0, 50]
 */
export function oklab2rgb(oklab: OklabValue): RgbValue | undefined;

/**
 * Convert an OKLAB array to an HSL array.
 * @param oklab An array of OKLAB or OKLABA values.
 * @returns An array of HSL or HSLA values or undefined if the input is invalid.
 * @example
 * const hsl = oklab2hsl([0.627, 0.224, 0.125]); // [0, 100, 50]
 * const hsla = oklab2hsl([0.627, 0.224, 0.125, 50]); // [0, 100, 50, 50]
 */
export function oklab2hsl(oklab: OklabValue): HslValue | undefined;

/**
 * Convert an OKLAB array to an HWB array.
 * @param oklab An array of OKLAB or OKLABA values.
 * @returns An array of HWB or HWBA values or undefined if the input is invalid.
 * @example
 * const hwb = oklab2hwb([0.627, 0.224, 0.125]); // [0, 0, 0]
 * const hwba = oklab2hwb([0.627, 0.224, 0.125, 50]); // [0, 0, 0, 50]
 */
export function oklab2hwb(oklab: OklabValue): HwbValue | undefined;

/**
 * Convert an OKLAB array to a CMYK array.
 * @param oklab An array of OKLAB or OKLABA values.
 * @returns An array of CMYK values or undefined if the input is invalid.
 * @example
 * const cmyk = oklab2cmyk([0.627, 0.224, 0.125]); // [0, 100, 100, 0]
 * const cmyka = oklab2cmyk([0.627, 0.224, 0.125, 50]); // [0, 100, 100, 0, 50]
 */
export function oklab2cmyk(oklab: OklabValue): CmykValue | undefined;

/**
 * Convert a CMYK array to a HEX color string.
 * @param cmyk An array of CMYK values.
 * @returns A HEX or HEXA color string or undefined if the input is invalid.
 * @example
 * const hex = cmyk2hex([0, 100, 100, 0]); // '#ff0000'
 * const hexa = cmyk2hex([0, 100, 100, 0, 50]); // '#ff000080'
 */
export function cmyk2hex(cmyk: CmykValue): HexValue | undefined;

/**
 * Convert a CMYK array to an HSL array.
 * @param cmyk An array of CMYK values.
 * @returns An array of HSL or HSLA values or undefined if the input is invalid.
 * @example
 * const hsl = cmyk2hsl([0, 100, 100, 0]); // [0, 100, 50]
 * const hsla = cmyk2hsl([0, 100, 100, 0, 50]); // [0, 100, 50, 50]
 */
export function cmyk2hsl(cmyk: CmykValue): HslValue | undefined;

/**
 * Convert a CMYK array to an HWB array.
 * @param cmyk An array of CMYK values.
 * @returns An array of HWB or HWBA values or undefined if the input is invalid.
 * @example
 * const hwb = cmyk2hwb([0, 100, 100, 0]); // [0, 0, 0]
 * const hwba = cmyk2hwb([0, 100, 100, 0, 50]); // [0, 0, 0, 50]
 */
export function cmyk2hwb(cmyk: CmykValue): HwbValue | undefined;

/**
 * Convert a CMYK array to an OKLAB array.
 * @param cmyk An array of CMYK values.
 * @returns An array of OKLAB or OKLABA values or undefined if the input is invalid.
 * @example
 * const oklab = cmyk2oklab([0, 100, 100, 0]); // [0.627, 0.224, 0.125]
 * const oklaba = cmyk2oklab([0, 100, 100, 0, 50]); // [0.627, 0.224, 0.125, 50]
 */
export function cmyk2oklab(cmyk: CmykValue): OklabValue | undefined;

/**
 * Convert a CMYK array to an RGB array.
 * @param cmyk An array of CMYK values.
 * @returns An array of RGB or RGBA values or undefined if the input is invalid.
 * @example
 * const rgb = cmyk2rgb([0, 100, 100, 0]); // [255, 0, 0]
 * const rgba = cmyk2rgb([0, 100, 100, 0, 50]); // [255, 0, 0, 50]
 */
export function cmyk2rgb(cmyk: CmykValue): RgbValue | undefined;

/**
 * Generate a random HEX color string.
 * @param saturation The saturation value (0-100).
 * @param lightness The lightness value (0-100).
 * @param alpha The alpha value (0-100).
 * @returns A random HEX color string or undefined if the input is invalid.
 * @example
 * const hex = randomHex(70, 50); // '#aabbcc'
 * const hexa = randomHex(70, 50, 50); // '#aabbcc80'
 */
export function randomHex(saturation?: number, lightness?: number, alpha?: number): HexValue | undefined;

/**
 * Generate a random RGB array.
 * @param saturation The saturation value (0-100).
 * @param lightness The lightness value (0-100).
 * @param alpha The alpha value (0-100).
 * @returns A random RGB array or undefined if the input is invalid.
 * @example
 * const rgb = randomRgb(70, 50); // [170, 187, 204]
 * const rgba = randomRgb(70, 50, 50); // [170, 187, 204, 50]
 */
export function randomRgb(saturation?: number, lightness?: number, alpha?: number): RgbValue | undefined;

/**
 * Generate a random HSL array.
 * @param saturation The saturation value (0-100).
 * @param lightness The lightness value (0-100).
 * @param alpha The alpha value (0-100).
 * @returns A random HSL array or undefined if the input is invalid.
 * @example
 * const hsl = randomHsl(70, 50); // [0, 100, 50]
 * const hsla = randomHsl(70, 50, 50); // [0, 100, 50, 50]
 */
export function randomHsl(saturation?: number, lightness?: number, alpha?: number): HslValue | undefined;

/**
 * Generate a random HWB array.
 * @param saturation The saturation value (0-100).
 * @param lightness The lightness value (0-100).
 * @param alpha The alpha value (0-100).
 * @returns A random HWB array or undefined if the input is invalid.
 * @example
 * const hwb = randomHwb(70, 50); // [0, 100, 50]
 * const hwba = randomHwb(70, 50, 50); // [0, 100, 50, 50]
 */
export function randomHwb(saturation?: number, lightness?: number, alpha?: number): HwbValue | undefined;

/**
 * Generate a random OKLAB array.
 * @param saturation The saturation value (0-100).
 * @param lightness The lightness value (0-100).
 * @param alpha The alpha value (0-100).
 * @returns A random OKLAB array or undefined if the input is invalid.
 * @example
 * const oklab = randomOklab(70, 50); // [0.627, 0.224, 0.125]
 * const oklaba = randomOklab(70, 50, 50); // [0.627, 0.224, 0.125, 50]
 */
export function randomOklab(saturation?: number, lightness?: number, alpha?: number): OklabValue | undefined;

/**
 * Generate a random CMYK array.
 * @param saturation The saturation value (0-100).
 * @param lightness The lightness value (0-100).
 * @param alpha The alpha value (0-100).
 * @returns A random CMYK array or undefined if the input is invalid.
 * @example
 * const cmyk = randomCmyk(70, 50); // [0, 100, 100, 0]
 * const cmyka = randomCmyk(70, 50, 50); // [0, 100, 100, 0, 50]
 */
export function randomCmyk(saturation?: number, lightness?: number, alpha?: number): CmykValue | undefined;

/**
 * Generate a HEX color based on a string input.
 * @param str The input string.
 * @param saturation The saturation value (0-100).
 * @param lightness The lightness value (0-100).
 * @param alpha The alpha value (0-100).
 * @returns A HEX color string or undefined if the input is invalid.
 * @example
 * const hex = colorify('example', 70, 50); // '#aabbcc'
 * const hexa = colorify('example', 70, 50, 50); // '#aabbcc80'
 */
export function colorify(str: string, saturation?: number, lightness?: number, alpha?: number): HexValue | undefined;

/**
 * Calculate the brightness of a HEX color string.
 * @param hex The HEX color string, alpha channel won't affect the result.
 * @returns The brightness value (0-100) or undefined if the input is invalid.
 * @example
 * const brightnessValue = brightness('#aabbcc'); // 70
 */
export function brightness(hex: string): number | undefined;

/**
 * Shift the brightness of a HEX color string by a percentage.
 * @param hex The HEX color string.
 * @param percentage The percentage to shift the brightness by. Positive values lighten, negative values darken.
 * @returns A HEX color string with the adjusted brightness or undefined if the input is invalid.
 * @example
 * const brighter = rgbColorShift('#aabbcc', 20);  // '#cceeff'
 * const darker   = rgbColorShift('#aabbcc', -20); // '#8899aa'
 */
export function rgbColorShift(hex: string, percentage: number): HexValue | undefined;

/** Shift the brightness of a HEX color string by a percentage using HSL color space.
 * @param hex The HEX color string.
 * @param percentage The percentage to shift the brightness by. Positive values lighten, negative values darken.
 * @returns A HEX color string with the adjusted brightness or undefined if the input is invalid.
 * @example
 * const brighter = hslColorShift('#aabbcc', 20);  // '#cceeff'
 * const darker   = hslColorShift('#aabbcc', -20); // '#8899aa'
 */
export function hslColorShift(hex: string, percentage: number): HexValue | undefined;

/** Shift the brightness of a HEX color string by a percentage using HWB color space.
 * @param hex The HEX color string.
 * @param percentage The percentage to shift the brightness by. Positive values lighten, negative values darken.
 * @returns A HEX color string with the adjusted brightness or undefined if the input is invalid.
 * @example
 * const brighter = hwbColorShift('#aabbcc', 20);  // '#cceeff'
 * const darker   = hwbColorShift('#aabbcc', -20); // '#8899aa'
 */
export function hwbColorShift(hex: string, percentage: number): HexValue | undefined;

/** Shift the brightness of a HEX color string by a percentage using OKLAB color space.
 * @param hex The HEX color string.
 * @param percentage The percentage to shift the brightness by. Positive values lighten, negative values darken.
 * @returns A HEX color string with the adjusted brightness or undefined if the input is invalid.
 * @example
 * const brighter = oklabColorShift('#aabbcc', 20);  // '#cceeff'
 * const darker   = oklabColorShift('#aabbcc', -20); // '#8899aa'
 */
export function oklabColorShift(hex: string, percentage: number): HexValue | undefined;

/**
 * Generate a tone map for a given HEX color string.
 *
 * @param hex - The HEX color string (e.g. `'#f0b100'`).
 * @param mode - The color space used for lightness shifting:
 * - `'rgb'` — (default) fastest, slight hue drift on saturated colors
 * - `'hsl'` — hue-preserving, can over-saturate at mid-tones
 * - `'hwb'` — gentler shifts, paint-mixing model
 * - `'oklab'` — perceptually uniform, most accurate for mixed hues
 * @param customTones - Optional overrides for individual tone steps.
 * Keys can be standard tone values (`50`–`950`), or any custom number or string.
 * Values are lightness offsets relative to the base color (`0` = no change,
 * positive = lighter, negative = darker). Unspecified standard steps use the default linear scale.
 * @returns An object with tone keys mapped to HEX strings,
 * or `undefined` if the input hex is invalid.
 *
 * @example
 * // Default linear scale
 * const tones = toneMap('#f0b100');
 * tones[500]; // '#f0b100' — base color
 * tones[100]; // lighter variant
 * tones[900]; // darker variant
 *
 * @example
 * // Custom scale with specific, non-linear, and arbitrary keys
 * const tones = toneMap('#f0b100', 'rgb', {
 * 300: 40,
 * 500: 0,
 * 700: -38,         // smaller step than default -40
 * 900: -68,         // compressed dark range
 * 0: 100,           // custom number key
 * brandLight: 85,   // custom string key
 * });
 */
export function toneMap(
  hex: string,
  mode?: 'rgb' | 'hsl' | 'hwb' | 'oklab',
  customTones?: Partial<Record<ToneStep | (number & {}) | (string & {}), number>>,
): ToneMap | undefined;

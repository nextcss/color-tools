[![GitHub License](https://img.shields.io/github/license/nextcss/color-tools?style=flat)](https://github.com/nextcss/color-tools/blob/main/LICENSE) [![npm](https://img.shields.io/npm/v/@nextcss/color-tools?style=flat&color=red)](https://www.npmjs.com/package/@nextcss/color-tools) [![GitHub Repo stars](https://img.shields.io/github/stars/nextcss/color-tools?color=DAAA3F)](https://github.com/nextcss/color-tools/stargazers) [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/nextcss/color-tools/main.yml?branch=main)](https://github.com/nextcss/color-tools/actions/workflows/main.yml) [![Codecov](https://img.shields.io/codecov/c/github/nextcss/color-tools?style=flat)](https://app.codecov.io/github/nextcss/color-tools) [![Sponsor](https://img.shields.io/static/v1?label=sponsor&message=❤&color=ff69b4)](https://github.com/sponsors/toviszsolt)

# Color Tools

Brutally performance optimized useful tools for working with colors. This package is a module of [the nextcss project](https://github.com/nextcss). It provides a comprehensive set of color conversion and manipulation utilities for both browser and Node.js environments with full TypeScript support.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Compatibility](#compatibility)
- [Benchmarks](#benchmarks)
- [Conversion Functions](#conversion-functions)
  - [HEX Conversions](#hex-conversions)
  - [RGB Conversions](#rgb-conversions)
  - [HSL Conversions](#hsl-conversions)
  - [HWB Conversions](#hwb-conversions)
  - [OKLab Conversions](#oklab-conversions)
- [Useful Tools](#useful-tools)
  - [Color Shift](#color-shift)
  - [Tone Map](#tone-map)
  - [Brightness](#brightness)
  - [Colorify](#colorify)
  - [Random Colors](#random-colors)
- [Guidelines](#guidelines)
- [License](#license)

## Installation

```bash
yarn add -D @nextcss/color-tools
```

```bash
npm i -D @nextcss/color-tools
```

## Quick Start

```js
import { hsl2hex, hslColorShift, toneMap, brightness } from '@nextcss/color-tools';

// Convert HSL to HEX
const hex = hsl2hex([207, 90, 54]);

// Lighten a color by 20%
const lightened = hslColorShift(hex, 20);

// Generate a full tone scale from the lightened color
const scale = toneMap(lightened);

// Check perceived brightness for contrast decisions
const brightnessValue = brightness(lightened);
```

## Compatibility

This package works in both **browser** and **Node.js** environments. It includes ESM and CommonJS builds, so both `import` and `require` statements work everywhere. Full TypeScript support is included.

## Benchmarks

Environment: Benchmarks were run on an Intel Core i5-12600K, Node.js v22.16.0, using Benny in a single-threaded environment. Results are measured in operations per second (ops/s) - higher is better.

### Baseline: nextcss vs. colord (ops/s)

| Operation     | colord    | nextcss    | Δ      |
| ------------- | --------- | ---------- | ------ |
| **HEX → RGB** | 5,899,814 | 16,842,215 | +185%  |
| **HEX → HSL** | 5,819,305 | 13,408,262 | +130%  |
| **RGB → HEX** | 2,938,363 | 62,153,898 | +2016% |
| **RGB → HSL** | 3,489,380 | 57,524,837 | +1549% |

> **Note:** colord is used as a baseline reference only — it uses a chainable wrapper architecture with additional overhead, so numbers are not a direct apples-to-apples comparison, but give a familiar point of reference.

### Internal conversion throughput (ops/s)

| From \\ To | HEX   | RGB   | HSL   | HWB   | OKLAB |
| ---------- | ----- | ----- | ----- | ----- | ----- |
| **HEX**    | —     | 17.1M | 13.4M | 13.2M | 3.8M  |
| **RGB**    | 58.5M | —     | 56.7M | 56.2M | 5.1M  |
| **HSL**    | 11.0M | 16.2M | —     | 13.5M | 3.9M  |
| **HWB**    | 32.1M | 69.5M | 32.7M | —     | 4.9M  |
| **OKLAB**  | 5.8M  | 7.7M  | 6.2M  | 6.1M  | —     |

> **Note:** OKLAB conversions are intentionally slower — they involve perceptually uniform color math with significantly more CPU-intensive calculations (non-linear gamma expansion, matrix transforms) compared to geometric color space conversions like HSL or HWB.

### Other operations

| Operation               | Fastest | ops/s      | Slowest | ops/s     |
| ----------------------- | ------- | ---------- | ------- | --------- |
| Random color generation | HSL     | 94,094,590 | OKLAB   | 3,559,931 |
| Color shifting          | RGB     | 7,915,344  | OKLAB   | 2,209,869 |
| Tone mapping            | RGB     | 200,815    | OKLAB   | 93,504    |

> **Note:** Tone mapping operates on a fundamentally different scale — it internally uses color shifting, adding cumulative overhead per step — sub-200K ops/s reflects this layered computation rather than a single conversion.

## Conversion Functions

The library provides comprehensive conversion functions between HEX, RGB, HSL, HWB, and OKLab color spaces.

### HEX Conversions

Convert from HEX to other color spaces.

#### Syntax

```ts
hex2rgb(hex: string): [red, green, blue, alpha?] | undefined
hex2hsl(hex: string): [hue, saturation, lightness, alpha?] | undefined
hex2hwb(hex: string): [hue, whiteness, blackness, alpha?] | undefined
hex2oklab(hex: string): [lightness, a, b, alpha?] | undefined
```

**Return values:**

- `hex2rgb`: `[red (0-255), green (0-255), blue (0-255)]` or with `alpha (0-100)`
- `hex2hsl`: `[hue (0-360), saturation (0-100), lightness (0-100)]` or with `alpha (0-100)`
- `hex2hwb`: `[hue (0-360), whiteness (0-100), blackness (0-100)]` or with `alpha (0-100)`
- `hex2oklab`: `[lightness (0-1), a (-0.4 to 0.4), b (-0.4 to 0.4)]` or with `alpha (0-100)`

#### Example

```js
import { hex2rgb, hex2hsl, hex2hwb, hex2oklab } from '@nextcss/color-tools';

hex2rgb('#eee'); // [238, 238, 238]
hex2rgb('#2196f3bf'); // [33, 150, 243, 75]

hex2hsl('#2196f3'); // [207, 90, 54]
hex2hsl('#2196f3bf'); // [207, 90, 54, 75]

hex2hwb('#ff0000'); // [0, 0, 0]
hex2oklab('#269dd9'); // [0.627, 0.224, 0.125]
```

### RGB Conversions

Convert from RGB array to other formats.

**Array format:** `[red, green, blue, alpha?]`

- `red`, `green`, `blue`: 0–255
- `alpha` (optional): 0–100

#### Syntax

```ts
rgb2hex(rgb: [red, green, blue, alpha?]): string | undefined
rgb2hsl(rgb: [red, green, blue, alpha?]): [hue, saturation, lightness, alpha?] | undefined
rgb2hwb(rgb: [red, green, blue, alpha?]): [hue, whiteness, blackness, alpha?] | undefined
rgb2oklab(rgb: [red, green, blue, alpha?]): [lightness, a, b, alpha?] | undefined
```

**Return values:**

- `rgb2hex`: HEX color string (e.g. `'#ff0000'`)
- `rgb2hsl`: `[hue (0-360), saturation (0-100), lightness (0-100)]` or with `alpha (0-100)`
- `rgb2hwb`: `[hue (0-360), whiteness (0-100), blackness (0-100)]` or with `alpha (0-100)`
- `rgb2oklab`: `[lightness (0-1), a (-0.4 to 0.4), b (-0.4 to 0.4)]` or with `alpha (0-100)`

#### Example

```js
import { rgb2hex, rgb2hsl, rgb2hwb, rgb2oklab } from '@nextcss/color-tools';

rgb2hex([238, 238, 238]); // '#eeeeee'
rgb2hex([33, 150, 243, 75]); // '#2196f3bf'

rgb2hsl([255, 0, 0]); // [0, 100, 50]
rgb2hsl([255, 0, 0, 50]); // [0, 100, 50, 50]

rgb2hwb([255, 0, 0]); // [0, 0, 0]
rgb2oklab([255, 0, 0]); // [0.627, 0.224, 0.125]
```

### HSL Conversions

Convert from HSL array to other formats.

**Array format:** `[hue, saturation, lightness, alpha?]`

- `hue`: 0–360 (degrees)
- `saturation`: 0–100 (%)
- `lightness`: 0–100 (%)
- `alpha` (optional): 0–100

#### Syntax

```ts
hsl2hex(hsl: [hue, saturation, lightness, alpha?]): string | undefined
hsl2rgb(hsl: [hue, saturation, lightness, alpha?]): [red, green, blue, alpha?] | undefined
hsl2hwb(hsl: [hue, saturation, lightness, alpha?]): [hue, whiteness, blackness, alpha?] | undefined
hsl2oklab(hsl: [hue, saturation, lightness, alpha?]): [lightness, a, b, alpha?] | undefined
```

**Return values:**

- `hsl2hex`: HEX color string (e.g. `'#ff0000'`)
- `hsl2rgb`: `[red (0-255), green (0-255), blue (0-255)]` or with `alpha (0-100)`
- `hsl2hwb`: `[hue (0-360), whiteness (0-100), blackness (0-100)]` or with `alpha (0-100)`
- `hsl2oklab`: `[lightness (0-1), a (-0.4 to 0.4), b (-0.4 to 0.4)]` or with `alpha (0-100)`

#### Example

```js
import { hsl2hex, hsl2rgb, hsl2hwb, hsl2oklab } from '@nextcss/color-tools';

hsl2hex([0, 100, 50]); // '#ff0000'
hsl2hex([200, 70, 50]); // '#269dd9'

hsl2rgb([0, 100, 50]); // [255, 0, 0]
hsl2rgb([0, 100, 50, 50]); // [255, 0, 0, 50]

hsl2hwb([0, 100, 50]); // [0, 0, 0]
hsl2oklab([0, 100, 50]); // [0.627, 0.224, 0.125]
```

### HWB Conversions

Convert from HWB (Hue, Whiteness, Blackness) array.

**Array format:** `[hue, whiteness, blackness, alpha?]`

- `hue`: 0–360 (degrees)
- `whiteness`: 0–100 (%)
- `blackness`: 0–100 (%)
- `alpha` (optional): 0–100

#### Syntax

```ts
hwb2hex(hwb: [hue, whiteness, blackness, alpha?]): string | undefined
hwb2rgb(hwb: [hue, whiteness, blackness, alpha?]): [red, green, blue, alpha?] | undefined
hwb2hsl(hwb: [hue, whiteness, blackness, alpha?]): [hue, saturation, lightness, alpha?] | undefined
hwb2oklab(hwb: [hue, whiteness, blackness, alpha?]): [lightness, a, b, alpha?] | undefined
```

**Return values:**

- `hwb2hex`: HEX color string (e.g. `'#ff0000'`)
- `hwb2rgb`: `[red (0-255), green (0-255), blue (0-255)]` or with `alpha (0-100)`
- `hwb2hsl`: `[hue (0-360), saturation (0-100), lightness (0-100)]` or with `alpha (0-100)`
- `hwb2oklab`: `[lightness (0-1), a (-0.4 to 0.4), b (-0.4 to 0.4)]` or with `alpha (0-100)`

#### Example

```js
import { hwb2hex, hwb2rgb, hwb2hsl, hwb2oklab } from '@nextcss/color-tools';

hwb2hex([0, 0, 0]); // '#ff0000'
hwb2rgb([0, 0, 0]); // [255, 0, 0]
hwb2hsl([0, 0, 0]); // [0, 100, 50]
hwb2oklab([0, 0, 0]); // [0.627, 0.224, 0.125]
```

### OKLab Conversions

Convert from OKLab (perceptual color space) array.

**Array format:** `[lightness, a, b, alpha?]`

- `lightness`: 0–1 (perceived brightness)
- `a`: −0.4 to 0.4 (green–red axis)
- `b`: −0.4 to 0.4 (blue–yellow axis)
- `alpha` (optional): 0–100

#### Syntax

```ts
oklab2hex(oklab: [lightness, a, b, alpha?]): string | undefined
oklab2rgb(oklab: [lightness, a, b, alpha?]): [red, green, blue, alpha?] | undefined
oklab2hsl(oklab: [lightness, a, b, alpha?]): [hue, saturation, lightness, alpha?] | undefined
oklab2hwb(oklab: [lightness, a, b, alpha?]): [hue, whiteness, blackness, alpha?] | undefined
```

**Return values:**

- `oklab2hex`: HEX color string (e.g. `'#ff0000'`)
- `oklab2rgb`: `[red (0-255), green (0-255), blue (0-255)]` or with `alpha (0-100)`
- `oklab2hsl`: `[hue (0-360), saturation (0-100), lightness (0-100)]` or with `alpha (0-100)`
- `oklab2hwb`: `[hue (0-360), whiteness (0-100), blackness (0-100)]` or with `alpha (0-100)`

#### Example

```js
import { oklab2hex, oklab2rgb, oklab2hsl, oklab2hwb } from '@nextcss/color-tools';

oklab2hex([0.627, 0.224, 0.125]); // '#ff0000'
oklab2rgb([0.627, 0.224, 0.125]); // [255, 0, 0]
oklab2hsl([0.627, 0.224, 0.125]); // [0, 100, 50]
oklab2hwb([0.627, 0.224, 0.125]); // [0, 0, 0]
```

## Useful Tools

Useful tools for color manipulation, including brightness shifting, tone mapping, and random color generation.

### Color Shift

Shift the brightness of a color by a percentage. Positive values lighten, negative values darken. Four implementations available using different color spaces — choose based on perceptual needs.

#### RGB Color Shift

Shift using RGB color space.

##### Syntax

```ts
rgbColorShift(hex: string, percentage: number): string | undefined
```

**Parameters:**

- `hex` (string): Input color in HEX format
- `percentage` (number): Brightness shift in range -100 to 100
  - Positive values: lighten the color
  - Negative values: darken the color

##### Example

```js
import { rgbColorShift } from '@nextcss/color-tools';

rgbColorShift('#eee', 10); // '#f5f5f5' (lighter)
rgbColorShift('#eee', -10); // '#e5e5e5' (darker)
```

#### HSL Color Shift

Shift using HSL color space.

##### Syntax

```ts
hslColorShift(hex: string, percentage: number): string | undefined
```

**Parameters:**

- `hex` (string): Input color in HEX format
- `percentage` (number): Lightness shift in range -100 to 100
  - Positive values: lighten the color
  - Negative values: darken the color

##### Example

```js
import { hslColorShift } from '@nextcss/color-tools';

hslColorShift('#2196f3', 20); // lighter
hslColorShift('#2196f3', -20); // darker
```

#### HWB Color Shift

Shift using HWB color space.

##### Syntax

```ts
hwbColorShift(hex: string, percentage: number): string | undefined
```

**Parameters:**

- `hex` (string): Input color in HEX format
- `percentage` (number): Brightness shift in range -100 to 100
  - Positive values: lighten the color
  - Negative values: darken the color

##### Example

```js
import { hwbColorShift } from '@nextcss/color-tools';

hwbColorShift('#2196f3', 15); // lighter
hwbColorShift('#2196f3', -15); // darker
```

#### OKLab Color Shift

Shift using OKLab (best for perceptually uniform results).

##### Syntax

```ts
oklabColorShift(hex: string, percentage: number): string | undefined
```

**Parameters:**

- `hex` (string): Input color in HEX format
- `percentage` (number): Brightness shift in range -100 to 100
  - Positive values: lighten the color
  - Negative values: darken the color

##### Example

```js
import { oklabColorShift } from '@nextcss/color-tools';

oklabColorShift('#2196f3', 15); // perceptually lighter
oklabColorShift('#2196f3', -15); // perceptually darker
```

### Tone Map

Generate a complete tonal scale from a base color. Returns an object with tone steps (50–950) mapped to HEX color strings.

#### Syntax

```ts
toneMap(
  hex: string,
  mode?: 'rgb' | 'hsl' | 'hwb' | 'oklab',
  customTones?: Partial<Record<50 | 100 | 150 | 200 | 250 | 300 | 350 | 400 | 450 | 500 | 550 | 600 | 650 | 700 | 750 | 800 | 850 | 900 | 950, number>>
): Record<string, string> | undefined
```

**Parameters:**

- `hex` (string): Base color in HEX format
- `mode` (optional): Color space for interpolation — `'rgb'` | `'hsl'` | `'hwb'` | `'oklab'` (default: `'rgb'`)
- `customTones` (optional): Override default tone shift percentages.
  - Object with numeric tone step keys (any number, e.g. 50, 100, 150, ..., 950, or custom values) and color shift percentages (-100 to 100) as values.
  - Each value determines how much to lighten or darken the base color for that tone step.
  - If omitted, uses default tone steps (50, 100, 150, ..., 950) with default percentages: `[90, 85, 74, 62, 50, 40, 30, 20, 10, 0, -11, -23, -34, -45, -56, -68, -79, -90, -97]`

#### Example

```js
import { toneMap } from '@nextcss/color-tools';

// Default tone map (uses default shift percentages)
const tones = toneMap('#2196f3');
console.log(tones);
// {
//   50: '#e3f2fd',   (tone 50, +90% lighter)
//   100: '#bbdefb',  (tone 100, +85% lighter)
//   150: '#90caf9',
//   ...
//   500: '#2196f3',  (tone 500, no shift)
//   ...
//   950: '#0d47a1'   (tone 950, -97% darker)
// }

// Using OKLab for better perceptual uniformity
const tonesOklab = toneMap('#2196f3', 'oklab');

// Custom shift percentages for specific tones
const customTonesMap = toneMap('#2196f3', 'hsl', {
  50: 95, // extra light (instead of default 90)
  100: 80, // slightly less light (instead of default 85)
  500: 0, // exact base color
  950: -95, // extra dark (instead of default -97)
});

// Custom tone steps (not limited to standard 50, 100, 150... 950)
const customStepsMap = toneMap('#2196f3', 'oklab', {
  0: 100, // lightest
  10: 80,
  20: 50,
  30: 0, // base color at step 30
  40: -50,
  50: -100, // darkest
});
```

### Brightness

Calculate the perceived brightness of a color as a percentage (0–100). Useful for determining text contrast or applying adaptive styling.

#### Syntax

```ts
brightness(hex: string): number | undefined
```

#### Example

```js
import { brightness } from '@nextcss/color-tools';

brightness('#000000'); // 0 (darkest)
brightness('#ffffff'); // 100 (lightest)
brightness('#269dd9'); // ~53 (neutral)

// Use for contrast decisions
if (brightness(color) < 50) {
  textColor = '#ffffff'; // light text on dark bg
} else {
  textColor = '#000000'; // dark text on light bg
}
```

### Colorify

Generate a consistent, deterministic color from any string input (e.g., usernames, IDs). Outputs the same color for the same input every time.

#### Syntax

```ts
colorify(
  str: string,
  saturation?: number,
  lightness?: number,
  alpha?: number
): string | undefined
```

Parameters:

- `str` (string): Input string
- `saturation` (optional): 0–100 (default: 50)
- `lightness` (optional): 0–100 (default: 50)
- `alpha` (optional): 0–100 (default: 100)

#### Example

```js
import { colorify } from '@nextcss/color-tools';

colorify('alice@example.com'); // '#40bf79' (consistent)
colorify('bob@example.com'); // '#ff6b9d' (different)

// Adjust saturation for muted tones
colorify('user123', 30); // lower saturation

// Custom lightness and alpha
colorify('dark-mode', 60, 30, 80); // dark with 80% opacity

// Same input always produces same color
colorify('alice') === colorify('alice'); // true
```

### Random Colors

Generate random colors in any format. All random functions accept optional `saturation`, `lightness`, and `alpha` parameters.

#### Random HEX

##### Syntax

```ts
randomHex(saturation?: number, lightness?: number, alpha?: number): string | undefined
```

**Parameters:**

- `saturation` (optional): 0–100 (default: 70)
- `lightness` (optional): 0–100 (default: 50)
- `alpha` (optional): 0–100

##### Example

```js
import { randomHex } from '@nextcss/color-tools';

randomHex(); // '#7de889' (random)
randomHex(50); // with saturation
randomHex(65, 80); // with saturation + lightness
randomHex(65, 80, 50); // with alpha (50%)
```

#### Random RGB

##### Syntax

```ts
randomRgb(saturation?: number, lightness?: number, alpha?: number): [red, green, blue, alpha?] | undefined
```

**Parameters:**

- `saturation` (optional): 0–100 (default: 70)
- `lightness` (optional): 0–100 (default: 50)
- `alpha` (optional): 0–100

##### Example

```js
import { randomRgb } from '@nextcss/color-tools';

randomRgb(); // [232, 193, 125]
randomRgb(50); // with saturation
randomRgb(65, 80); // with saturation + lightness
randomRgb(65, 80, 50); // with alpha (50%)
```

#### Random HSL

##### Syntax

```ts
randomHsl(saturation?: number, lightness?: number, alpha?: number): [hue, saturation, lightness, alpha?] | undefined
```

**Parameters:**

- `saturation` (optional): 0–100 (default: 70)
- `lightness` (optional): 0–100 (default: 50)
- `alpha` (optional): 0–100

##### Example

```js
import { randomHsl } from '@nextcss/color-tools';

randomHsl(); // [294, 70, 50]
randomHsl(50); // with saturation
randomHsl(65, 80); // with saturation + lightness
randomHsl(65, 80, 50); // with alpha (50%)
```

#### Random HWB

##### Syntax

```ts
randomHwb(saturation?: number, lightness?: number, alpha?: number): [hue, whiteness, blackness, alpha?] | undefined
```

**Parameters:**

- `saturation` (optional): 0–100 (default: 70)
- `lightness` (optional): 0–100 (default: 50)
- `alpha` (optional): 0–100

##### Example

```js
import { randomHwb } from '@nextcss/color-tools';

randomHwb(); // [45, 10, 20]
randomHwb(60, 50, 75); // with parameters
```

#### Random OKLab

##### Syntax

```ts
randomOklab(saturation?: number, lightness?: number, alpha?: number): [lightness, a, b, alpha?] | undefined
```

**Parameters:**

- `saturation` (optional): 0–100 (default: 70)
- `lightness` (optional): 0–100 (default: 50)
- `alpha` (optional): 0–100

##### Example

```js
import { randomOklab } from '@nextcss/color-tools';

randomOklab(); // [0.627, 0.224, 0.125]
randomOklab(70, 50, 90); // with parameters
```

## Guidelines

See the project [Code of Conduct](https://github.com/nextcss/.github/blob/main/CODE_OF_CONDUCT.md), [Contributing](https://github.com/nextcss/.github/blob/main/CONTRIBUTING.md), and [Security Policy](https://github.com/nextcss/color-tools/security/policy) for details.

## License

MIT License © 2022 [Zsolt Tövis](https://github.com/toviszsolt)

If you find this project useful, please consider:

- [Sponsoring the author](https://github.com/sponsors/toviszsolt)
- [Giving the repo a star](https://github.com/nextcss/color-tools)
- [Following the nextcss project](https://github.com/nextcss)

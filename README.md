[![GitHub License](https://img.shields.io/github/license/nextcss/color-tools?style=flat-square)](https://github.com/nextcss/color-tools/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/@nextcss/color-tools?style=flat-square)](https://www.npmjs.com/package/@nextcss/color-tools)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/nextcss/color-tools/node.js.yml?branch=main)](https://github.com/nextcss/color-tools/actions/workflows/node.js.yml)
[![Codecov](https://img.shields.io/codecov/c/github/nextcss/color-tools?style=flat-square)](https://app.codecov.io/github/nextcss/color-tools)
[![Sponsor](https://img.shields.io/static/v1?label=sponsor&message=❤&color=ff69b4)](https://github.com/sponsors/toviszsolt)

# Color Tools

Useful tools when working with colors.

- [Introduction](#introduction)
- [Compatibility](#compatibility)
- [Installation](#installation)
- [HEX to RGB](#hex-to-rgb)
- [RGB to HEX](#rgb-to-hex)
- [HSL to HEX](#hsl-to-hex)
- [Color Shift](#color-shift)
- [Tone Map](#tone-map)
- [Brightness](#brightness)
- [Colorify](#colorify)
- [Random HEX](#random-hex)
- [Random RGB](#random-rgb)
- [Random HSL](#random-hsl)
- [TypeScript](#typescript)
- [Guidelines](#guidelines)
- [License](#license)

## Introduction

This package is a module of [the nextcss project](https://github.com/nextcss). This package was created to maintain this module independently of the main package and to be used as a building block in other projects.

## Compatibility

This package includes both `ES modules` and `CommonJS` versions, so you can safely use both `import` and `require` statements in any environment. In the examples I'll use the `import` syntax, so don't be scared, feel free to use the `require` syntax if you like, that will work too.

## Installation

Install the package via `yarn` or `npm`.

```bash
yarn add -D @nextcss/color-tools
```

```bash
npm i -D @nextcss/color-tools
```

## HEX to RGB

Convert hexadecimal color (3, 6 or 8 digits) to RGB color array.

### Syntax

```js
const Array = hex2rgb(hex: String);
```

### Example

```js
import { hex2rgb } from "@nextcss/color-tools";

const rgb1 = hex2rgb("#eee");
console.log(rgb1);
// Output → [ 238, 238, 238 ]

const rgb2 = hex2rgb("#2196f3");
console.log(rgb2);
// Output → [ 33, 150, 243 ]

const rgb3 = hex2rgb("#2196f3bf");
console.log(rgb3);
// Output → [ 33, 150, 243, 75 ]
// the last element is alpha, defined as a percentage

const [red, green, blue, alpha] = hex2rgb("#2196f3bf");
console.log({ red, green, blue, alpha });
// Output → { red: 33, green: 150, blue: 243, alpha: 75 }
// Example RGB string → rgb(33 150 243 / 75%)
// Example RGBA string → rgba(33, 150, 243, .75)
```

## RGB to HEX

Convert RGB color array [`red`, `green`, `blue`, `alpha?`] to hexadecimal color.

### Syntax

```js
const String = rgb2hex(rgb: Array);
```

### Example

```js
import { rgb2hex } from "@nextcss/color-tools";

const hex1 = rgb2hex([238, 238, 238]);
console.log(hex1);
// Output → '#eeeeee'

const hex2 = rgb2hex([238, 238, 238, 75]);
console.log(hex2);
// Output → '#eeeeeebf'
```

## HSL to HEX

Convert HSL color array [`hue`,`saturation`,`lightness`] to hexadecimal color.

### Syntax

```js
const String = hsl2hex(hsl: Array);
```

### Example

```js
import { hsl2hex } from "@nextcss/color-tools";

const hex1 = hsl2hex([200, 70, 50]);
console.log(hex1);
// Output → #269dd9

const hex2 = hsl2hex([36, 90, 40]);
console.log(hex2);
// Output → #c2780a
```

## Color Shift

Shift a hexadecimal color (3, 6 or 8 digits) by the specified percentage. Positive shift results lighter colors, negative shift results darker colors.

### Syntax

```js
const String = colorShift(hex: String, percentage: Number);
```

### Example

```js
import { colorShift } from "@nextcss/color-tools";

const color = colorShift("#eee", 10);
console.log(color);
// Output → #d6d6d6

const color2 = colorShift("#eee", -10);
console.log(color2);
// Output → #f0f0f0
```

## Tone Map

Generate a tone map from a hexadecimal color (3, 6 or 8 digits), between `50` and `950` tones.

### Syntax

```js
const Object = toneMap(hex: String);
```

### Example

```js
import { toneMap } from "@nextcss/color-tools";

const tones = toneMap("#eee");
console.log(tones);
// Output → {
//   50: '#fdfdfd',
//   100: '#fcfcfc',
//   150: '#fbfbfb',
//   200: '#f9f9f9',
//   250: '#f7f7f7',
//   300: '#f5f5f5',
//   350: '#f3f3f3',
//   400: '#f1f1f1',
//   450: '#f0f0f0',
//   500: '#eeeeee',
//   550: '#d6d6d6',
//   600: '#bebebe',
//   650: '#a7a7a7',
//   700: '#8f8f8f',
//   750: '#777777',
//   800: '#5f5f5f',
//   850: '#474747',
//   900: '#303030',
//   950: '#242424',
// }
```

## Brightness

Calculate brightness (percentage) of a hexadecimal color. For example, if the color brightness is `<50`, the color is `dark`, otherwise it is `light`.

### Syntax

```js
const Number = colorShift(hex: String);
```

### Example

```js
import { brightness } from "@nextcss/color-tools";

const level1 = brightness("#000");
console.log(level1);
// Output → 0

const level2 = brightness("#ffffff");
console.log(level2);
// Output → 100

const level3 = brightness("#269dd9");
console.log(level3);
// Output → 53
```

## Colorify

Generate a hexadecimal color from any string (like username). Under the hood, it uses HSL to create the color, so you can set `saturation` (default: `70`) and `lightness` (default: `50`) values as an input.

### Syntax

```js
const String = colorify(str: String, saturation?: Number, lightness?: Number);
```

### Example

```js
import { colorify } from "@nextcss/color-tools";

const hex1 = colorify("John Doe");
console.log(hex1);
// Output → #40bf79

const hex2 = colorify("JD", 60);
console.log(hex2);
// Output → #3394cc

const hex3 = colorify("J", 60, 80);
console.log(hex3);
// Output → #dcebad
```

## Random HEX

Generate a random hexadecimal color. Under the hood, it uses HSL to create the color, so you can set the `saturation` (default: `70`) and `lightness` (default: `50`) values as an input.

### Syntax

```js
const String = randomHex(saturation?: Number, lightness?: Number);
```

### Example

```js
import { randomHex } from "@nextcss/color-tools";

const hex1 = randomHex();
console.log(hex1);
// Output → #7de889

const hex2 = randomHex(50);
console.log(hex2);
// Output → #b38cd9

const hex3 = randomHex(65, 80);
console.log(hex3);
// Output → #abbbed
```

## Random RGB

Generate a random RGB color array. Under the hood, it uses HSL to create the color, so you can set the `saturation` (default: `70`) and `lightness` (default: `50`) values as an input.

### Syntax

```js
const Array = randomRgb(saturation?: Number, lightness?: Number);
```

### Example

```js
import { randomRgb } from "@nextcss/color-tools";

const rgb1 = randomRgb();
console.log(rgb1);
// Output → [ 232, 193, 125 ]

const rgb2 = randomRgb(50);
console.log(rgb2);
// Output → [ 217, 161, 140 ]

const rgb3 = randomRgb(65, 80);
console.log(rgb3);
// Output → [ 206, 171, 237 ]
```

## Random HSL

Generate a random HSL color array. Under the hood, it uses HSL to create the color, so you can set the `saturation` (default: `70`) and `lightness` (default: `50`) values as an input.

### Syntax

```js
const Array = randomHsl(saturation?: Number, lightness?: Number);
```

### Example

```js
import { randomHsl } from "@nextcss/color-tools";

const hsl1 = randomHsl();
console.log(hsl1);
// Output → [ 294, 70, 50 ]

const hsl2 = randomHsl(50);
console.log(hsl2);
// Output → [ 79, 50, 50 ]

const hsl3 = randomHsl(65, 80);
console.log(hsl3);
// Output → [ 274, 65, 80 ]
```

## TypeScript

Since we don't use TypeScript, any issue with TypeScript is your business. For more information, see
the Typescript documentation. If you're having problems with TypeScript, here are some hints that
might get you started:

- `esModuleInterop` option in `compilerOptions`
- `allowJs` option in `compilerOptions`
- `declare module "*"` definition in `declarations.d.ts`

## Guidelines

To learn about the guidelines, please read the [Code of Conduct](https://github.com/nextcss/.github/blob/main/CODE_OF_CONDUCT.md), [Contributing](https://github.com/nextcss/.github/blob/main/CONTRIBUTING.md) and [Security Policy](https://github.com/nextcss/color-tools/security/policy) documents.

## License

MIT License @ 2022 [Zsolt Tövis](https://github.com/toviszsolt)

If you found this project interesting, please consider supporting my open source work by [sponsoring me](https://github.com/sponsors/toviszsolt) / [give the repo a star](https://github.com/nextcss/color-tools) / [follow the nextcss project](https://github.com/nextcss).

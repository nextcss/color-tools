[![GitHub License](https://img.shields.io/github/license/nextcss/color-tools?style=flat-square)](https://github.com/nextcss/color-tools/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/@nextcss/color-tools?style=flat-square)](https://www.npmjs.com/package/@nextcss/color-tools)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/nextcss/color-tools/Test%20build)](https://github.com/nextcss/color-tools/actions/workflows/node.js.yml)
[![Codecov](https://img.shields.io/codecov/c/github/nextcss/color-tools?style=flat-square)](https://app.codecov.io/github/nextcss/color-tools)
[![Sponsor](https://img.shields.io/static/v1?label=sponsor&message=❤&color=ff69b4)](https://github.com/sponsors/toviszsolt)

# Color Tools

Useful tools when working with colors.

## Installation

Install the package via yarn or npm.

```bash
yarn add -D @nextcss/color-tools
```

```bash
npm i -D @nextcss/color-tools
```

## HEX to RGB

Convert hexadecimal color (3 or 6 digits) to rgb color array.

```js
import { hex2rgb } from '@nextcss/color-tools';

const rgb = hex2rgb('#2196f3');
console.log(rgb);
// Output -> [ 33, 150, 243 ]

const rgb2 = hex2rgb('#eee');
console.log(rgb2);
// Output -> [ 238, 238, 238 ]

const [red, green, blue] = hex2rgb('#2196f3');
console.log({ red, green, blue });
// Output -> { red: 33, green: 150, blue: 243 }
```

## RGB to HEX

Convert rgb color array to hexadecimal color.

```js
import { rgb2hex } from '@nextcss/color-tools';

const hex = rgb2hex([238, 238, 238]);
console.log(hex);
// Output -> '#eeeeee'
```

## Color Shift

Shift a hexadecimal color (3 or 6 digits) by the specified percentage.

```js
import { colorShift } from '@nextcss/color-tools';

const color = colorShift('#eee', 10);
console.log(color);
// Output -> #d6d6d6

const color2 = colorShift('#eee', -10);
console.log(color2);
// Output -> #f0f0f0
```

## Tone Map

Generate a tone map from a hexadecimal color (3 or 6 digits), between 50 and 950 tones.

```js
import { toneMap } from '@nextcss/color-tools';

const toneMap = toneMap('#eee');
console.log(toneMap);

// Output -> {
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

## TypeScript

Since we don't use TypeScript, any issue with TypeScript is your business. For more information, see
the Typescript documentation. If you're having problems with TypeScript, here are some hints that
might get you started:

- `esModuleInterop` option in `compilerOptions`
- `allowJs` option in `compilerOptions`
- `declare module "*"` in `declarations.d.ts`

## Contribution

Before you submit a Pull Request, please let us know what you want, as this package is part of a
larger package.

## License

MIT License

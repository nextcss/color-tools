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

## Convert Hex color to RGB color

Converts any hexadecimal color (3 or 6 digits) to rgba color array.

```js
import tools from '@nextcss/color-tools';

const { hex2rgb } = tools;

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

## Color shift

Shifts a hexadecimal color (3 or 6 digits) by the specified percentage.

```js
import tools from '@nextcss/color-tools';

const { colorShift } = tools;

const color = colorShift('#eee', 10);
console.log(color);
// Output -> #d6d6d6

const color2 = colorShift('#eee', -10);
console.log(color2);
// Output -> #f0f0f0
```

## Tone map generator

Generates a tone map from a hexadecimal color (3 or 6 digits), between 50 and 950 tones.

```js
import tools from '@nextcss/color-tools';

const { tones } = tools;

const toneMap = tones('#eee');
console.log(toneMap);

// Output -> {
//  '50': '#e9f5fe',
//  '100': '#deeffd',
//  '150': '#c5e4fc',
//  '200': '#abd7fa',
//  '250': '#90cbf9',
//  '300': '#7ac0f8',
//  '350': '#64b6f7',
//  '400': '#4dabf5',
//  '450': '#37a1f4',
//  '500': '#2196f3',
//  '550': '#1e87db',
//  '600': '#1a78c2',
//  '650': '#1769aa',
//  '700': '#145a92',
//  '750': '#114b7a',
//  '800': '#0d3c61',
//  '850': '#0a2d49',
//  '900': '#071e31',
//  '950': '#051724'
// }
```

## TypeScript

For more information, see the Typescript page.

```js
// tsconfig.json
{
  "compilerOptions": {
    "allowJs": true
  }
}
```

## Contribution

Before you submit a Pull Request, please let us know what you want, as this package is part of a
larger package.

## License

MIT License

import b from 'benny';
import { colord } from 'colord';
import {
  hex2hsl,
  hex2hwb,
  hex2oklab,
  hex2rgb,
  hsl2hex,
  hsl2hwb,
  hsl2oklab,
  hsl2rgb,
  hslColorShift,
  hwb2hex,
  hwb2hsl,
  hwb2oklab,
  hwb2rgb,
  hwbColorShift,
  oklab2hex,
  oklab2hsl,
  oklab2hwb,
  oklab2rgb,
  oklabColorShift,
  randomHex,
  randomHsl,
  randomHwb,
  randomOklab,
  randomRgb,
  rgb2hex,
  rgb2hsl,
  rgb2hwb,
  rgb2oklab,
  rgbColorShift,
  toneMap,
} from './dist/index.js';

const hex = '#808080cc';
const rgb = [128, 128, 128, 75];
const rgbString = 'rgb(128, 128, 128, 0.75)';
const hsl = [0, 0, 50, 75];
const hwb = [0, 50, 50, 75];
const lab = [0.5, 0, 0, 75];

b.suite(
  'Parse HEX and convert to RGB object/array',

  b.add('colord', () => {
    colord(hex).toRgb();
  }),

  b.add('nextcss', () => {
    hex2rgb(hex);
  }),

  b.cycle(),
  b.complete(),
);

b.suite(
  'Parse HEX and convert to HSL object/array',

  b.add('colord', () => {
    colord(hex).toHsl();
  }),

  b.add('nextcss', () => {
    hex2hsl(hex);
  }),

  b.cycle(),
  b.complete(),
);

b.suite(
  'Parse RGB and convert to HEX string',

  b.add('colord', () => {
    colord(rgbString).toHex();
  }),

  b.add('nextcss', () => {
    rgb2hex(rgb);
  }),

  b.cycle(),
  b.complete(),
);

b.suite(
  'Parse RGB and convert to HSL array',

  b.add('colord', () => {
    colord(rgbString).toHsl();
  }),

  b.add('nextcss', () => {
    rgb2hsl(rgb);
  }),

  b.cycle(),
  b.complete(),
);

b.suite(
  'Benchmark HEX converts',
  b.add('RGB', () => hex2rgb(hex)),
  b.add('HSL', () => hex2hsl(hex)),
  b.add('HWB', () => hex2hwb(hex)),
  b.add('OKLAB', () => hex2oklab(hex)),
  b.cycle(),
  b.complete(),
);

b.suite(
  'Benchmark RGB converts',
  b.add('HEX', () => rgb2hex(rgb)),
  b.add('HSL', () => rgb2hsl(rgb)),
  b.add('HWB', () => rgb2hwb(rgb)),
  b.add('OKLAB', () => rgb2oklab(rgb)),
  b.cycle(),
  b.complete(),
);

b.suite(
  'Benchmark HSL converts',
  b.add('HEX', () => hsl2hex(hsl)),
  b.add('RGB', () => hsl2rgb(hsl)),
  b.add('HWB', () => hsl2hwb(hsl)),
  b.add('OKLAB', () => hsl2oklab(hsl)),
  b.cycle(),
  b.complete(),
);

b.suite(
  'Benchmark HWB converts',
  b.add('HEX', () => hwb2hex(hwb)),
  b.add('RGB', () => hwb2rgb(hwb)),
  b.add('HSL', () => hwb2hsl(hwb)),
  b.add('OKLAB', () => hwb2oklab(hwb)),
  b.cycle(),
  b.complete(),
);

b.suite(
  'Benchmark OKLAB converts',
  b.add('HEX', () => oklab2hex(lab)),
  b.add('RGB', () => oklab2rgb(lab)),
  b.add('HSL', () => oklab2hsl(lab)),
  b.add('HWB', () => oklab2hwb(lab)),
  b.cycle(),
  b.complete(),
);

b.suite(
  'Benchmark Random colors',
  b.add('HEX', () => randomHex()),
  b.add('RGB', () => randomRgb()),
  b.add('HSL', () => randomHsl()),
  b.add('HWB', () => randomHwb()),
  b.add('OKLAB', () => randomOklab()),
  b.cycle(),
  b.complete(),
);

b.suite(
  'Benchmark Shift colors',
  b.add('RGB', () => rgbColorShift(hex, 10)),
  b.add('HSL', () => hslColorShift(hex, 10)),
  b.add('HWB', () => hwbColorShift(hex, 10)),
  b.add('OKLAB', () => oklabColorShift(hex, 10)),
  b.cycle(),
  b.complete(),
);

b.suite(
  'Benchmark Tone Maps',
  b.add('RGB', () => toneMap(hex, 'rgb')),
  b.add('HSL', () => toneMap(hex, 'hsl')),
  b.add('HWB', () => toneMap(hex, 'hwb')),
  b.add('OKLAB', () => toneMap(hex, 'oklab')),
  b.cycle(),
  b.complete(),
);

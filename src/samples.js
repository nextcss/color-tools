import {
  brightness,
  colorify,
  hex2hsl,
  hex2rgb,
  hsl2hex,
  randomHex,
  randomHsl,
  randomRgb,
  rgb2hex,
  toneMap,
} from './index.js';
import { rgbColorShift } from './tools/shift.js';

console.log('hex2rgb', {
  rgb1: hex2rgb('#eee'),
  rgb2: hex2rgb('#2196f3'),
  rgb3: hex2rgb('#2196f3bf'),
});

console.log('rgb2hex', {
  hex1: rgb2hex([238, 238, 238]),
  hex2: rgb2hex([238, 238, 238, 75]),
});

console.log('hsl2hex', {
  hex1: hsl2hex([200, 70, 50]),
  hex2: hsl2hex([36, 90, 40]),
});

console.log('hex2hsl', {
  hsl1: hex2hsl('#eee'),
  hsl2: hex2hsl('#2196f3'),
  hsl3: hex2hsl('#2196f3bf'),
});

console.log('colorShift', {
  hex1: rgbColorShift('#eee', 10),
  hex2: rgbColorShift('#eee', -10),
});

console.log('toneMap', { tones: toneMap('#F44336') });

console.log('brightness', {
  lvl1: brightness('#000'),
  lvl2: brightness('#ffffff'),
  lvl3: brightness('#269dd9'),
});

console.log('colorify', {
  hex1: colorify('John Doe'),
  hex2: colorify('JD', 60),
  hex3: colorify('J', 60, 80),
});

console.log('randomHex', {
  hex1: randomHex(),
  hex2: randomHex(50),
  hex3: randomHex(65, 80),
});

console.log('randomRgb', {
  rgb1: randomRgb(),
  rgb2: randomRgb(50),
  rgb3: randomRgb(65, 80),
});

console.log('randomHsl', {
  hsl1: randomHsl(),
  hsl2: randomHsl(50),
  hsl3: randomHsl(65, 80),
});

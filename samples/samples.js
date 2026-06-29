import {
  brightness,
  colorify,
  hex2hsl,
  hex2rgb,
  hsl2hex,
  hslColorShift,
  hwbColorShift,
  oklabColorShift,
  randomHex,
  randomHsl,
  randomRgb,
  rgb2hex,
  rgbColorShift,
  toneMap,
} from '../src/index.js';

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

const customTonesColor = '#f0b100';
const customTones = {
  100: 80,
  200: 60,
  300: 40,
  400: 20,
  500: 0,
  600: -20,
  700: -40,
  800: -60,
  900: -80,
};

console.log('toneMapCustom', [
  {
    name: 'RGB Palette',
    tones: Object.values(toneMap(customTonesColor, 'rgb', customTones) ?? {}),
  },
  {
    name: 'HSL Palette',
    tones: Object.values(toneMap(customTonesColor, 'hsl', customTones) ?? {}),
  },
  {
    name: 'HWB Palette',
    tones: Object.values(toneMap(customTonesColor, 'hwb', customTones) ?? {}),
  },
  {
    name: 'Oklab Palette',
    tones: Object.values(toneMap(customTonesColor, 'oklab', customTones) ?? {}),
  },
]);

console.log('toneMapCustomKeys', toneMap('#f0b100', 'rgb', { custom1: 20, custom2: -20 }));

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

console.log('Color Shift', {
  hex1: rgbColorShift('#0f64db', 10),
  hex2: rgbColorShift('#0f64db', -10),
  hex3: hslColorShift('#0f64db', 10),
  hex4: hslColorShift('#0f64db', -10),
  hex5: hwbColorShift('#0f64db', 10),
  hex6: hwbColorShift('#0f64db', -10),
  hex7: oklabColorShift('#0f64db', 10),
  hex8: oklabColorShift('#0f64db', -10),
});

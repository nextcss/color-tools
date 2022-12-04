import tools from './index.js';

const { hex2rgb, colorShift, tones } = tools;

const rgb = hex2rgb('#2196f3');
console.log(rgb);

const rgb2 = hex2rgb('#eee');
console.log(rgb2);

const [red, green, blue] = hex2rgb('#2196f3');
console.log({ red, green, blue });

const color = colorShift('#eee', 10);
console.log(color);

const color2 = colorShift('#eee', -10);
console.log(color2);

const toneMap = tones('#2196f3');
console.log(toneMap);

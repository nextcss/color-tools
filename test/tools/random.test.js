import { randomCmyk, randomHex, randomHsl, randomHwb, randomOklab, randomRgb } from '../../src/tools/random.js';

describe('Random', () => {
  test.concurrent('Random colors', async () => {
    expect(randomHex()).toBeDefined();
    expect(randomRgb()).toBeDefined();
    expect(randomHsl()).toBeDefined();
    expect(randomHwb()).toBeDefined();
    expect(randomOklab()).toBeDefined();
    expect(randomCmyk()).toBeDefined();
  });

  test.concurrent('HEX without param', async () => {
    expect(randomHex()).toBeDefined();
  });

  test.concurrent('HEX with saturate', async () => {
    expect(randomHex(60)).toBeDefined();
    expect(randomRgb(60)).toBeDefined();
    expect(randomHsl(60)).toBeDefined();
    expect(randomHwb(60)).toBeDefined();
    expect(randomOklab(60)).toBeDefined();
    expect(randomCmyk(60)).toBeDefined();
  });

  test.concurrent('HEX with saturate and lightness', async () => {
    expect(randomHex(60, 40)).toBeDefined();
  });

  test.concurrent('HEX with saturate, lightness and alpha', async () => {
    expect(randomHex(60, 40, 0.5)).toBeDefined();
  });

  test.concurrent('RGB without param', async () => {
    expect(randomRgb()).toBeDefined();
  });

  test.concurrent('RGB with saturate', async () => {
    expect(randomRgb(60)).toBeDefined();
  });

  test.concurrent('RGB with saturate and lightness', async () => {
    expect(randomRgb(60, 40)).toBeDefined();
  });

  test.concurrent('HSL without param', async () => {
    expect(randomHsl()).toBeDefined();
  });

  test.concurrent('HSL with saturate', async () => {
    expect(randomHsl(60)).toBeDefined();
  });

  test.concurrent('HSL with saturate and lightness', async () => {
    expect(randomHsl(60, 40)).toBeDefined();
  });
});

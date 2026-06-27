import { hex2hsl, hsl2hex } from '../../src/tools/hex-hsl.js';

describe('HEX to HSL', () => {
  test.concurrent('HEX short (#eee)', async () => {
    expect(hex2hsl('#eee')).toEqual([0, 0, 93]);
  });

  test.concurrent('HEX long (#2196f3)', async () => {
    expect(hex2hsl('#2196f3')).toEqual([207, 90, 54]);
  });

  test.concurrent('HEX with alpha (#2196f3bf)', async () => {
    expect(hex2hsl('#2196f3bf')).toEqual([207, 90, 54]);
  });

  test.concurrent('HEX lowercase without hash', async () => {
    expect(hex2hsl('c2780a')).toEqual([36, 90, 40]);
  });

  test.concurrent('Exception: invalid format', async () => {
    expect(hex2hsl('zzzzzz')).toBeUndefined();
  });

  test.concurrent('Exception: empty string', async () => {
    expect(hex2hsl('')).toBeUndefined();
  });

  test.concurrent('Exception: too short', async () => {
    expect(hex2hsl('#f')).toBeUndefined();
  });

  test.concurrent('Exception: invalid array input', async () => {
    expect(hex2hsl([255, 255, 255])).toBeUndefined();
  });

  test.concurrent('Exception: undefined input', async () => {
    expect(hex2hsl()).toBeUndefined();
  });

  test.concurrent('max === g', async () => {
    expect(hex2hsl('#0f0')).toEqual([120, 100, 50]);
  });

  test.concurrent('max === b', async () => {
    expect(hex2hsl('#00f')).toEqual([240, 100, 50]);
  });

  test.concurrent('delta === 0', async () => {
    expect(hex2hsl('#888888')).toEqual([0, 0, 53]);
  });

  test.concurrent('h with (g < b) condition', async () => {
    const result = hex2hsl('#c2192f');
    expect(result[0]).toBeCloseTo(352, 0);
    expect(result[1]).toBeCloseTo(77, 0);
    expect(result[2]).toBeCloseTo(43, 0);
  });

  test.concurrent('Exception: invalid hex returns undefined', async () => {
    expect(hex2hsl('')).toBeUndefined();
    expect(hex2hsl('invalid')).toBeUndefined();
    expect(hex2hsl('#ff')).toBeUndefined();
  });
});

describe('HSL to HEX', () => {
  test.concurrent('3 digits array', async () => {
    expect(hsl2hex([238, 50, 50])).toBe('#4044bf');
  });

  test.concurrent('3 digits array with zero', async () => {
    expect(hsl2hex([238, 5, 5])).toBe('#0c0c0d');
  });

  test.concurrent('Exception: out of hue', async () => {
    expect(hsl2hex([450, 100, 100])).toBe('#ffffff');
  });

  test.concurrent('Exception: out of saturate and lightness', async () => {
    expect(hsl2hex([230, 150, 150])).toBe('#ffffff');
  });

  test.concurrent('Exception: 4 digits array', async () => {
    expect(hsl2hex([238, 238, 238, 238])).toBeUndefined();
  });

  test.concurrent('Exception: 2 digits array', async () => {
    expect(hsl2hex([238, 238])).toBeUndefined();
  });

  test.concurrent('Exception: 1 digits array', async () => {
    expect(hsl2hex([238])).toBeUndefined();
  });

  test.concurrent('Exception: empty array', async () => {
    expect(hsl2hex([])).toBeUndefined();
  });

  test.concurrent('Exception: empty string', async () => {
    expect(hsl2hex('')).toBeUndefined();
  });

  test.concurrent('Exception: empty input', async () => {
    expect(hsl2hex()).toBeUndefined();
  });
});

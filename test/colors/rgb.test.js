import { rgb2hex, rgb2hsl, rgb2hwb, rgb2oklab } from '../../src/colors/rgb.js';

describe('Convert RGB color', () => {
  test.concurrent('RGB without alpha', async () => {
    const rgb = [238, 238, 238];
    expect(rgb2hex(rgb)).toEqual('#eeeeee');
    expect(rgb2hsl(rgb)).toEqual([0, 0, 93]);
    expect(rgb2oklab(rgb)).toEqual([0.949, 0.0, 0.0]);
    expect(rgb2hwb(rgb)).toEqual([0, 93, 7]);
  });

  test.concurrent('RGB with alpha', async () => {
    const rgb = [238, 238, 238, 93];
    expect(rgb2hex(rgb)).toEqual('#eeeeeeed');
    expect(rgb2hsl(rgb)).toEqual([0, 0, 93, 93]);
    expect(rgb2oklab(rgb)).toEqual([0.949, 0.0, 0.0, 93]);
    expect(rgb2hwb(rgb)).toEqual([0, 93, 7, 93]);
  });

  test.concurrent('Exception: too few channels', async () => {
    expect(rgb2hex([238, 238])).toBeUndefined();
    expect(rgb2hsl([238, 238])).toBeUndefined();
    expect(rgb2oklab([238, 238])).toBeUndefined();
    expect(rgb2hwb([238, 238])).toBeUndefined();
  });

  test.concurrent('Exception: too many channels', async () => {
    expect(rgb2hex([238, 238, 238, 50, 1])).toBeUndefined();
    expect(rgb2hsl([238, 238, 238, 50, 1])).toBeUndefined();
    expect(rgb2oklab([238, 238, 238, 50, 1])).toBeUndefined();
    expect(rgb2hwb([238, 238, 238, 50, 1])).toBeUndefined();
  });

  test.concurrent('Exception: empty array', async () => {
    expect(rgb2hex([])).toBeUndefined();
    expect(rgb2hsl([])).toBeUndefined();
    expect(rgb2oklab([])).toBeUndefined();
    expect(rgb2hwb([])).toBeUndefined();
  });

  test.concurrent('Exception: empty input', async () => {
    const rgb = undefined;
    expect(rgb2hex(rgb)).toBeUndefined();
    expect(rgb2hsl(rgb)).toBeUndefined();
    expect(rgb2oklab(rgb)).toBeUndefined();
    expect(rgb2hwb(rgb)).toBeUndefined();
  });

  test.concurrent('Switch: max channel cases (r, g, b)', async () => {
    expect(rgb2hwb([255, 0, 0])).toEqual([0, 0, 0]);
    expect(rgb2hwb([0, 255, 0])).toEqual([120, 0, 0]);
    expect(rgb2hwb([0, 0, 255])).toEqual([240, 0, 0]);
  });

  test.concurrent('toLinear branch for low channel values', async () => {
    const out = rgb2oklab([10, 10, 10]);
    expect(out).toHaveLength(3);
    expect(typeof out[0]).toBe('number');
    expect(typeof out[1]).toBe('number');
    expect(typeof out[2]).toBe('number');
  });

  test.concurrent('r-max with g < b branch (g < b ? 6 : 0)', async () => {
    expect(rgb2hwb([200, 10, 20])).toEqual([357, 4, 22]);
  });

  test('rgb2hsl max = b when b > r > g', () => {
    expect(rgb2hsl([150, 50, 200])).toBeDefined(); // b(200) > r(150) > g(50)
  });

  test('rgb2hwb max = b when b > r > g', () => {
    expect(rgb2hwb([150, 50, 200])).toBeDefined(); // b(200) > r(150) > g(50)
  });
});

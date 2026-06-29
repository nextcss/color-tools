import { cmyk2hex, cmyk2hsl, cmyk2hwb, cmyk2oklab, cmyk2rgb } from '../../src/colors/cmyk.js';

describe('Convert CMYK color', () => {
  test.concurrent('CMYK to RGB/HEX/OKLAB/HWB', async () => {
    const cmyk = [0, 0, 0, 93];
    expect(cmyk2hex(cmyk)).toEqual('#121212');
    expect(cmyk2rgb(cmyk)).toEqual([18, 18, 18]);
    expect(cmyk2hsl(cmyk)).toEqual([0, 0, 7]);
    expect(cmyk2hwb(cmyk)).toEqual([0, 7, 93]);
    expect(cmyk2oklab(cmyk)).toEqual([0.182, 0.0, 0.0]);
  });

  test.concurrent('CMYK with alpha', async () => {
    const cmyk = [0, 0, 0, 93, 93];
    expect(cmyk2hex(cmyk)).toEqual('#121212ed');
    expect(cmyk2rgb(cmyk)).toEqual([18, 18, 18, 93]);
    expect(cmyk2hsl(cmyk)).toEqual([0, 0, 7, 93]);
    expect(cmyk2hwb(cmyk)).toEqual([0, 7, 93, 93]);
    expect(cmyk2oklab(cmyk)).toEqual([0.182, 0.0, 0.0, 93]);
  });

  test.concurrent('Clamping out-of-range values', async () => {
    const cmyk = [100, 400, 200, -10];
    expect(cmyk2hex(cmyk)).toEqual('#000000');
    expect(cmyk2rgb(cmyk)).toEqual([0, 0, 0]);
  });

  test.concurrent('Exception: invalid lengths', async () => {
    expect(cmyk2hex([0, 0])).toBeUndefined();
    expect(cmyk2rgb([0, 0])).toBeUndefined();
    expect(cmyk2hsl([0, 0])).toBeUndefined();
    expect(cmyk2hwb([0, 0])).toBeUndefined();
    expect(cmyk2oklab([0, 0])).toBeUndefined();

    expect(cmyk2hex([0, 0, 0, 50, 1, 0])).toBeUndefined();
    expect(cmyk2rgb([0, 0, 0, 50, 1, 0])).toBeUndefined();
    expect(cmyk2hsl([0, 0, 0, 50, 1, 0])).toBeUndefined();
    expect(cmyk2hwb([0, 0, 0, 50, 1, 0])).toBeUndefined();
    expect(cmyk2oklab([0, 0, 0, 50, 1, 0])).toBeUndefined();
  });

  test.concurrent('Exception: empty input', async () => {
    expect(cmyk2hex()).toBeUndefined();
    expect(cmyk2rgb()).toBeUndefined();
    expect(cmyk2hsl()).toBeUndefined();
    expect(cmyk2hwb()).toBeUndefined();
    expect(cmyk2oklab()).toBeUndefined();
  });
});

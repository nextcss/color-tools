import { hsl2cmyk, hsl2hex, hsl2hwb, hsl2oklab, hsl2rgb } from '../../src/colors/hsl.js';

describe('Convert HSL color', () => {
  test.concurrent('HSL to RGB/HEX/OKLAB/HWB', async () => {
    const hsl = [0, 0, 93];
    expect(hsl2rgb(hsl)).toEqual([237, 237, 237]);
    expect(hsl2hex(hsl)).toEqual('#ededed');
    expect(hsl2hwb(hsl)).toEqual([0, 93, 7]);
    expect(hsl2oklab(hsl)).toEqual([0.946, 0.0, 0.0]);
    expect(hsl2cmyk(hsl)).toEqual([0, 0, 0, 7]);
  });

  test.concurrent('HSL with alpha', async () => {
    const hsl = [0, 0, 93, 93];
    expect(hsl2rgb(hsl)).toEqual([237, 237, 237, 93]);
    expect(hsl2hex(hsl)).toEqual('#edededed');
    expect(hsl2hwb(hsl)).toEqual([0, 93, 7, 93]);
    expect(hsl2oklab(hsl)).toEqual([0.946, 0.0, 0.0, 93]);
    expect(hsl2cmyk(hsl)).toEqual([0, 0, 0, 7, 93]);
  });

  test.concurrent('Clamping out-of-range values', async () => {
    const hsl = [400, 200, -10];
    expect(hsl2hex(hsl)).toEqual('#000000');
    expect(hsl2rgb(hsl)).toEqual([0, 0, 0]);
  });

  test.concurrent('Exception: invalid lengths', async () => {
    expect(hsl2rgb([0, 0])).toBeUndefined();
    expect(hsl2hex([0, 0])).toBeUndefined();
    expect(hsl2hwb([0, 0])).toBeUndefined();
    expect(hsl2oklab([0, 0])).toBeUndefined();
    expect(hsl2cmyk([0, 0])).toBeUndefined();

    expect(hsl2rgb([0, 0, 0, 50, 1])).toBeUndefined();
    expect(hsl2hex([0, 0, 0, 50, 1])).toBeUndefined();
    expect(hsl2hwb([0, 0, 0, 50, 1])).toBeUndefined();
    expect(hsl2oklab([0, 0, 0, 50, 1])).toBeUndefined();
    expect(hsl2cmyk([0, 0, 0, 50, 1])).toBeUndefined();
  });

  test.concurrent('Exception: empty input', async () => {
    expect(hsl2rgb()).toBeUndefined();
    expect(hsl2hex()).toBeUndefined();
    expect(hsl2hwb()).toBeUndefined();
    expect(hsl2oklab()).toBeUndefined();
    expect(hsl2cmyk()).toBeUndefined();
  });
});

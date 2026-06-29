import { hwb2cmyk, hwb2hex, hwb2hsl, hwb2oklab, hwb2rgb } from '../../src/colors/hwb.js';

describe('Convert HWB color', () => {
  test.concurrent('HWB white', async () => {
    expect(hwb2rgb([0, 100, 0])).toEqual([255, 255, 255]);
  });

  test.concurrent('HWB black', async () => {
    expect(hwb2rgb([0, 0, 100])).toEqual([0, 0, 0]);
  });

  test.concurrent('Sector 0 -> red', async () => {
    expect(hwb2hex([0, 0, 0])).toEqual('#ff0000');
    expect(hwb2rgb([0, 0, 0])).toEqual([255, 0, 0]);
    expect(hwb2hsl([0, 0, 0])).toEqual([0, 100, 50]);
  });

  test.concurrent('Sector 1 -> yellow', async () => {
    expect(hwb2rgb([60, 0, 0])).toEqual([255, 255, 0]);
  });

  test.concurrent('Sector 2 -> green', async () => {
    expect(hwb2rgb([120, 0, 0])).toEqual([0, 255, 0]);
  });

  test.concurrent('Sector 3 -> cyan', async () => {
    expect(hwb2rgb([180, 0, 0])).toEqual([0, 255, 255]);
  });

  test.concurrent('Sector 4 -> blue', async () => {
    expect(hwb2rgb([240, 0, 0])).toEqual([0, 0, 255]);
  });

  test.concurrent('Sector 5 -> magenta', async () => {
    expect(hwb2rgb([300, 0, 0])).toEqual([255, 0, 255]);
  });

  test.concurrent('Grayscale when mix <= 0', async () => {
    expect(hwb2rgb([0, 50, 50])).toEqual([128, 128, 128]);
  });

  test.concurrent('Grayscale when mix <= 0 with alpha', async () => {
    // w=60, b=50 -> mix <= 0, gray = 60/(60+50)=0.54545 -> value ~139
    expect(hwb2rgb([0, 60, 50, 25])).toEqual([139, 139, 139, 25]);
  });

  test.concurrent('Hue wrapping and negative hue', async () => {
    // h is clamped to 0..360 before wrapping, so negative becomes 0 (red)
    expect(hwb2rgb([-60, 0, 0])).toEqual([255, 0, 0]);
  });

  test.concurrent('Alpha preserved and hex alpha', async () => {
    expect(hwb2hex([0, 0, 0, 50])).toEqual('#ff000080');
    expect(hwb2rgb([0, 0, 0, 50])).toEqual([255, 0, 0, 50]);
    expect(hwb2hsl([0, 0, 0, 50])).toEqual([0, 100, 50, 50]);
    expect(hwb2oklab([0, 0, 0, 50])).toEqual([0.628, 0.225, 0.126, 50]);
    expect(hwb2cmyk([0, 0, 0, 50])).toEqual([0, 100, 100, 0, 50]);
  });

  test.concurrent('Exception: invalid inputs', async () => {
    expect(hwb2hex([0, 0])).toBeUndefined();
    expect(hwb2rgb([0, 0])).toBeUndefined();
    expect(hwb2hsl([0, 0])).toBeUndefined();
    expect(hwb2oklab([0, 0])).toBeUndefined();
    expect(hwb2cmyk([0, 0])).toBeUndefined();

    expect(hwb2hex()).toBeUndefined();
    expect(hwb2rgb()).toBeUndefined();
    expect(hwb2hsl()).toBeUndefined();
    expect(hwb2oklab()).toBeUndefined();
    expect(hwb2cmyk()).toBeUndefined();
  });
});

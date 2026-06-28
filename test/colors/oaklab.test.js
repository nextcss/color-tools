import { oklab2hex, oklab2hsl, oklab2hwb, oklab2rgb } from '../../src/colors/oaklab.js';

describe('Convert Oklab color', () => {
  test.concurrent('Oklab neutral to RGB/HEX/HSL/HWB', async () => {
    const o = [0.949, 0, 0];
    expect(oklab2rgb(o)).toEqual([238, 238, 238]);
    expect(oklab2hex(o)).toEqual('#eeeeee');
    expect(oklab2hsl(o)).toEqual([0, 0, 93]);
    expect(oklab2hwb(o)).toEqual([0, 93, 7]);
  });

  test.concurrent('Oklab with alpha preserved', async () => {
    const o = [0.949, 0, 0, 93];
    expect(oklab2rgb(o)).toEqual([238, 238, 238, 93]);
    expect(oklab2hex(o)).toEqual('#eeeeeeed');
    expect(oklab2hsl(o)).toEqual([0, 0, 93, 93]);
    expect(oklab2hwb(o)).toEqual([0, 93, 7, 93]);
  });

  test.concurrent('Small values hit toSRGB linear branch', async () => {
    const o = [0, 0, 0];
    expect(oklab2rgb(o)).toEqual([0, 0, 0]);
    expect(oklab2hex(o)).toEqual('#000000');
  });

  test.concurrent('Exception: invalid inputs', async () => {
    expect(oklab2rgb([0, 0])).toBeUndefined();
    expect(oklab2hex([0, 0])).toBeUndefined();
    expect(oklab2hsl([0, 0])).toBeUndefined();
    expect(oklab2hwb([0, 0])).toBeUndefined();

    expect(oklab2rgb()).toBeUndefined();
    expect(oklab2hex()).toBeUndefined();
    expect(oklab2hsl()).toBeUndefined();
    expect(oklab2hwb()).toBeUndefined();
  });
});

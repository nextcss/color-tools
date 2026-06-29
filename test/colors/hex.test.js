import { hex2cmyk, hex2hsl, hex2hwb, hex2oklab, hex2rgb } from '../../src/colors/hex.js';

describe('Convert HEX color', () => {
  test.concurrent('3 digits with hash', async () => {
    const hex = '#eee';
    expect(hex2rgb(hex)).toEqual([238, 238, 238]);
    expect(hex2hsl(hex)).toEqual([0, 0, 93]);
    expect(hex2hwb(hex)).toEqual([0, 93, 7]);
    expect(hex2oklab(hex)).toEqual([0.949, 0.0, 0.0]);
    expect(hex2cmyk(hex)).toEqual([0, 0, 0, 7]);
  });

  test.concurrent('3 digits without hash', async () => {
    const hex = 'eee';
    expect(hex2rgb(hex)).toEqual([238, 238, 238]);
    expect(hex2hsl(hex)).toEqual([0, 0, 93]);
    expect(hex2hwb(hex)).toEqual([0, 93, 7]);
    expect(hex2oklab(hex)).toEqual([0.949, 0.0, 0.0]);
    expect(hex2cmyk(hex)).toEqual([0, 0, 0, 7]);
  });

  test.concurrent('4 digits without hash', async () => {
    const hex = 'eeee';
    expect(hex2rgb(hex)).toEqual([238, 238, 238, 93]);
    expect(hex2hsl(hex)).toEqual([0, 0, 93, 93]);
    expect(hex2hwb(hex)).toEqual([0, 93, 7, 93]);
    expect(hex2oklab(hex)).toEqual([0.949, 0.0, 0.0, 93]);
    expect(hex2cmyk(hex)).toEqual([0, 0, 0, 7, 93]);
  });

  test.concurrent('6 digits with hash', async () => {
    const hex = '#eeeeee';
    expect(hex2rgb(hex)).toEqual([238, 238, 238]);
    expect(hex2hsl(hex)).toEqual([0, 0, 93]);
    expect(hex2hwb(hex)).toEqual([0, 93, 7]);
    expect(hex2oklab(hex)).toEqual([0.949, 0.0, 0.0]);
    expect(hex2cmyk(hex)).toEqual([0, 0, 0, 7]);
  });

  test.concurrent('6 digits without hash', async () => {
    const hex = 'eeeeee';
    expect(hex2rgb(hex)).toEqual([238, 238, 238]);
    expect(hex2hsl(hex)).toEqual([0, 0, 93]);
    expect(hex2hwb(hex)).toEqual([0, 93, 7]);
    expect(hex2oklab(hex)).toEqual([0.949, 0.0, 0.0]);
    expect(hex2cmyk(hex)).toEqual([0, 0, 0, 7]);
  });

  test.concurrent('8 digits with hash', async () => {
    const hex = '#eeeeeeee';
    expect(hex2rgb(hex)).toEqual([238, 238, 238, 93]);
    expect(hex2hsl(hex)).toEqual([0, 0, 93, 93]);
    expect(hex2hwb(hex)).toEqual([0, 93, 7, 93]);
    expect(hex2oklab(hex)).toEqual([0.949, 0.0, 0.0, 93]);
    expect(hex2cmyk(hex)).toEqual([0, 0, 0, 7, 93]);
  });

  test.concurrent('8 digits without hash', async () => {
    const hex = 'eeeeeeee';
    expect(hex2rgb(hex)).toEqual([238, 238, 238, 93]);
    expect(hex2hsl(hex)).toEqual([0, 0, 93, 93]);
    expect(hex2hwb(hex)).toEqual([0, 93, 7, 93]);
    expect(hex2oklab(hex)).toEqual([0.949, 0.0, 0.0, 93]);
    expect(hex2cmyk(hex)).toEqual([0, 0, 0, 7, 93]);
  });

  test.concurrent('Exception: 5 digits', async () => {
    const hex = 'eeeee';
    expect(hex2rgb(hex)).toBeUndefined();
    expect(hex2hsl(hex)).toBeUndefined();
    expect(hex2hwb(hex)).toBeUndefined();
    expect(hex2oklab(hex)).toBeUndefined();
    expect(hex2cmyk(hex)).toBeUndefined();
  });

  test.concurrent('Exception: 7 digits', async () => {
    const hex = 'eeeeeee';
    expect(hex2rgb(hex)).toBeUndefined();
    expect(hex2hsl(hex)).toBeUndefined();
    expect(hex2hwb(hex)).toBeUndefined();
    expect(hex2oklab(hex)).toBeUndefined();
    expect(hex2cmyk(hex)).toBeUndefined();
  });

  test.concurrent('Exception: 9 digits', async () => {
    const hex = 'eeeeeeeee';
    expect(hex2rgb(hex)).toBeUndefined();
    expect(hex2hsl(hex)).toBeUndefined();
    expect(hex2hwb(hex)).toBeUndefined();
    expect(hex2oklab(hex)).toBeUndefined();
    expect(hex2cmyk(hex)).toBeUndefined();
  });

  test.concurrent('Exception: empty string', async () => {
    const hex = '';
    expect(hex2rgb(hex)).toBeUndefined();
    expect(hex2hsl(hex)).toBeUndefined();
    expect(hex2hwb(hex)).toBeUndefined();
    expect(hex2oklab(hex)).toBeUndefined();
    expect(hex2cmyk(hex)).toBeUndefined();
  });

  test.concurrent('Exception: empty input', async () => {
    const hex = undefined;
    expect(hex2rgb(hex)).toBeUndefined();
    expect(hex2hsl(hex)).toBeUndefined();
    expect(hex2hwb(hex)).toBeUndefined();
    expect(hex2oklab(hex)).toBeUndefined();
    expect(hex2cmyk(hex)).toBeUndefined();
  });

  test.concurrent('h with (g < b) condition', async () => {
    const result = hex2hsl('#c2192f');
    expect(result?.[0]).toBeCloseTo(352, 0);
    expect(result?.[1]).toBeCloseTo(77, 0);
    expect(result?.[2]).toBeCloseTo(43, 0);
  });

  test.concurrent('max === g (green dominant)', async () => {
    expect(hex2hsl('#0f0')).toEqual([120, 100, 50]);
  });

  test.concurrent('max === b (blue dominant)', async () => {
    expect(hex2hsl('#00f')).toEqual([240, 100, 50]);
  });

  test.concurrent('max === r (red dominant)', async () => {
    expect(hex2hsl('#f00')).toEqual([0, 100, 50]);
    expect(hex2hsl('ff0000')).toEqual([0, 100, 50]);
  });
});

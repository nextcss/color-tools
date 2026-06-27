import { hex2rgb, rgb2hex } from '../../src/tools/hex-rgb.js';

describe('HEX to RGB', () => {
  test.concurrent('3 digits with hash', async () => {
    expect(hex2rgb('#eee')).toEqual([238, 238, 238]);
  });

  test.concurrent('3 digits without hash', async () => {
    expect(hex2rgb('eee')).toEqual([238, 238, 238]);
  });

  test.concurrent('6 digits with hash', async () => {
    expect(hex2rgb('#eeeeee')).toEqual([238, 238, 238]);
  });

  test.concurrent('6 digits without hash', async () => {
    expect(hex2rgb('eeeeee')).toEqual([238, 238, 238]);
  });

  test.concurrent('8 digits with hash', async () => {
    expect(hex2rgb('#eeeeeeee')).toEqual([238, 238, 238, 93]);
  });

  test.concurrent('8 digits without hash', async () => {
    expect(hex2rgb('eeeeeeee')).toEqual([238, 238, 238, 93]);
  });

  test.concurrent('Exception: 4 digits', async () => {
    expect(hex2rgb('eeee')).toBeUndefined();
  });

  test.concurrent('Exception: 5 digits', async () => {
    expect(hex2rgb('eeeee')).toBeUndefined();
  });

  test.concurrent('Exception: 7 digits', async () => {
    expect(hex2rgb('eeeeeee')).toBeUndefined();
  });

  test.concurrent('Exception: 9 digits', async () => {
    expect(hex2rgb('eeeeeeeee')).toBeUndefined();
  });

  test.concurrent('Exception: empty string', async () => {
    expect(hex2rgb('')).toBeUndefined();
  });

  test.concurrent('Exception: empty input', async () => {
    expect(hex2rgb()).toBeUndefined();
  });
});

describe('RGB to HEX', () => {
  test.concurrent('4 digits array', async () => {
    expect(rgb2hex([238, 238, 238, 75])).toBe('#eeeeeebf');
  });

  test.concurrent('3 digits array', async () => {
    expect(rgb2hex([238, 238, 238])).toBe('#eeeeee');
  });

  test.concurrent('3 digits array with zero padding', async () => {
    expect(rgb2hex([10, 10, 10])).toBe('#0a0a0a');
  });

  test.concurrent('Exception: 2 digits array', async () => {
    expect(rgb2hex([238, 238])).toBeUndefined();
  });

  test.concurrent('Exception: 1 digits array', async () => {
    expect(rgb2hex([238])).toBeUndefined();
  });

  test.concurrent('Exception: empty array', async () => {
    expect(rgb2hex([])).toBeUndefined();
  });

  test.concurrent('Exception: empty string', async () => {
    expect(rgb2hex('')).toBeUndefined();
  });

  test.concurrent('Exception: empty input', async () => {
    expect(rgb2hex()).toBeUndefined();
  });
});

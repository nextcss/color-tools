import { hslColorShift, hwbColorShift, oklabColorShift, rgbColorShift } from '../../src/tools/shift.js';

describe('Color Shift', () => {
  test.concurrent('3 digits with hash', async () => {
    const hex = '#eee';
    const shift = -10;
    expect(rgbColorShift(hex, shift)).toBe('#d6d6d6');
    expect(hslColorShift(hex, shift)).toBe('#d5d5d5');
    expect(hwbColorShift(hex, shift)).toBe('#d9d9d9');
    expect(oklabColorShift(hex, shift)).toBe('#cfcfcf');
  });

  test.concurrent('3 digits with negative shift', async () => {
    expect(rgbColorShift('#eee', 10)).toBe('#f0f0f0');
  });

  test.concurrent('3 digits without hash', async () => {
    expect(rgbColorShift('eee', -10)).toBe('#d6d6d6');
  });

  test.concurrent('6 digits with hash', async () => {
    expect(rgbColorShift('#eeeeee', -10)).toBe('#d6d6d6');
  });

  test.concurrent('6 digits without hash', async () => {
    expect(rgbColorShift('eeeeee', -10)).toBe('#d6d6d6');
  });

  test.concurrent('8 digits with hash', async () => {
    expect(rgbColorShift('#eeeeeef0', -10)).toBe('#d6d6d6f0');
  });

  test.concurrent('8 digits without hash', async () => {
    expect(rgbColorShift('eeeeeef0', -10)).toBe('#d6d6d6f0');
  });

  test.concurrent('Exception: no percentage', async () => {
    expect(rgbColorShift('#eee')).toBe('#eeeeee');
  });

  test.concurrent('Exception: 4 digits', async () => {
    expect(rgbColorShift('#eeee')).toBe('#eeeeeeed');
  });

  test.concurrent('Exception: 5 digits', async () => {
    expect(rgbColorShift('#eeeee')).toBeUndefined();
  });

  test.concurrent('Exception: 7 digits', async () => {
    const hex = '#eeeeeee';
    expect(rgbColorShift(hex)).toBeUndefined();
    expect(hslColorShift(hex)).toBeUndefined();
    expect(hwbColorShift(hex)).toBeUndefined();
    expect(oklabColorShift(hex)).toBeUndefined();
  });

  test.concurrent('Exception: empty string', async () => {
    expect(rgbColorShift('', 10)).toBeUndefined();
  });

  test.concurrent('Exception: empty input', async () => {
    expect(rgbColorShift()).toBeUndefined();
  });

  test.concurrent('Exception: shift out of range', async () => {
    const hex = '#eee';
    const shift = 101;
    expect(rgbColorShift(hex, shift)).toBe('#ffffff');
    expect(hslColorShift(hex, shift)).toBe('#ffffff');
    expect(hwbColorShift(hex, shift)).toBe('#eeeeee');
    expect(oklabColorShift(hex, shift)).toBe('#ffffff');
  });
});

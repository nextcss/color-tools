import { rgbColorShift } from '../../src/tools/shift.js';

describe('Color Shift', () => {
  test.concurrent('3 digits with hash', async () => {
    expect(rgbColorShift('#eee', 10)).toBe('#d6d6d6');
  });

  test.concurrent('3 digits with negative shift', async () => {
    expect(rgbColorShift('#eee', -10)).toBe('#f0f0f0');
  });

  test.concurrent('3 digits without hash', async () => {
    expect(rgbColorShift('eee', 10)).toBe('#d6d6d6');
  });

  test.concurrent('6 digits with hash', async () => {
    expect(rgbColorShift('#eeeeee', 10)).toBe('#d6d6d6');
  });

  test.concurrent('6 digits without hash', async () => {
    expect(rgbColorShift('eeeeee', 10)).toBe('#d6d6d6');
  });

  test.concurrent('8 digits with hash', async () => {
    expect(rgbColorShift('#eeeeeef0', 10)).toBe('#d6d6d6f0');
  });

  test.concurrent('8 digits without hash', async () => {
    expect(rgbColorShift('eeeeeef0', 10)).toBe('#d6d6d6f0');
  });

  test.concurrent('Exception: no percentage', async () => {
    expect(rgbColorShift('#eee')).toBe('#eeeeee');
  });

  test.concurrent('Exception: 4 digits', async () => {
    expect(rgbColorShift('#eeee')).toBeUndefined();
  });

  test.concurrent('Exception: 5 digits', async () => {
    expect(rgbColorShift('#eeeee')).toBeUndefined();
  });

  test.concurrent('Exception: 7 digits', async () => {
    expect(rgbColorShift('#eeeeeee')).toBeUndefined();
  });

  test.concurrent('Exception: empty string', async () => {
    expect(rgbColorShift('', 10)).toBeUndefined();
  });

  test.concurrent('Exception: empty input', async () => {
    expect(rgbColorShift()).toBeUndefined();
  });
});

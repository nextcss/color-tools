import { rgb2hex } from '../src/index.js';

describe('HEX to RGB', () => {
  test.concurrent('3 digits array', async () => {
    expect(rgb2hex([238, 238, 238])).toBe('#eeeeee');
  });

  test.concurrent('2 digits array', async () => {
    expect(rgb2hex([238, 238])).toBeUndefined();
  });

  test.concurrent('1 digits array', async () => {
    expect(rgb2hex([238])).toBeUndefined();
  });

  test.concurrent('Exception: empty string', async () => {
    expect(rgb2hex('')).toBeUndefined();
  });

  test.concurrent('Exception: empty input', async () => {
    expect(rgb2hex()).toBeUndefined();
  });
});

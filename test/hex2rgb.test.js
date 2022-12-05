import { hex2rgb } from '../src/index.js';

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

  test.concurrent('Exception: empty string', async () => {
    expect(hex2rgb('')).toBeUndefined();
  });

  test.concurrent('Exception: empty input', async () => {
    expect(hex2rgb()).toBeUndefined();
  });
});

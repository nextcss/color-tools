import { toneMap } from '../src/index.js';

const testResult = {
  50: '#fdfdfd',
  100: '#fcfcfc',
  150: '#fbfbfb',
  200: '#f9f9f9',
  250: '#f7f7f7',
  300: '#f5f5f5',
  350: '#f3f3f3',
  400: '#f1f1f1',
  450: '#f0f0f0',
  500: '#eeeeee',
  550: '#d6d6d6',
  600: '#bebebe',
  650: '#a7a7a7',
  700: '#8f8f8f',
  750: '#777777',
  800: '#5f5f5f',
  850: '#474747',
  900: '#303030',
  950: '#242424',
};

describe('Tones', () => {
  test.concurrent('3 digits with hash', async () => {
    expect(toneMap('#eee')).toEqual(testResult);
  });

  test.concurrent('3 digits without hash', async () => {
    expect(toneMap('eee')).toEqual(testResult);
  });

  test.concurrent('6 digits with hash', async () => {
    expect(toneMap('#eeeeee', 10)).toEqual(testResult);
  });

  test.concurrent('6 digits without hash', async () => {
    expect(toneMap('eeeeee', 10)).toEqual(testResult);
  });

  test.concurrent('Exception: empty string', async () => {
    expect(toneMap('')).toEqual({});
  });

  test.concurrent('Exception: empty input', async () => {
    expect(toneMap()).toEqual({});
  });
});

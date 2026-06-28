import { toneMap } from '../../src/tools/tones.js';

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
  550: '#d4d4d4',
  600: '#b7b7b7',
  650: '#9d9d9d',
  700: '#838383',
  750: '#696969',
  800: '#4c4c4c',
  850: '#323232',
  900: '#181818',
  950: '#070707',
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

  // test.concurrent('Exception: 4 digits', async () => {
  //   expect(toneMap('#eeee')).toEqual(testResult);
  // });

  test.concurrent('Exception: 5 digits', async () => {
    expect(toneMap('#eeeee')).toEqual({});
  });

  test.concurrent('Exception: 7 digits', async () => {
    expect(toneMap('#eeeeeee')).toEqual({});
  });

  test.concurrent('Exception: empty string', async () => {
    expect(toneMap('')).toEqual({});
  });

  test.concurrent('Exception: empty input', async () => {
    expect(toneMap()).toEqual({});
  });
});

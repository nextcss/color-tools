import { clamp, random } from '../../src/tools/utils.js';

describe('Utils: clamp', () => {
  test.concurrent('In range', async () => {
    expect(clamp(50, 0, 100)).toBe(50);
  });

  test.concurrent('Min range', async () => {
    expect(clamp(0, 0, 100)).toBe(0);
  });

  test.concurrent('Max range', async () => {
    expect(clamp(100, 0, 100)).toBe(100);
  });

  test.concurrent('Out of range low', async () => {
    expect(clamp(0, 10, 100)).toBe(10);
  });

  test.concurrent('Out of range high', async () => {
    expect(clamp(200, 10, 100)).toBe(100);
  });
});

describe('Utils: random', () => {
  test.concurrent('In range', async () => {
    expect(random(30, 31)).toBeGreaterThanOrEqual(30);
    expect(random(30, 31)).toBeLessThanOrEqual(31);
  });

  test.concurrent('Narrow range', async () => {
    expect(random(31, 31)).toBe(31);
  });
});

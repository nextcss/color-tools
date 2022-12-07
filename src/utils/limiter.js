export const limiter = (number, min = 0, max = 100) =>
  Math.min(Math.max(min, number), max);

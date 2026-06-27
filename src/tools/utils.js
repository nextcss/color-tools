export const clamp = (number = 0, min = 0, max = 0) => Math.min(Math.max(min, number), max);

export const random = (min = 0, max = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

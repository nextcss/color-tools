export const clamp = (number = 0, min = 0, max = 0) => Math.max(min, Math.min(max, number));

export const random = (min = 0, max = 0) => (Math.random() * (max - min + 1) + min) | 0;

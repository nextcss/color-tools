export const rgb2hex = (rgb) => {
  if (!Array.isArray(rgb) || rgb.length !== 3) return undefined;

  const result = rgb.map((val) => val.toString(16).padStart(2, '0')).join('');

  return result ? '#' + result : undefined;
};

const regex = {
  hex3d: /^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i,
  hex6d: /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
  hex8d: /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
};

export const hex2rgb = (hex = '') => {
  if (typeof hex !== 'string') return;

  const matches = hex?.match(regex.hex3d) || hex?.match(regex.hex6d) || hex?.match(regex.hex8d);

  return matches?.slice(1).map((ch, i) => {
    const decimal = parseInt(ch.padStart(2, ch), 16);
    return i === 3 ? Math.round((decimal / 255) * 100) : decimal;
  });
};

export const rgb2hex = (rgb = []) => {
  if (!Array.isArray(rgb) || ![3, 4].includes(rgb.length)) return undefined;

  const hex = rgb
    .map((ch, i) => {
      const decimal = i === 3 ? Math.round((ch / 100) * 255) : ch;
      return decimal.toString(16).padStart(2, '0');
    })
    .join('');

  return '#' + hex;
};

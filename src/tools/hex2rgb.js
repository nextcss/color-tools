const regex = {
  hex3d: /^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i,
  hex6d: /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
  hex8d: /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
};

export const hex2rgb = (hex) => {
  const matches =
    hex?.match(regex.hex3d) ||
    hex?.match(regex.hex6d) ||
    hex?.match(regex.hex8d);

  return matches?.slice(1).map((ch, i) => {
    const decimal = parseInt(ch.padStart(2, ch), 16);
    return i === 3 ? Math.round((decimal / 255) * 100) : decimal;
  });
};

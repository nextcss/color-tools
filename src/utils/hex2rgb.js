export const hex2rgb = (hex) => {
  const matches =
    hex?.match(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i) ||
    hex?.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) ||
    hex?.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);

  return matches?.slice(1)?.map((ch, i) => {
    const decimal = parseInt(ch.padStart(2, ch), 16);
    return i === 3 ? Math.round((decimal / 255) * 100) : decimal;
  });
};

export const rgb2hex = (rgb) => {
  if (!Array.isArray(rgb) || ![3, 4].includes(rgb.length)) return undefined;

  const hex = rgb
    .map((ch, i) => {
      const decimal = i === 3 ? Math.round((ch / 100) * 255) : ch;
      return decimal.toString(16).padStart(2, "0");
    })
    .join("");

  return "#" + hex;
};

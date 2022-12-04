const hex2rgb = (hex) =>
  hex
    .match(/#?([0-9a-f]{1,2})([0-9a-f]{1,2})([0-9a-f]{1,2})/i)
    .slice(1)
    .map((el) => parseInt(el.padStart(2, el), 16));

export default hex2rgb;

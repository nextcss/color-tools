import hex2rgb from './hex2rgb.js';

const roundMinMax = (value) => Math.min(255, Math.max(0, Math.round(value)));

const colorShift = (hex, percentage) => {
  const rgb = hex2rgb(hex);
  const multiplier = percentage / 100;

  rgb.forEach((val, key, arr) => {
    arr[key] =
      multiplier < 0
        ? roundMinMax(val + (255 - val) * Math.abs(multiplier))
        : roundMinMax(val - val * multiplier);
  });

  return '#' + rgb.map((val) => val.toString(16).padStart(2, '0')).join('');
};

export default colorShift;

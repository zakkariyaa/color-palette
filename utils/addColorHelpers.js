import { rgbToHex } from './colorConversion.js';

// combine two colors and generate mid color
export const combineColors = (color1, color2) => {
  const newColor1 = color1.map((num) => Number(num));
  const newColor2 = color2.map((num) => Number(num));

  // Combine the RGB values by averaging them
  const r = Math.ceil((newColor1[0] + newColor2[0]) / 2);
  const g = Math.ceil((newColor1[1] + newColor2[1]) / 2);
  const b = Math.ceil((newColor1[2] + newColor2[2]) / 2);

  return rgbToHex([r, g, b]);
};

// generate a darker shade of color
export const darkenColor = (prevColor) => {
  const newColor = prevColor.map((num) => Number(num));

  const r = Math.round(newColor[0] * 0.9081);
  const g = Math.round(newColor[1] * 0.9081);
  const b = Math.round(newColor[2] * 0.9081);

  return rgbToHex([r, g, b]);
};

// generate a whiter tint of color
export const whitenColor = (prevColor) => {
  const newColor = prevColor.map((num) => Number(num));

  const r = Math.round(newColor[0] + (255 - newColor[0]) * 0.091);
  const g = Math.round(newColor[1] + (255 - newColor[1]) * 0.091);
  const b = Math.round(newColor[2] + (255 - newColor[2]) * 0.091);

  return rgbToHex([r, g, b]);
};

// calculation source: https://github.com/edelstone/tints-and-shades#calculation-method

// Produce tints (pure white added) and shades (pure black added)
// of a given hex color in 10% increments. Steps:
// 1- Convert hex color to rgb
// 2- Tints: New value = current value + ((255 - current value) x tint factor)
// 3- Shades: New value = current value x shade factor
// 4- new value is rounded if necessary, and then converted back to hex

import { hexToRgb, rgbToHex } from './colorConversion.js';

export const generateTints = (hex) => {
  const rgbValue = hexToRgb(hex);
  const firstRgbValue = rgbValue[0];
  const secondRgbValue = rgbValue[1];
  const thirdRgbValue = rgbValue[2];

  // return an object of tints (from 0%-100%). Key: tint factor, value: tint value
  const tintsObj = {};

  for (let i = 0; i < 11; i++) {
    const firstNewRgbValue = Math.round(
      firstRgbValue + (255 - firstRgbValue) * (i / 10)
    );
    const secondNewRgbValue = Math.round(
      secondRgbValue + (255 - secondRgbValue) * (i / 10)
    );
    const thirdNewRgbValue = Math.round(
      thirdRgbValue + (255 - thirdRgbValue) * (i / 10)
    );

    const hexValue = rgbToHex([
      firstNewRgbValue,
      secondNewRgbValue,
      thirdNewRgbValue,
    ]);
    tintsObj[i] = '#' + hexValue.join('');
  }

  return tintsObj;
};

export const generateShades = (hex) => {
  const rgbValue = hexToRgb(hex);
  const firstRgbValue = rgbValue[0];
  const secondRgbValue = rgbValue[1];
  const thirdRgbValue = rgbValue[2];

  // return an object of shades (from 0%-100%). Key: shade factor, value: shade value
  const shadesObj = {};

  // the loop is reverse when calculating shades
  for (let i = 10; i >= 0; i--) {
    const firstNewRgbValue = Math.round(firstRgbValue * (i / 10));
    const secondNewRgbValue = Math.round(secondRgbValue * (i / 10));
    const thirdNewRgbValue = Math.round(thirdRgbValue * (i / 10));

    const hexValue = rgbToHex([
      firstNewRgbValue,
      secondNewRgbValue,
      thirdNewRgbValue,
    ]);
    shadesObj[10 - i] = '#' + hexValue.join('');
  }

  return shadesObj;
};

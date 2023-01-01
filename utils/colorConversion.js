// calculation source: https://appkong.com/tools/hex-to-rgb/

// HEX to RGB
// To convert hex code colors which are 6 values of base 16:
// 1- we need a value chart (to accomadate the non digit values like a, b, c..)
// 2- the 6 values will be treated as three pairs
// 3- Multiply 16 to the first value of each pair
// 4- Add the second value to the result of step three = one RGB value
// 5- Repeat for all three pairs to get full RGB value

// RGB to HEX
// To convert rgb colors which are three pairs between 0-255 to hex colors:
// first two steps are the same (value chart, working with pairs)
// 3- Divide the first figure by 16
// 4- Multiply the remainder by 16
// 5- Translate the values into their equivalent hex codes by using the value chart
// 6- Repeat the same steps for all three pairs

const hexValueChart = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};
const rgbValueChart = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 'a',
  11: 'b',
  12: 'c',
  13: 'd',
  14: 'e',
  15: 'f',
};

export const hexToRgb = (hex) => {
  const unhashedValues = hex.slice(1);

  const firstPair = unhashedValues.slice(0, 2);
  const secondPair = unhashedValues.slice(2, 4);
  const thirdPair = unhashedValues.slice(4);

  const firstRgbValue =
    hexValueChart[firstPair[0]] * 16 + hexValueChart[firstPair[1]];
  const secondRgbValue =
    hexValueChart[secondPair[0]] * 16 + hexValueChart[secondPair[1]];
  const thirdRgbValue =
    hexValueChart[thirdPair[0]] * 16 + hexValueChart[thirdPair[1]];

  return [firstRgbValue, secondRgbValue, thirdRgbValue];
};

export const rgbToHex = (rgb) => {
  const firstPair = rgb[0];
  const secondPair = rgb[1];
  const thirdPair = rgb[2];

  const firstHexValue = rgbValueChart[Math.floor(firstPair / 16)];
  const secondHexValue = rgbValueChart[firstPair % 16];
  const thirdHexValue = rgbValueChart[Math.floor(secondPair / 16)];
  const fourthHexValue = rgbValueChart[secondPair % 16];
  const fifthHexValue = rgbValueChart[Math.floor(thirdPair / 16)];
  const sixthHexValue = rgbValueChart[thirdPair % 16];

  return [
    firstHexValue,
    secondHexValue,
    thirdHexValue,
    fourthHexValue,
    fifthHexValue,
    sixthHexValue,
  ];
};

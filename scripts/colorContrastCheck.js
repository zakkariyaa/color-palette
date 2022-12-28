// The purpose of the code in this file is to determine if a background
// color is light or dark in order to choose an appropriate text
// color (black on light colors and white on dark colors).
// Source of the formula used: http://alienryderflex.com/hsp.html
// explanation: https://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx

// formula: brightness = sqrt(.299 R2 + .587 G2 + .114 B2)
// textColor = Brightness(backgroundColor) < 130 ? 'light : 'black;

export const checkBrightness = (rgb) => {
  const [r, g, b] = rgb;
  return Math.sqrt(r * r * 0.241 + g * g * 0.691 + b * b * 0.068);
};

import { getRandomColor } from '../utils/getRandomColor.js';
import { hexToRgb } from '../utils/colorConversion.js';
import { checkBrightness } from '../utils/checkBrightness.js';

const colorPalette = document.querySelector('.color-palette');

// update the colors and hex codes of the color palette
export const updateColorPalette = (lockedColorsObj) => {
  const lockedColors = Object.values(lockedColorsObj);
  const colorElements = colorPalette.getElementsByClassName('color');

  const unlockedColors = [];

  for (let i = 0; i < colorElements.length; i++) {
    if (!lockedColors.includes(colorElements[i])) {
      unlockedColors.push(colorElements[i]);
    }
  }

  for (let i = 0; i < unlockedColors.length; i++) {
    const currentColor = getRandomColor();
    const hexText = unlockedColors[i].nextSibling.children[5].children[0];
    const colorPicker = unlockedColors[i].nextSibling.children[6];

    // check background color brightness to choose an appropriate text color
    // why 130? check the checkBrightness.js file sources
    const rgbColor = hexToRgb(currentColor);
    const brightnessLevel = checkBrightness(rgbColor);
    const textDiv = hexText.parentElement.parentElement;

    unlockedColors[i].style.backgroundColor = currentColor;
    hexText.textContent = currentColor.slice(1);

    brightnessLevel < 130
      ? (textDiv.style.color = '#fff')
      : (textDiv.style.color = '#000');

    colorPicker.value = currentColor;
  }
};

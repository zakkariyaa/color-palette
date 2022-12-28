import { getRandomColor } from './getRandomColor.js';

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
    const hexText = unlockedColors[i].nextSibling.children[5];
    const colorPicker = unlockedColors[i].nextSibling.children[6];

    unlockedColors[i].style.backgroundColor = currentColor;
    hexText.textContent = currentColor.slice(1);
    colorPicker.value = currentColor;
  }
};

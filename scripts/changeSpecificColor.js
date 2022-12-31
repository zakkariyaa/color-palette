import { getRandomColor } from './getRandomColor.js';
import { hexToRgb } from './colorConversion.js';
import { checkBrightness } from './colorContrastCheck.js';

export const changeSpecificColor = (e) => {
  // don't allow locked colors to be changed
  const divColor =
    e.target.parentElement.parentElement.parentElement.previousSibling;

  const lockedColor =
    divColor.nextSibling.children[3].children[0].children[0].className ===
    'uil uil-lock';

  if (!lockedColor) {
    const currentColor = getRandomColor();
    divColor.style.background = currentColor;

    const rgbColor = hexToRgb(currentColor);
    const brightnessLevel = checkBrightness(rgbColor);
    const textDiv = divColor.nextSibling;

    brightnessLevel < 130
      ? (textDiv.style.color = '#fff')
      : (textDiv.style.color = '#000');

    // update color div, hextext & colorpicker value
    const hexText = divColor.nextSibling.children[5].children[0];
    hexText.textContent = currentColor.slice(1);

    const colorPicker = divColor.nextSibling.children[6];
    colorPicker.value = currentColor;
  }
};

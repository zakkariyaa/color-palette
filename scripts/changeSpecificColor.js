import { getRandomColor } from './getRandomColor.js';
import { hexToRgb } from './colorConversion.js';
import { checkBrightness } from './colorContrastCheck.js';

export const changeSpecificColor = (e) => {
  // don't allow locked colors to be changed
  const divColor = e.target.parentElement.parentElement.previousSibling;

  const lockedColor =
    divColor.nextSibling.children[1].children[0].className === 'uil uil-lock';

  if (!lockedColor) {
    const currentColor = getRandomColor();
    divColor.style.background = currentColor;

    const rgbColor = hexToRgb(currentColor);
    const brightnessLevel = checkBrightness(rgbColor);
    const textDiv = divColor.nextSibling;

    brightnessLevel < 130
      ? (textDiv.style.color = '#fff')
      : (textDiv.style.color = '#000');

    divColor.nextSibling.children[5].textContent = currentColor.slice(1);
    divColor.nextSibling.children[6].value = currentColor;
  }
};

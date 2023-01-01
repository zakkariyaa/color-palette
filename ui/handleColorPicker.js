import { hexToRgb } from './colorConversion.js';
import { checkBrightness } from './checkBrightness.js';

export const handleColorPicker = (e) => {
  const colorPicker = e.target.parentElement.nextSibling;
  colorPicker.click();

  colorPicker.addEventListener('input', (e) => {
    const currentColor = e.target.value;
    const colorDiv = e.target.parentElement.previousSibling;
    const textDiv = e.target.parentElement;
    const hexText = e.target.parentElement.children[5].children[0];

    // check background color brightness level
    const rgbColor = hexToRgb(currentColor);
    const brightnessLevel = checkBrightness(rgbColor);

    brightnessLevel < 130
      ? (textDiv.style.color = '#fff')
      : (textDiv.style.color = '#000');

    // update color div, hextext & colorpicker value
    colorDiv.style.background = currentColor;
    hexText.textContent = currentColor.slice(1);
    e.target.value = currentColor;
  });
};

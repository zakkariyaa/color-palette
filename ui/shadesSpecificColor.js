import { generateTints, generateShades } from './shadesAndTints.js';
import { rgbToHex } from './colorConversion.js';
import { checkBrightness } from './checkBrightness.js';

const createDivColor = (divColorNumber, divColorHex) => {
  const newDivColor = document.createElement('div');
  newDivColor.classList.add('color');
  newDivColor.classList.add(`color${divColorNumber}`);
  newDivColor.style.background = divColorHex;

  return newDivColor;
};

export const shadesSpecificColor = (e, colorPalette, lockedColors) => {
  const containerDiv =
    e.target.parentElement.parentElement.parentElement.parentElement;
  const divColor =
    e.target.parentElement.parentElement.parentElement.previousSibling;
  const elementHex =
    '#' +
    e.target.parentElement.parentElement.parentElement.children[5].children[0]
      .textContent;

  const tints = Object.values(generateTints(elementHex)).slice(1).reverse();
  const shades = Object.values(generateShades(elementHex));
  const tintsAndShades = [...tints, ...shades];

  const newDivColor = document.createElement('div');
  newDivColor.classList.add('tints-shades');

  for (let i = 0; i < tintsAndShades.length; i++) {
    const p = document.createElement('p');
    p.style.background = tintsAndShades[i];

    newDivColor.append(p);
  }

  containerDiv.replaceChild(newDivColor, divColor);

  // hide all the icons and hextext when shades are displayed
  const textDiv = e.target.parentElement.parentElement.parentElement;
  textDiv.style.display = 'none';

  // change the color of the div to the choosen hex color
  // from one of the 21 colors (shades & tints) on that div
  newDivColor.addEventListener('click', (e) => {
    const containerDiv = e.target.parentElement.parentElement;
    const divColor = e.target.parentElement;
    const backgroundRgbColor = e.target.style.background
      .slice(4, -1)
      .split(',');
    const backgroundHexColor = '#' + rgbToHex(backgroundRgbColor).join('');
    const divColorNumber =
      Array.from(colorPalette.children).indexOf(containerDiv) + 1;

    const newDivColor = createDivColor(divColorNumber, backgroundHexColor);

    // check background color brightness level
    const brightnessLevel = checkBrightness(backgroundRgbColor);

    brightnessLevel < 130
      ? (textDiv.style.color = '#fff')
      : (textDiv.style.color = '#000');

    // update hextext and colorpicker
    const hexText = containerDiv.children[1].children[5].children[0];
    const colorPicker = hexText.parentElement.nextSibling;

    containerDiv.replaceChild(newDivColor, divColor);
    hexText.textContent = backgroundHexColor.slice(1);
    colorPicker.value = backgroundHexColor;

    // now display the icons and text back
    textDiv.style.display = 'flex';

    // check if color is locked
    const colorIsLocked =
      textDiv.children[3].children[0].children[0].className === 'uil uil-lock';

    if (colorIsLocked) {
      const divColorKey = newDivColor.className.slice(-1);
      lockedColors[divColorKey] = newDivColor;
    }
  });
};

import { generateTints, generateShades } from './shadesAndTints.js';
import { rgbToHex } from './colorConversion.js';

const createDivColor = (divColorNumber, divColorHex) => {
  const newDivColor = document.createElement('div');
  newDivColor.classList.add('color');
  newDivColor.classList.add(`color${divColorNumber}`);
  newDivColor.style.background = divColorHex;

  return newDivColor;
};

export const shadesSpecificColor = (e, state, colorPalette) => {
  if (state === 'shades') {
    const containerDiv = e.target.parentElement.parentElement.parentElement;
    const divColor = e.target.parentElement.parentElement.previousSibling;
    const elementHex =
      '#' + e.target.parentElement.parentElement.children[5].textContent;

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

    e.target.className = 'uil uil-palette';

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

      // we also need to update the hex code and icon of the new divColor
      const shadesIcon = containerDiv.children[1].children[4].children[0];
      const hexText = containerDiv.children[1].children[5];

      containerDiv.replaceChild(newDivColor, divColor);
      shadesIcon.className = 'uil uil-apps';
      hexText.textContent = backgroundHexColor.slice(1);
    });
  } else {
    const containerDiv = e.target.parentElement.parentElement.parentElement;
    const divColorNumber =
      Array.from(colorPalette.children).indexOf(containerDiv) + 1;
    const divColorHex =
      '#' + e.target.parentElement.parentElement.children[5].textContent;

    const divColor = e.target.parentElement.parentElement.previousSibling;

    const newDivColor = createDivColor(divColorNumber, divColorHex);
    containerDiv.replaceChild(newDivColor, divColor);

    e.target.className = 'uil uil-apps';
  }
};

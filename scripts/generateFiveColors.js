import { getRandomColor } from './getRandomColor.js';

// generate five element colors
export const generateFiveColors = () => {
  const colorsObj = {};

  for (let i = 0; i < 5; i++) {
    const currentColor = getRandomColor();

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container-div');

    const textDiv = document.createElement('div');
    textDiv.classList.add('text-div');

    // the icons of the color div
    const redoSpan = document.createElement('span');
    redoSpan.className = 'redo-span';
    redoSpan.innerHTML = '<i class="uil uil-redo"></i>';

    const lockSpan = document.createElement('span');
    lockSpan.className = 'lock-span';
    lockSpan.innerHTML = '<i class="uil uil-lock-open-alt"></i>';

    const removeSpan = document.createElement('span');
    removeSpan.className = 'remove-span';
    removeSpan.innerHTML = '<i class="uil uil-multiply"></i>';

    const copySpan = document.createElement('span');
    copySpan.className = 'copy-span';
    copySpan.innerHTML = '<i class="uil uil-copy"></i>';

    const shadesSpan = document.createElement('span');
    shadesSpan.className = 'shades-span';
    shadesSpan.innerHTML = '<i class="uil uil-apps"></i>';

    const hexText = document.createElement('p');
    hexText.className = 'hex-code';
    hexText.textContent = currentColor.slice(1);

    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.classList.add(`color${i + 1}`);

    colorDiv.style.background = currentColor;

    textDiv.append(redoSpan);
    textDiv.append(lockSpan);
    textDiv.append(removeSpan);
    textDiv.append(copySpan);
    textDiv.append(shadesSpan);
    textDiv.append(hexText);

    containerDiv.append(colorDiv);
    containerDiv.append(textDiv);

    colorsObj[i + 1] = containerDiv;
  }

  return colorsObj;
};

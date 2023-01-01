import { getRandomColor } from '../utils/getRandomColor.js';

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
    // structure: Divs -> 1- content element (span, input) 2- tooltip text
    // remove color
    const removeDiv = document.createElement('div');
    removeDiv.className = 'remove-div';
    const removeSpan = document.createElement('span');
    removeSpan.className = 'remove-span';
    removeSpan.innerHTML = '<i class="uil uil-multiply"></i>';
    const removeTooltip = document.createElement('p');
    removeTooltip.className = 'remove-tooltip';
    removeTooltip.textContent = 'Remove color';

    removeDiv.append(removeSpan);
    removeDiv.append(removeTooltip);

    // view shades and tints
    const shadesDiv = document.createElement('div');
    shadesDiv.className = 'shades-div';
    const shadesSpan = document.createElement('span');
    shadesSpan.className = 'shades-span';
    shadesSpan.innerHTML = '<i class="uil uil-apps"></i>';
    const shadesTooltip = document.createElement('p');
    shadesTooltip.className = 'shades-tootlip';
    shadesTooltip.textContent = 'View shades';

    shadesDiv.append(shadesSpan);
    shadesDiv.append(shadesTooltip);

    // copy color to clipboard
    const copyDiv = document.createElement('div');
    copyDiv.className = 'copy-div';
    const copySpan = document.createElement('span');
    copySpan.className = 'copy-span';
    copySpan.innerHTML = '<i class="uil uil-copy"></i>';
    const copyTooltip = document.createElement('p');
    copyTooltip.className = 'copy-tooltip';
    copyTooltip.textContent = 'Copy HEX';

    copyDiv.append(copySpan);
    copyDiv.append(copyTooltip);

    // lock color
    const lockDiv = document.createElement('div');
    lockDiv.className = 'lock-div';
    const lockSpan = document.createElement('span');
    lockSpan.className = 'lock-span';
    lockSpan.innerHTML = '<i class="uil uil-lock-open-alt"></i>';
    const lockTooltip = document.createElement('p');
    lockTooltip.className = 'lock-tooltip';
    lockTooltip.textContent = 'Toggle lock';

    lockDiv.append(lockSpan);
    lockDiv.append(lockTooltip);

    // change color (redo)
    const redoDiv = document.createElement('div');
    redoDiv.className = 'redo-div';
    const redoSpan = document.createElement('span');
    redoSpan.className = 'redo-span';
    redoSpan.innerHTML = '<i class="uil uil-redo"></i>';
    const redoTooltip = document.createElement('p');
    redoTooltip.className = 'redo-tooltip';
    redoTooltip.textContent = 'Change color';

    redoDiv.append(redoSpan);
    redoDiv.append(redoTooltip);

    // hex code & select color picker
    const hexDiv = document.createElement('div');
    hexDiv.className = 'hex-div';
    const hexText = document.createElement('span');
    hexText.className = 'hex-code';
    hexText.textContent = currentColor.slice(1);
    const hexTooltip = document.createElement('p');
    hexTooltip.className = 'hex-tooltip';
    hexTooltip.textContent = 'Select color';

    hexDiv.append(hexText);
    hexDiv.append(hexTooltip);

    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.value = currentColor;
    colorPicker.id = 'color-picker';

    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.classList.add(`color${i + 1}`);

    colorDiv.style.background = currentColor;

    textDiv.append(removeDiv);
    textDiv.append(shadesDiv);
    textDiv.append(copyDiv);
    textDiv.append(lockDiv);
    textDiv.append(redoDiv);
    textDiv.append(hexDiv);
    textDiv.append(colorPicker);

    containerDiv.append(colorDiv);
    containerDiv.append(textDiv);

    colorsObj[i + 1] = containerDiv;
  }

  return colorsObj;
};

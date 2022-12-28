import { generateFiveColors } from './generateFiveColors.js';
import { updateColorPalette } from './updateColorPalette.js';
import { copyToClipboard } from './copyToClipboard.js';
import { changeSpecificColor } from './changeSpecificColor.js';
import { removeSpecificColor } from './removeSpecificColor.js';
import { lockSpecificColor } from './lockSpecificColor.js';
import { shadesSpecificColor } from './shadesSpecificColor.js';
import { handleColorPicker } from './handleColorPicker.js';
import { hexToRgb } from './colorConversion.js';
import { checkBrightness } from './colorContrastCheck.js';

// locked color(s)
const lockedColors = {};

// **************************************
// Intialize five colors and display it on the page
const colorPalette = document.querySelector('.color-palette');

const displayColors = (obj) => {
  for (let el of Object.values(obj)) {
    const backroundColor = el.children[0].style.background
      .slice(4, -1)
      .split(',');

    const brightnessLevel = checkBrightness(backroundColor);
    const textDiv = el.children[1];

    brightnessLevel < 130
      ? (textDiv.style.color = '#fff')
      : (textDiv.style.color = '#000');

    colorPalette.append(el);
  }
};

displayColors(generateFiveColors());

// ****************************************
// Update dom colors on spacebar press
document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    updateColorPalette(lockedColors);
  }
});

// **************************************
// Header icon functionalities section (save, export color)
const headerEl = document.querySelector('header');

headerEl.addEventListener('click', (e) => {
  // save palette to localStorage
  if (e.target.className === 'uil uil-heart-alt') {
    const colorEls = colorPalette.innerHTML;
    localStorage.setItem('savedColors', JSON.stringify(colorEls));
  }

  // export palette in json, css variables, and .txt format
  if (e.target.className === 'uil uil-bookmark') {
    const savedColors = JSON.parse(localStorage.getItem('savedColors'));
    if (savedColors) {
      colorPalette.innerHTML = savedColors;
    }
  }
});

// **************************************
// Color palette icon functionalities section (copy, redo, remove...)
colorPalette.addEventListener('click', (e) => {
  // Change the color of the clicked element
  // div: the div color is clicked, icon: the icon is clicked
  if (e.target.className === 'uil uil-redo') {
    changeSpecificColor(e);
  }

  // Remove the clicked color from palette
  if (e.target.className === 'uil uil-multiply') {
    removeSpecificColor(e);
  }

  // copy the hex code to clipboard
  if (e.target.className === 'uil uil-copy') {
    copyToClipboard(e);
  }

  // lock/unlock the clicked color
  if (e.target.className === 'uil uil-lock-open-alt') {
    lockSpecificColor(e, lockedColors, 'open');
  } else if (e.target.className === 'uil uil-lock') {
    lockSpecificColor(e, lockedColors, 'closed');
  }

  // view shades and tints of specific color
  if (e.target.className === 'uil uil-apps') {
    shadesSpecificColor(e, colorPalette);
  }

  // display color picker when color is selected
  if (e.target.className === 'hex-code') {
    handleColorPicker(e);
  }
});

// show icon buttons on hover
const containerDivs = colorPalette.getElementsByClassName('container-div');

for (let i = 0; i < containerDivs.length; i++) {
  containerDivs[i].addEventListener('mouseover', () => {
    containerDivs[i].classList.add('show-icons');
  });
}

for (let i = 0; i < containerDivs.length; i++) {
  containerDivs[i].addEventListener('mouseout', () => {
    containerDivs[i].classList.remove('show-icons');
  });
}

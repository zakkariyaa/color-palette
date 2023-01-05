import { generateFiveColors } from './ui/generateFiveColors.js';
import { updateColorPalette } from './ui/updateColorPalette.js';
import { copyToClipboard } from './ui/copyToClipboard.js';
import { changeSpecificColor } from './ui/changeSpecificColor.js';
import { removeSpecificColor } from './ui/removeSpecificColor.js';
import { lockSpecificColor } from './ui/lockSpecificColor.js';
import { shadesSpecificColor } from './ui/shadesSpecificColor.js';
import { handleColorPicker } from './ui/handleColorPicker.js';
import { handleExport } from './ui/handleExport.js';
import { checkBrightness } from './utils/checkBrightness.js';
import { addColor } from './ui/addColor.js';

// *************************************
// locked color(s)
const lockedColors = {};

// **************************************
// Initialize five colors and display it on the page
const colorPalette = document.querySelector('.color-palette');

const displayColors = (obj) => {
  // make the spacebar word color the color of the first divColor
  const spacebarWord = document.querySelector('.spacebar');
  const firstDivColorBg = obj[1].children[1].children[0].style.background;
  spacebarWord.style.color = firstDivColorBg;

  for (let el of Object.values(obj)) {
    // check background color brightness to find appropriate text color
    const backgroundColor = el.children[1].children[0].style.background
      .slice(4, -1)
      .split(',');

    const brightnessLevel = checkBrightness(backgroundColor);
    const textDiv = el.children[1].children[1];

    if (brightnessLevel < 130) {
      textDiv.style.color = '#fff';
    } else {
      textDiv.style.color = '#000';
    }

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
// Header icon functionalities section (save, retrieve palette)
const headerEl = document.querySelector('header');

headerEl.addEventListener('click', (e) => {
  // save palette to localStorage
  if (e.target.className === 'uil uil-heart-alt') {
    const colorEls = colorPalette.innerHTML;
    localStorage.setItem('savedColors', JSON.stringify(colorEls));
  }

  // retrieve saved palette from local storage
  if (e.target.className === 'uil uil-bookmark') {
    const savedColors = JSON.parse(localStorage.getItem('savedColors'));
    if (savedColors) {
      colorPalette.innerHTML = savedColors;
    }
  }
});

// **************************************
// Export section
const exportDropdown = document.querySelector('#export');
exportDropdown.addEventListener('change', (e) => {
  handleExport(e, colorPalette);
});

// **************************************
// Color palette icon functionalities section (copy, redo, remove...)
colorPalette.addEventListener('click', (e) => {
  // Change the color of the clicked element
  if (e.target.className === 'uil uil-redo') {
    changeSpecificColor(e);
  }

  // Remove the clicked color from palette
  if (e.target.className === 'uil uil-multiply') {
    removeSpecificColor(e, colorPalette);
  }

  // copy the hex code to clipboard
  if (e.target.className === 'uil uil-copy') {
    copyToClipboard(e);
  }

  // lock/unlock the clicked color
  if (e.target.className === 'uil uil-lock-open-alt') {
    lockSpecificColor(e, lockedColors, 'open');
  } else if (e.target.className === 'uil uil-lock') {
    lockSpecificColor(e, lockedColors, 'locked');
  }

  // view shades and tints of specific color
  if (e.target.className === 'uil uil-apps') {
    shadesSpecificColor(e, colorPalette, lockedColors);
  }

  // display color picker when color is selected
  if (e.target.className === 'hex-code') {
    handleColorPicker(e);
  }

  // add color section
  if (e.target.parentElement.className.startsWith('add-span')) {
    addColor(e);
  }
});

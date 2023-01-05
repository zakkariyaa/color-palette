// the purpose of the code in this file is to generate a color
// and add it between/beside the colors on the page when the user clicks (+) button.

// methods used:
// - if the outer leftmost (+) is clicked, The color is 'darkened' or a shade of the
//  previous color is generated. Formula: newColor = Math.round(prevColor * 0.9081)

// - if the outer rightmost (+) is clicked, the color is 'whitened' or a tint of the
//  previous color is generated. Formula: newColor = prevColor + ((255 - prevColor) * 0.091)

// - if a (+) between two colors is clicked, the new color is a combined version
//  of both colors. Formula: newColor = Math.ceil(color1 + color2 / 2)

import { createContainerDiv } from './generateFiveColors.js';
import {
  combineColors,
  whitenColor,
  darkenColor,
} from '../utils/addColorHelpers.js';

//
const addColorLeft = (containerDiv) => {
  const colorPalette = containerDiv.parentElement;
  const color = containerDiv.children[1].children[0].style.background
    .slice(4, -1)
    .split(',');

  const darkenedColor = '#' + darkenColor(color).join('');
  const newContainerDiv = createContainerDiv(darkenedColor);

  // add the new color to th left
  colorPalette.insertBefore(newContainerDiv, containerDiv);
};

//
const addColorRight = (containerDiv) => {
  const colorPalette = containerDiv.parentElement;
  const color = containerDiv.children[1].children[0].style.background
    .slice(4, -1)
    .split(',');

  const whitenedColor = '#' + whitenColor(color).join('');
  const newContainerDiv = createContainerDiv(whitenedColor);

  // add the new color to the right
  colorPalette.append(newContainerDiv);
};

//
const addColorMiddle = (containerDiv1, containerDiv2) => {
  const colorPalette = containerDiv1.parentElement;
  const color1 = containerDiv1.children[1].children[0].style.background
    .slice(4, -1)
    .split(',');
  const color2 = containerDiv2.children[1].children[0].style.background
    .slice(4, -1)
    .split(',');

  const combinedColor = '#' + combineColors(color1, color2).join('');
  const newContainerDiv = createContainerDiv(combinedColor);

  // add the new color between the two colors
  colorPalette.insertBefore(newContainerDiv, containerDiv2);
};

export const addColor = (e) => {
  const elClassName = e.target.parentElement.className;
  const containerDivs = Array.from(
    e.target.parentElement.parentElement.parentElement.parentElement.children
  );
  const currentContainerDiv =
    e.target.parentElement.parentElement.parentElement;

  // check where to insert new container div
  if (containerDivs[0] === currentContainerDiv) {
    addColorLeft(currentContainerDiv);
  } else if (containerDivs[containerDivs.length - 1] === currentContainerDiv) {
    const direction = elClassName.split('-').splice(-1)[0];
    if (direction === 'right') {
      addColorRight(currentContainerDiv);
    } else {
      const containerDiv1 = currentContainerDiv.previousSibling;
      addColorMiddle(containerDiv1, currentContainerDiv);
    }
  } else {
    const containerDiv1 = currentContainerDiv.previousSibling;
    addColorMiddle(containerDiv1, currentContainerDiv);
  }

  // check number of colors on the page, so we can either allow colors to be
  // added or not
  const maxColorNums = 9;
  if (containerDivs.length + 1 === maxColorNums) {
    const barDivs =
      currentContainerDiv.parentElement.getElementsByClassName('bar-div');

    for (let barDiv of barDivs) {
      barDiv.style.display = 'none';
    }
  }
};

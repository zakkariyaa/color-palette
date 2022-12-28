import { getRandomColor } from './getRandomColor.js';

export const changeSpecificColor = (e, el) => {
  // don't allow locked colors to be changed
  const divColor = e.target.parentElement.parentElement.previousSibling;
  let lockedColor;

  if (el === 'div') {
    lockedColor =
      e.target.nextSibling.children[1].children[0].className === 'uil uil-lock';
  } else {
    lockedColor =
      divColor.nextSibling.children[1].children[0].className === 'uil uil-lock';
  }

  if (!lockedColor) {
    if (el === 'div') {
      const currentColor = getRandomColor();

      e.target.style.background = currentColor;
      e.target.nextSibling.children[5].textContent = currentColor.slice(1);
    } else {
      const currentColor = getRandomColor();
      divColor.style.background = currentColor;
      divColor.nextSibling.children[5].textContent = currentColor.slice(1);
    }
  }
};

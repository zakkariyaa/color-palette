import { getRandomColor } from './getRandomColor.js';

export const changeSpecificColor = (e) => {
  // don't allow locked colors to be changed
  const divColor = e.target.parentElement.parentElement.previousSibling;

  const lockedColor =
    divColor.nextSibling.children[1].children[0].className === 'uil uil-lock';

  if (!lockedColor) {
    const currentColor = getRandomColor();
    divColor.style.background = currentColor;
    divColor.nextSibling.children[5].textContent = currentColor.slice(1);
    divColor.nextSibling.children[6].value = currentColor;
  }
};

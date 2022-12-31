const colorPalette = document.querySelector('.color-palette');

export const lockSpecificColor = (e, lockedColors, state) => {
  if (state === 'open') {
    const divColor =
      e.target.parentElement.parentElement.parentElement.previousSibling;
    const colors = colorPalette.getElementsByClassName('color');

    for (let i = 0; i < colors.length; i++) {
      if (colors[i] === divColor) {
        lockedColors[i + 1] = colors[i];
      }
    }

    e.target.className = 'uil uil-lock';
  } else {
    const divColorKey =
      e.target.parentElement.parentElement.parentElement.previousSibling.className.slice(
        -1
      );

    delete lockedColors[divColorKey];
    e.target.className = 'uil uil-lock-open-alt';
  }
};

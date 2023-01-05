export const removeSpecificColor = (e, colorPalette) => {
  // check number of colors on the page, so we can either allow colors to be
  // removed or not
  const minColorNums = 2;
  const containerDivs = document
    .querySelector('.color-palette')
    .getElementsByClassName('container-div');

  const conatinerDiv =
    e.target.parentElement.parentElement.parentElement.parentElement
      .parentElement;
  colorPalette.removeChild(conatinerDiv);

  if (containerDivs.length === minColorNums) {
    const removeDivs = document.querySelectorAll('.remove-div');
    for (let removeDiv of removeDivs) {
      removeDiv.style.display = 'none';
    }
  }

  if (containerDivs.length > minColorNums) {
    const removeDivs = document.querySelectorAll('.remove-div');
    for (let removeDiv of removeDivs) {
      removeDiv.style.display = 'block';
    }
  }

  console.log(containerDivs);
};

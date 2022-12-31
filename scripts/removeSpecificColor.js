export const removeSpecificColor = (e) => {
  const conatinerDiv =
    e.target.parentElement.parentElement.parentElement.parentElement;
  conatinerDiv.style.display = 'none';
};

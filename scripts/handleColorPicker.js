export const handleColorPicker = (e) => {
  const colorPicker = e.target.nextSibling;
  colorPicker.click();

  colorPicker.addEventListener('input', (e) => {
    const currentColor = e.target.value;
    const colorDiv = e.target.parentElement.previousSibling;
    const hexText = e.target.parentElement.children[5];

    colorDiv.style.background = currentColor;
    hexText.textContent = currentColor.slice(1);
  });
};

export const copyToClipboard = (e) => {
  const text =
    e.target.parentElement.parentElement.parentElement.children[5].children[0];

  navigator.clipboard.writeText(text.textContent);
  e.target.className = 'uil uil-check';

  // after three seconds, set the copy icon back to the element
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      e.target.className = 'uil uil-copy';
    }, i * 1000);
  }
};

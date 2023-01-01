export const getRandomColor = () => {
  // Generate random red, green, and blue values and pad them with leading zeros
  const r = ('0' + Math.floor(Math.random() * 256).toString(16)).slice(-2);
  const g = ('0' + Math.floor(Math.random() * 256).toString(16)).slice(-2);
  const b = ('0' + Math.floor(Math.random() * 256).toString(16)).slice(-2);

  return '#' + r + g + b;
};

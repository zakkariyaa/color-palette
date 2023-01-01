// exporting styles in different formats: .json, .txt, and css variables
import { rgbToHex } from '../utils/colorConversion.js';

const downloadPalette = (colors, fileName, option) => {
  const data = JSON.stringify(colors);
  const link = document.createElement('a');

  if (option === 'json') {
    link.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
  } else if (option === 'txt') {
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(colors);
  } else {
    const newData = 'root {' + data.slice(1, -1) + '}';
    link.href = 'data:text/css;charset=utf-8,' + encodeURIComponent(newData);
  }

  link.download = fileName;
  link.click();
};

export const handleExport = (e, colorPalette) => {
  const option = e.target.value;

  const colorEls = colorPalette.getElementsByClassName('color');

  if (option === 'json') {
    const colors = [];
    const fileName = 'palette.json';

    for (let i = 0; i < colorEls.length; i++) {
      const rgbColor = colorEls[i].style.background.slice(4, -1).split(',');
      const hexColor = '#' + rgbToHex(rgbColor).join('');

      const colorObj = {};
      colorObj[`color${i + 1}`] = hexColor;

      colors.push(colorObj);
    }

    downloadPalette(colors, fileName, 'json');
    e.target.value = 'export';
  } else if (option === 'text') {
    let colors = '';
    const fileName = 'palette.txt';

    for (let i = 0; i < colorEls.length; i++) {
      const rgbColor = colorEls[i].style.background.slice(4, -1).split(',');
      const hexColor = '#' + rgbToHex(rgbColor).join('');

      colors += `color${i + 1}: ${hexColor}\n`;
    }

    downloadPalette(colors, fileName, 'txt');
    e.target.value = 'export';
  } else if (option === 'css') {
    let colors = '';
    const fileName = 'palette.css';

    for (let i = 0; i < colorEls.length; i++) {
      const rgbColor = colorEls[i].style.background.slice(4, -1).split(',');
      const hexColor = '#' + rgbToHex(rgbColor).join('');

      colors += `--color${i + 1}: ${hexColor};`;
    }

    downloadPalette(colors, fileName, 'css');
    e.target.value = 'export';
  }
};

// exporting styles in different formats: .json, .txt, and css variables
// nataliarusu code:
// let dataStr = JSON.stringify(colours);
// let dataUri =
//   'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

// let fileName = 'palette.json';

// exportBtn.setAttribute('href', dataUri);
// exportBtn.setAttribute('download', fileName);

export const handleExport = (e) => {
  console.log(e.target.value);
};

const countingLetters = (string) => {
  let newArray = [];

  // Remove the number and any foreign characters
  for (var i = 0; i < string.length; i++) {
    if (
      string[i] >= String.fromCharCode(65) &&
      string[i] <= String.fromCharCode(122)
    ) {
      newArray.push(string[i]);
    }
  }

  let sortedArray = newArray.sort();

  let count = {};

  var FinalArray = [];

  sortedArray.forEach(
    (value, index) => (count[value] = (count[value] || 0) + 1)
  );

  //console.log(count)
  Object.keys(count).forEach((key) => {
    FinalArray.push({ [key]: count[key] });
  });

  return FinalArray;
};

module.exports = { countingLetters: countingLetters };

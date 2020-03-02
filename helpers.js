const countingLetters = string => {
  let newArrayWithLetters = Array.from(string);

  let sortedArray = newArrayWithLetters.sort(); // When sorted the number comes to the beginning of the array

  sortedArray.shift(); // Remove the first index of an array i.e, the number in this case

  let count = {};

  var FinalArray = [];

  sortedArray.forEach(
    (value, index) => (count[value] = (count[value] || 0) + 1)
  );

  //console.log(count)
  Object.keys(count).forEach(key => {
    FinalArray.push({ [key]: count[key] });
  });

  let finalSpread = JSON.stringify(FinalArray);

  return finalSpread;
};

module.exports = countingLetters;

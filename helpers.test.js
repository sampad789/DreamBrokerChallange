const { countingLetters } = require("./helpers");

test("should output the number of times a letter is counted without any numbers or any foreign alphabets ", () => {
  const testOutput = countingLetters("hello 2 timesÄÄÄÄÄÄÄ");
  expect(testOutput).toBe(
    '[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]'
  );
});

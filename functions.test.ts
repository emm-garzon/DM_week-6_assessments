const { shuffleArray } = require("./utils");

let testData = [1, 5, 34, 17, 25];

describe("shuffleArray tests", () => {
  test("shuffleArray returns an array containing the same values", () => {
    let testArray = shuffleArray(testData);
    expect(testArray).toEqual(expect.arrayContaining(testData));
  });

  test("shuffleArray returns an array of the same length", () => {
    let lengthOne = testData.length;
    let lengthTwo = shuffleArray(testData).length;
    expect(lengthOne).toEqual(lengthTwo);
  });
});

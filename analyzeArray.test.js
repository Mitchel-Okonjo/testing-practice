const analyzeArray = require("./analyzeArray");

test("Rerun an object with avg, min, max and length properties of an array", () => {
  const arr = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(arr)).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

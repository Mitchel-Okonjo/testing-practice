const calculator = require("./calculator");

test("Correctly adds 2 numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("find the difference between 2 numbers", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.subtract(0.3, 0.2)).toBeCloseTo(0.1);
});

test("Correctly multiply two numbers", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
  expect(calculator.multiply(1.5, 1.5)).toBeCloseTo(2.25);
});

test("Divide two numbers", () => {
  expect(calculator.divide(8, 4)).toBe(2);
  expect(calculator.divide(3.0, 1.5)).toBe(2.0);
});

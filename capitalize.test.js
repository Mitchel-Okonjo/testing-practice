const capitalize = require("./capitalize");

test("Returns a string with the first letter capitalized", () => {
  expect(capitalize("mitchel")).toBe("Mitchel");
  expect(capitalize("mitchel okonjo")).toBe("Mitchel okonjo");
});

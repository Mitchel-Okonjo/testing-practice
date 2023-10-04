const reverseString = require("./reverseString");

test("Properly reverses a string", () => {
  expect(reverseString("Mitchel")).toBe("lehctiM");
  expect(reverseString("Mitchel Okonjo")).toBe("ojnokO lehctiM");
});

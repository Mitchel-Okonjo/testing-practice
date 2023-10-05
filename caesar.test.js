const cipher = require("./caesar");

test("Properly ciphers text by given factor", () => {
  expect(cipher("abcde", 1)).toBe("bcdef");
  expect(cipher("xyz", 1)).toBe("yza");
  expect(cipher("ABCDE", 1)).toBe("BCDEF");
  expect(cipher("ABCDE fghij!?", 1)).toBe("BCDEF ghijk!?");
});

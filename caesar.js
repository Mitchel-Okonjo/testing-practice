const map = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 14,
  P: 15,
  Q: 16,
  R: 17,
  S: 18,
  T: 19,
  U: 20,
  V: 21,
  W: 22,
  X: 23,
  Y: 24,
  Z: 25,
};

function cipher(string, factor, arr = [], index = 0) {
  // Base case
  if (index === string.length) return;

  // if character is not an alphabet, move on. Else handle cipher.
  if (!string[index].match(/[a-zA-Z]/)) {
    arr.push(string[index]);
    // return arr;
  } else {
    const position = map[string[index].toUpperCase()];
    let newPosition = position + factor;

    if (newPosition > 25) {
      newPosition = newPosition % 26;
      const letter = getKeyByValue(map, newPosition);
      isUpperCase(string[index]) === true
        ? arr.push(letter)
        : arr.push(letter.toLowerCase());
    } else {
      const letter = getKeyByValue(map, newPosition);
      isUpperCase(string[index]) === true
        ? arr.push(letter)
        : arr.push(letter.toLowerCase());
    }
  }

  // Make recursive call.
  cipher(string, factor, arr, index + 1);

  return arr.join("");
}

function getKeyByValue(obj, value) {
  for (var prop in obj) {
    if (obj[prop] === value) {
      return prop;
    }
  }
}

function isUpperCase(char) {
  return char.match(/[A-Z]/) ? true : false;
}

module.exports = cipher;

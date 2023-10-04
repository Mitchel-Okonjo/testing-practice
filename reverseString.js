function reverseString(string, arr = [], index = string.length - 1) {
  if (index < 0) return;

  arr.push(string[index]);
  reverseString(string, arr, index - 1);

  return arr.join("");
}

module.exports = reverseString;

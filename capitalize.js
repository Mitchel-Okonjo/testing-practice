function capitalize(string) {
  const arr = string.split("");

  arr[0] = arr[0].toUpperCase();

  return arr.join("").toString();
}

module.exports = capitalize;

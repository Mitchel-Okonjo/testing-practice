function analyzeArray(arr) {
  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: length(arr),
  };
}

function average(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  return sum / arr.length;
}

function min(arr) {
  let min = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
  }

  return min;
}

function max(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }

  return max;
}

function length(arr) {
  return arr.length;
}

const obj = analyzeArray([1, 8, 3, 4, 2, 6]);

console.log(obj); // { average: 4, min: 1, max: 8, length: 6 }

module.exports = analyzeArray;

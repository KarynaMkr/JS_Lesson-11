let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isBetween(min, max) {
  min = prompt('Please enter min item from array: ' + array);
  max = prompt('Please enter max item from array: ' + array);
  return function(item) {
    return item >= min && item <= max;
  }
}

console.log(array.filter(isBetween()));
  // -------- IS BETWEEN --------

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function getRangeNumber (message) {
  let number;
  do {
    number = prompt(message);
    if (isNaN(number)) {
      alert('Entered is NOT A NUMBER, repeat please');
    } else if (number == '') {
      alert('Your string is empty. Enter the number');
    }
  } while (isNaN(number) || number == '');
  return number;
};


function isBetween(min, max) {
  min = getRangeNumber('Please enter MIN item from array: [' + array + ']');
  max = getRangeNumber('Please enter MAX item from array: [' + array + ']');
  return function(item) {
    return item >= min && item <= max;
  }
}

console.log(array.filter(isBetween()));
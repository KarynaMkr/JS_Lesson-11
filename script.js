function enterNumber (message) {
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

let operation;
function enterOperation () {
  do {
    operation = prompt('Choose one of this operations: +, -, *, /, ^ - (pow)', '+');
      if (operation == '') {
        alert('You do not choose operation. Try again, please.')
      }
  } while (operation == '')
  return operation;
};


  // -------- IS BETWEEN --------

  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  function isBetween(min, max) {
    min = enterNumber('Please enter MIN item from array: [' + array + ']');
    max = enterNumber('Please enter MAX item from array: [' + array + ']');
    return function(item) {
      return item >= min && item <= max;
    }
  }

  console.log(array.filter(isBetween()));

  // -------- CALCULATE --------

    function sum (firstOperand, secondOperand) {
      let summa = Number(firstOperand) + Number(secondOperand);
      return ('Operation ' + 'Sum: \n' + firstOperand + ' + ' + secondOperand + '\nfinished with result: \n' + summa + '\n');
    };
    
    function diff (firstOperand, secondOperand) {
      let differ = firstOperand - secondOperand;
      return ('Operation ' + 'Diff: \n' + firstOperand + ' - ' + secondOperand + '\nfinished with result: \n' + differ + '\n');
    };
    
     function mult (firstOperand, secondOperand) {
      let multi = firstOperand * secondOperand;
      return ('Operation ' + 'Mult: \n' + firstOperand + ' * ' + secondOperand + '\nfinished with result: \n' + multi + '\n');
    };
    
    function div (firstOperand, secondOperand) {
      let divide = firstOperand / secondOperand;
      return ('Operation ' + 'Div: \n' + firstOperand + ' / ' + secondOperand + '\nfinished with result: \n' + divide + '\n');
    };
    
    function pow (firstOperand, secondOperand) {
      let power = Math.pow(firstOperand, secondOperand);
      return ('Operation ' + 'Pow: \n' + firstOperand + ' ^ ' + secondOperand + '\nfinished with result: \n' + power + '\n');
    };


  function calculateFunc () {
    if (operation == '+') {
      firstOperand = enterNumber('Enter first number');
      secondOperand = enterNumber('Enter second number');
      return(sum(firstOperand, secondOperand));
    } else if (operation == '-') {
        firstOperand = enterNumber('Enter first number');
        secondOperand = enterNumber('Enter second number');
        return(diff(firstOperand, secondOperand));
    } else if (operation == '*') {
        firstOperand = enterNumber('Enter first number');
        secondOperand = enterNumber('Enter second number');
        return(mult(firstOperand, secondOperand));
    } else if (operation == '/') {
        firstOperand = enterNumber('Enter first number');
        secondOperand = enterNumber('Enter second number');
        return(div(firstOperand, secondOperand));
    } else if (operation == '^') {
        firstOperand = enterNumber('Enter first number');
        secondOperand = enterNumber('Enter second number');
        return(pow(firstOperand, secondOperand));
    } else {
      alert('You entered something wrong! Try again.')
    }
  }

    function calculate(operation) {
      operation = enterOperation();
      return function(firstOperand) {
        return function(secondOperand) {
          return calculateFunc(firstOperand, secondOperand);
        }
      }
    }

  console.log(calculate()()());


  // -------- SORT --------

  const products = [
    {name: 'Product 1', quantity: 10, price: 25},
    {name: 'Product 2', quantity: 3, price: 55},
    {name: 'Product 3', quantity: 22, price: 35},
  ]

let field;
function chooseField () {
  do {
    field = prompt('Choose one of this fields: name, quantity, price', 'quantity' );
      if (field == '') {
        alert('You do not choose operation. Try again, please.')
      }
  } while (field == '')
  return field;
};

let sortType;
function chooseSortType () {
  do {
    sortType = prompt('Choose one of this sort types: asc or desc', 'desc' );
      if (sortType == '') {
        alert('You do not choose operation. Try again, please.')
      }
  } while (sortType == '')
  return sortType;
};

function sortByField(fieldName, sortType) {
  fieldName = chooseField()
  sortType = chooseSortType()
  if (sortType == 'asc') {
    return (firstItem, secondItem) => {
      if (firstItem[fieldName] > secondItem[fieldName]) {
        return 1
      } 
      return -1;
    } 
  } 
  return (firstItem, secondItem) => {
    if (firstItem[fieldName] < secondItem[fieldName]) {
       return 1
    } 
    return -1;
  } 
}

console.log(products.sort(sortByField()));
/* THE FOLLOWING SOLUTIONS ARE TO RECURSIVE PROBLEMS FOUND AT: 
 *
 * https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
 */


/* SUM ALL NUMBERS
 * 
 * Write a function called sumRange. It will take a number and return the sum of
 * all numbers from 1 up to the number passed in.
 * 
 * Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
*/

function sumRange(n) {

  if(n == 1) {
    return 1;
  }

  return n + sumRange(n - 1);
}
console.log('Proplem 1:')
console.log('The sum of the range of numbers for 8 is ' + sumRange(8));


/* POWER FUNCTION
 * 
 * Write a function called power which takes in a base and an exponent. If the
 * exponent is 0, return 1.
 * 
 * Sample: console.log(power(2, 4)); // 16
 */

function power(x, y) {
  
  if(y == 0) return 1;
  return x * power(x, y - 1);
}

console.log('\nProblem 2:');
console.log('The power of 3 to the 4th power is: ' + power(3, 4));

/* CALCULATE FACTORIAL
 * 
 * Write a function that returns the factorial of a number. A factorial of a number
 * is the result of that number multiplied by the number before it, and the 
 * number before that number, and so on, until you reach 1. The factorial of 1 is 1.
 * 
 * Sample: factorial(5); // 5 * 4 * 3 * 2 * 1 == 120
 */

function factorial(n) { 
  if(n == 1) return 1;
  return n * factorial(n - 1);
}

console.log('\nProblem 3:')
console.log('The factorial of 5 is: ' + factorial(5));

/* CHECK ALL VALUES IN AN ARRAY
 * 
 * Write a function called all whcih accepts an array and a callback and returns
 * true if every value in the array returns true when passed as a parameter to
 * the callback function.
 * 
 * Sample: 
 * var allAreLessThanSeven = all([1, 2, 8], function(num) {
 *    return num < 7;
 * });
 * 
 * console.log(allAreLessThanSeven); // false
 */

let allAreLessThanSeven = all([1,2,7], function(num) {
	return num < 7;
});

function all(arr, test) {
  let newArr = arr;

  if(newArr.length === 0) return true;

  if(test(newArr[0])) {
    newArr.shift();
    return all(newArr, test);
  } else {
    return false;
  }
}

console.log('\nProblem 4:');
console.log('All are less than 7: ' + allAreLessThanSeven);

/* PRODUCT OF AN ARRAY
 *
 * Write a funtion called productOfArray which takes in an array of numbers and
 * returns the product of them all.
 * 
 * Sample: let six = prouctOfArray([1, 2, 3]); // 6
 */

function productOfArray(arr) {

  if(arr.length === 1) return arr[0];

  return arr.shift() * productOfArray(arr);
}

console.log('\nProblem 5: ');
console.log('Product of Array is ' + productOfArray([1, 2, 3, 10]));

/* SEARCH JS OBJECT
 * 
 * Write a function called contains that searches for a value in a nested objet. It returns true if the object contains that value.
 * 
 * var nestedObject = {
 *  data: {
 *    info: {
 *      stuff: {
 *        thing: {
 *          moreStuff: {
 *            magicNumber: 44,
 *              something: 'foo2'
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 * let hasIt = contains(nestedObject, 44); // true
 * let doesntHaveIt = contains(nestedObject, "foo"); // false
 * 
 */

let nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}

function contains (obj, val) {
  for(key in obj) {
    if(typeof obj[key] === 'object') {
      return contains(obj[key], val);
    }
    if(obj[key] === val) {
      return true;
    }
  }
  return false;
}

console.log('\nProblem 6: ');
console.log('Value is contained in object: ' + contains(nestedObject, 'foo'));

/* PARSE A MULTI-DIMENSIONAL ARRAY
 *
 * Given  multi-dimensional integer array, rturn the totl number of integers stored inside this array.
 * 
 * Sample: let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
 */


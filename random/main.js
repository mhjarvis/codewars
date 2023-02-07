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


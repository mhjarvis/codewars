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

console.log('Problem 2:');
console.log('The power of 3 to the 4th power is: ' + power(3, 4));
/*
 * Break camelCase - 6kyu
 *
 */
 
function solution(string) {
  if (!/[A-Z]/.test(string)) {  // return if there is no capital letter 
    return string;
  }
  
  let arr = string.split('');     // create array of letters from the string
  let newArr = [];                // array for final letters
  let index = [];                 // holds index values of capital letters
  
  for (let i = 0; i < arr.length; i++) {      // test for the upperCase letter
    if (arr[i] === arr[i].toUpperCase()) {    // set index to the location in the arr
      index.push(i);
    }
  }
  
  for (let i = 0; i < arr.length; i++) {    // loop to enter spaces into array at indexes
    if (index.includes(i)) {
			console.log(i)
      newArr.push(' ');
    }
    newArr.push(arr[i]);
  }
  console.log(newArr.join(''))
  return newArr.join('');
}

function sum (numbers) {
    "use strict";
  
  let total = 0;
    
  if(numbers.length === 0) {
    return 0;
  }
  
  for(let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  
  return total;
    
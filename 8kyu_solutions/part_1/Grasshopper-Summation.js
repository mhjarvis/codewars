var summation = function (num) {
  
    let total = 0;    //hold running total
    
    for(let i = 0; i <= num; i++) {   //loop through num times
      total += i;                     //add current number to total
    }
    return total;   //return total
  }
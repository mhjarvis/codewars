function positiveSum(arr) {
  
    let total = 0;    //hold running total of positive numbers
    
    for(let i = 0; i < arr.length; i++) {   //test each array element if > 0
      if(arr[i] > 0) {
        total += arr[i];    //add positive value to running total
      }
    }
    return total;  
  }
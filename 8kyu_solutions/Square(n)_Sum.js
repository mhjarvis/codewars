function squareSum(numbers){
      
    let total = 0;    //hold running total
    
    for(let i = 0; i < numbers.length; i++) {   //loop through array based on length
      let temp = Math.pow(numbers[i], 2);   //square array element and save to temp variable
      total += temp;    //add to running total
    }
    return total;
  }
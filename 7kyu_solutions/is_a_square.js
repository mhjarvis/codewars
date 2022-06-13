var isSquare = function(n){
    let number = Math.sqrt(n);    //get square root of n
    if(number % 1 == 0) {         //modulo to see if there is a decimal
      return true;                
    }
    return false;
  }
function findOdd(A) {
    let num = 0;
    let val;
    
    if(A.length == 1) {
      return A[0];
    }
    
    for(let i = 0; i < A.length; i++) {
      
      let val = A[i];
      
      for(let j = 0; j < A.length; j++) {
        
        let test = A[i];
  
        if(A[j] == test) {
          num++;
        }
      }
      if(num % 2 == 1) {
        return val;
      }
      num = 0;
    }
    
  }
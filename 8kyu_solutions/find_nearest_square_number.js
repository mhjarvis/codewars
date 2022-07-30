function nearestSq(n){
    if(Math.sqrt(n) % 1 == 0) {
       return n;
    } 
  
    let lower = n;
    let higher = n;
    
    while(true) {
      lower -= 1;
      higher += 1;
      
      if(Math.sqrt(lower) % 1 == 0) {
        return lower;
      }
      if(Math.sqrt(higher) % 1 == 0) {
        return higher;
      }
    }
  }
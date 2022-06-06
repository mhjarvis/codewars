function past(h, m, s){

    let total = 0;    //variable holds total seconds
    
    //add hours converted to seconds to total
    if(h > 0) {
      total = h * 3600;
    }
    
    //add minutes converted to seconds to total
    if(m > 0) {
      total += (m * 60);
    }
    
    //add remaining seconds to total
    total += s;
    
    //convert total seconds to miliseconds
    return total * 1000;
  
  }
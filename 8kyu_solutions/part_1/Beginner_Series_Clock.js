function past(h, m, s){

    let total = 0;
    
    if(h > 0) {
      total = h * 3600;
    }
    if(m > 0) {
      total += (m * 60);
    }
    total += s;
    return total * 1000;
  }

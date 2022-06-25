function find_average(array) {
  
    let num = array.length;
    let total = 0;
    
    if(array.length === 0){return 0;};
    
    for(let i = 0; i < num; i++) {
      total += array[i];
    }
    
    return total / num;
  }
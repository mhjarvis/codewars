function descendingOrder(n){
    n = String(n);
    n = n.split("");  
    
    for(let i = 0; i < n.length; i++) {
      for(let j = i + 1; j < n.length; j++) {
        if(n[j] > n[i]) {
          let temp = n[i];
          n[i] = n[j];
          n[j] = temp;
        }
      }
    }
    n = n.join("");
    return Number(n);
  }
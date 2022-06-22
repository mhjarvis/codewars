function stairsIn20(s){
    let total = 0;
    
    for(let i = 0; i < s.length; i++) {
      for(let j = 0; j < s[i].length; j++){
        total = total + s[i][j];
      }
    }
    console.log(total);
    return total * 20;
  }
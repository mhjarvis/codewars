function XO(str) {
    let x = 0;
    let o = 0;
    
    for(let i = 0; i < str.length; i++) {
      if(str[i].toLowerCase() == 'x') {
        x++;
        continue;
      }
      if(str[i].toLowerCase() == 'o') {
        o++;
        continue;
      }
    }
    if(x == o) {
      return true;
    }
    return false;
  }
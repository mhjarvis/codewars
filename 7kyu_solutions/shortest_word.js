function findShort(s){
    s = s.split(" ");
    
    let word = s[0].length;
    for(let i = 1; i < s.length; i++) {
      if(s[i].length < word) {
        word = s[i].length;
      }
    }
    return word;
  }
var uniqueInOrder=function(iterable){
  
    if(iterable.length == 0) {
      return [];
    }
    
    let arr = [iterable[0]];
    let i = 0;
    
    while(i < iterable.length - 1) {
      if(iterable[i] === iterable[i + 1]) {
        i++;
        continue;
      }
      arr.push(iterable[i + 1]);
      i++;
    }
    return arr;
  }
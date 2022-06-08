function getCount(str) {
    let vowelsCount = 0;
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for(let x of str) {
      if(vowels.includes(x)) {
        vowelsCount++;
      }
    }
    
    return vowelsCount;
  }
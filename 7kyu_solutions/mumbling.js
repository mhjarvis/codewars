function accum(s) {
	s = s.split('')
  let arr = [];
  
  for(let i = 0; i < s.length; i++) {
    let current = s[i].toLowerCase();
    let word = ''
    let count = i + 1;
    
    while(count > 0) {
      word += current;
      count--;
    }
    
    arr.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return arr.join("-");
}

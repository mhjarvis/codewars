function spinWords(string){
  string = string.split(" ");
  let arr = [];
  
  for(let i = 0; i < string.length; i++) {
    if(string[i].length >= 5) {
      let temp = string[i].split("").reverse().join("");
      arr.push(temp);
      continue;
    }
    arr.push(string[i]);
  }
  return arr.join(" ");
}

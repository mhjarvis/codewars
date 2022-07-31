function sameCase(a, b){
  
  let letter = /^[a-zA-Z]+$/;
  if(!(/[a-zA-Z]/).test(a) || !(/[a-zA-Z]/).test(b)) {
      return -1;
  }
  
  let letterA = false;
  let letterB = false;
  
  if(a == a.toUpperCase()) {
    letterA = true;
  }
  if(b == b.toUpperCase()) {
    letterB = true;
  }
  if(letterA == letterB) {
    return 1;
  }
  if(letterA != letterB) {
    return 0;
  }
}

function position(letter){

  let alphabete = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
  for(let i = 0; i < alphabete.length; i++) {
    if(letter == alphabete[i]) {
      return "Position of alphabet: " + (i + 1);
    }
  }
}

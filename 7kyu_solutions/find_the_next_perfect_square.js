function findNextSquare(sq) {
  if(Math.sqrt(sq) % 1 != 0) {
    return -1;
  }
  
  let x = sq;
  
  while(true) {
    x += 1;
    if(Math.sqrt(x) % 1 === 0) {
      return x;
    }
  }
}

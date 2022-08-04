function isValidWalk(walk) {
    //test for invalid amount (!= 10);
    if(walk.length != 10) {
      return false;
    }
    
    let northSouth = 0;
    let eastWest = 0;
    
    for(let i = 0; i < walk.length; i++) {
      if(walk[i] == 'n') {
        northSouth++;
      } else if(walk[i] == 's') {
        northSouth--;
      } else if(walk[i] == 'w') {
        eastWest--;
      } else if(walk[i] == 'e') {
        eastWest++;
      }
    }
    
    if(eastWest == 0 && northSouth == 0) {
      return true;
    }
    return false;
  }
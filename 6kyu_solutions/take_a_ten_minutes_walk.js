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

  // Alternative solution

  function isValidWalk(walk) {
    let dx = 0
    let dy = 0
    let dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }
function betterThanAverage(classPoints, yourPoints) {
    let total = 0;
    
    for(value of classPoints) {
      total += value;
    }
    
    let avg = total / classPoints.length;
    
    return yourPoints > avg ? true : false;
  }
  
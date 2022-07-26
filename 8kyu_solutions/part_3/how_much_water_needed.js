function howMuchWater(water, load, clothes){

    if(clothes > load * 2) {
      return 'Too much clothes';
    }
    if(clothes < load) {
      return 'Not enough clothes';
    }
  
    let waterNeeded = (water * Math.pow(1.1, clothes - load));
    return Number(waterNeeded.toFixed(2));
  }
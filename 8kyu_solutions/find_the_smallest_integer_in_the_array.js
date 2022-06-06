class SmallestIntegerFinder {
    findSmallestInt(args) {
    
      let smallestNum = args[0];    //assign first value of array to smallestNum
      
      for(let i = 1; i < args.length; i++) {    //loop through all other array numbers
        if(args[i] < smallestNum) {   //compare each array value to smallestNum
          smallestNum = args[i];    //if array element is smaller, assign to smallestNum
        }
      }
      return smallestNum;
    }
  }
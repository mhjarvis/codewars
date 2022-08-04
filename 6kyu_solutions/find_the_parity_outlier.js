function findOutlier(integers){
    let firstOdd = 0;
    let firstEven = 0;
    let oddCount = 0;
    let evenCount = 0;
    console.log(-10 % 2);
    
    for(let i = 0; i < integers.length; i++) {
      if(integers[i] % 2 == 0 || integers[i] % 2 == -0) {
        firstEven = integers[i];
        evenCount++;
        continue;
      }
      if(integers[i] % 2 == 1 || integers[i] % 2 == -1) {
        firstOdd = integers[i];
        oddCount++;
        continue;
      }
    }
    if(oddCount == 1) {
      return firstOdd;
    }
    return firstEven;
  } 

  // Alternative Solution

  function findOutlier(int) {
    let evens = [];
    let odds = [];
    
    int.forEach(function(num) {
        num % 2 != 0 ? odds.push(num) : evens.push(num)
    });
    return odds.length > 1 ? evens[0] : odds[0];
  }
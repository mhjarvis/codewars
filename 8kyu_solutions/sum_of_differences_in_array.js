function sumOfDifferences(arr) {
    let sum = 0;
    
    arr.sort(function(a, b){return a-b});
    
    arr.reverse();
    
    for(let i = 0; i < arr.length - 1; i++) {
      let temp1 = arr[i] - arr[i + 1];
      sum += temp1;
    }
    
    return sum;
  }
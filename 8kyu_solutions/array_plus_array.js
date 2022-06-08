function arrayPlusArray(arr1, arr2) {
    let sum1 = arr1.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
    }, 0);
    
    let sum2 = arr2.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
    }, 0);
  
    return sum1 + sum2;
  }
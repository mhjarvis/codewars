function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    let a = [];
    newArr = newArr.sort(function(a, b){return a-b});
    for(let i = 0; i < newArr.length; i++) {
      a[i] = newArr[i];
    }
    a = [...new Set(a)];
    return a;
  }


  //better solution

  function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
  }
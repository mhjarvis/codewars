function firstNonConsecutive (arr) {
    console.log(arr);
    if(arr.length == 0) { return null};
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i] + 1 != arr[i + 1]) {
        return arr[i + 1];
      }
    }
    return null;
  }
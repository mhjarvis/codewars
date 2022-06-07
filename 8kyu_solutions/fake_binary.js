function fakeBin(x){

    let arr = x.split('');
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] < 5) {
        arr[i] = 0;
      } else {
        arr[i] = 1;
      }
    }
    return arr.join('');
  }

  // more efficient way:

  function fakeBin(x) {
      return x.split('').map(n => n < 5 ? 0 : 1).join('');
  }
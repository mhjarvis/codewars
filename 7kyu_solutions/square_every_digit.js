function squareDigits(num){

    let newArr = [];
    let arr = num.toString().split("");
    
    for(let i = 0; i < arr.length; i++) {
      let temp = arr[i] * arr[i];
      newArr.push(temp);
    }
    
    return Number(newArr.join(""));
  }
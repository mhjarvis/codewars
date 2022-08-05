function duplicateCount(text){
    let count = 0;      //maintain number of duplicates
    text = text.toLowerCase().split("");        //standardize for case-sensitivity
    let arr = text;     
    
    while(arr.length > 0) {
      let temp = arr[0];        //assign first element of arr to temp
      let tempArr = arr.filter(word => word == temp);       //create temp arr with all values of temp
      if(tempArr.length > 1) {      //if arr has more than one value
        count++;                    //increase count
      }
      arr = arr.filter(word => word != temp);       //reset arr without temp value
    }
    return count;
  }
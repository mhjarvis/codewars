function duplicateCount(text){
    let count = 0;
    text = text.toLowerCase().split("");
    let arr = text;
    
    while(arr.length > 0) {
      let temp = arr[0];
      let tempArr = arr.filter(word => word == temp);
      if(tempArr.length > 1) {
        count++;
      }
      arr = arr.filter(word => word != temp);
    }
    return count;
  }
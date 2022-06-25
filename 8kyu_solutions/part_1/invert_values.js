function invert(array) {
   
    let arr = [];       //create empty array

    for(let i = 0; i < array.length; i++) {     //loop through original array
      let temp = array[i];                      //select the array element
      arr.push(temp * -1);                      //invert and push to new array
    }
    
    return arr;
  }
function solution(str){
  
    let arr = str.split('');    //seperate 'str' into an array
    arr.reverse();              //reverse all letters in array
    arr = arr.join('');         //joing each letter in array to form word
      
    return arr;  
  }

  // simplified version

  function solution(str){
    return str.split('').reverse().join('');    //for a shorter version
  }
function repeatStr (n, s) {

    let str = '';   //hold value of repeating strings
    
    for(let i = 0; i < n; i++) {    //loop through n times
      str += s;   //add string to str value
    }
    return str;
  }
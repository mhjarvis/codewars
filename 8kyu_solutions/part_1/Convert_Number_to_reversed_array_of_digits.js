//using modulo

function digitize(n) {
  
    let arr = [];   //initalize array to hold reversed numbers
    
    if(n == 0) {    //test for n = 0
      return [0];   //if n = 0, return [0]
    }
    
    while(n > 0) {              //start loop to work through n
      let temp = n % 10;        //use modulo to get the last number (if not 0)
      arr.push(temp);           //push number to arrray
      n = Math.floor(n / 10);   //divide by 10 and round down to remove last number
    }
    
    return arr;
  }

  //using the 'convert-to-string' approach

  function digitize(n) {

    n = String(n).split("").reverse();      //convert n to String, break apart and reverse
    for (let i = 0; i < n.length; i++) {    //create loop based on the length of array n
      n[i] = Number(n[i]);                  //convert back to number
    }
    return n;
  }
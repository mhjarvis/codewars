function maskify(cc) {
    if(cc.length < 5) {     //return anything with less than 4 characters
      return cc;
    }
    cc = cc.split("");      //split into array
    for(let i = 0; i < cc.length - 4; i++) {        //replace every string up to cc.length - 4
      cc[i] = "#";
    }
    return cc.join("");     //join into string
  }
  

  //other solutions

  function maskify(cc) {
    let last4 = cc.slice(-4);   //assign the last 4 positions to variable
    cc = cc.slice(0, -4);   //slice off the last 4 positions
    cc = cc.replace(/./g , "#");    //replace each letter with #
    
    return cc + last4;
  
  }
  
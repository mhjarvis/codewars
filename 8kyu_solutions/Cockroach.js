function cockroachSpeed(s) {

    s = s * (1000/36);    //conversion factor
      
    return Math.floor(s);   //Math.floor() rounds down to nearest integer
  }
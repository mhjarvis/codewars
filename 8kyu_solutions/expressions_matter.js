function expressionMatter(a, b, c) {
    let largestNumber = 0;
    
    if(a + b + c > largestNumber) {
      largestNumber = a + b + c;
    }
    if((a + b) * c > largestNumber) {
      largestNumber = (a + b) * c;
    }
    if(a * (b + c) > largestNumber) {
      largestNumber = a * (b + c);
    }
    if(a * b * c > largestNumber) {
      largestNumber = a * b * c;
    }
    return largestNumber;
  }
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

  // better solution
  function expressionMatter(a, b, c) {
    return Math.max(
      a + b + c,
      a * b * c,
      a * (b + c),
      (a + b) * c,
      a + b * c,
      a * b + c,
    );
  }
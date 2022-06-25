function countPositivesSumNegatives(input) {
  
    let emptyArr = [];
    let countOfPositives = 0;
    let countOfNegatives = 0;  
    
    console.log(input);
    if(input == null || input == [] || input.length == 0) {return emptyArr};
    
    for(let i = 0; i < input.length; i++) {
      if(input[i] < 0) {countOfNegatives += input[i]};
      if(input[i] > 0) {countOfPositives++};
    }
    
    let arr = [countOfPositives, countOfNegatives];
    
    return arr;  
  }
function highAndLow(numbers){
    numbers = numbers.split(" ");
    
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    
    return max + " " + min;
  }
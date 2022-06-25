var findAverage = function (nums) {
    let total = 0;
    nums.forEach(element => total += element);
    return total / nums.length;
  }
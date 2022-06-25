var findAverage = function (nums) {
    let total = 0;
    nums.forEach(element => total += element);
    return total / nums.length;
  }

  // other solution

  const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;

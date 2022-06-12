function getMiddle(s)
{
  let arr = s.split("");
  let length = arr.length;
  let isOdd = arr.length % 2;
  
  if(isOdd == 0) {
    let x = arr[length / 2 - 1];
    let y = arr[length / 2];
    return x + y;
  }
  
  if(isOdd == 1) {
    let x = arr[Math.floor(length / 2)];
    return x;
  }
}
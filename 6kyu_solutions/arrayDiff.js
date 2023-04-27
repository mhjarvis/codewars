function arrayDiff(a, b) {
  let arr = []
  
  for(let i = 0; i < a.length; i++) {
    if (!(b.includes(a[i]))) {
      arr.push(a[i]);
    }
  }
  return arr;
}

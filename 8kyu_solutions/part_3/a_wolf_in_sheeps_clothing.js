function warnTheSheep(queue) {
  let n = 0;
  if(queue[queue.length - 1] == 'wolf') {
    return 'Pls go away and stop eating my sheep'
  }
  for(let i = queue.length - 1; i >= 0; i--) {
    if(queue[i] == 'wolf') {
      return 'Oi! Sheep number ' + n + '! You are about to be eaten by a wolf!';
    }
    n = n + 1;
  }
}

function sayHello( name, city, state ) {
  let n = '';
  for(let i = 0; i < name.length; i++) {
    n += name[i];
    if(i < name.length - 1) {
      n += " ";
    }
  }
  return `Hello, ${n}! Welcome to ${city}, ${state}!`;
}

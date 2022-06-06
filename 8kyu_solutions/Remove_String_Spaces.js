function noSpace(x){
  
    x = x.split(' ');   //split string up by spaces
    x = x.join('');     //join string without spaces
    
    return x;
  }
function removeChar(str){
  
    str = str.split("");                  //split string into an array
    str = str.slice(1, str.length - 1);   //cut out text between first and last character
    str = str.join("");                   //join string together into one word
    
    return str;
  };
  
// simplified version

function removeChar(str){
  
    return str.split("").slice(1, str.length - 1).join("");
   
  };
  
  
function isIsogram(str){
  
    if(str === "") {    //test for blank input
      return true;
    }
    
    str = str.toLowerCase();    //set word to lower case
  
    for(let i = 0; i < str.length; i++) {   //loop through word starting with first letter
      for(let j = i + 1; j < str.length; j++) {   //loop through remaining letters
        if(str[i] === str[j]) {   //compare letter to rest of letters in word
          return false;
        }
      }
    }
    return true;    //default if no duplicates found
  }
function solution(str, ending){
  
  if(str.split("").splice(str.length - ending.length, str.length).join("") == ending) {
    return true;
  }
  return false;
};

// alternative (shorter solution)

function solution(str, ending){
  return str.endsWith(ending);
};

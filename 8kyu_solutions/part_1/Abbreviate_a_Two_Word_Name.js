function abbrevName(name){

    let firstInitial = name[0].toUpperCase();
    let secondInitial;
    
    for(let i = 0; i < name.length; i++) {
      if(name[i] == " ") {
        secondInitial = name[i + 1].toUpperCase();
      }
    }
    return `${firstInitial}.${secondInitial}`;
  }

  //shorter solution

  function abbrevName(name){

    name = name.split(" ");
    
    return name[0][0].toUpperCase() + "." + name[1][0].toUpperCase();
  }
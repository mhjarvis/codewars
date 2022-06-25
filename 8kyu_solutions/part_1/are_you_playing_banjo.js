function areYouPlayingBanjo(name) {
    let temp = name.split("");
    
    if(temp[0].toLowerCase() == 'r') {
      return `${name} plays banjo`;
    }
    return `${name} does not play banjo`;
  }
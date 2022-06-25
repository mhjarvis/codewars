Array.prototype.filter = function (func) {
    let filtered = [];  
    for(let i = 0; i < this.length; i++) {
      if (func(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
  }
  
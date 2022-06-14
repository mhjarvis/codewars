function filter_list(l) {

    const result = l.filter(checkString);
    
    function checkString(str) {
      return typeof(str) != 'string';
    }
    
    return result;
  }
  
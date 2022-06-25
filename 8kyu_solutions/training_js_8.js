function howManydays(month){
    var days;
    switch (month){
      case 4:
        return 30;
        break;
      case 6:
        return 30;
        break;
      case 9:
        return 30;
        break;
      case 11:
        return 30;
        break
      case 2:
        return 28;
        break;
      default:
        return 31;
    }
    return days;
  }
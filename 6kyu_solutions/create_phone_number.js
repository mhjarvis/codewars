function createPhoneNumber(numbers){
    let num = ['(', , , , ')',' ',,,,'-',,,,,];     //phone number layout
    let j = 0;      //for referencing 'numbers' index
    
    for(let i = 0; i < num.length; i++) {       //iterate through num array
      if(num[i] == undefined) {     //if num[i] is undefined
        num[i] = numbers[j];        //put numbers[j] into num[i]
        j++;        //increase j to access next array element in numbers
      }
    }
    return num.join('');        //join array
  }
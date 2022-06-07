function bmi(weight, height) {
    let val = weight / (height * height);
    
    if(val < 18.5){return "Underweight"}
    if(val <= 25.0){return "Normal"}
    if(val <= 30.0){return "Overweight"}
    if(val > 30){return "Obese"}
  }
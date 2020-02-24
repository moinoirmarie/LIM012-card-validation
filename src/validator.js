const validator = {
  isValid:(p1) => {
      let cardNumReverse = p1.split("").reverse();
      let sum = 0;
      for (let i = 0; i < cardNumReverse.length; i++) {
        let iDigits = cardNumReverse[i];
        let intDigits = parseInt(iDigits);
        if ((i % 2) === 1) {
          intDigits *= 2;
          if (intDigits >= 9) {
            intDigits -= 9; 
          }
        }
      sum += intDigits; 
      }

      if(sum % 10 === 0) {
        return true;	 
      } else {
        return false;
      }
 }, 

 maskify:(creditCardNumber) => {
  let cardNumDigits = Array.from(creditCardNumber);
  for (let i=0; i<cardNumDigits.length - 4; i++) {			
    cardNumDigits[i] = "#";		
}		
  return cardNumDigits.join("");
}
};

export default validator;
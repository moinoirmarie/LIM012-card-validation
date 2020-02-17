const validator = {

		validCreditCard(cardNumber) {

			let validNum = /^[0-9]{16}$/;
  
			if (validNum.test(cardNumber.value) === true) {
			
				let cardNumReverse = Array.from(cardNumber.value).reverse();
				let sum = 0;
				let even = false;
				
					for (let i=0; i<cardNumReverse.length; i++) {
					
					let iDigits = cardNumReverse[i];
					let intDigits = parseInt(iDigits);
					
						if ((i % 2) === 1) {
							intDigits *= 2;  
							//4137894711755904
							
							if (intDigits >= 9) {
							intDigits -= 9; 
							}
							
						}
						
						sum += intDigits; 
						}
				
				return (sum % 10) === 0;
			
			} else {
				alert("Ingrese un número de tarjeta de 16 carácteres.");
			}

	}
};
	export default validator;

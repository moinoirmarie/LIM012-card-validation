import validator from './validator.js';
// Variables
let firstDesktop = document.getElementById("firstScreen");
let secondDesktop = document.getElementById("secondScreen");
let thirdDesktop = document.getElementById("thirdScreen");
let regBtn = document.getElementById("regBtn");
let enterEmail = document.getElementById("enterEmail");
let enterPassword = document.getElementById("enterPassword");
let enterFirstName = document.getElementById("enterFirstName");
let enterLastName = document.getElementById("enterLastName");
let confirmEmail = document.getElementById("confirmEmail");
let confirmPassword = document.getElementById("confirmPassword");
let creditCardNumber = document.getElementById("cardNumber");
let valBtn = document.getElementById("valBtn");
let welcome = document.getElementById("welcome");
let invalidEmail = document.getElementById("invalidEmail");
let missingFullName = document.getElementById("missingFullName");
let emailDontMatch = document.getElementById("emailDontMatch");
let passwordDontMatch = document.getElementById("passwordDontMatch");
let invalidCardNum = document.getElementById("invalidCardNum");
let maskCardNum = document.getElementById("maskCardNum");
let backBtn = document.getElementById("back");
let exitBtn = document.getElementById("toFirstScreen");

// Expresiones regulares
let validEmail = /\S+@\S+\.\S+/;
let validNum = /^[0-9]*$/;

// Bloquear pantallas 2 y 3
secondDesktop.style.display = "none";
thirdDesktop.style.display = "none";

// Ingresa a la segunda pantalla solo si el correo electronico ingresado es valido
regBtn.addEventListener("click", () => {
    if (validEmail.test(enterEmail.value) === true) {
        firstDesktop.style.display = "none";
        secondDesktop.style.display = "block";
    } else {
      invalidEmail.innerHTML = "Por favor, ingresa un correo válido. *";
      enterEmail.value = "";
    }
});

// Vuelve a la pantalla principal
backBtn.addEventListener("click", () => {
    secondDesktop.style.display = "none";
    firstDesktop.style.display = "block";
    enterEmail.value = "";
});

// Ingresa a la tercera pantalla solo si los datos ingresados son validos
valBtn.addEventListener("click", () => {
    if (enterFirstName.value !== "" && enterLastName.value !== "") {
        if (enterEmail.value === confirmEmail.value) {
            if (enterPassword.value !== "" && confirmPassword.value) {
                if (validNum.test(creditCardNumber.value) && creditCardNumber.value !== "" && (validator.isValid(creditCardNumber.value)) === true) {
                    //4137894711755904
                    //1234123412341234
                    secondDesktop.style.display = "none";
                    thirdDesktop.style.display = "block";   
                    welcome.innerHTML = "¡Hola, " + enterFirstName.value + " " + enterLastName.value + "!";
                    maskCardNum.innerHTML = validator.maskify(creditCardNumber.value);
                } else {
                    invalidCardNum.innerHTML = "Ingrese un número de tarjeta válido. *";
                }
            } else {
                passwordDontMatch.innerHTML = "Sus contraseñas no coinciden. *";
            }
        } else {
            emailDontMatch.innerHTML = "Sus correos no coinciden. *";
    } 
    } else {
        missingFullName.innerHTML = "Ingrese su nombre y apellido. *";
    }   
    }); 

exitBtn.addEventListener("click", () => {
    thirdDesktop.style.display = "none";
    firstDesktop.style.display = "block";
    enterEmail.value = "";
    confirmEmail.value = "";
    enterFirstName.value = "";
    enterLastName.value = "";
    enterPassword.value = "";
    confirmPassword.value = "";
    creditCardNumber.value = "";
});
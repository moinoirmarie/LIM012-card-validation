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
let cardNumber = document.getElementById("cardNumber");
let valBtn = document.getElementById("valBtn");
let welcome = document.getElementById("welcome");
let invalidEmail = document.getElementById("invalidEmail");
let maskCardNum = document.getElementById("maskCardNum");


// 4557880533424093

// Expresiones regulares
let validEmail = /\S+@\S+\.\S+/;

// Bloquear pantallas 2 y 3

secondDesktop.style.display = "none";
thirdDesktop.style.display = "none";

// Ingresa a la segunda pantalla solo si el correo electronico ingresado es valido
regBtn.addEventListener("click", () => {
    if (validEmail.test(enterEmail.value) === true) {
        firstDesktop.style.display = "none";
        secondDesktop.style.display = "block";
    } else {

        invalidEmail.innerHTML = "Por favor, ingresa un correo válido.";
    }
    
});


// Ingresa a la tercera pantalla solo si los datos ingresados son validos
valBtn.addEventListener("click", () => {

    if (enterFirstName.value !== "" && enterLastName.value !== "") {

        if (enterEmail.value === confirmEmail.value) {

            if (enterPassword.value !== "" && confirmPassword.value) {
                
                if ((validator.validCreditCard(cardNumber)) === true) {
                    //4137894711755904
                    //1234123412341234
                    secondDesktop.style.display = "none";
                    thirdDesktop.style.display = "block";   
                    welcome.innerHTML = "¡Hola, " + enterFirstName.value + " " + enterLastName.value + "!";
                   // maskCardNum.innerHTML = cardNumber.value.replaceAt(0,"************");
                } else {
                    alert("Ingrese un número de tarjeta válido")
                }

            } else {
                alert("Sus contraseñas no coinciden.");
            }

        } else {
            alert("Sus correos no coinciden.");
    } 

    } else {
        alert ("Ingrese su nombre y apellido.")
    }

       
    }); 

    

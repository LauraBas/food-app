'use strict';

const cart = document.getElementById('cart');
cart.addEventListener('click', change);

const buttonBack = document.getElementById('return');
buttonBack.addEventListener('click', change);


function cleanScreen(){
    const principal = document.getElementById('principal');
    principal.style.display = (principal.style.display === "block") ? "none" : "block" ;
}

function changeScreen(){
    const checkout = document.getElementById('checkout');
    checkout.style.display = (checkout.style.display === "block") ? "none" : "block";
}

function change(){
    cleanScreen();
    changeScreen();
}

  




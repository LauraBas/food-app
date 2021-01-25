import { printOrder } from "./Order.js";
import { printMenu } from "./Menu.js";

const cart = document.getElementById('cart');
cart.addEventListener('click', change);

const buttonBack = document.getElementById('return');
buttonBack.addEventListener('click', change);

function toggleMenuScreen(){
    const principal = document.getElementById('principal');
    principal.style.display = (principal.style.display === "block") ? "none" : "block" ;
    if (principal.style.display === "block"){ printMenu() };
}

function toggleCheckoutScreen(){
    const checkout = document.getElementById('checkout');
    checkout.style.display = (checkout.style.display === "block") ? "none" : "block";
    if (checkout.style.display === "block"){ printOrder() };
}

export function updateOrder(){
    const checkout = document.getElementById('checkout');
    if (checkout.style.display === "block"){ printOrder() };
}

function change(){
    toggleMenuScreen();
    toggleCheckoutScreen();
}


  




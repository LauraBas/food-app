import { createMenu, getProductsInCart } from "./menuCard.js";

const cart = document.getElementById('cart');
cart.addEventListener('click', change);

const buttonBack = document.getElementById('return');
buttonBack.addEventListener('click', change);

function toggleMenuScreen(){
    const principal = document.getElementById('principal');
    principal.style.display = (principal.style.display === "block") ? "none" : "block" ;
}

function toggleCheckoutScreen(){
    const checkout = document.getElementById('checkout');
    checkout.style.display = (checkout.style.display === "block") ? "none" : "block";
    if (checkout.style.display === "block"){ printOrder() };
}

function change(){
    toggleMenuScreen();
    toggleCheckoutScreen();
}
const menuInCart = getProductsInCart();

function printOrder(){
    const order = document.getElementById('order')
    menuInCart.forEach(menu => { createMenu(menu, order) });
    console.log(menuInCart);
   
}

  




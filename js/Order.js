import { createMenu, getProductsInCart } from "./menuCard.js";

const menuInCart = getProductsInCart();

 export function printOrder(){
    const order = document.getElementById('order')
    menuInCart.forEach(menu => { createMenu(menu, order) });
    console.log(menuInCart);
   
}
import { createMenu } from "./menuCard.js";
import { dataMenu } from "./DataMenu.js"  ;
import {  getProductsInCart } from "./orderCalculation.js";


const menuInCart = getProductsInCart();

 export function printOrder(){
    const order = document.getElementById('order')
    order.innerHTML = '';
    dataMenu.forEach(menu => 
        { if(menuInCart[menu.id] > 0) createMenu(menu, order, 'checkout') });   
}
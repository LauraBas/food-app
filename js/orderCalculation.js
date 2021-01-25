import { dataMenu } from "./DataMenu.js"  ;

const productsInCart = {};

export function addToCart(id){
    if(!productsInCart[id]) {
        productsInCart[id] = 0;
    }
    productsInCart[id]++    
}   
 
export function removeFromCart(id){          
     if(productsInCart[id] > 0) {
         productsInCart[id]--
     }
}
 
export function calculateTotal(){
     let subtotal = 0;
     dataMenu.forEach(menu => { 
         if(productsInCart[menu.id] > 0){
             subtotal += menu.price * productsInCart[menu.id]
         }        
     });
     let taxes = subtotal * 0.07;
     let delivery = 0;
     if (subtotal > 25){
         delivery = 0;
     } else {
         delivery = 5;
     }
     let total = subtotal + taxes + delivery;
     return [subtotal, taxes, delivery, total];
 }

 export function getProductsInCart(){
     return productsInCart;
 }
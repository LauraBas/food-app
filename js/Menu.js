import { dataMenu } from "./DataMenu.js"  ;
import { createMenu } from "./menuCard.js";

 export function printMenu(){
    const menu = document.getElementById('menu'); 
    menu.innerHTML = '';
    dataMenu.forEach(data => { createMenu(data, menu, 'menu') });
}
window.addEventListener ('load', function(){
    printMenu();
})




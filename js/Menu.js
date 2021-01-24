import { dataMenu } from "./DataMenu.js"  ;
import { createMenu } from "./menuCard.js";

window.addEventListener ('load', function(){
    const menu = document.getElementById('menu'); 

    dataMenu.forEach(data => { createMenu(data, menu) });

})




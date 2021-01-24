import { dataMenu } from "./DataMenu.js"  ;

export function createMenu(data, menu){       
    const food = document.createElement('div');  
    food.className = 'food';  
    const description = document.createElement('div');
    description.className = "description";
    const counter = document.createElement('section');
    setImage(data.image, food);
    setPrice(data.price, description);
    setTitle(data.title, description);
    setProduct(data.description,food, description);
    setCounter(food, counter, data.id);
    menu.appendChild(food);
}
const productsInCart = [];

function setImage(img, div){
    const image = document.createElement('img');
    image.src = img;
    div.appendChild(image); 
}

function setPrice(value, div){
    const price = document.createElement('p');
    price.className = "prices";
    price.innerHTML = value;
    div.appendChild(price);
}

function setTitle(valueTitle, div){
    const title = document.createElement('h5');
    title.className = "product";
    title.innerHTML = valueTitle;
    div.appendChild(title);
}

function setProduct(valueProduct, div, description){
    const product = document.createElement('h6');
    product.innerHTML = valueProduct;
    description.appendChild(product);
    div.appendChild(description);
}
 
function setCounter(div, counter, dataId){
    counter.className = "counter";
    counter.id = "counter" + dataId;
    setAdd(counter, dataId);
    setAmount(counter);
    setRest(counter, dataId);
    div.appendChild(counter);
}

function setAmount(counter){
    const count = document.createElement('p');
    count.className = "quantity";
    count.id = 'count';
    count.innerHTML = 0;
    counter.appendChild(count);
}

function setAdd(counter, dataId){
    const add = document.createElement('button');
    add.className = "add";
    add.onclick = function(){sum(counter.id, dataId)};
    add.innerHTML = "+";
    counter.appendChild(add);
}

function setRest(counter, dataId){
    const rest = document.createElement('button');
    rest.className = "rest";
    rest.onclick = function(){subst(counter.id, dataId)};
    rest.innerHTML = "-";
    counter.appendChild(rest);
}

function sum(counterId, id){   
    let counter = document.getElementById(counterId);
    let count = counter.getElementsByTagName("p")[0];
    count.innerHTML = parseInt(count.innerHTML) + 1;
   addToCart(id)
}

function subst(counterId, id){
    let counter = document.getElementById(counterId);
    let count = counter.getElementsByTagName("p")[0];
    let amount =parseInt(count.innerHTML);
    if(amount > 0){
        count.innerHTML = amount - 1;
    }
    removeFromCart(id)
}

function addToCart(id){
    dataMenu.forEach(menu => { 
        if (menu.id == id)
        productsInCart.push(menu)            
    });    
    console.log(productsInCart);
}   

function removeFromCart(id){          
    for (let i = 0; i < dataMenu.length; i++){
        if (dataMenu[i].id == id){
            productsInCart.splice(i, 1);
        }
    }  
    console.log(productsInCart);
}

export function getProductsInCart(){
    return productsInCart;
}
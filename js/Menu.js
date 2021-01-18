window.onload = function(){
    const menu = document.getElementById('menu');
   
    dataMenu = [
        {
            image:"public/images/menu/breakfast.jpg",
            price:"15.5€",
            title:"Desayuno de la Casa",
            description:"Huevos, pancakes y tocino",
            id: 1,
        },
        {
            image:"public/images/menu/pasta.jpg",
            price:"18.5€",
            title:"Pasta de la Casa",
            description:"Pasta, tomate y albhaca",
            id: 2,
        },
        {
            image:"public/images/menu/salad.jpg",
            price:"12.5€",
            title:"Salad de la Casa",
            description:"Lechuga, tomate y cebolla",
            id: 3,
        },
    
    ]

    dataMenu.forEach(data => { createMenu(data) });
    
    function createMenu(data){       
        const food = document.createElement('div');  
        food.className = 'food';  
        const description = document.createElement('div');
        description.className = "description";
        const counter = document.createElement('section');
        setImage(data.image, food);
        setPrice(data.price, description);
        setTitle(data.title, description);
        setProduct(data.description,food, description);
        setCounter(food, counter);
        menu.appendChild(food);
    }

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
     
    function setCounter(div, counter){
        counter.className = "counter";
        setAdd(counter);
        setAmount(counter);
        setRest(counter);
        div.appendChild(counter);
    }

    function setAdd(counter){
        const add = document.createElement('button');
        add.className = "add";
        add.innerHTML = "+";
        counter.appendChild(add);
    }

    function setAmount(counter){
        const count = document.createElement('p');
        count.className = "quantity";
        count.innerHTML = 0;
        counter.appendChild(count);
    }
    
    function setRest(counter){
        const rest = document.createElement('button');
        rest.className = "rest";
        rest.innerHTML = "-";
        counter.appendChild(rest);
    }
                
}




window.onload = function(){
   
    const data = ["public/images/menu/breakfast.jpg", "15.5€", "Desayuno de la Casa", "Huevos, pancakes y tocino"];
    const info = ["public/images/menu/pasta.jpg", "17.5€", "Pasta de la Casa", "Pasta, pesto y tocino"];
    const infoFood = ["public/images/menu/salad.jpg", "17.5€", "Salad de la Casa", "Tomato, pesto y tocino"];

    const menu = document.getElementById('menu');
    
    createMenu(data);
    createMenu(info);
    createMenu(infoFood);
    
    function createMenu(data){       
        const food = document.createElement('div');  
        food.className = 'food';  
        const description = document.createElement('div');
        description.className = "description";
        const counter = document.createElement('section');
        setImage(data[0], food);
        setPrice(data[1], description);
        setTitle(data[2], description);
        setProduct(data[3],food, description);
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
        price.innerHTML = data[1];
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




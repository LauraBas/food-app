window.onload = function(){
   
    data = ["public/images/menu/breakfast.jpg", "15.5€", "Desayuno de la Casa", "Huevos, pancakes y tocino"];
    food = document.getElementById('food');

    const image = document.createElement('img');
    image.src = data[0];
    food.appendChild(image);

    const price = document.createElement('p');
    price.className = "prices";
    price.innerHTML = data[1];

    const description = document.createElement('div');
    description.className = "description";
    description.appendChild(price);
    
    
    const title = document.createElement('h5');
    title.className = "product";
    title.innerHTML = data[2];
    description.appendChild(title);
    
    const product = document.createElement('h6');
    product.innerHTML = data[3]
    description.appendChild(product);
    
    food.appendChild(description);
   
    const counter = document.createElement('section');
    counter.className = "counter";

    const add = document.createElement('button');
    add.className = "add";
    add.innerHTML = "+";
    counter.appendChild(add);

    const count = document.createElement('p');
    count.className = "quantity";
    count.innerHTML = 0;
    counter.appendChild(count);

    const rest = document.createElement('button');
    rest.className = "rest";
    rest.innerHTML = "-";
    counter.appendChild(rest);

    food.appendChild(counter);
           
    
    }




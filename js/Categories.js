import { categories } from "./CategoriesData.js"  ;

window.addEventListener ('load', function(){

    const slider = document.getElementById('slider'); 
    
    categories.forEach(categorie => {print(categorie)});

    function print(categorie){
        const div = document.createElement('article');
        div.className = "card-slider";
        const image = document.createElement('img');
        image.src = categorie.image;
        div.appendChild(image);
        const name = document.createElement('p');
        name.innerHTML = categorie.name;
        div.appendChild(name);
        slider.appendChild(div);

    }
});
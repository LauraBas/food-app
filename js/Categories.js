import { categories } from "./CategoriesData.js"  ;

window.addEventListener ('load', function(){

    const slider = document.getElementById('slider'); 
    
    categories.forEach(category => {print(category)});

    function print(category){
        const div = document.createElement('article');
        div.className = "card-slider";
        const image = document.createElement('img');
        image.src = category.image;
        div.appendChild(image);
        const name = document.createElement('p');
        name.innerHTML = category.name;
        div.appendChild(name);
        slider.appendChild(div);

    }
});
'use strict';
document.getElementById('plus').addEventListener('click',sum);
document.getElementById('substract').addEventListener('click', substract);
class App{

   

 counter = 0;    

    sum(){
        counter++;
        console.log(counter);
        document.getElementById('counter').innerHTML = counter;
    }


    substract(){
        if (counter > 0){
            counter--;
        }
        document.getElementById('counter').innerHTML = counter;
    }
  
}




var currentNumber = 0;

var currentNumberWrapper = document.getElementById('currentNumber');


function increment (){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber === 0){
        currentNumberWrapper.style.color = 'black';
    }else if(currentNumber >= 1){
        currentNumberWrapper.style.color = 'blue';
    }      
}


function decrement (){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber === 0){
        currentNumberWrapper.style.color = 'black';
    }else if(currentNumber <= 1){
        currentNumberWrapper.style.color = 'red';
    }
}

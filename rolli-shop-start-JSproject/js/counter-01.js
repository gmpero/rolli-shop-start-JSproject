// находим элементы на странице
minusBtn = document.querySelector('[data-action="minus"]');
plusBtn = document.querySelector('[data-action="plus"]');
counterBtn = document.querySelector('[data-counter]');

// отслеживаем клик по кнопке
minusBtn.addEventListener('click', function(){
    // если счетчик > 1 то тогда уменьшаем counterBtn 
    if(parseInt(counterBtn.innerText) > 1){
        counterBtn.innerText = --counterBtn.innerText;
    }
    
});

plusBtn.addEventListener('click', function(){
    // увеличиваем counterBtn (изменяем текст в блоке)
    counterBtn.innerText = ++counterBtn.innerText;
});

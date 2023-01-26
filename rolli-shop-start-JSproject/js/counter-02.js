// Добавляем прослушку на всем окне
window.addEventListener('click', function(event){
    // Проверяем является ли элемент кнопкой плюс
    if(event.target.dataset.action === 'plus')
    {
        const counterWrapper = event.target.closest('.counter-wrapper');
        console.log(counterWrapper);

        const counter = counterWrapper.querySelector('[data-counter]');
        //console.log(counter);
        counter.innerText = ++counter.innerText;
    }
    // Проверяем является ли элемент кнопкой минус
    if(event.target.dataset.action === 'minus')
    {
        const counterWrapper = event.target.closest('.counter-wrapper');
        console.log(counterWrapper);

        const counter = counterWrapper.querySelector('[data-counter]');
        
        if(parseInt(counter.innerText) > 1){
            //console.log(counter);
            counter.innerText = --counter.innerText;
        }
    }

})
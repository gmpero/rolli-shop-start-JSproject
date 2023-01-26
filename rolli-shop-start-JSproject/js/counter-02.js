// Добавляем прослушку на всем окне
window.addEventListener('click', function(event){
    let counter;
    // Проверяем является ли элемент кнопкой плюс или минус
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus')
    {
        // находим родитель элемента и присваиваем в переменную
        const counterWrapper = event.target.closest('.counter-wrapper');
        // у родителя элемента находим нужный нам блок по дата атрибуту и записываем значение в переменную
        counter = counterWrapper.querySelector('[data-counter]');
    }
    // Проверяем является ли элемент кнопкой плюс
    if(event.target.dataset.action === 'plus')
    {    
        counter.innerText = ++counter.innerText;
    }
    // Проверяем является ли элемент кнопкой минус
    if(event.target.dataset.action === 'minus')
    {
        if(parseInt(counter.innerText) > 1)
        {
            counter.innerText = --counter.innerText;
        }
    }
    
})

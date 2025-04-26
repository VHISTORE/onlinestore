document.querySelector('.next-btn').addEventListener('click', function() {
    document.querySelector('.carousel').scrollBy({
        left: 320,  // Прокручивает на 320px (ширина элемента + отступ)
        behavior: 'smooth'
    });
});

document.querySelector('.prev-btn').addEventListener('click', function() {
    document.querySelector('.carousel').scrollBy({
        left: -320,  // Прокручивает в обратную сторону
        behavior: 'smooth'
    });
});

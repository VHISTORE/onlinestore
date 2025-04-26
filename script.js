const carousel = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

// Функция начала перетаскивания
carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.style.cursor = 'grabbing';
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

// Функция окончания перетаскивания
carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
});

// Функция, когда мышь покидает область карусели
carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
});

// Функция движения мыши
carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Ускорение прокрутки
    carousel.scrollLeft = scrollLeft - walk;
});

// Для мобильных устройств (перетаскивание по экрану)
carousel.addEventListener('touchstart', (e) => {
    isDown = true;
    carousel.style.cursor = 'grabbing';
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchend', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
});

carousel.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Ускорение прокрутки
    carousel.scrollLeft = scrollLeft - walk;
});


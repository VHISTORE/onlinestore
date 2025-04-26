let isDown = false;
let startX;
let scrollLeft;
const carousel = document.querySelector('.carousel');

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.style.cursor = 'grabbing';
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Ускорение прокрутки
    carousel.scrollLeft = scrollLeft - walk;
});

// Для мобильных устройств
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

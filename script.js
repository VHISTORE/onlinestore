let index = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveCarousel() {
    const carousel = document.querySelector('.carousel');
    index = (index + 1) % totalItems;  // Циклическая прокрутка

    // Прокрутка карусели влево
    carousel.style.transform = `translateX(-${index * 320}px)`; // Ширина элемента + отступ
}

// Плавная прокрутка карусели каждые 3 секунды
setInterval(moveCarousel, 3000);  // 3000 мс (3 секунды)


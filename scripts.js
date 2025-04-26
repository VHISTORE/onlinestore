document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.products-carousel');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');
  const productWidth = document.querySelector('.product').offsetWidth + 20; // ширина товара + отступ

  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * productWidth}px)`;
  }

  leftBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  rightBtn.addEventListener('click', function() {
    if (currentIndex < carousel.children.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });
});

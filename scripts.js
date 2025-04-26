document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.products-carousel');
  let startX, endX;

  // Обработчик начала свайпа
  carousel.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
  });

  // Обработчик окончания свайпа
  carousel.addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].clientX;

    if (startX > endX) {
      // Свайп влево
      carousel.style.transform = `translateX(-${carousel.offsetWidth / 3}px)`;
    } else if (startX < endX) {
      // Свайп вправо
      carousel.style.transform = `translateX(${carousel.offsetWidth / 3}px)`;
    }
  });
});

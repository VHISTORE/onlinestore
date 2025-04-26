document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.products-carousel');
  const products = document.querySelectorAll('.product img');
  const modal = document.getElementById('productModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const closeModal = document.querySelector('.close');

  // Открытие модального окна
  products.forEach(img => {
    img.addEventListener('click', function() {
      const parent = img.parentElement;
      const title = parent.getAttribute('data-title');
      const description = parent.getAttribute('data-description');
      
      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modal.style.display = "block";
    });
  });

  // Закрытие модального окна
  closeModal.addEventListener('click', function() {
    modal.style.display = "none";
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

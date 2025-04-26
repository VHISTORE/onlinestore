function openModal(title, description) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function addToCart(event) {
  event.stopPropagation();
  alert('Товар добавлен в корзину!');
}

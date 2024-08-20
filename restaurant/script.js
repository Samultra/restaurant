// Получаем необходимые элементы из DOM
const cartBtn = document.getElementById('cart');
const modal = document.getElementById('cartModal');
const closeBtn = modal.querySelector('.close');
const clearCartBtn = document.getElementById('clearCartBtn');
const cartItemsList = document.getElementById('cartItems');
const successModal = document.getElementById('successModal'); // Новое модальное окно

// Обработчик события для кнопки "Корзина"
cartBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Обработчик события для кнопки закрытия модального окна
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Обработчик события для закрытия модального окна при клике вне его области
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Обработчик события для кнопки "Очистить корзину"
clearCartBtn.addEventListener('click', function() {
  cartItemsList.innerHTML = '';
});

// Функция для добавления товара в корзину
function addToCart(title, imageSrc) {
  // Создаем элемент карточки товара
  const cartItem = document.createElement("li");

  // Создаем изображение товара
  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = title;

  // Добавляем изображение к карточке товара
  cartItem.appendChild(image);

  // Добавляем название товара к карточке
  const itemName = document.createElement("span");
  itemName.textContent = title;
  cartItem.appendChild(itemName);

  // Добавляем кнопку удаления товара
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Удалить";
  removeBtn.classList.add("remove-from-cart-btn");
  cartItem.appendChild(removeBtn);

  // Добавляем карточку товара в корзину
  cartItemsList.appendChild(cartItem);

  // Показываем новое модальное окно с сообщением о добавлении товара
  successModal.style.display = 'block';

  // Закрытие модального окна через 3 секунды
  setTimeout(function() {
    successModal.style.display = 'none';
  }, 3000);
}

// Обработчик события для кнопок удаления товара
cartItemsList.addEventListener("click", function(event) {
  if (event.target.classList.contains("remove-from-cart-btn")) {
    const itemToRemove = event.target.parentElement;
    itemToRemove.remove();
  }
});

// Добавляем обработчик события для каждой кнопки "Добавить в корзину"
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
addToCartButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    // Получаем название товара и ссылку на изображение из атрибутов кнопки
    const title = button.parentElement.querySelector("h3").textContent;
    const imageSrc = button.parentElement.querySelector("img").src;

    // Вызываем функцию для добавления товара в корзину
    addToCart(title, imageSrc);
  });
});

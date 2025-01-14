let cart = [];
let totalPrice = 0;

function addToCart(fruit, price) {
  // Add the fruit and price to the cart
  cart.push({ fruit, price });

  // Update the cart button and total price
  updateCart();
}

function updateCart() {
  // Update the cart button with the item count
  const cartButton = document.getElementById('cartBtn');
  cartButton.innerHTML = `Cart (${cart.length})`;

  // Update the cart modal with items and total price
  const cartList = document.getElementById('cartList');
  cartList.innerHTML = ''; // Clear the current cart list

  totalPrice = 0; // Reset total price

  // Add each item to the cart list and update total
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.fruit} - $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
    totalPrice += item.price;
  });

  // Update the total price
  const totalPriceElement = document.getElementById('totalPrice');
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

function showCart() {
  // Show the cart modal
  const cartModal = document.getElementById('cartModal');
  cartModal.style.display = 'flex';
}

function closeCart() {
  // Hide the cart modal
  const cartModal = document.getElementById('cartModal');
  cartModal.style.display = 'none';
}

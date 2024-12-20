// // Get references to elements
// const sizeButtons = document.querySelectorAll('button[id^="size"]');
// const quantityElement = document.getElementById('quantity');
// const addToCartButton = document.getElementById('addToCart');
// const viewCartButton = document.getElementById('viewCart');

// // Initialize quantity
// let quantity = 0;

// // Function to update quantity and display
// function updateQuantity(newQuantity) {
//     quantity = newQuantity;
//     quantityElement.textContent = quantity;
//     updateCartButton();
// }

// // Function to update "Add to Cart" button text
// function updateCartButton() {
//     addToCartButton.textContent = `Add to Cart (${quantity})`;
// }

// // Handle size selection
// sizeButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Remove 'selected' class from all buttons
//         sizeButtons.forEach(b => b.classList.remove('selected'));

//         // Add 'selected' class to the clicked button
//         button.classList.add('selected');

//         // Update quantity to 0 when size changes
//         updateQuantity(0);
//     });
// });

// // Handle quantity increment
// function incrementQuantity() {
//     updateQuantity(quantity + 1);
// }

// // Handle quantity decrement
// function decrementQuantity() {
//     if (quantity > 0) {
//         updateQuantity(quantity - 1);
//     }
// }

// // Handle "Add to Cart" button click
// addToCartButton.addEventListener('click', () => {
//     const selectedSize = document.querySelector('.selected').id.replace('size', '');
//     const cartItem = { size: selectedSize, quantity: quantity };

//     // Get existing cart items from local storage
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Check if the item already exists in the cart
//     const existingItemIndex = cart.findIndex(item => item.size === selectedSize);

//     if (existingItemIndex !== -1) {
//         // Update quantity if the item already exists
//         cart[existingItemIndex].quantity += quantity;
//     } else {
//         // Add the item to the cart
//         cart.push(cartItem);
//     }

//     // Save the updated cart to local storage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Reset quantity after adding to cart
//     updateQuantity(0);
// });

// // Handle "View Cart" button click
// viewCartButton.addEventListener('click', () => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];

//     if (cart.length === 0) {
//         alert("Your cart is empty.");
//     } else {
//         // Display cart items (you can implement your own display logic here)
//         console.log("Cart items:");
//         cart.forEach(item => {
//             console.log(`${item.size}: ${item.quantity}`);
//         });
//     }
// });

// // Initialize the cart from local storage
// const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
// if (initialCart.length > 0) {
//     // If there are items in the cart, display a message or update UI accordingly
//     alert("Cart items loaded from local storage.");
// } 
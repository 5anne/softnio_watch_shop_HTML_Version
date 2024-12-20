let quantity = 0;

function handleAddItem() {
    quantity++;
    if (quantity > 0) {
        document.getElementById('itemNumber').textContent = quantity;
        document.getElementById('checkOutItem').textContent = quantity;
    }
}

function handleDeleteItem() {
    if (quantity > 0) {
        quantity--;
    }
    document.getElementById('itemNumber').textContent = quantity;
    document.getElementById('checkOutItem').textContent = quantity;
    if (quantity === 0) {
        document.getElementById('checkOut').classList.add('hidden');
    }
}

function handleAddToCart() {
    if (quantity > 0) {
        document.getElementById('checkOut').classList.remove('hidden');
    }
    else {
        alert('Please, Add Item at first!')
        document.getElementById('checkOut').classList.add('hidden');
    }

}
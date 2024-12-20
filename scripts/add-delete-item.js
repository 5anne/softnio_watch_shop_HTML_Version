const sizeButtons = document.querySelectorAll('button[id^="S"], button[id^="M"], button[id^="L"], button[id^="XL"]');
const colorButtons = document.querySelectorAll('button[id^="purple"], button[id^="cyan"], button[id^="blue"], button[id^="black"]');

let quantity = 0;
let selectedColor = 'purple';
let selectedSize = 'S';
let itemsQuantity = [
    {
        purple: { S: 0, M: 0, L: 0, XL: 0 },
        cyan: { S: 0, M: 0, L: 0, XL: 0 },
        blue: { S: 0, M: 0, L: 0, XL: 0 },
        black: { S: 0, M: 0, L: 0, XL: 0 },
    }
]

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const colorValue = button.innerText;
        if (colorValue === 'p') {
            selectedColor = 'purple';
            document.getElementById('itemNumber').textContent = itemsQuantity[0][selectedColor][selectedSize];
            document.getElementById('checkOutItem').textContent = quantity;
        } else if (colorValue === 'c') {
            selectedColor = 'cyan';
            document.getElementById('itemNumber').textContent = itemsQuantity[0][selectedColor][selectedSize];
            document.getElementById('checkOutItem').textContent = quantity;
        } else if (colorValue === 'b') {
            selectedColor = 'blue';
            document.getElementById('itemNumber').textContent = itemsQuantity[0][selectedColor][selectedSize];
            document.getElementById('checkOutItem').textContent = quantity;
        } else if (colorValue === 'k') {
            selectedColor = 'black';
            document.getElementById('itemNumber').textContent = itemsQuantity[0][selectedColor][selectedSize];
            document.getElementById('checkOutItem').textContent = quantity;
        }
    })
})

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedSize = button.textContent.split(' ')[0];
        document.getElementById('itemNumber').textContent = itemsQuantity[0][selectedColor][selectedSize];
        document.getElementById('checkOutItem').textContent = quantity;
    });
});

function handleAddItem() {
    itemsQuantity[0][selectedColor][selectedSize]++;
    quantity++;
    document.getElementById('itemNumber').textContent = itemsQuantity[0][selectedColor][selectedSize];
    document.getElementById('checkOutItem').textContent = quantity;
}

function handleDeleteItem() {
    if (itemsQuantity[0][selectedColor][selectedSize] > 0) {
        itemsQuantity[0][selectedColor][selectedSize]--;
        if (quantity > 0) {
            quantity--;
        }
        console.log(quantity);
        document.getElementById('itemNumber').textContent = itemsQuantity[0][selectedColor][selectedSize];
        document.getElementById('checkOutItem').textContent = quantity;
    }
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

function handleCheckOut() {
    window.location.reload();
}

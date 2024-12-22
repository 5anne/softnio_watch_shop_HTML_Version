const sizeButtons = document.querySelectorAll('button[id^="S"], button[id^="M"], button[id^="L"], button[id^="XL"]');
const colorButtons = document.querySelectorAll('button[id^="purple"], button[id^="cyan"], button[id^="blue"], button[id^="black"]');
const showModal = document.querySelector('button[id^="showModal"]');

let totalQuantity = 0;
let selectedColor = 'purple';
let selectedSize = 'S';
let itemsQuantity = [
    {
        purple: {
            image: "https://i.ibb.co.com/c8QZFMm/purple.jpg",
            color: "Purple",
            sizes: {
                S: { quantity: 0, get price() { return this.quantity * 69; } },
                M: { quantity: 0, get price() { return this.quantity * 79; } },
                L: { quantity: 0, get price() { return this.quantity * 89; } },
                XL: { quantity: 0, get price() { return this.quantity * 99; } },
            },
            get totalPrice() {
                return Object.values(this.sizes).reduce((total, size) => total + size.price, 0);
            },
        },
        cyan: {
            image: "https://i.ibb.co.com/HKkfPSP/cyan.jpg",
            color: "Cyan",
            sizes: {
                S: { quantity: 0, get price() { return this.quantity * 69; } },
                M: { quantity: 0, get price() { return this.quantity * 79; } },
                L: { quantity: 0, get price() { return this.quantity * 89; } },
                XL: { quantity: 0, get price() { return this.quantity * 99; } },
            },
            get totalPrice() {
                return Object.values(this.sizes).reduce((total, size) => total + size.price, 0);
            },
        },
        blue: {
            image: "https://i.ibb.co.com/6yrwLrp/blue.jpg",
            color: "Blue",
            sizes: {
                S: { quantity: 0, get price() { return this.quantity * 69; } },
                M: { quantity: 0, get price() { return this.quantity * 79; } },
                L: { quantity: 0, get price() { return this.quantity * 89; } },
                XL: { quantity: 0, get price() { return this.quantity * 99; } },
            },
            get totalPrice() {
                return Object.values(this.sizes).reduce((total, size) => total + size.price, 0);
            },
        },
        black: {
            image: "https://i.ibb.co.com/FD1SFKh/black.jpg",
            color: "Black",
            sizes: {
                S: { quantity: 0, get price() { return this.quantity * 69; } },
                M: { quantity: 0, get price() { return this.quantity * 79; } },
                L: { quantity: 0, get price() { return this.quantity * 89; } },
                XL: { quantity: 0, get price() { return this.quantity * 99; } },
            },
            get totalPrice() {
                return Object.values(this.sizes).reduce((total, size) => total + size.price, 0);
            },
        },
    }
];

let cartItem = [];

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const colorValue = button.innerText;
        if (colorValue === 'p') {
            selectedColor = 'purple';
            document.getElementById('itemNumber').innerText = itemsQuantity[0][selectedColor].sizes[selectedSize].quantity;
            document.getElementById('checkOutItem').innerText = totalQuantity;
        } else if (colorValue === 'c') {
            selectedColor = 'cyan';
            document.getElementById('itemNumber').innerText = itemsQuantity[0][selectedColor].sizes[selectedSize].quantity;
            document.getElementById('checkOutItem').innerText = totalQuantity;
        } else if (colorValue === 'b') {
            selectedColor = 'blue';
            document.getElementById('itemNumber').innerText = itemsQuantity[0][selectedColor].sizes[selectedSize].quantity;
            document.getElementById('checkOutItem').innerText = totalQuantity;
        } else if (colorValue === 'k') {
            selectedColor = 'black';
            document.getElementById('itemNumber').innerText = itemsQuantity[0][selectedColor].sizes[selectedSize].quantity;
            document.getElementById('checkOutItem').innerText = totalQuantity;
        }
    })
})

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedSize = button.innerText.split(' ')[0];
        document.getElementById('itemNumber').innerText = itemsQuantity[0][selectedColor].sizes[selectedSize].quantity;
        document.getElementById('checkOutItem').innerText = totalQuantity;
    });
});

function handleAddItem() {
    itemsQuantity[0][selectedColor].sizes[selectedSize].quantity++;
    totalQuantity++;
    document.getElementById('itemNumber').innerText = itemsQuantity[0][selectedColor].sizes[selectedSize].quantity;
    document.getElementById('checkOutItem').innerText = totalQuantity;

}

function handleDeleteItem() {
    if (itemsQuantity[0][selectedColor].sizes[selectedSize].quantity > 0) {
        itemsQuantity[0][selectedColor].sizes[selectedSize].quantity--;
        if (totalQuantity > 0) {
            totalQuantity--;
        }
        console.log(totalQuantity);
        document.getElementById('itemNumber').innerText = itemsQuantity[0][selectedColor].sizes[selectedSize].quantity;
        document.getElementById('checkOutItem').innerText = totalQuantity;
    }
    if (totalQuantity === 0) {
        document.getElementById('checkOut').classList.add('hidden');
    }
}

function handleAddToCart() {
    if (totalQuantity > 0) {
        const purchaseMoney = itemsQuantity[0].purple.totalPrice + itemsQuantity[0].cyan.totalPrice + itemsQuantity[0].blue.totalPrice + itemsQuantity[0].black.totalPrice;
        document.getElementById('checkOut').classList.remove('hidden');
        document.getElementById('totalQuantity').innerText = totalQuantity;
        document.getElementById('totalPrice').innerText = purchaseMoney;
    }
    else {
        alert('Please, Add Item at first!')
        document.getElementById('checkOut').classList.add('hidden');
    }
}

const tbody = document.querySelector('tbody');
let rowCount = 0;

showModal.addEventListener('click', () => {
    const colorObjects = itemsQuantity.map(item => {

        const colors = Object.keys(item).map(colorKey => {

            const allSizes = item[colorKey].sizes;
            const colorQuantity = Object.keys(allSizes).map(sizeKey => {

                if (allSizes[sizeKey].quantity > 0) {
                    rowCount++;
                    const product = {
                        image: item[colorKey].image,
                        color: item[colorKey].color,
                        size: sizeKey,
                        quantity: allSizes[sizeKey].quantity,
                        price: allSizes[sizeKey].price,
                    }
                    cartItem.push(product);
                    // console.log(cartItem);
                }
            })
        });
    }).flat();

    for (let i = 0; i < rowCount; i++) {
        const newRow = document.createElement('tr');
        console.log(rowCount)
        newRow.innerHTML = `
        <tr class="text-black">
        <td>
        <div class="flex items-center gap-3">
            <div class="avatar">
                <div class="mask mask-squircle rounded-none h-10 w-10">
                    <img src="${cartItem[i].image}" alt="" />
                </div>
            </div>
            <div>
                <div class="text-sm text-black font-semibold opacity-50">
                    Classy Modern Smart Watch</div>
                </div>
            </div>
        </td>
        <td>${cartItem[i].color}</td>
        <td>${cartItem[i].size}</td>
        <td>${cartItem[i].quantity}</td>
        <td>$${cartItem[i].price}</td>
        </tr>
    `

        tbody.appendChild(newRow);
    }
})

function handleCheckOut() {
    alert("Checked Out Successfully!")
    window.location.reload();
}
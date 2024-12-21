const sizes = ['S', 'M', 'L', 'XL'];
const allPrices = {};

const sizeElements = sizes.reduce((acc, size) => {
    acc[size] = document.getElementById(size);
    allPrices[size] = acc[size].innerText.split(' ')[1];
    return acc;
}, {});

console.log(sizeElements);

function handleSize(selectedSize) {

    sizes.forEach(size => {
        if (size === selectedSize) {
            sizeElements[size].classList.add('border-[#816BFF]', 'text-[#816BFF]');
            priceColor.innerText = allPrices[selectedSize];
        } else {
            sizeElements[size].classList.remove('border-[#816BFF]', 'text-[#816BFF]');
        }
    });
}

function handleSSize() {
    handleSize('S');
}

function handleMSize() {
    handleSize('M');
}

function handleLSize() {
    handleSize('L');
}

function handleXLSize() {
    handleSize('XL');
}

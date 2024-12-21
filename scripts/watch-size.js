const sizes = ['S', 'M', 'L', 'XL'];

const elements = sizes.reduce((acc, size) => {
    acc[size] = document.getElementById(size);
    return acc;
}, {});

function handleSize(selectedSize) {
    sizes.forEach(size => {
        if (size === selectedSize) {
            elements[size].classList.add('border-[#816BFF]', 'text-[#816BFF]');
        } else {
            elements[size].classList.remove('border-[#816BFF]', 'text-[#816BFF]');
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

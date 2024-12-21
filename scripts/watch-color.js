const colors = {
    purple: { borderColor: '#816BFF', rating: 3.5, image: '/images/purple.jpg' },
    cyan: { borderColor: '#1FCEC9', rating: 4.5, image: '/images/cyan.jpg' },
    blue: { borderColor: '#4B97D3', rating: 5, image: '/images/blue.jpg' },
    black: { borderColor: '#3B4747', rating: 3, image: '/images/black.jpg' },
};

const elements = {
    purple: document.getElementById('purple'),
    cyan: document.getElementById('cyan'),
    blue: document.getElementById('blue'),
    black: document.getElementById('black'),
};

const image = document.getElementById('watchImage');
const priceColor = document.getElementById('priceColor');

function handleRating(rating) {
    const starRatingContainer = document.querySelector('.star-rating');
    const stars = starRatingContainer.querySelectorAll('.star');

    stars.forEach((star, index) => {
        if (index < Math.floor(rating) || (index === Math.floor(rating) && rating % 1 !== 0)) {
            star.classList.add('text-[#FFD200]');
        } else {
            star.classList.remove('text-[#FFD200]');
        }
    });
}

function handleColor(selectedColor) {
    const { borderColor, rating, image: imgSrc } = colors[selectedColor];

    // Handle rating
    handleRating(rating);

    // Update styles
    Object.keys(elements).forEach(color => {
        if (color === selectedColor) {
            elements[color].classList.add('border-[3px]', `border-[${borderColor}]`, 'rounded-full', 'p-[2px]');
            priceColor.classList.add('text-2xl', `text-[${borderColor}]`, 'font-bold');
        } else {
            elements[color].classList.remove('border-[3px]', `border-[${colors[color].borderColor}]`, 'rounded-full', 'p-[2px]');
            priceColor.classList.remove(`text-[${colors[color].borderColor}]`);
        }
    });

    // Update image and price color
    image.src = imgSrc;
}

function handlePurpleColor() {
    handleColor('purple');
}

function handleCyanColor() {
    handleColor('cyan');
}

function handleBlueColor() {
    handleColor('blue');
}

function handleBlackColor() {
    handleColor('black');
}

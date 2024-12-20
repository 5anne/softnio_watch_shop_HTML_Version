const purple = document.getElementById('purple');
const cyan = document.getElementById('cyan');
const blue = document.getElementById('blue');
const black = document.getElementById('black');
const image = document.getElementById('watchImage');
const priceColor = document.getElementById('priceColor');

function handleRating(rating) {

    const starRatingContainer = document.querySelector('.star-rating');
    const stars = starRatingContainer.querySelectorAll('.star');

    for (let i = 0; i < stars.length; i++) {
        if (i < Math.floor(rating)) {
            stars[i].classList.add('text-[#FFD200]');
        } else if (i === Math.floor(rating) && rating % 1 !== 0) {
            stars[i].classList.add('text-[#FFD200]');
        } else {
            stars[i].classList.remove('text-[#FFD200]');
        }
    }
}

function handlePurpleColor() {
    handleRating(3.5)

    purple.classList.add('border-[3px]', 'border-[#816BFF]', 'rounded-full', 'p-[2px]')
    cyan.classList.remove('border-[3px]', 'border-[#1FCEC9]', 'rounded-full', 'p-[2px]')
    blue.classList.remove('border-[3px]', 'border-[#4B97D3]', 'rounded-full', 'p-[2px]')
    black.classList.remove('border-[3px]', 'border-[#3B4747]', 'rounded-full', 'p-[2px]')
    priceColor.classList.add('text-[#816BFF]')
    image.src = '/images/purple.jpg'

};

function handleCyanColor() {
    handleRating(4.5)

    purple.classList.remove('border-[3px]', 'border-[#816BFF]', 'rounded-full', 'p-[2px]')
    cyan.classList.add('border-[3px]', 'border-[#1FCEC9]', 'rounded-full', 'p-[2px]')
    blue.classList.remove('border-[3px]', 'border-[#4B97D3]', 'rounded-full', 'p-[2px]')
    black.classList.remove('border-[3px]', 'border-[#3B4747]', 'rounded-full', 'p-[2px]')
    priceColor.classList.add('text-[#1FCEC9]')
    image.src = '/images/cyan.jpg'
}

function handleBlueColor() {
    handleRating(5)

    purple.classList.remove('border-[3px]', 'border-[#816BFF]', 'rounded-full', 'p-[2px]')
    cyan.classList.remove('border-[3px]', 'border-[#1FCEC9]', 'rounded-full', 'p-[2px]')
    blue.classList.add('border-[3px]', 'border-[#4B97D3]', 'rounded-full', 'p-[2px]')
    black.classList.remove('border-[3px]', 'border-[#3B4747]', 'rounded-full', 'p-[2px]')
    priceColor.classList.add('text-[#4B97D3]')
    image.src = '/images/blue.jpg'
}

function handleBlackColor() {
    handleRating(3)

    purple.classList.remove('border-[3px]', 'border-[#816BFF]', 'rounded-full', 'p-[2px]')
    cyan.classList.remove('border-[3px]', 'border-[#1FCEC9]', 'rounded-full', 'p-[2px]')
    blue.classList.remove('border-[3px]', 'border-[#4B97D3]', 'rounded-full', 'p-[2px]')
    black.classList.add('border-[3px]', 'border-[#3B4747]', 'rounded-full', 'p-[2px]')
    priceColor.classList.add('text-[#3B4747]')
    image.src = '/images/black.jpg'
}
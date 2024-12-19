
function handlePurpleColor() {

    const purple = document.getElementById('purple');
    const cyan = document.getElementById('cyan');
    const blue = document.getElementById('blue');
    const black = document.getElementById('black');

    purple.classList.add('border-[3px]', 'border-[#816BFF]', 'rounded-full', 'p-[2px]')
    cyan.classList.remove('border-[3px]', 'border-[#1FCEC9]', 'rounded-full', 'p-[2px]')
    blue.classList.remove('border-[3px]', 'border-[#4B97D3]', 'rounded-full', 'p-[2px]')
    black.classList.remove('border-[3px]', 'border-[#3B4747]', 'rounded-full', 'p-[2px]')

};

function handleCyanColor() {
    const purple = document.getElementById('purple');
    const cyan = document.getElementById('cyan');
    const blue = document.getElementById('blue');
    const black = document.getElementById('black');

    purple.classList.remove('border-[3px]', 'border-[#816BFF]', 'rounded-full', 'p-[2px]')
    cyan.classList.add('border-[3px]', 'border-[#1FCEC9]', 'rounded-full', 'p-[2px]')
    blue.classList.remove('border-[3px]', 'border-[#4B97D3]', 'rounded-full', 'p-[2px]')
    black.classList.remove('border-[3px]', 'border-[#3B4747]', 'rounded-full', 'p-[2px]')
}

function handleBlueColor() {
    const purple = document.getElementById('purple');
    const cyan = document.getElementById('cyan');
    const blue = document.getElementById('blue');
    const black = document.getElementById('black');

    purple.classList.remove('border-[3px]', 'border-[#816BFF]', 'rounded-full', 'p-[2px]')
    cyan.classList.remove('border-[3px]', 'border-[#1FCEC9]', 'rounded-full', 'p-[2px]')
    blue.classList.add('border-[3px]', 'border-[#4B97D3]', 'rounded-full', 'p-[2px]')
    black.classList.remove('border-[3px]', 'border-[#3B4747]', 'rounded-full', 'p-[2px]')
}

function handleBlackColor() {
    const purple = document.getElementById('purple');
    const cyan = document.getElementById('cyan');
    const blue = document.getElementById('blue');
    const black = document.getElementById('black');

    purple.classList.remove('border-[3px]', 'border-[#816BFF]', 'rounded-full', 'p-[2px]')
    cyan.classList.remove('border-[3px]', 'border-[#1FCEC9]', 'rounded-full', 'p-[2px]')
    blue.classList.remove('border-[3px]', 'border-[#4B97D3]', 'rounded-full', 'p-[2px]')
    black.classList.add('border-[3px]', 'border-[#3B4747]', 'rounded-full', 'p-[2px]')
}
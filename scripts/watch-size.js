const S = document.getElementById('S')
const M = document.getElementById('M')
const L = document.getElementById('L')
const XL = document.getElementById('XL')

function handleSSize() {

    S.classList.add('border-[#816BFF]', 'text-[#816BFF]')
    M.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    L.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    XL.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
}

function handleMSize() {

    S.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    M.classList.add('border-[#816BFF]', 'text-[#816BFF]')
    L.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    XL.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
}

function handleLSize() {

    S.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    M.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    L.classList.add('border-[#816BFF]', 'text-[#816BFF]')
    XL.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
}

function handleXLSize() {

    S.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    M.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    L.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    XL.classList.add('border-[#816BFF]', 'text-[#816BFF]')
}
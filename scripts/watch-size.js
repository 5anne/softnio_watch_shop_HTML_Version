function handleSSize() {
    const S = document.getElementById('S')
    const M = document.getElementById('M')
    const L = document.getElementById('L')
    const XL = document.getElementById('XL')

    S.classList.add('border-[#816BFF]', 'text-[#816BFF]')
    M.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    L.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    XL.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
}

function handleMSize() {
    const S = document.getElementById('S')
    const M = document.getElementById('M')
    const L = document.getElementById('L')
    const XL = document.getElementById('XL')

    S.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    M.classList.add('border-[#816BFF]', 'text-[#816BFF]')
    L.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    XL.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
}

function handleLSize() {
    const S = document.getElementById('S')
    const M = document.getElementById('M')
    const L = document.getElementById('L')
    const XL = document.getElementById('XL')

    S.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    M.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    L.classList.add('border-[#816BFF]', 'text-[#816BFF]')
    XL.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
}

function handleXLSize() {
    const S = document.getElementById('S')
    const M = document.getElementById('M')
    const L = document.getElementById('L')
    const XL = document.getElementById('XL')

    S.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    M.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    L.classList.remove('border-[#816BFF]', 'text-[#816BFF]')
    XL.classList.add('border-[#816BFF]', 'text-[#816BFF]')
}


// {
//     selectedColor === 'purple' ?
//         selectedSize === 'S' ?
//             <button className='border-y-2 px-6 py-2'>{purpleSItemNumber}</button> :
//             selectedSize === 'M' ?
//                 <button className='border-y-2 px-6 py-2'>{purpleMItemNumber}</button> :
//                 selectedSize === 'L' ?
//                     <button className='border-y-2 px-6 py-2'>{purpleLItemNumber}</button> :
//                     selectedSize === 'XL' ?
//                         <button className='border-y-2 px-6 py-2'>{purpleXLItemNumber}</button> :
//                         <></> : <></>
// }
// {
//     selectedColor === 'cyan' ?
//         selectedSize === 'S' ?
//             <button className='border-y-2 px-6 py-2'>{cyanSItemNumber}</button> :
//             selectedSize === 'M' ?
//                 <button className='border-y-2 px-6 py-2'>{cyanMItemNumber}</button> :
//                 selectedSize === 'L' ?
//                     <button className='border-y-2 px-6 py-2'>{cyanLItemNumber}</button> :
//                     selectedSize === 'XL' ?
//                         <button className='border-y-2 px-6 py-2'>{cyanXLItemNumber}</button> :
//                         <></> : <></>
// }
// {
//     selectedColor === 'blue' ?
//         selectedSize === 'S' ?
//             <button className='border-y-2 px-6 py-2'>{blueSItemNumber}</button> :
//             selectedSize === 'M' ?
//                 <button className='border-y-2 px-6 py-2'>{blueMItemNumber}</button> :
//                 selectedSize === 'L' ?
//                     <button className='border-y-2 px-6 py-2'>{blueLItemNumber}</button> :
//                     selectedSize === 'XL' ?
//                         <button className='border-y-2 px-6 py-2'>{blueXLItemNumber}</button> :
//                         <></> : <></>
// }
// {
//     selectedColor === 'black' ?
//         selectedSize === 'S' ?
//             <button className='border-y-2 px-6 py-2'>{blackSItemNumber}</button> :
//             selectedSize === 'M' ?
//                 <button className='border-y-2 px-6 py-2'>{blackMItemNumber}</button> :
//                 selectedSize === 'L' ?
//                     <button className='border-y-2 px-6 py-2'>{blackLItemNumber}</button> :
//                     selectedSize === 'XL' ?
//                         <button className='border-y-2 px-6 py-2'>{blackXLItemNumber}</button> :
//                         <></> : <></>
// }
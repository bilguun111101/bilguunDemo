// some variebles----------------------------------------------
const tarih = document.querySelector('#box1');
const money = document.querySelector('#box2')
const loc = document.querySelector('#box3')
const nars = document.querySelector('#nars');
let tab1 = document.querySelector('.tarihIhDiv1');
let tab2 = document.querySelector('.tarihIhDiv2');
let tab3 = document.querySelector('.tarihIhDiv3')

let tab21 = document.querySelector('.Nars');
// ============================================================

// content------------------------------------------------------

tarih.onclick = () => {
    tab1.classList.add('active');
}

document.querySelector('.tarihClose').onclick = () => {
    tab1.classList.remove('active');
}

money.onclick = () => {
    tab2.classList.add('active');
}

document.querySelector('.moneyClose').onclick = () => {
    tab2.classList.remove('active');
}

// loc.onclick = () => {
//     tab3.classList.add('active');
// }

// document.querySelector('.mapClose').onclick = () => {
//     tab3.classList.remove('active');
// }

document.querySelector('#nars').onclick = () => {
    tab21.classList.add('active-types');
}
document.querySelector('.close-nars').onclick = () => {
    tab21.classList.remove('active-types');
}

document.querySelector('#shines').onclick = () => {
    document.querySelector('.shines').classList.add('active-types')
}
document.querySelector('.close-shines').onclick = () => {
    document.querySelector('.shines').classList.remove('active-types')
}


document.querySelector('#gatsuur').onclick = () => {
    document.querySelector('.gatsuur').classList.add('active-types')
}
document.querySelector('.close-gatsuur').onclick = () => {
    document.querySelector('.gatsuur').classList.remove('active-types')
}


document.querySelector('#shilmuus').onclick = () => {
    document.querySelector('.shilmuus').classList.add('active-types')
}
document.querySelector('.close-shilmuus').onclick = () => {
    document.querySelector('.shilmuus').classList.remove('active-types')
}


document.querySelector('#ulias').onclick = () => {
    document.querySelector('.ulias').classList.add('active-types')
}
document.querySelector('.close-ulias').onclick = () => {
    document.querySelector('.ulias').classList.remove('active-types')
}

document.querySelector('#halias').onclick = () => {
    document.querySelector('.halias').classList.add('active-types')
}
document.querySelector('.close-halias').onclick = () => {
    document.querySelector('.halias').classList.remove('active-types')
}

document.querySelector('#agch').onclick = () => {
    document.querySelector('.agch').classList.add('active-types')
}
document.querySelector('.close-agch').onclick = () => {
    document.querySelector('.agch').classList.remove('active-types')
}

document.querySelector('#burgas').onclick = () => {
    document.querySelector('.burgas').classList.add('active-types')
}
document.querySelector('.close-burgas').onclick = () => {
    document.querySelector('.burgas').classList.remove('active-types')
}

document.querySelector('#urul').onclick = () => {
    document.querySelector('.urul').classList.add('active-types')
}
document.querySelector('.close-urul').onclick = () => {
    document.querySelector('.urul').classList.remove('active-types')
}




document.querySelector('#monos').onclick = () => {
    document.querySelector('.monos').classList.add('active-types')
}
document.querySelector('.close-monos').onclick = () => {
    document.querySelector('.monos').classList.remove('active-types')
}



document.querySelector('#golt-bor').onclick = () => {
    document.querySelector('.golt-bor').classList.add('active-types')
}
document.querySelector('.close-golt-bor').onclick = () => {
    document.querySelector('.golt-bor').classList.remove('active-types')
}



document.querySelector('#doloolgono').onclick = () => {
    document.querySelector('.doloolgono').classList.add('active-types')
}
document.querySelector('.close-doloolgono').onclick = () => {
    document.querySelector('.doloolgono').classList.remove('active-types')
}



document.querySelector('#shar-huis').onclick = () => {
    document.querySelector('.shar-huis').classList.add('active-types')
}
document.querySelector('.close-shar-huis').onclick = () => {
    document.querySelector('.shar-huis').classList.remove('active-types')
}


document.querySelector('#tehiin-sheeg').onclick = () => {
    document.querySelector('.tehiin-sheeg').classList.add('active-types')
}
document.querySelector('.close-tehiin-sheeg').onclick = () => {
    document.querySelector('.tehiin-sheeg').classList.remove('active-types')
}
// ===============================================================

document.addEventListener('scroll', scroll)

function scroll () {
const y = window.scrollY;
console.log(y)

if (y > 120) {
    const menu = document.querySelector('.navbar__menu');
    menu.setAttribute('id', 'navbar__menu-scrolled');
} else {
    const menu = document.querySelector('.navbar__menu');
    menu.removeAttribute('id', 'navbar__menu-scrolled');
}
}
let hamburger = document.querySelector('.hamburger');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

let links = document.querySelectorAll('.menu__link, .overlay__close-icon');

links.forEach(function(element) {
    element.addEventListener('click', toggleMenu);
})

function toggleMenu() {
    body.classList.toggle('body--active-menu');
    hamburger.classList.toggle('hamburger--active');
    overlay.classList.toggle('overlay--active');
}


hamburger.addEventListener('click', toggleMenu => {
    toggleMenu.preventDefault();
    overlay.classList.toggle('overlay--active');
});
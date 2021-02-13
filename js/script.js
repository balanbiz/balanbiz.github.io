const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const persents = document.querySelectorAll('.skills__item-persent'),
    lines = document.querySelectorAll('.skills__item-scale-fill');

persents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
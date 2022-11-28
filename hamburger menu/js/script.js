const icon = document.getElementsByClassName('fa-bars')[0];
const main = document.getElementsByClassName('main')[0];
const menu = document.getElementsByClassName('menu')[0];
icon.onclick = () => {
    if (icon.getAttribute('data-status') == 'close') {
        main.classList.add('main-active');
        menu.classList.add('menu-active');
        icon.style.transform = 'translateX(450px) rotate(360deg)';
        icon.classList.replace('fa-bars', 'fa-close');
        icon.setAttribute('data-status', 'open');
    } else {
        main.classList.remove('main-active');
        menu.classList.remove('menu-active');
        icon.style.transform = 'translateX(0px) rotate(0deg)';
        icon.classList.replace('fa-close', 'fa-bars');
        icon.setAttribute('data-status', 'close');
    }
};
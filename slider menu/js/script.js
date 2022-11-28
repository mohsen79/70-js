const icon = document.getElementById('icon');
const first = document.getElementsByClassName('first')[0];
const second = document.getElementsByClassName('second')[0];
const third = document.getElementsByClassName('third')[0];
const image = document.querySelector('img');

icon.onclick = () => {
    if (icon.getAttribute('data-status') == 'open') {
        icon.classList.replace('fa-close', 'fa-bars');
        icon.setAttribute('data-status', 'close');
        setTimeout(() => {
            third.classList.remove('active-third');
        }, 100);
        setTimeout(() => {
            second.classList.remove('active-second');
        }, 200);
        setTimeout(() => {
            first.classList.remove('active-first');
        }, 300);
        image.style.left = 0 + 'px';
    } else {
        icon.classList.replace('fa-bars', 'fa-close');
        icon.setAttribute('data-status', 'open');
        setTimeout(() => {
            first.classList.add('active-first');
            image.style.left = -400 + 'px';
        }, 100);
        setTimeout(() => {
            second.classList.add('active-second');
        }, 200);
        setTimeout(() => {
            third.classList.add('active-third');
        }, 300);
    }
};
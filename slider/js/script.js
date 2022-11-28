const images = document.querySelectorAll('img');
let i = 0;

function next() {
    images[i].classList.remove('active');
    i = (i + 1) % images.length;
    images[i].classList.add('active');
}

function back() {
    images[i].classList.remove('active');
    i = (i - 1 + images.length) % images.length;
    images[i].classList.add('active');
}
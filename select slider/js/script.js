const images = document.querySelectorAll('section img');
const poster = document.querySelector('main img');

const first = [
    { opacity: 0 }
];

const second = {
    duration: 200,
    iterations: 1
};

images.forEach(image => {
    image.addEventListener('click', () => {
        poster.animate(first, second);
        setTimeout(() => {
            poster.src = image.src;
            document.body.style.background = image.getAttribute('data-color');
        }, 200);
    });

});
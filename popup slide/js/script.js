const img = document.querySelectorAll('.box .image img');
const image = document.querySelectorAll('.box .image');
const h2 = document.querySelectorAll('.box .image h2');
const p = document.querySelectorAll('.box .image p');

image.forEach(photo => photo.addEventListener('click', () => {
    photo.querySelector('h2').classList.toggle('active2');
    photo.querySelector('p').classList.toggle('active2');
    photo.classList.toggle('active');
}));
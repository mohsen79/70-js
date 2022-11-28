const image = document.getElementsByTagName('img')[0];
window.addEventListener('scroll', () => {
    image.style.opacity = 1 - +window.pageYOffset / 600;
});
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('fixed', window.scrollY > 100);
});
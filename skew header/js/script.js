const cover = document.querySelector('.cover');

window.addEventListener('scroll', () => {
    let value = -10 + window.scrollY / 50;
    cover.style.transform = "skewY(" + value + "deg)";
});
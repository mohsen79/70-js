function color(color, element) {
    document.body.style.background = color;
    const div = document.querySelectorAll('section div');
    for (let i = 0; i < 4; i++) {
        div[i].classList.remove('active');
    }
    element.classList.add('active');
}
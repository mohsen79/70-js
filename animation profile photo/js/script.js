const img = document.getElementsByTagName('img')[0];
const nav = document.getElementsByClassName('nav')[0];

img.onclick = () => {
    img.classList.toggle('active');
    nav.classList.toggle('nav-active');
};
img.onmouseleave = () => {
    img.classList.remove('active');
};
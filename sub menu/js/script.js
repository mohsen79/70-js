const subMenu = document.querySelector('.menu');
const panel_back = document.getElementById('panelBack');

function menu() {
    panel_back.classList.toggle('panelBackActive');
    subMenu.classList.toggle('active');
}

panel_back.addEventListener("click", function() {
    panel_back.classList.toggle('panelBackActive');
    subMenu.classList.toggle('active');
});
const openModal = document.getElementById('open');
const closeModal = document.getElementById('close');
const container = document.getElementsByClassName('container')[0];
const innerModal = document.getElementsByClassName('inner-modal')[0];

openModal.addEventListener('click', () => {
    innerModal.style.display = 'block';
    container.style.background = 'rgb(0,0,0,.3)';
});
closeModal.addEventListener('click', () => {
    innerModal.style.display = 'none';
    container.style.background = 'white';

});
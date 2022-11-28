const next = document.getElementsByClassName('next')[0];
const back = document.getElementsByClassName('back')[0];
const item = document.getElementsByClassName('item');
let i = 0;
next.onclick = () => {
    item[i].classList.remove('active');
    item[i].querySelector('img').classList.remove('zoom');
    i = (i + 1) % item.length;
    item[i].classList.add('active');
    item[i].querySelector('img').classList.add('zoom');
};

back.onclick = () => {
    item[i].classList.remove('active');
    item[i].querySelector('img').classList.remove('zoom');
    i = (i - 1 + item.length) % item.length;
    item[i].classList.add('active');
    item[i].querySelector('img').classList.add('zoom');

};
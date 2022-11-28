const items = document.querySelector('.container').children;
let boxWidth = items[0].offsetWidth;
let boxHeight = items[0].offsetHeight;

const div = document.createElement('div');
div.style.width = boxWidth + 'px';
div.style.height = boxHeight + 'px';
div.style.background = 'orange';
div.style.position = 'absolute';
div.style.transition = 'all 1s';
div.style.left = items[0].offsetLeft + 'px';
div.style.top = items[0].offsetTop + 'px';

document.querySelector('.container').appendChild(div);

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        let x = items[i].offsetLeft;
        let y = items[i].offsetTop;
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        let width = this.offsetWidth;
        let height = this.offsetHeight;
        div.style.width = width + 'px';
        div.style.height = height + 'px';
    });
}
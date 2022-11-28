const btn = document.querySelector('button');
const alert_box = document.getElementsByClassName('alert-box')[0];
const closeBtn = document.querySelector('i');
const line = document.getElementsByClassName('line')[0];

btn.onclick = () => {
    show();
};

function show() {
    //use css animation
    line.style.animation = 'counter 3s linear';
    alert_box.classList.remove('active-back');
    if (!alert_box.classList.contains('active')) {
        alert_box.classList.add('active');
    }
    setTimeout(() => {
        timer();
        line.style.width = 0;
        //use css animation
        line.style.animation = '';
    }, 3000);

    // set timer in js
    // let time = 100;
    // setInterval(() => {
    //     time -= 0.31;
    //     line.style.width = time + '%';

    // }, 9);
}

let timer = () => {
    alert_box.classList.remove('active');
    alert_box.classList.add('active-back');
};

closeBtn.onclick = () => {
    alert_box.classList.remove('active');
    alert_box.classList.add('active-back');
};
const sign_up = document.getElementById('sign-up');
const sign_in = document.getElementById('sign-in');
const select = document.getElementsByClassName('select')[0];
const content = document.getElementsByClassName('content')[0];

sign_up.onclick = () => {
    select.classList.remove('select-active');
    let i = 88;
    let time = setInterval(() => {
        content.scrollLeft = --i * 7;
        if (i == 0) {
            clearInterval(time);
            content.scrollLeft = '0';
        }
    }, 1);
};
sign_in.onclick = () => {
    select.classList.add('select-active');
    let i = 0;
    let time = setInterval(() => {
        content.scrollLeft = i++ * 7;
        if (i == 90) {
            clearInterval(time);
        }
    }, 1);
};
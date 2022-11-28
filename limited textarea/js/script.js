const textarea = document.getElementById('textarea');
let remain = document.querySelector('.remain');

textarea.oninput = () => {
    const remaining = 200 - textarea.value.length;
    console.log(remaining);
    color = remaining < 20 ? 'red' : 'black';
    remain.style.color = color;
    remain.innerHTML = `remaining char ${remaining}`;
};
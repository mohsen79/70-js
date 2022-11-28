let button = document.querySelector('button');
let input = document.querySelector('input');
button.onclick = () => {
    input.select();
    input.setSelectionRange(0, 1000);
    navigator.clipboard.writeText(input.value);
    if (!input.value == '') {
        button.innerHTML = 'text copied!';
    }
};
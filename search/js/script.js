const btn = document.querySelector('button');
let input = document.getElementById('search');
let text = document.getElementsByClassName('text')[0];

btn.onclick = () => {
    input = input.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    let new_text = new RegExp(`${input}`, 'gi');
    text.innerHTML = text.textContent.replace(new_text, match => `<mark>${match}</mark>`);
};
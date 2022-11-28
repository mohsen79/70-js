const textarea = document.querySelector('textarea');
const wordCount = document.querySelector('.words');
const wordCharac = document.querySelector('.letters');

textarea.addEventListener('input', () => {
    wordCharac.textContent = textarea.value.length;
    let text = textarea.value.trim();
    wordCount.textContent = text.split(/\s+/).filter((item) => item).length
})
const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    document.querySelector('.searchBox').classList.toggle('active');
    document.getElementsByTagName('input')[0].focus();
});
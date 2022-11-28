let select = document.getElementById('mode');
select.value = localStorage.getItem('mode');

(function() {
    mode(select.value);
})();

function mode(value) {
    document.body.className = '';
    localStorage.clear();
    switch (value) {
        case 'auto':
            window.matchMedia("(prefers-color-scheme: dark)").matches;
            localStorage.setItem('mode', 'auto');
            break;
        case 'light':
            document.body.classList.add('light');
            localStorage.setItem('mode', 'light');
            break;
        case 'dark':
            document.body.classList.add('dark');
            localStorage.setItem('mode', 'dark');
            break;
    }
}
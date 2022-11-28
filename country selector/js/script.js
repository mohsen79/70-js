let country = document.querySelector('select');
let number = document.getElementsByClassName('prefix')[0];

country.onchange = () => {
    switch (country.value) {
        case 'iran':
            number.innerHTML = '+98';
            break;
        case 'usa':
            number.innerHTML = '+01';
            break;
        case 'sweden':
            number.innerHTML = '+46';
            break;
        case 'germany':
            number.innerHTML = '+23';
            break;
        case 'canada':
            number.innerHTML = '+11';
            break;
    }
};
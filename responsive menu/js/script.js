const icon = document.querySelector('i');
let lis = document.querySelectorAll('.menu>li');
let menu = document.querySelector('.menu');
let scrollHeight = menu.scrollHeight;

icon.onclick = () => {
    menu.classList.toggle('active');
    menu.style.setProperty('--menu_height', scrollHeight + 'px');
    lis.forEach(li => {
        li.classList.remove('ul-active');
        li.setAttribute('data-status', 'close');
    });
    if (icon.getAttribute('data-status') == 'close') {
        icon.classList.replace('fa-bars', 'fa-close');
        icon.setAttribute('data-status', 'open');
    } else {
        icon.classList.replace('fa-close', 'fa-bars');
        icon.setAttribute('data-status', 'close');
    }
};

window.onresize = () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
        icon.classList.replace('fa-close', 'fa-bars');
        icon.setAttribute('data-status', 'close');
        lis.forEach(li => {
            li.classList.remove('ul-active');
        });
    }
};

lis.forEach(li => {
    const liScrollHeight = li.scrollHeight;
    li.onclick = () => {
        if (window.innerWidth < 768) {
            if (li.getAttribute('data-status') == 'close') {
                menu.style.setProperty('--menu_height', (liScrollHeight + (scrollHeight - 50)) + 'px');
                li.classList.add('ul-active');
                li.setAttribute('data-status', 'open');
                lis.forEach(li2 => {
                    if (li2 !== li) {
                        li2.classList.remove('ul-active');
                        li2.setAttribute('data-status', 'close');
                    }
                });
            } else {
                li.classList.remove('ul-active');
                li.setAttribute('data-status', 'close');
                menu.style.setProperty('--menu_height', scrollHeight + 'px');
            }
        }
    };
});
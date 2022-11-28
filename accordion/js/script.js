const titles = document.querySelectorAll('.title');

titles.forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        let scroll = content.scrollHeight + 20;
        titles.forEach(title2 => {
            if (title2 !== title) {
                const content = title2.nextElementSibling;
                title2.classList.remove('active');
                content.classList.remove('content-active');
                content.style.setProperty('--menu_height', scroll + 'px');
            }
        });
        title.classList.toggle('active');
        content.classList.toggle('content-active');
        content.style.setProperty('--menu_height', scroll + 'px');
    });
});
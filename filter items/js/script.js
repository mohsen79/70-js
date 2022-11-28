let categories = document.querySelectorAll('a');
let items = document.querySelectorAll('.item');

categories.forEach(category => {
    category.onclick = () => {
        for (let i = 0; i < categories.length; i++) {
            categories[i].classList.remove('active');
        }
        for (let j = 0; j < items.length; j++) {
            items[j].style.transform = 'scale(0)';
            setTimeout(() => {
                items[j].style.display = 'none';
            }, 300);
            if (category.getAttribute('id') == items[j].getAttribute('data-category') ||
                category.getAttribute('id') == 'all') {
                items[j].style.transform = 'scale(1)';
                setTimeout(() => {
                    items[j].style.display = 'block';
                }, 300);
            }
        }
        category.classList.add('active');
    };
});
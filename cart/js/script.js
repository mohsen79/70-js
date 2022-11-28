let categories = document.querySelectorAll('a');
let items = document.querySelectorAll('.item');
const cart_button = document.querySelectorAll('.item button');
const cart_shoping = document.getElementById('i');
const cart_after = window.getComputedStyle(cart_shoping, '::after');
const cart_icon = document.getElementsByClassName('cart-icon')[0];
const cart_item = document.getElementsByClassName('cart-item')[0];
let cart_count = 0;

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

//new project developing

cart_button.forEach(button => {
    button.onclick = () => {
        cart_shoping.style.setProperty('--width_height', '17px');
        cart_shoping.setAttribute('data-content', ++cart_count);
        let clone = button.parentElement.parentElement.cloneNode(true);
        cart_icon.appendChild(clone);
        let image = button.parentElement.parentElement.getElementsByTagName('img')[0].getAttribute('src');
        let p = button.parentElement.parentElement.getElementsByTagName('p')[0];
        let price = button.parentElement.parentElement.getElementsByTagName('h4')[0];
        cart_item.getElementsByTagName('img')[0].setAttribute('src', image);
        cart_item.getElementsByTagName('p')[0].innerHTML = p.innerHTML;
        cart_item.getElementsByTagName('h3')[0].innerHTML = price.innerHTML;
    };
});

cart_shoping.onclick = () => {
    cart_icon.classList.toggle('cart-active');
};
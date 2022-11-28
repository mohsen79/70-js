let categories = document.querySelectorAll('a');
let items = document.querySelectorAll('.item');
const cart_button = document.querySelectorAll('.item a');
const cart_shoping = document.getElementById('i');
const cart_after = window.getComputedStyle(cart_shoping, '::after');
const cart_icon = document.getElementsByClassName('cart-icon')[0];
const box = document.getElementsByClassName('box')[0];
const cart_item = document.getElementsByClassName('cart-item')[0];
let total_price = document.getElementById('total-price');
let price = 0;
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
    button.onclick = (e) => {
        e.preventDefault();
        // sessionStorage.setItem('cart' + cart_count, {
        //     "name": "phone",
        //     "quantity": 1
        // });
        cart_shoping.style.setProperty('--width_height', '17px');
        cart_shoping.setAttribute('data-content', ++cart_count);
        let clone = button.parentElement.parentElement.parentElement.cloneNode(true);
        cart_icon.appendChild(clone);
        clone.querySelector('.info').className += '-cart';
        clone.querySelector('a').innerHTML = 'buy';
        clone.querySelector('a').classList.add('buy-button');
        // document.querySelectorAll('.cart-icon .info')[cart_count - 1].querySelector('a').innerHTML = 'buy';
        // document.querySelectorAll('.cart-icon .info')[cart_count - 1]
        //     .querySelector('a').href = 'http://www.google.com';
        clone.querySelector('a').href = 'http://www.google.com';
        //? updating the price and total price
        price += Number(button.previousSibling.previousSibling.getAttribute('data-price'));
        total_price.innerHTML = price;
        let delete_btn = document.createElement('button');
        delete_btn.setAttribute('id', 'del-btn');
        delete_btn.innerHTML = 'remove';
        delete_btn.classList.add('delete-btn');
        // document.querySelectorAll('.cart-icon .info')[cart_count - 1].appendChild(delete_btn);
        clone.querySelector('.info-cart').appendChild(delete_btn);
        let number = document.createElement('input');
        number.type = 'number';
        number.min = '1';
        number.max = '100';
        number.value = "1";
        clone.querySelector('.info-cart').insertAdjacentElement("afterbegin", number);
        delete_btn.onclick = () => {
            // console.log(Number(button.previousSibling.previousSibling.getAttribute('data-price')));
            delete_btn.parentElement.parentElement.parentElement.remove();
            cart_shoping.setAttribute('data-content', --cart_count);
            price -= Number(button.previousSibling.previousSibling.getAttribute('data-price'));
            total_price.innerHTML = price;
        };
        number.onchange = () => {
            // console.log(sessionStorage.getItem('cart' + --cart_count));
            let current_price = Number(button.previousSibling.previousSibling.getAttribute('data-price')) *
                number.value;
            price = current_price;
            total_price.innerHTML = price;
            // console.log(Number(button.previousSibling.previousSibling.getAttribute('data-price')));

            //? update total price
        };
    };
});

cart_shoping.onclick = () => {
    box.classList.toggle('cart-active');
    document.getElementsByClassName('price')[0].classList.toggle('price-active');
};
document.onclick = (element) => {
    //^close the cart box
    // box.childNodes.forEach(item => {
    //     // console.log(element.target == item);
    //     if (element.target !== item && element.target.id !== 'i') {
    //         box.classList.remove('cart-active');
    //         document.getElementsByClassName('price')[0].classList.remove('price-active');
    //     }
    // });
    // console.log(box.children);
    // if (element.target.id !== 'i') {
    //     box.classList.remove('cart-active');
    //     document.getElementsByClassName('price')[0].classList.remove('price-active');
    // }
};
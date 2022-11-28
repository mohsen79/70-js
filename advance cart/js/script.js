const box = document.getElementsByClassName('box')[0];
const cart = document.getElementsByClassName('inner-cart')[0];
const icon = document.getElementsByClassName('fa')[0];
const clear = document.getElementById('clear');
const cart_price = document.getElementsByClassName('cart')[0];
const cart_after = window.getComputedStyle(cart_price, '::after');

// async function loadJson() {
const { default: jsonConfig } = await
import ('../database/db.json', {
    assert: {
        type: "json"
    }
});

for (let i = 0; i < jsonConfig.goods.length; i++) {
    box.innerHTML += `
            <div class="item">
                <input type='hidden' value='${jsonConfig.goods[i].id}' id='id'>
                <img src="${jsonConfig.goods[i].src}" alt="">
                <div class="info">${jsonConfig.goods[i].description}</div>
                <div class="buy">
                <span>${jsonConfig.goods[i].price} $</span>
                <a href="#" id='add-to-cart'>add to cart</a>
                </div>
             </div>
        `;
}

// }

icon.onclick = () => {
    document.getElementsByClassName('cart')[0].classList.toggle('cart-active');
};

window.addEventListener('scroll', () => {
    document.getElementsByClassName('cart')[0].classList.remove('cart-active');
});

let ids = localStorage.getItem('cart');
if (ids == null) {
    ids = [];
}

let price = Number(localStorage.getItem('total_price'));
if (price == null) {
    price = 0;
}

let quantities = localStorage.getItem('quantities');
if (quantities == null) {
    quantities = [];
}

console.log(price);

document.querySelectorAll('#add-to-cart').forEach(button => {
    button.onclick = () => {
        let id = button.parentElement.parentElement.querySelector('#id').value;
        ids = Array.from(ids).filter(id => id != ',');
        if (ids.includes(id)) {
            increaseQuantity(id);
        } else {
            ids.push(id);
            localStorage.setItem('cart', ids);
            let good = jsonConfig.goods.find(good => good.id == id);
            let cart_item = `
                <div class="cart-item">
                    <input type='hidden' value='${good.id}' id='id'>
                    <img src="${good.src}" alt="">
                    <div class="cart-price">
                        <span>${good.price}$</span>
                        <input type="number" min="1" max="100" value="" id="quantity_${good.id}">
                    </div>
                    <a href="#" class="remove">remove</a>
                </div>
            `;
            cart.innerHTML += cart_item;
            price += +good.price;
            updatePrice(price);
            // localStorage.setItem('total_price', price);
            // cart_price.setAttribute('data-price', price + '$');
            //~ localStorage.setItem('cart', cart.innerHTML);
        }
        let removes = document.querySelectorAll('.remove');
        removes.forEach(remove => {
            remove.onclick = () => {
                let id = remove.parentElement.querySelector('#id').value;
                let removed_good = jsonConfig.goods.find(good => good.id == id);
                cart.removeChild(remove.parentElement);
                ids = Object.values(ids).filter(good => good !== id);
                ids = Object.values(ids).join(',');
                localStorage.setItem('cart', ids);
                price = price - removed_good.price;
                updatePrice(price);
                // localStorage.setItem('total_price', price);
                // cart_price.setAttribute('data-price', price + '$');
                //~ localStorage.setItem('cart', cart.innerHTML);
            };
        });
    };
});

let goods = Array.from(localStorage.getItem('cart')).filter(good => good != ',');
for (let i = 0; i < goods.length; i++) {
    let good = jsonConfig.goods.find(good => good.id == goods[i]);
    let cart_item = `
                    <div class="cart-item">
                    <input type='hidden' value='${good.id}' id='id'>
                        <img src="${good.src}" alt="">
                        <div class="cart-price">
                            <span>${good.price}$</span>
                            <input type="number" min="1" max="100" value="" id="quantity_${good.id}">
                            </div>
                        <a href="#" class="remove">remove</a>
                    </div>
                `;
    cart_price.setAttribute('data-price', localStorage.getItem('total_price') + '$');
    cart.innerHTML += cart_item;
}

let removes = document.querySelectorAll('.remove');
removes.forEach(remove => {
    remove.onclick = () => {
        let id = remove.parentElement.querySelector('#id').value;
        let removed_good = jsonConfig.goods.find(good => good.id == id);
        cart.removeChild(remove.parentElement);
        goods = Object.values(goods).filter(good => good !== id);
        goods = Object.values(goods).join(',');
        localStorage.setItem('cart', goods);
        price = price - removed_good.price;
        updatePrice(price);
        // console.log(price);
        // if (price == 0) {
        //     alert('null');
        // }
        // localStorage.setItem('total_price', price);
        // cart_price.setAttribute('data-price', price + '$');
        //~ localStorage.setItem('cart', cart.innerHTML);
    };
});


clear.onclick = () => {
    localStorage.clear();
    location.reload();
};

let inputs = document.querySelectorAll('input[type=number]');
inputs.forEach(input => {
    let value = input.value;
    input.onchange = () => {
        if (input.value > value) {
            value++;
            let new_price = input.parentElement.querySelector('span').innerHTML.replace('$', '') *
                (value + 1);
            price = price - input.parentElement.querySelector('span').innerHTML.replace('$', '') *
                input.value;
            price += new_price;
            updatePrice(price);
        }
        if (input.value < value) {
            value--;
            let new_price = input.parentElement.querySelector('span').innerHTML.replace('$', '') *
                (value + 1);
            price = price + input.parentElement.querySelector('span').innerHTML.replace('$', '') *
                input.value;
            price -= new_price;
            updatePrice(price);
        }
    };
});

function increaseQuantity(id) {
    return document.getElementById('quantity_' + id).value++;
}

function updatePrice(price) {
    localStorage.setItem('total_price', price);
    cart_price.setAttribute('data-price', price + '$');
}
//todo: store number input
//todo: test array with push & pop via localstorage
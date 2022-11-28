let ids = JSON.parse(localStorage.getItem('quantities'));
if (ids == null) {
    ids = [{ "0": 0 }];
    localStorage.setItem('quantities', JSON.stringify(ids));
}

function clearStorage() {
    localStorage.clear();
}
console.log(ids);


let items = document.querySelectorAll('.item');
items.forEach(item => {
    item.querySelector('span').onclick = () => {
        ids = JSON.parse(localStorage.getItem('quantities'));
        let newItem = {
            [item.id]: Number(item.id)
        };
        ids.push(newItem);
        localStorage.setItem('quantities', JSON.stringify(ids));
        console.log(ids);
    };
    item.querySelector('button').onclick = () => {
        ids = JSON.parse(localStorage.getItem('quantities'));
        if (index > -1) {
            ids.splice(index, 1);
        }
        // ids.pop();
        localStorage.setItem('quantities', JSON.stringify(ids));
        console.log(ids);
    };
});

//***************************/
// let quantities = localStorage.getItem('cart') || [];

// console.log(quantities);

// let cart = new Map(Object.entries(quantities));
// let cart = new Map();
// console.log(cart);


// function clearStorage() {
//     localStorage.clear();
// }

// let items = document.querySelectorAll('.item');
// items.forEach(item => {
//     item.querySelector('span').onclick = () => {
//         cart.set(item.id, item.id);
//         localStorage.setItem('cart', cart);
//         console.log(cart);
//     };
//     item.querySelector('button').onclick = () => {
//         cart.delete(item.id);
//         localStorage.setItem('cart', cart);
//         console.log(cart);
//     };
// });
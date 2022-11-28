const items = document.querySelectorAll('h3');

items.forEach(item => {
    item.innerText = 0;

    function counter() {
        let target = item.getAttribute('data-target');

        if (+item.innerText < target) {
            item.innerText = +item.innerText + 2;
            setTimeout(counter, 1);
        } else {
            item.innerText = target;
        }
    }
    counter();
});
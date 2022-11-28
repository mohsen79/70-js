let items = document.querySelectorAll('.item');
window.onscroll = () => {
    if (window.pageYOffset > 100) {
        items.forEach(item => {
            console.log(item.offsetTop, window.pageYOffset);
            if (item.offsetTop - 450 <= window.pageYOffset) {
                if (item.classList.contains('left')) {
                    item.style.right = 0;
                } else {
                    item.style.left = 0;
                }
            }
        });
    }
};
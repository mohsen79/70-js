const images = document.querySelectorAll('img');
const comments = document.getElementsByClassName('comment');

for (let i = 0; i < images.length; i++) {
    images[i].onclick = () => {
        for (let j = 0; j < comments.length; j++) {
            comments[j].getAttribute('data-id') == images[i].getAttribute('id') ?
                comments[j].classList.add('active') :
                comments[j].classList.remove('active');
        }
    };
}
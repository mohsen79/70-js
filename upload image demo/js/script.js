let image = document.querySelector('img');
let input = document.querySelector('input');

input.addEventListener('change', () => {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            image.src = reader.result;
        };
        reader.readAsDataURL(file);
    } else {
        image.src = "photos/test2.jpg";
    }
});
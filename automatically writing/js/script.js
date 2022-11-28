const text = ['web developer ', 'back-end developer ', 'front-end developer '];
let h4 = document.querySelector('h4');
let index = 0;
let back_count = 1;
let count = 0;
let current = "";
let letter = "";

(function type() {
    if (count == text.length) {
        count = 0;
    }
    current = text[count];
    letter = current.slice(0, ++index);
    h4.innerHTML = letter;
    if (letter.length == current.length) {
        letter = current.slice(-letter.length, -back_count);
        back_count++;
        h4.innerHTML = letter;

        if (back_count == text[count].length) {
            back_count = 1;
            count++;
            index = 0;
        }
    }

    setTimeout(type, 200);
}());
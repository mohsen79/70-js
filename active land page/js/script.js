const sections = document.querySelectorAll('section div');
const li = document.querySelectorAll('header ul li');
let current;

window.onscroll = () => {
    sections.forEach(section => {
        let sectionOffset = section.offsetTop;
        let sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionOffset - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
        // document.body.scrollTop += 1000;
    });
    li.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    });
};
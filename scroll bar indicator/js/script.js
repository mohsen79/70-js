const progress = document.getElementsByClassName('progress-bar')[0];

window.addEventListener('scroll', () => {
    const topOffset = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (topOffset / height) * 100;
    progress.style.width = `${scrolled}%`;
});
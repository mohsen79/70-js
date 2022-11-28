const bar = document.getElementsByClassName('bar')[0];
const editor = document.getElementsByClassName('editor')[0];

function run() {
    let html = document.getElementById('html').value;
    let css = "<style>" + document.getElementById('css').value + "</style>";
    let js = "<script>" + document.getElementById('js').value + "</script>";
    let preview = document.getElementById('preview').contentWindow.document;

    preview.open();
    preview.write(html + css + js);
    preview.close();
}

function drag() {
    document.onmousemove = (e) => {
        editor.style.width = (e.pageX - bar.offsetWidth / 3) + 'px';
        // console.log(e.clientX);
    };
    let preview = document.getElementById('preview');

    preview.addEventListener('mouseover', (e) => {
        // editor.style.width = e.clientX + "px";
        drag();
        console.log('preview');
    });
}

bar.addEventListener('dragstart', drag);

bar.addEventListener('dragend', () => {
    bar.removeEventListener('dragstart', drag);
});
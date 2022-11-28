let input = document.getElementById('input');
let ul = document.querySelector('.content ul');
let removeAll = document.querySelector('.detail button');
let tags = [];

input.onkeyup = (event) => {
    if (tags.length != 10) {
        if (event.key == 'Enter') {
            if (!tags.includes(event.target.value)) {
                if (event.target.value.length <= 1) {
                    alert('wirte more character');
                } else {
                    addTag(event.target.value.trim());
                    remainedTag();
                }
            } else {
                alert('the tag already exits');
            }

            event.target.value = '';
        }
    } else {
        alert('no more space');
        event.target.value = '';
    }

};

function addTag(value) {
    let newVal = value.split(',');
    newVal.forEach(val => {
        let tag = `<li><i class="fa fa-close" onclick="remove(this,'${val}')"></i>${val}</li>`;
        ul.insertAdjacentHTML('beforeend', tag);
        tags.push(val);
    });

}

function remove(element, tag) {
    let index = tags.indexOf(tag);
    element.parentElement.remove();
    tags = tags.filter(tags => tags !== tag);
    remainedTag();
}

removeAll.onclick = () => {
    ul.querySelectorAll('li').forEach(li => li.remove());
    tags = [];
    remainedTag();
};

function remainedTag() {
    document.querySelector('.detail p').innerHTML = 10 - tags.length;
}

window.onload = () => {
    input.focus();
}

document.onclick = (e) => {
    if (e.target == document.querySelector('section')) {} else {
        input.focus();
    }
};
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('second');
let set_clock = setInterval(() => {

    let date_now = new Date();
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();
    let hr_calc = (hr * 30) + (min / 2);
    let min_calc = (min * 6) + (sec / 10);
    let sec_calc = sec * 6;
    hour.style.transform = `rotate(${hr_calc}deg)`
    minute.style.transform = `rotate(${min_calc}deg)`
    seconds.style.transform = `rotate(${sec_calc}deg)`

}, 1000)
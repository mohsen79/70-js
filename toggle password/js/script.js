function show() {
    var x = document.querySelector("input");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    document.getElementsByTagName('i')[0].classList.toggle('fa-eye-slash');
    document.getElementsByTagName('i')[0].classList.toggle('fa-eye');
}
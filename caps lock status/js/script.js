var input = document.getElementById("myInput");
var text = document.getElementById("text");
text.style.display = "none";
input.addEventListener("keyup", function(event) {
    if (event.getModifierState("CapsLock")) {
        text.style.display = "block";
    } else {
        text.style.display = "none"
    }
});
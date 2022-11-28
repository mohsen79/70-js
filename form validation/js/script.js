const button = document.querySelector('button');
let inputs = button.parentElement.querySelectorAll('input');

class Validation {
    // constructor(args) {
    //     args.forEach(arg => {
    //         arg.value = arg.value.trim();
    //         if (arg.value == '') {
    //             this.Error(arg);
    //         } else {
    //             this.Inspect(arg);
    //         }
    //     });
    // }

    // Inspect(arg) {
    //     switch (arg.name) {
    //         case 'full-name':
    //             this.True(arg);
    //             break;
    //         case 'email':
    //             if (!arg.value.includes('@') || !arg.value.includes('.com')) {
    //                 this.Error(arg, 'this is not email format');
    //             } else {
    //                 this.True(arg);
    //             }
    //             break;
    //         case 'number':
    //             if (isNaN(arg.value) || !typeof arg.value == 'number') {
    //                 this.Error(arg, 'write number');
    //             } else {
    //                 this.True(arg);
    //             }
    //             break;
    //         case 'password':
    //             this.True(arg);
    //             break;
    //         case 'password_confirmation':
    //             if (document.getElementsByName('password')[0].value !== arg.value) {
    //                 this.Error(arg, 'the password confirmation does not match to the password');
    //             } else {
    //                 this.True(arg);
    //             }
    //             break;
    //     }
    // }

    True(arg) {
        arg.style.border = '2px solid green';
        arg.previousElementSibling.className = 'fa fa-check';
        arg.previousElementSibling.classList.add('true');
        arg.nextElementSibling.innerHTML = '';
    }

    Error(arg, message = 'fill the input') {
        arg.style.border = '2px solid red';
        arg.previousElementSibling.className = 'fa fa-window-close';
        arg.previousElementSibling.classList.add('error');
        arg.nextElementSibling.innerHTML = message;
    }
}

// button.onclick = () => {
//     new Validation(inputs);
// };

//~ to use onclick method:uncomment the constructor and Inspect in class and also button onclick and
//~ comment the below codes

//* develop with onchange method */

let valid = new Validation();
inputs.forEach(input => {
    input.onkeyup = () => {
        input.value = input.value.trim();
        if (input.value == '') {
            valid.Error(input);
        } else {
            switch (input.name) {
                case 'full-name':
                    valid.True(input);
                    break;
                case 'email':
                    if (!input.value.includes('@') || !input.value.includes('.com')) {
                        valid.Error(input, 'this is not email format');
                    } else {
                        valid.True(input);
                    }
                    break;
                case 'number':
                    if (isNaN(input.value) || !typeof input.value == 'number') {
                        valid.Error(input, 'write number');
                    } else {
                        valid.True(input);
                    }
                    break;
                case 'password':
                    valid.True(input);
                    break;
                case 'password_confirmation':
                    if (document.getElementsByName('password')[0].value !== input.value) {
                        valid.Error(input, 'the password confirmation does not match to the password');
                    } else {
                        valid.True(input);
                    }
                    break;
            }
        }
    };
});
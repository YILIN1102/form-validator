const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline 
function shnowSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control succes';
}

// Check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Evebt listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.vale === ' ') {
        shonwError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if (email.vale === ' ') {
        shonwError(email, 'Email is required');
    } else if {(!isValidEmail(email.vale)){
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }

    if (password.vale === ' ') {
        shonwError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    if (password2.vale === ' ') {
        shonwError(password2, 'Passwod2 is required');
    } else {
        showSuccess(password2);
    }
});



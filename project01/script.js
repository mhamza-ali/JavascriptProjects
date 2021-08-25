const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// All funtions
// Functions to show error

function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}






//this ie the event listener for submit form
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if ( username.value === ''){
        showError(username,"username is required");
    }
});












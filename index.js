
const showPassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

showPassword.addEventListener('click', function () {
    if (password.type == "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
});
 
// save login button in a variable
const logInBtn = document.querySelector('#loginBtn')
// Log user in
// When login button is clicked
logInBtn.addEventListener('click', function () {
    // Get value of username input
    const userNameValue = document.querySelector('#username').value;
   
    // Get value of password input
    const passwordValue = document.querySelector('#password').value;

    // if username != david alert("Username or password is incorrect")
    if ( userNameValue !== 'david'){
        alert('Username or password is incorrect')
    }

    // if password != password alert("Username or password is incorrect")
    if ( passwordValue !== 'password'){
       alert('Username or password is incorrect')
    }

    // If username && password are correct alert("You have successfully logged in")
    if (userNameValue === 'david' && passwordValue === 'password') {
        alert('You have successfully logged in')
    }
})
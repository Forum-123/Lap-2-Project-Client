const signUpButton = document.getElementById('signUpButton');
const logInButton = document.getElementById('logInButton');
const registerForm = document.getElementById('registerForm');
const logInForm = document.getElementById('loginForm');
const alreadyRegLink = document.getElementById('alreadyRegLink');
const notYetRegLink = document.getElementById('notYetRegLink');

signUpButton.addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.style.display = "block";
    signUpButton.style.display = "none";
    logInButton.style.display = "none";
});

logInButton.addEventListener("click", (e) => {
    e.preventDefault();
    logInForm.style.display = "block";
    signUpButton.style.display = "none";
    logInButton.style.display = "none";
});

alreadyRegLink.addEventListener("click", (e) => {
    e.preventDefault();
    logInForm.style.display = "block";
    registerForm.style.display = "none";
    signUpButton.style.display = "none";
    logInButton.style.display = "none";
});

notYetRegLink.addEventListener("click", (e) => {
    e.preventDefault();
    logInForm.style.display = "none";
    registerForm.style.display = "block";
    signUpButton.style.display = "none";
    logInButton.style.display = "none";
});
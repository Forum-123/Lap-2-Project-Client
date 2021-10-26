const regForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

regForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = regForm.children['name'].value;
    const email = regForm.children['newEmail'].value;
    const password = regForm.children['newPassword'].value;
    const confirmPass = regForm.children['confirmPassword'].value;

    if(password === confirmPass){
        regUser(name, email, password);
    }
});

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = loginForm.children['email'].value;
    const password = loginForm.children['password'].value;
    loginUser(email, password)
});
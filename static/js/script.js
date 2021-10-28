const regForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

regForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = regForm.children['name'].value;
    const email = regForm.children['newEmail'].value;
    let password = regForm.children['newPassword'].value;
    const confirmPass = regForm.children['confirmPassword'].value;

    if (password.length < 8 || !/[0-9]/g.test(password)) {
        alert('Your password must contain at least 8 characters and at least 1 number');
        password = '';
    } 
    if (password === confirmPass){
        regUser(name, email, password);
    } else {
        alert('Your passwords do not match')
    }   
});

loginForm.addEventListener('submit', e => {
    e.preventDefault();






    
    const email = loginForm.children['email'].value;
    const password = loginForm.children['password'].value;
    loginUser(email, password)
});
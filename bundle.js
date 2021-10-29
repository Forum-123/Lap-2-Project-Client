(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);

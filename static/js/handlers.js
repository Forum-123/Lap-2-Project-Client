// Login/Register Page

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


// Habits page

let newHabit = document.getElementById('newHabitButton');
let closeModal = document.getElementById('closeNewHabitModal');
let modal = document.getElementById('newHabitModal');
let habitForm = document.getElementById('newHabitForm');
let signOut = document.getElementById('signOutButton');
let greeting = document.getElementById('user-greet');

newHabit.addEventListener('click', e => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', e => {
    modal.style.display = 'none';
});

habitForm.addEventListener('submit', e => {
    e.preventDefault();
    let title = habitForm.children['title'].value;
    let frequency = habitForm.children['frequency'].value;

    let userid = storedUserId;

    console.log(title, frequency, userid)
    submitHabit(title, frequency, userid);

    function delayReload(){
        setTimeout(reloadPage, 100);
    }
    function reloadPage () {
        location.reload();
    }

    delayReload();
});

signOut.addEventListener('click', e => {
    localStorage.clear();
    location.href = "./index.html";
});

window.addEventListener('load', e => {
    let username = localStorage.getItem('username');
    if (!username) { location.href = "./index.html" };
    greeting.textContent = `Hello ${username}`;
});

const checkboxClick = (boxId, habitId) => {
    let habitBox = document.getElementById(boxId);
    habitBox.addEventListener('change', e => {
        if(e.target.checked){
            submitLog(habitId);
            habitBox.disabled = true;
        };
    });
};

const deleteHabit = (buttonId, habitId) => {
    let habitBox = document.getElementById(buttonId);
    habitBox.setAttribute("class", "delete");
    habitBox.addEventListener('click', e => {
        console.log('event')
        removeHabit(habitId);
        
        function delayReload(){
            setTimeout(reloadPage, 100);
        }

        function reloadPage () {
            location.reload();
        }
    
        delayReload();
    });
};





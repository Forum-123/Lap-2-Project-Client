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

    submitHabit(title, frequency, userid);
    window.location.reload();
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



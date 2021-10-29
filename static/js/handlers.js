let newHabit = document.getElementById('newHabitButton');
let closeModal = document.getElementById('closeNewHabitModal');
let modal = document.getElementById('newHabitModal');
let habitForm = document.getElementById('newHabitForm');
let signOut = document.getElementById('signOutButton');
let greeting = document.getElementById('user-greet');
let checkbox =

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
        }
    })
}

const deleteHabit = (buttonId, habitId) => {
    let habitBox = document.getElementById(buttonId);
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
    })
}





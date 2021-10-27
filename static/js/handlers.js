let newHabit = document.getElementById('newHabitButton');
let closeModal = document.getElementById('closeNewHabitModal');
let modal = document.getElementById('newHabitModal');
let habitForm = document.getElementById('newHabitForm');

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
    console.log(`title: ${title}, freq: ${frequency}`);

    //CHANGE THIS
    let userid = 1;

    submitHabit(title, frequency, userid);
})


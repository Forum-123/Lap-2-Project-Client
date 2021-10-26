let userId;

function getUserHabits(userId) {
    fetch(`http://localhost:3000/habits/user/${userId}`)
        .then(resp => {
            return resp.json()
        })
        .then(displayHabits)
        .catch(console.warn)
};

function displayHabits(habits) {
    for(let i = 0; i < habits.length; i++) {
        console.log(habits[i].habitName)
    }
}

window.addEventListener('load', e => {
    getUserHabits(1);
})
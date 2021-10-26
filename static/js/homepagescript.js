const habitSection = document.querySelector('#display-habits');

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
        //displays streak
        const streakArea = document.createElement('div');
        const streakHeader = document.createElement('p');
        streakHeader.textContent = "Streak:";
        const streakCount = document.createElement('h3');
        
        //CHANGE THIS!!!
        streakCount.textContent = "22";

        streakArea.appendChild(streakHeader);
        streakArea.appendChild(streakCount);

        habitSection.appendChild(streakArea);
        
        //displays habit name
        const habitNameArea = document.createElement('div');
        
        const habitNameText = document.createElement('h2');
        habitNameText.textContent = `${habits[i].habitName}`;

        habitNameArea.appendChild(habitNameText);
        habitSection.appendChild(habitNameArea);

        //displays form
        const checkboxArea = document.createElement('div');

        const checkboxLabel = document.createElement('p');
        if(habits[i].habitFrequency === "Daily") {
            checkboxLabel.textContent = "Have you done this today?";
        }
        else if(habits[i].habitFrequency === "Weekly") {
            checkboxLabel.textContent = "Have you done this this week?";
        }
        else {
            checkboxLabel.habitFrequency = "Have you done this this month?";
        }
        checkboxArea.appendChild(checkboxLabel);

        const checkboxForm = document.createElement('form');
        const checkboxTick = document.createElement('input');
        checkboxTick.type = "checkbox";
        checkboxForm.append(checkboxTick);
        checkboxArea.appendChild(checkboxForm);

        habitSection.appendChild(checkboxArea);
    }
}

window.addEventListener('load', e => {
    getUserHabits(1);
})
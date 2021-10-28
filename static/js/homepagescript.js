const habitSection = document.querySelector('#display-habits');
const storedUserId = localStorage.getItem("userId");

async function displayStreakCount(habitId) {
    try {
        let logs = await fetch(`https://wellbeing-habit-tracker-server.herokuapp.com/logs/habit/${habitId}`);
        let logsJson = await logs.json();
        return getStreakCount(logsJson);
    }
    catch(err) {
        console.warn;
    }
}

function getStreakCount(logs) {
    let streakCount = 0;
    for(let i = 1; i < logs.length; i++) {
        let date1 = new Date(logs[i - 1].logDate);
        let date2 = new Date(logs[i].logDate);
        
        let differenceInTime = date2.getTime() - date1.getTime();
        let differenceInDays = differenceInTime / (1000 * 3600 * 24);

        if(differenceInDays > 1) {
            streakCount = 0;
        } else if(differenceInDays === 1) {
            streakCount++;
        };
    };
    return streakCount;
};

function getUserHabits(userId) {
    fetch(`https://wellbeing-habit-tracker-server.herokuapp.com/habits/user/${userId}`)
        .then(resp => {
            return resp.json()
        })
        .then(displayHabits)
        .catch(console.warn)
};

async function displayHabits(habits) {
    for(let i = 0; i < habits.length; i++) {
        //displays streak
        const streakArea = document.createElement('div');
        const streakHeader = document.createElement('p');
        streakHeader.textContent = "Streak:";
        const streakCount = document.createElement('h3');
        
        let streakCountNumber = await displayStreakCount(habits[i].id);

        streakCount.textContent = streakCountNumber;

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
            checkboxLabel.textContent = "Have you done this this month?";
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
    getUserHabits(storedUserId);
})
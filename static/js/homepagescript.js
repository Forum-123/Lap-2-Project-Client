const habitSection = document.querySelector('#display-habits');
const storedUserId = localStorage.getItem("userId");

async function displayStreakCount(habitId) {
    try {
        let logs = await fetch(`http://localhost:3000/logs/habit/${habitId}`);
        let logsJson = await logs.json();
        if (logsJson.length) {
            return getStreakCount(logsJson)
        }
    }
    catch(err) {
        console.warn;
    }
}
// this function prevents habits being displayed atm
async function getStreakCount(logs) {
    const habitId = logs[0].habitId; 
    async function getHabitByHabitId(habitId) {
    try {
        let habit = await fetch(`http://localhost:3000/habits/${habitId}`);
        let habitJson = await habit.json();
        return habitJson;
        }
    catch(err) {
            console.warn;
        }       
    }
    
    let returnedHabit = await getHabitByHabitId(habitId);

    let streakCount = 0;
    for(let i = 1; i < logs.length; i++) {
        let date1 = new Date(logs[i - 1].logDate);
        let date2 = new Date(logs[i].logDate);
        
        let differenceInTime = date2.getTime() - date1.getTime();
        let differenceInDays = differenceInTime / (1000 * 3600 * 24);
        if (returnedHabit.habitFrequency === 'Daily')
        {
            if(differenceInDays > 1) {
                streakCount = 0;
            } else if(differenceInDays === 1) {
                streakCount++;
            };
        } else if (returnedHabit.habitFrequency === 'Weekly') {
            if(differenceInDays > 7) {
                streakCount = 0;
            } else if(differenceInDays === 7) {
                streakCount++;
            };
        } else if (returnedHabit.habitFrequency === 'Monthly') {
            if(differenceInDays > 31) {
                streakCount = 0;
            } else if(differenceInDays === 31) {
                streakCount++;
            };
        } 

        }
    return streakCount;


};

function getUserHabits(userId) {
    fetch(`http://localhost:3000/habits/user/${userId}`)
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

        streakCount.textContent = streakCountNumber || '0';

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

        checkboxTick.setAttribute('id', `habitBox${habits[i].id}`);
        checkboxClick(`habitBox${habits[i].id}`, habits[i].id);
    }
}

window.addEventListener('load', e => {
    getUserHabits(storedUserId);
})
const habitSection = document.querySelector('#display-habits');

let userId;

async function displayStreakCount(habitId) {
    try {
        let logs = await fetch(`http://localhost:3000/logs/habit/${habitId}`);
        let logsJson = await logs.json();
        return getStreakCount(logsJson);
    }
    catch(err) {
        console.warn;
    }
}

function getStreakCount(logs) {
    let streakCount = 0;
    console.log(logs);
    for(let i = 1; i < logs.length; i++) {
        let date1 = new Date(logs[i-1].logDate);
        console.log(`date1 is ${date1}`)
        console.log(typeof date1);
       
        let date2 = new Date(logs[i].logDate);
        console.log(`date2 is ${date2}`)
        
        let differenceInTime = date2.getTime() - date1.getTime();
        let differenceInDays = differenceInTime / (1000 * 3600 * 24);

        console.log(differenceInDays);

        if(differenceInDays > 1) {
            streakCount = 0;
        } else if(differenceInDays === 1) {
            streakCount++;
        };
    };
    console.log(`streak count is ${streakCount}`);
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
        console.log(streakCountNumber);

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
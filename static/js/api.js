const submitHabit = async (title, frequency, userid) => {
    try {
        let response = await fetch('https://wellbeing-habit-tracker-server.herokuapp.com/habits', {
            method: 'POST',
            body: JSON.stringify({habit_name: title, habit_frequency: frequency, user_id: userid}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': localStorage.getItem('token')
            }
        });
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    } catch(err) {
        console.log(err);
    }
}

const submitLog = async (habitId)  => {
    var today = new Date().toISOString().slice(0, 10);
    console.log(today);
    try {
        let response = await fetch('http://localhost:3000/logs', {
            method: 'POST',
            body: JSON.stringify({habit_id:habitId, log_date:today, habit_notes:' '}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': localStorage.getItem('token')
            }
        });
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    } catch(err) {
        console.log(err);
    }
}
import { API_URL } from './url.js';

const submitHabit = async (title, frequency, userid) => {
    try {
        let response = await fetch(`${API_URL}/habits`, {
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
    let today = new Date().toISOString().slice(0, 10);
    try {
        let response = await fetch(`${API_URL}/logs`, {
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

const removeHabit = async (habitId)  => {
    try {
        await fetch(`http://localhost:3000/habits/${habitId}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': localStorage.getItem('token')
            }
        });
    } catch(err) {
        console.log(err);
    }
}

module.exports = { submitHabit, submitLog, removeHabit };

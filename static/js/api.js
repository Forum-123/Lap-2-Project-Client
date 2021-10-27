const submitHabit = async (title, frequency, userid) => {
    try {
        let response = await fetch('http://localhost:3000/habits', {
            method: 'POST',
            body: JSON.stringify({habit_name: title, habit_frequency: frequency, user_id: userid}),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        });
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    } catch(err) {
        console.log(err);
    }
}
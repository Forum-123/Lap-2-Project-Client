const regUser = async (name, email, password) => {
    try {
        let response = await fetch('https://wellbeing-habit-tracker-server.herokuapp.com/auth/register', {
            method: 'POST',
            body: JSON.stringify({ name: name, email: email, password: password }),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        });
        let jsonResponse = await response.json();
        if(jsonResponse.msg === 'User created'){
            loginUser(email, password);
        } else {
            alert('Please try again');
        }
    } catch(err) {
        console.log(err)
    }
}

const loginUser = async (email, password) => {
    try {
        let response = await fetch('https://wellbeing-habit-tracker-server.herokuapp.com/auth/login', {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        });
        let jsonResponse = await response.json();
        jsonResponse ? tryLogin(jsonResponse) : alert('Please try again');
    } catch(err) {
        console.log(err);
    }
}

const tryLogin = (data) => {
    const decodedToken = jwt_decode(data.token);
    console.log(decodedToken)
    localStorage.setItem('username', decodedToken.user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', decodedToken.id);
    location.href = "./homepage.html";
}
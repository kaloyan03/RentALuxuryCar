const baseUrl = 'http://localhost:8000';


const registerUser = (data) => {
    return fetch(`${baseUrl}/auth-api/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
    .catch(response => {
        response.json()
        .then(error => {
            alert(error.message);
        })
    })
}

const loginUser = (data) => {
    return fetch(`${baseUrl}/auth-api/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
    .catch(response => {
        response.json()
        .then(error => {
            alert(error.message);
        })
    })
}


export default {
    registerUser,
    loginUser,
}
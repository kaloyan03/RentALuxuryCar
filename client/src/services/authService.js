const baseUrl = 'http://localhost:8000';


const registerUser = (data) => {
    return fetch(`${baseUrl}/auth-api/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
}

const loginUser = (data) => {
    return fetch(`${baseUrl}/auth-api/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
}


export default {
    registerUser,
    loginUser,
}
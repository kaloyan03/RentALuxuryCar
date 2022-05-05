const baseUrl = 'http://localhost:8000';

const getOne = (id) => {
    return fetch(`${baseUrl}/api/rents/${id}`, {
        method: 'GET',
    })
    .then(response => response.json())
}

const createRent = (data) => {
    return fetch(`${baseUrl}/api/rents/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
}


export default {
    getOne,
    createRent,
}
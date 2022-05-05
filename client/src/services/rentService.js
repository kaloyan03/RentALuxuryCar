const baseUrl = 'http://localhost:8000';

const getOne = (id) => {
    return fetch(`${baseUrl}/api/rents/${id}`, {
        method: 'GET',
    })
    .then(response => response.json())
}

export default {
    getOne,
}
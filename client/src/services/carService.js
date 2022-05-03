const baseUrl = 'http://localhost:8000';

const getAll = () => {
    return fetch(`${baseUrl}/cars-api/`, {
        method: 'GET',
    })
    .then(response => response.json())
}

const getOne = (id) => {
    return fetch(`${baseUrl}/cars-api/${id}/`, {
        method: 'GET',
    })
    .then(response => response.json())
}

export default {
    getAll,
    getOne,
}
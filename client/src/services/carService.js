const baseUrl = 'http://localhost:8000';

const getAll = () => {
    return fetch(`${baseUrl}/api/cars/`, {
        method: 'GET',
    })
    .then(response => response.json())
}

const getOne = (id) => {
    return fetch(`${baseUrl}/api/cars/${id}/`, {
        method: 'GET',
    })
    .then(response => response.json())
}

export default {
    getAll,
    getOne,
}
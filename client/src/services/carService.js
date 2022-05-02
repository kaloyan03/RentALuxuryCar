const baseUrl = 'http://localhost:8000';

const getAll = () => {
    return fetch(`${baseUrl}/cars-api/`, {
        method: 'GET',
    })
    .then(response => response.json())
}

const getOne = (id) => {
    return fetch(`${baseUrl}/cars-api/${id}`, {
        method: 'GET',
    })
    .then(response => response.json())
}

const getImage = () =>  {
    return fetch("http://127.0.0.1:8000/media/cars_images/BMW_560_image.jpg")
    .then(response => response.blob())
}


export default {
    getAll,
    getOne,
    getImage,
}
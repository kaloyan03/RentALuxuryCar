import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import carService from '../../services/carService';

function CarDetails() {
    let { id } = useParams();
    let [car, setCar] = useState('');

    useEffect(() => {
        carService.getOne(id)
        .then(carResult => {
            setCar(carResult);
        })
    }, [])


    return (
        <section className="car-details-page">
            <h2>{car.brand} {car.model}</h2>
        </section>
    );
}

export default CarDetails;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import carService from '../../services/carService';
import RentCar from '../RentCar/RentCar';
import './CarDetails.css';

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
            <h2 className='car-details-page-title'>{car.brand} {car.model}</h2>
            <article className='car-details-page-content'>
                <article className='car-year-production'>
                    <h3 className='car-year-production-title'>Year of production</h3>
                    <p className='car-year-production-content'>{car.yearCreated}</p>
                </article>


                <article className='car-description'>
                    <h3 className='car-description-title'>Overview of {car.brand} {car.model}</h3>
                    <p className='car-description-content'>{car.description}</p>
                </article>
                <article className='car-specifications'>
                    <h3 className='car-specifications-title'>Technical specifications</h3>
                    <div className='car-specifications-content'>
                        <p>Brand: <strong>{car.brand}</strong></p>
                        <p>Model: <strong>{car.model}</strong></p>
                        <p>Coupe type: <strong>{car.coupeType}</strong></p>
                        <p>Gearbox: <strong>{car.gearboxType}</strong></p>
                        <p>Fuel consumption: <strong>{car.fuelConsumption} l/100 km</strong></p>
                        <p>HP: <strong>{car.horsepower}</strong></p>
                    </div>
                </article>
            </article>

            <article className='car-image-and-rent'>
                <img src={car.image}></img>

                <RentCar car={car}></RentCar>
            </article>
        </section>
    );
}

export default CarDetails;
import { useState, useEffect } from 'react';
import carService from '../services/carService';
import Car from './Car';


function Cars() {
    let [cars, setCars] = useState([]);


    useEffect(() => {
        carService.getAll()
        .then(resultCars => {
            setCars(resultCars);
        })
    }, []);


    return(
        <section className="cars-page">
            <h2 className="cars-page-title">Cars available for rent</h2>

            <ul className="cars-page-list-cars">
                {cars.map(c => <Car car={c}></Car>)}
            </ul>
        </section>
    );

}

export default Cars;
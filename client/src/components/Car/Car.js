import './Car.css';
import { Link } from 'react-router-dom';

function Car({
    car,
}) {
    

    return(
        <li className='car-list-item'>
            <h3 className='car-list-item-title'>{car.brand} {car.model}</h3>
            <p className='car-list-item-year'>{car.yearCreated}</p>
            <article className='car-list-item-image'>
            <img src={car.image}></img>
            </article>

            <Link to={`/cars/${car.id}`} className='car-list-item-information-btn'>Information</Link>
        </li>
    );

}

export default Car;
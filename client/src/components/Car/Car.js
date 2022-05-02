import './Car.css';

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

            <button className='car-list-item-information-btn'>Information</button>
        </li>
    );

}

export default Car;
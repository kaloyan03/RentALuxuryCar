function Car({
    car,
}) {
    

    return(
        <li>
            <h3>{car.brand} {car.model}</h3>
            <img src={car.image}></img>
        </li>
    );

}

export default Car;
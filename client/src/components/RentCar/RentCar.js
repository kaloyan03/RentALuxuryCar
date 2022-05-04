function RentCar({
    car,
}) {
    return (
        <article className="rent-car">
            <form className="rent-car-form">
                <h3>Rent this car!</h3>
                <div className="input-group">
                    <label>
                        Start date
                    </label>

                    <input type='date' placeholder="Start date">
                    </input>
                </div>

                <div className="input-group">
                    <label>
                        End date
                    </label>

                    <input type='date' placeholder="End date">
                    </input>
                </div>

                <input type='submit' value='Rent'></input>
            </form>
        </article>
    )
}

export default RentCar;
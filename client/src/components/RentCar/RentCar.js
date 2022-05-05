import './RentCar.css';
import { useState } from 'react';
import rentService from '../../services/rentService';
import { getUserData } from '../../utils.js';

function RentCar({
    car,
}) {

    let [startDate, setStartDate] = useState('');
    let [endDate, setEndDate] = useState('');


    const startDateOnChangeHandler = (e) => {
        let startDateValue = e.currentTarget.value;
        setStartDate = startDateValue;
    }

    const endDateOnChangeHandler = (e) => {
        let endDateValue = e.currentTarget.value;
        setEndDate = endDateValue;
    }

    const rentFormSubmitHandler = (e) => {
        e.preventDefault();

        let rent = {
            'rentStartDate': startDate,
            'rentEndDate': endDate,
            'carId': car.id,
            'userId': getUserData()['userId']
        }

        rentService.createRent(rent)
        .then(rentResult => {
            console.log(rentResult);
        })
    };


    return (
        <article className="rent-car">
            <form className="rent-car-form" onSubmit={rentFormSubmitHandler}>
                <h3>Rent this car!</h3>
                <div className="input-group">
                    <label>
                        Start date
                    </label>

                    <input type='date' placeholder="Start date" onChange={startDateOnChangeHandler}>
                    </input>
                </div>

                <div className="input-group">
                    <label>
                        End date
                    </label>

                    <input type='date' placeholder="End date" onChange={endDateOnChangeHandler}>
                    </input>
                </div>

                <input type='submit' value='Rent'></input>
            </form>
        </article>
    )
}

export default RentCar;
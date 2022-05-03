import { useState } from 'react';
import './Register.css';
import authService from '../../services/authService.js';


function Register() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [repeatPassword, setRepeatPassword] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [age, setAge] = useState('');


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (password !== repeatPassword) {
            alert('Passwords must match');
            setPassword('');
            setRepeatPassword('');
            return;
        }

        const profile = {
            firstName,
            lastName,
            age,
        }

        authService.registerUser(({ email, password, profile }))
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
            })

        setFirstName('');
        setLastName('');
        setAge('');
        setEmail('');
        setPassword('');
        setRepeatPassword('');
    }


    return (
        <section className='register-page'>
            {/* <form onSubmit={handleFormSubmit}>
                <article className='input-group'>
                    <label htmlFor='register-first-name'>First Name:</label>
                    <input id='register-first-name' type='text' value={firstName} onChange={handleFirstNameChange} />
                </article>

                <article className='input-group'>
                    <label htmlFor='register-last-name'>Last Name:</label>
                    <input id='register-last-name' type='text' value={lastName} onChange={handleLastNameChange} />
                </article>

                <article className='input-group'>
                    <label htmlFor='register-age'>Age:</label>
                    <input id='register-age' type='number' value={age} onChange={handleAgeChange} />
                </article>

                <article className='input-group'>
                    <label htmlFor='register-email'>Email:</label>
                    <input id='register-email' type='text' value={email} onChange={handleEmailChange} />
                </article>
                
                <article className='input-group'>
                    <label htmlFor='register-password'>Password:</label>
                    <input id='register-password' type='password' value={password} onChange={handlePasswordChange} />
                </article>

                <article className='input-group'>
                    <label htmlFor='register-repeat-password'>Repeat Password:</label>
                    <input id='register-repeat-password' type='password' value={repeatPassword} onChange={handleRepeatPasswordChange} />
                </article>

                <input type='submit' value='Register' />
            </form> */}

            <form className="register-form" onSubmit={handleFormSubmit}>
            <h2 className="register-page-title">
                Register
            </h2>
                <input id='register-first-name' type='text' placeholder='First Name' value={firstName} onChange={handleFirstNameChange} className='input-field' />
                <input id='register-last-name' type='text' placeholder='Last Name' value={lastName} onChange={handleLastNameChange} className='input-field' />
                <input id='register-age' type='number' placeholder='Age' value={age} onChange={handleAgeChange} className='input-field' />
                <input id='register-email' type='text' placeholder='Email' value={email} onChange={handleEmailChange} className='input-field' />
                <input id='register-password' type='password' placeholder='Password' value={password} onChange={handlePasswordChange} className='input-field' />
                <input id='register-repeat-password' type='password' placeholder='Repeat Password' value={repeatPassword} onChange={handleRepeatPasswordChange} className='input-field' />


                <p className="register-page-login">Got an account? <a href="">Login</a></p>
                <p className="forgot_password">Forgot your password? <a href="">Reset Your Password</a></p>

                <input type="submit" name="register_submit" value="Register"/>
            </form>
        </section>
    );
}

export default Register;
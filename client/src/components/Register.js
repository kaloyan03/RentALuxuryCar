import { useState } from 'react';
import authService from '../services/authService';

function Register() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [repeatPassword, setRepeatPassword] = useState('');


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (password !== repeatPassword) {
            alert('Passwords must match');
            setPassword('');
            setRepeatPassword('');
            return;
        }

        authService.registerUser(({ email, password }))
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
            })

        setEmail('');
        setPassword('');
        setRepeatPassword('');
    }


    return (
        <section className='register-page'>
            <h2 className="register-page-title">
                Register
            </h2>

            <form onSubmit={handleFormSubmit}>
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
            </form>
        </section>
    );
}

export default Register;
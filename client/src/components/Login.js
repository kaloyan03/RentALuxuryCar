import { useState } from 'react';
import authService from '../services/authService';

function Login() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        authService.loginUser(({ email, password }))
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
            })

        setEmail('');
        setPassword('');
    }


    return (
        <section className='login-page'>
            <h2 className="login-page-title">
                Login
            </h2>

            <form onSubmit={handleFormSubmit}>
                <article className='input-group'>
                    <label htmlFor='login-email'>Email:</label>
                    <input id='login-email' type='text' value={email} onChange={handleEmailChange} />
                </article>
                <article className='input-group'>
                    <label htmlFor='login-password'>Password:</label>
                    <input id='login-password' type='password' value={password} onChange={handlePasswordChange} />
                </article>
                <input type='submit' value='Login' />
            </form>
        </section>
    );
}

export default Login;
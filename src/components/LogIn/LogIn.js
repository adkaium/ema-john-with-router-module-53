import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';
import './LogIn.css';

const LogIn = () => {
const {userLogIn} = useContext(AuthContext);
const navigate = useNavigate()

const handleSubmit=(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    form.reset()
    userLogIn(email,password)
    .then(res =>{
        const user = res.user;
        navigate('/')
        alert('Log In Confrim')
    }).catch(error =>console.error(error))
}
    return (
        <div className='form-container'>
            <h1 className='form-title'>Log In</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' required />
                </div>
                <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default LogIn;
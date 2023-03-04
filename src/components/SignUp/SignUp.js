import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';
import './SignUp.css';
const SignUp = () => {
 const [error, setError] = useState(null);
 const {createNewUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const password= form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);
        
        if(password.length <  6){
            setError('password Should be 6 character long')
            return;
        }
        if(password !== confirm){
            setError('Your Password did not match')
            return;
        }
        createNewUser(email,password)
        .then(res=>{
            const user = res.user;
            console.log(user);
        }).catch(error => console.error(error))

        form.reset()
    }
    

    return (
        <div className='form-container'>
        <h1 className='form-title'>Sign Up</h1>
        <form  onSubmit={handleSubmit}>
            <div className='form-control'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' required />
            </div>
            <div className='form-control'>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' required /><br />
            <span><small className='text-error'>{error}</small></span>
            </div>
            <div className='form-control'>
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name='confirm' required /><br />
            <span><small className='text-error'>{error}</small></span>
            </div>
            <input className='btn-submit' type="submit" value="SignUp" />
        </form>
        <p>Alrady have an account? <Link to='/login'>Login</Link></p>
    </div>
    );
};

export default SignUp;
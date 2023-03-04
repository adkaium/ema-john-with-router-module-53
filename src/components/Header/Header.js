import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const navigate = useNavigate
    const handleLogout = () =>{
        logOut()
        .then(res=>{
            navigate('/login')
        }).catch(error=>{

        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
               {
                user?.uid ? <button className='btn-logout' onClick={handleLogout}>Log Out</button> :<>
                 <Link to='/login'>Log In</Link>
                <Link to='/signup'>Sign Up</Link>
                </>
               }
                <span>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;
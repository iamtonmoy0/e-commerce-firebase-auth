import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const [message,setMessage]=useState('')
    const {logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            alert('logOut successful')
        })
        .catch(error=>{
            setMessage(error.message)
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <button type='submit' onClick={handleLogOut}>Logout</button>
            </div>
        </nav>
    );
};

export default Header;
import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Header = () => {
    const [message,setMessage]=useState('')
    const {logOut,user}=useContext(AuthContext)
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
             
                {
                    user ? <Link style={{display:'flex',flexDirection:'row',}}>
                     
                    <p>{user.email}</p>
                    <button type='submit' onClick={handleLogOut}>Logout</button>
                    </Link> : 
                    <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    </>
                }
                
            </div>
        </nav>
    );
};

export default Header;
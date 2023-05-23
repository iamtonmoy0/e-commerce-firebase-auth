import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const [error,setError]=useState('')
     const navigate=useNavigate();
     const location =useLocation()
     //if location exist in path name it will redirect
     const from=location.state?.from?.pathname || '/';
   
    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const mail=form.email.value;
        const pass=form.password.value;
        setError('')
        signIn(mail,pass)
        .then(()=>{
            form.reset()
            setError('sign in successful')
            navigate(from)
        })
        .catch(error=>{
            setError(error.message)
        })


    }
    return (
        <div>
            <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form  onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input  name="password" id="password" required />
                 
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john? <Link to="/">Create New Account</Link></small></p>
            {error}
        </div>
        </div>
    );
};

export default Login;
import React, { useContext, useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const [error,setError]=useState('')


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
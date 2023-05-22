import  {React, useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
	const [error,setError]=useState('')
	const {createUser}=useContext(AuthContext);

	const handleSignUp=(e)=>{
		e.preventDefault()
		const form=e.target;
		const mail=form.email.value;
		const pass=form.password.value;
		const confirmPass=form.confirm.value;
		setError('') //reset error message
		// password condition
		if(pass !== confirmPass){
		 setError("Your password didn't match")
		 return
		}else if(pass.length<6){
			setError('Password should be minimum 6 digit')
			return
		}
		// creating user
		createUser(mail,pass)
	   	.then(()=>{
			form.reset();
		})
		.catch(error=>{
			setError(error.message)
		})

		
	}
	return (
		<div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form  onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="confirm-password" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
	    
            <p className='text-error'>{error}</p>
        </div>
	);
}

export default SignUp;

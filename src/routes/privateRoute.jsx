import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../components/provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
	const{user,loader}=useContext(AuthContext)
	if(loader){
		return <div>loading .....</div>
	}

	if(user){
		return children
	}
	return <Navigate to='/login'></Navigate>
}

export default PrivateRoute;

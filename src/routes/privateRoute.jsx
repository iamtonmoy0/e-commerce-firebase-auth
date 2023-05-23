import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../components/provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

	  //figure out current location and previous location
	  const location=useLocation()
      		

	const{user,loader}=useContext(AuthContext)
	if(loader){
		return <div>loading .....</div>
	}

	if(user){
		return children
	}
	return <Navigate to='/login' state={{from:location}}></Navigate>
}

export default PrivateRoute;

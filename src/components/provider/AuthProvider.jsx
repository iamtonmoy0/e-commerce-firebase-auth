import  {React, createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
	const [user,setUser]=useState(null);

	// creating user  with mail
	const createUser=(mail,pass)=>{
		return createUserWithEmailAndPassword(auth,mail,pass);

	}
	 //log in
	 const signIn = (mail, pass) => {
         return signInWithEmailAndPassword(auth, mail, pass);
         }

	 const logOut=()=>{
		return signOut(auth)
	 }

  


	const authInfo={
		user,
		createUser,
		signIn,
		logOut



	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;

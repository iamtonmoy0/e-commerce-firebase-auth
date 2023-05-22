import  {React, createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
	const [user,setUser]=useState(null);
	const [loader,setLoader]=useState(true)

	// creating user  with mail
	const createUser=(mail,pass)=>{
		return createUserWithEmailAndPassword(auth,mail,pass);

	}
	 //log in
	 const signIn = (mail, pass) => {
         return signInWithEmailAndPassword(auth, mail, pass);
         }
	 //log out
	 const logOut=()=>{
		return signOut(auth)
	 }
	 // user observer
	 useEffect(()=>{
		const unsubscribe=onAuthStateChanged(auth,currentUser=>{
			setUser(currentUser)
			setLoader(false)
		})
		//unmounting observer
		return ()=>{
			return unsubscribe()
		}


	 },[])
  


	const authInfo={
		user,
		loader,
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

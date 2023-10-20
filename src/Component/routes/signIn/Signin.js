import { useState } from 'react'
import React, { useEffect } from 'react'





import { auth, signInWithGooglePopup , signInWithGoogleRedirect,createUserDocumentFromAuth } from '../../../utilies/firebase/firebase'
// import {createUserDocumentFromAuth} from "../../../utilies/firebase/firebase" 
import { getRedirectResult } from 'firebase/auth'
// import { FirebaseError } from 'firebase/app'


import SignUp from '../../signUP/SignUp'

const Signin = () => {
// useEffect(async()=>{
//   const response = await getRedirectResult(auth)
//   if(response){
//     const userDocRef = await createUserDocumentFromAuth(response.user)


//   }
// },[])
  const logGoogleUser= async ()=>{
    const {user} =await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };

 
 

    

    
  return (
    <div>

    thisi is sign in
    <button onClick={logGoogleUser}>sign-in with Google</button>
    <button onClick={signInWithGoogleRedirect}>sign-in with google redirect</button>
    <SignUp/>
      
    </div>
  )
}

export default Signin

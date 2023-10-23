import { useState } from 'react'
import React, { useEffect } from 'react'
import "./signin.scss"





// import {createUserDocumentFromAuth} from "../../../utilies/firebase/firebase" 
import { getRedirectResult } from 'firebase/auth'
// import { FirebaseError } from 'firebase/app'


import SignUp from '../../signUP/SignUp'
import SignInForm from "../../signin_form/SignInForm"

const Signin = () => {
// useEffect(async()=>{
//   const response = await getRedirectResult(auth)
//   if(response){
//     const userDocRef = await createUserDocumentFromAuth(response.user)


//   }
// },[])

 
 

    

    
  return (
    <div className='authentication-contaioner'>

    
    
    {/* <button onClick={signInWithGoogleRedirect}>sign-in with google redirect</button> */}
    <SignInForm/>
    <SignUp/>
    
      
    </div>
  )
}

export default Signin

import React from 'react'
import { signInWithGooglePopup } from '../../../utilies/firebase/firebase'
import {createUserDocumentFromAuth} from "../../../utilies/firebase/firebase" 

const Signin = () => {
    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup()
        // console.log(response)
       const userDocRef= await createUserDocumentFromAuth(user)
    }
  return (
    <div>

    thisi is sign in
    <button onClick={logGoogleUser}>sign-in with Google</button>
      
    </div>
  )
}

export default Signin

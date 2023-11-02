import React, { useState } from 'react'
// import {creteAuthUserWithEmailAndPassword} from "../signUP/firebase.js";
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from "../../utilies/firebase/firebase"
// import { signInAuthWithEmailAndPassword } from '../../utilies/firebase/firebase'
import FormInput from '../formInput/FormInput.js'

import  "./signup.scss"
// import Button from '../button/Button'

const defaultfromField={
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
  }
const SignUp = () => {
  // const [currentUser,setCurerntuser]=useState(null)

    const [fromField,setformField] = useState(defaultfromField)
    const {username,email,password,confirmPassword}=fromField



    
    console.log(fromField)


    

    

    const resetFromField =()=>{
        setformField(defaultfromField)
    }
    const handlesubmit =async(event)=>{
        event.preventDefault();

        if(password !== confirmPassword){
            alert("password do not match")
            return;

        }



        try{
            const {user} =await createAuthUserWithEmailAndPassword(email,password);
            // const userCredential=await signInAuthWithEmailAndPassword(email,password)
           
            await createUserDocumentFromAuth(user,{username})
            resetFromField();
            
            
            
        }
        catch(error){
            if(error.code==='auth/email-already-in-use'){
                alert('cannot crete user,email already in use ')
            }else if( error.code ==="auth/weak-password"){
              alert("Password should be at least 6 characters")
            }
            console.log('user crete encounter an error ',error)
        }

    }

    const hadndleChange=(event)=>{
        const {name,value}=event.target;

        setformField({...fromField,[name]:value})

    };
    
  return (
    <div className='sign-up-container'>
    <h2>Dont have a account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handlesubmit}>
      
        < FormInput label="User Name" type="text" required onChange={hadndleChange} name="username" value={username}/>


        
        <FormInput label="Email" type=" email" required onChange={hadndleChange} name="email" value={email}/>


      
        <FormInput label="Password" type="password" required onChange={hadndleChange} name="password" value={password}/>


        
        <FormInput label="Confirm Password" type="password"  required onChange={hadndleChange} name="confirmPassword" value={confirmPassword}/>
            
        <button className='button-container' type='submit' >Sign up </button>
           </form>
    </div>
  )
}

export default SignUp

import React, { useState } from 'react'

// import {creteAuthUserWithEmailAndPassword} from "../signUP/firebase.js";
import {signInWithGooglePopup,signInAuthWithEmailAndPassword} from "../../utilies/firebase/firebase"
import FormInput from '../formInput/FormInput.js'
// import { Form } from 'react-router-dom'
import  "../signUP/signup.scss"
// import Button from '../button/Button'

const defaultfromField={
     
    email:'',
    password:'',
   
  }
const SignUp = () => {

    const [fromField,setformField] = useState(defaultfromField)
    const {email,password}=fromField
    // console.log(fromField)



    const resetFromField =()=>{
        setformField(defaultfromField)
    }


    const signInWithGoogle= async ()=>{
        await signInWithGooglePopup();
        
        
        
      };


    
    const handlesubmit =async(event)=>{
        event.preventDefault();



        try{
            const {user} =await signInAuthWithEmailAndPassword(email,password)
            console.log(user)
            // setCurerntuser(user);
           resetFromField();
          
        }
        
        catch(error){
            switch(error.code){
                case 'auth/invalid-login-credentials':
                    alert("incorrect password for email")
                    break;
                case 'auth/user-not-found':
                    alert("no user associated wit h this email")
                    break;
                default:
                    console.log(error)
            }
           
            console.log('user create encounter an error ',error)
        }

    }

    const hadndleChange=(event)=>{
        const {name,value}=event.target;

        setformField({...fromField,[name]:value})

    };
    
  return (
    <div className='sign-up-container'>
    <h2>Already have a account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handlesubmit}>
      
       

        
        <FormInput label="Email" type=" email" required onChange={hadndleChange} name="email" value={email}/>


      
        <FormInput label="Password" type="password" required onChange={hadndleChange} name="password" value={password}/>


        <div className='container'>
        <button className='button-container' type='submit' >Sign In </button>
        <button type="button" className='button-container1' onClick={signInWithGoogle}>Google Sign in</button>
     

        </div>
            
         </form>
    </div>
  )
}

export default SignUp

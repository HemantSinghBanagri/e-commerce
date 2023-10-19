// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
    
}from 'firebase/auth'


import {getFirestore,
doc,
setDoc,
getDoc
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtpUwa7nHU1AxEh0CKrMBcivxX9WIxwvw",
  authDomain: "e-commerce-db-fb24a.firebaseapp.com",
  projectId: "e-commerce-db-fb24a",
  storageBucket: "e-commerce-db-fb24a.appspot.com",
  messagingSenderId: "577768567707",
  appId: "1:577768567707:web:01ab24ca2309f0d7a4673e"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);  

const provider=new GoogleAuthProvider()
provider.setCustomParameters({
    prompt:"select_account"

})


export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)


export const db=getFirestore()

export const createUserDocumentFromAuth=async (userAuth)=>{
    const userDocRef=doc(db,"user",userAuth.uid)

    console.log(userDocRef)
    const userSnapShot=await getDoc(userDocRef)

    console.log(userSnapShot)
    console.log(userSnapShot.exists())
     
    


    if(!userSnapShot.exists()){
        const {displayName,email}=userAuth
        const createAt=new Date()



        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createAt
            });
        }

        catch(error){
            console.log('error creating the user',error.message)
        }

    }

    return userDocRef; 

}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

    
    
}from 'firebase/auth'


import {getFirestore,
doc,
setDoc,
getDoc,
collection,
writeBatch,
query,
getDocs
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
const firebaseApp = initializeApp(firebaseConfig);  

const googleprovider=new GoogleAuthProvider()

googleprovider.setCustomParameters({
    prompt:"select_account"

})


export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,googleprovider)
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleprovider)


export const db=getFirestore()


export const addCollectinAndDocument=async (collectionKey,objectToAdd)=>{
    const collectionRef =collection(db,collectionKey)
    const batch=writeBatch(db);
    objectToAdd.forEach((object) => {
        const docRef=doc(collectionRef,object.title.toLowerCase())
        batch.set(docRef,object);



        
        
    });
    await batch.commit();
        console.log('done')
}


export const getCAtegoriesAndDocument=async()=>{

    try{
        
        const collectionRef=collection(db,'categorise')
    
        const q=query(collectionRef)
    
        const querySnapShot=await getDocs(q)
       const categoriesMap=querySnapShot.docs.reduce((acc,docSnapShot)=>{
        const {title,items}=docSnapShot.data();
        acc[title.toLowerCase()]=items
        return acc;
       },{})
       return categoriesMap
    }catch(error){
        console.log('error fetching categories',error)
        throw error;
    }


} 

export const createUserDocumentFromAuth=async (userAuth , additionalInformation={})=>{
    const userDocRef=doc(db,"user",userAuth.uid)
    const userSnapShot=await getDoc(userDocRef)

    // console.log(userDocRef)

    // console.log(userSnapShot)
    // console.log(userSnapShot.exists())
     
    


    if(!userSnapShot.exists()){
        const {displayName,email}=userAuth
        const createAt=new Date()

        console.log(userDocRef)

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createAt,
                ...additionalInformation
            });
        }

        catch(error){
            console.log('error creating the user',error.message)
            
        }

    }

    return userDocRef; 

}

export const creteAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password)return;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.log('Error creating the user', error.message);
        throw error; // Optionally, you can rethrow the error to handle it further up the call stack.
    }}

export const signInAuthWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return
    return await signInWithEmailAndPassword(auth,email,password)
}
export const signOutUser = async()=> await signOut(auth)


export const onAuthStateChangedListnear =(callback)=>onAuthStateChanged(auth,callback) 


import { useState ,useEffect} from 'react';
import { onAuthStateChangedListnear,signOutUser , createUserDocumentFromAuth} from '../utilies/firebase/firebase'; 
import { createContext } from 'react'



 //actaula value u want to access
 export  const UserContext=createContext({
     currentUser:null,
     setCurerntuser:()=>null,
});


export const UserProvider=({children})=>{

    const [currentUser,setCurerntuser] =useState(null);
    const value ={currentUser,setCurerntuser}
    

    useEffect(()=>{
        
        const unsubscribe= onAuthStateChangedListnear((user)=>{
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurerntuser(user)
        }); 
        return unsubscribe;
 
    },[])
return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
import {  createContext, useState,useEffect } from "react";


import { getCAtegoriesAndDocument } from "../utilies/firebase/firebase";

export const CategoriessContext=createContext({
    categoryMap:[],
})
export const CategoriesProvider=({children})=>{
    const [categoryMap,setcategoryMap]=useState({})



    useEffect(()=>{
        const getCategoriesMap=async()=>{
            
           const categoriesMap= await getCAtegoriesAndDocument();
           
            // console.log(categoriesMap)
            setcategoryMap(categoriesMap)

        }   
        getCategoriesMap()     

    },[])

    
    const value={categoryMap}
    return (
        <CategoriessContext.Provider value={value}>{children}</CategoriessContext.Provider>
    )
}
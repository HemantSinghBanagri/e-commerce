import {  createContext, useState } from "react";

import PRODUCTS from "../../src/shopData.json"


export const ProductContext=createContext({
    Products:[],
})
export const ProductProvider=({children})=>{
    const [Products,setProducts]=useState(PRODUCTS)
    const value={Products}
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}
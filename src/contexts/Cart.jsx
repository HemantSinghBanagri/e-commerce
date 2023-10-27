import { createContext } from "react";
import { useState } from "react";


export const CardContext=createContext({
    isCardOpen:false,
    setIsCardOpen:()=>{}
})

export const CartProvider=({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false)
    const value={isCartOpen,setIsCartOpen}
    return (
        <CardContext.Provider value={value}>{children}</CardContext.Provider>
    )
}

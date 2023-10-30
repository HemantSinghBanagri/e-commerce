import { createContext } from "react";
import { useState,useEffect } from "react";

const addCartItem=(cartItems,productToAdd)=>{
    const existingCArtItem =cartItems.find((cartItem)=>cartItem.id===productToAdd.id)
    console.log(existingCArtItem,"---------")
    


    if(existingCArtItem){
        return cartItems.map((cartItem)=>
            cartItem.id===productToAdd.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem
            
        )
    } 


    return [...cartItems,{...productToAdd,quantity:1}]
    // console.log(cartItems)

}
export const CardContext=createContext({
    isCardOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    cartCount:0
})

export const CartProvider=({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false)
    
    const [cartItems,setCartItems]=useState([])
    const [cartCount,setcartCount]=useState(0)



    useEffect(()=>{

        const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setcartCount(newCartCount)

    },[cartItems])
    
    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
       

        
    }
    
    const value={isCartOpen,setIsCartOpen,addItemToCart,cartItems,setCartItems,cartCount}
    
    return (
        <CardContext.Provider value={value}>{children}</CardContext.Provider>
    )
}

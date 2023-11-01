import { createContext } from "react";
import { useState,useEffect } from "react";

const addCartItem=(cartItems,productToAdd)=>{
    const existingCArtItem =cartItems.find((cartItem)=>cartItem.id===productToAdd.id)
    // console.log(existingCArtItem,"---------")
    


    if(existingCArtItem){
        return cartItems.map((cartItem)=>
            cartItem.id===productToAdd.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem
            
        )
    } 


    return [...cartItems,{...productToAdd,quantity:1}]
    // console.log(cartItems)

}


const removeCartItem=(cartItems,cartItemToRemove)=>{
     const existingCArtItem =cartItems.find(
        (cartItem)=>cartItem.id===cartItemToRemove.id
     )


     if(existingCArtItem.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)
     }
     return cartItems.map((cartItem)=>
     cartItem.id===cartItemToRemove.id?{...cartItem,quantity:cartItem.quantity-1}:cartItem
     
 )

}

const  clearCartItem=(cartItem,cartItemToClear)=>cartItem.filter((cartItem)=>cartItem.id!==cartItemToClear.id)




export const CardContext=createContext({
    isCardOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    cartCount:0,
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartTotal:0
})

export const CartProvider=({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false)
    
    const [cartItems,setCartItems]=useState([])
    const [cartCount,setcartCount]=useState(0)
    const [cartTotal,setcartTotal]=useState(0)



    useEffect(()=>{

        const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setcartCount(newCartCount)

    },[cartItems])


    useEffect(()=>{

        const newCartTotal=cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
        setcartTotal(newCartTotal)

    },[cartItems])


    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
       

        
    }

    const removeItemFromCart=(productToRemove)=>{
        setCartItems(removeCartItem(cartItems,productToRemove))
       

        
    }


    const clearItemFromCart=(cartItemToClear)=>{
        setCartItems(clearCartItem(cartItems,cartItemToClear))
       

        
    }
    
    
    const value={isCartOpen,setIsCartOpen,addItemToCart,cartItems,setCartItems,cartCount,removeItemFromCart,clearItemFromCart,cartTotal}
    
    return (
        <CardContext.Provider value={value}>{children}</CardContext.Provider>
    )
}

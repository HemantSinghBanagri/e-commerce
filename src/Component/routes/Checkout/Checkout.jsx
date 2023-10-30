import React from 'react'

import "./checkout.scss"
import { useContext } from 'react'
import { CardContext } from '../../../contexts/Cart'

const Checkout = () => {
    const {cartItems,addItemToCart,removeItemFromCart}=useContext(CardContext)
     
  return (
    <div>
    <h1>i am checkout</h1>
    <div>
    {
        cartItems.map((cartItem)=>{
            const {id,name,quantity}=cartItem
            return <div key={id}>
                    <h2>{name}</h2>
                    <span>{quantity}</span>

                    <span onClick={()=>removeItemFromCart(cartItem)}>decrement</span>
                    <span onClick={()=>addItemToCart(cartItem)}> increment</span>
                </div>
            
        })

    }
    </div>
    
      
    </div>
  )
}

export default Checkout

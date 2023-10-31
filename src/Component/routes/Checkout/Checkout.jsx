import React from 'react'

import "./checkout.scss"
import { useContext } from 'react'
import { CardContext } from '../../../contexts/Cart'
import ChekoutItem from '../../checkoutItem/ChekoutItem'

const Checkout = () => {
    const {cartItems,cartTotal}=useContext(CardContext)
     
  return (
    <div className='checkout-container'>
      
          <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
        
          </div>
          <div className='header-block'>
            <span>Description</span>
        
          </div>
          <div className='header-block'>
            <span>Quantity</span>
        
          </div>
          <div className='header-block'>
            <span>Price</span>
        
          </div>
          <div className='header-block'>
            <span>Remove</span>
        
          </div>
        
          </div>
          
    
    {
        cartItems.map((cartItem)=>(
            
       <ChekoutItem key={cartItem.id} cartItem={cartItem}/>
        ))

    }

    <span className='total'>Total: $ {cartTotal}</span>
    </div>
    
      
   
  )
}

export default Checkout

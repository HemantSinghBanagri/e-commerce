import './checkoutItem.scss'
import React from 'react'
import { useContext } from 'react'
import { CardContext } from '../../contexts/Cart'

const ChekoutItem = ({cartItem}) => {
    const {cartItems,clearItemFromCart,addItemToCart,removeItemFromCart}=useContext(CardContext)
    const{name,price,imageUrl,quantity}=cartItem
    const additemhandler=()=>addItemToCart(cartItem)
    const removeItemHandler=()=>removeItemFromCart(cartItem)


    const clearItemHandler=()=>clearItemFromCart(cartItem)
  return (
            <div className='checkout-item-container'>
                <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
                </div>
                <span className='name'> {name}</span>

                <div className='quantity'>
                
                <div className='arrow' onClick={additemhandler}>&#10094;</div>
                <span className='value'>{quantity} </span>
                <div className='arrow' onClick={removeItemHandler}>&#10095;</div>
                
                 </div>
                <span className='price'>${price}</span>
                <span className='remove-button' onClick={clearItemHandler}> &#10005;</span>


                

            </div>


      
   
  )
}

export default ChekoutItem

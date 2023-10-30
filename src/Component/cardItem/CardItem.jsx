import React from 'react'
import "./carditem.scss"
const CardItem = ({cartItem}) => {

  const {name,quantity,imageUrl,price,id}=cartItem
  

   
  return (
    <div className='cart-item-container'>
    <img src={imageUrl} alt={`${name}`}/>
    <div className='item-details'>

    <span className='name'>{name}</span>
    <span className='price'>{quantity} * ${price}</span>
    

    </div>
      
    </div>
  )
}

export default CardItem

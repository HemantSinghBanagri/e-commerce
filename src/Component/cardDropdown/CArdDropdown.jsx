import React, { useContext } from 'react'
import { CardContext } from '../../contexts/Cart'
import "./cardropdown.scss"
import CardItem from '../cardItem/CardItem'

const CArdDropdown = () => {

    const {cartItems}=useContext(CardContext)
    // console.log(cartItems,'/////////////')
  return (
    <div className='cardDropDownContainer'>
    <div className='cartItem'>

    {cartItems.map((item)=>{
      console.log(item.quantity,"1111111111111111111111111")
       return <CardItem key={item.id}  cartItem={item} />
    })}
    </div>
        <button className='button-container '> GO TO CHECKOUT</button>
    

      
    </div>
  )
}

export default CArdDropdown

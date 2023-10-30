import React, { useContext } from 'react'
import { CardContext } from '../../contexts/Cart'
import "./cardropdown.scss"
import CardItem from '../cardItem/CardItem'
import { useNavigate } from 'react-router-dom'

const CArdDropdown = () => {

    const {cartItems}=useContext(CardContext)
    const navigate=useNavigate()



    const goTochekcOutHandler=()=>{
      navigate("/checkout")
    }
    // console.log(cartItems,'/////////////')
  return (
    <div className='cardDropDownContainer'>
    <div className='cartItem'>

    {cartItems.map((item)=>{
      console.log(item.quantity,"1111111111111111111111111")
       return <CardItem key={item.id}  cartItem={item} />
    })}
    </div>
        <button className='button-container ' onClick={goTochekcOutHandler}> GO TO CHECKOUT</button>
    

      
    </div>
  )
}

export default CArdDropdown

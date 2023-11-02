import React, { useContext } from 'react'
import { CardContext } from '../../contexts/Cart'
import {CartDropDowncontainer,CartItem,EmptyMessage,Containerbutton} from "./cardropdown.jsx"
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
    <CartDropDowncontainer>
    <CartItem>
    {
      cartItems.length ?( cartItems.map((item)=>(
      
       <CardItem key={item.id}  cartItem={item} />
      ))):(
        <EmptyMessage as="span">Your cart is empty</EmptyMessage>
      )
    }

    
    </CartItem>
        <Containerbutton onClick={goTochekcOutHandler}> GO TO CHECKOUT</Containerbutton>
    

      
    </CartDropDowncontainer>
  )
}

export default CArdDropdown

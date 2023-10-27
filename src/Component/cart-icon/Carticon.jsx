import React from 'react'
import {ReactComponent as ShoppingIcon}  from "../.../../../assest/004 shopping-bag.svg"
import "./cartIcon.scss"

import { useContext } from 'react'
import { CardContext } from '../../contexts/Cart'


const Carticon = () => {

    const {isCartOpen,setIsCartOpen}=useContext(CardContext)
    const toggleisCartOpen =() =>setIsCartOpen(!isCartOpen)
  return (
    <div className='carticonContainer' onClick={toggleisCartOpen}> 
    <ShoppingIcon className='shoppingIcon'></ShoppingIcon>
    <span className='itemCount'>0</span>
      
    </div>
  )
}

export default Carticon

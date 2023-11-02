import React from 'react'
import {ReactComponent as ShoppingIcon}  from "../.../../../assest/004 shopping-bag.svg"
import {CartContainer,ItemCount} from "./cartIconStlye.jsx"

import { useContext } from 'react'
import { CardContext } from '../../contexts/Cart'


const Carticon = () => {

    const {isCartOpen,setIsCartOpen,cartCount}=useContext(CardContext)
    const toggleisCartOpen =() =>setIsCartOpen(!isCartOpen)
  return (
    <CartContainer onClick={toggleisCartOpen}> 
    <ShoppingIcon className='shoppingIcon'></ShoppingIcon>
    <ItemCount>{cartCount}</ItemCount>
      
    </CartContainer>
  )
}

export default Carticon
  
import React from 'react'
import "./ProductCard.scss"
import { useContext  } from 'react'

import { CardContext } from '../../contexts/Cart'

const ProductCAad = ({product}) => {
  const {name,price,imageUrl}=product
  console.log(product,"66666666666666")
  

   
   const {addItemToCart}=useContext(CardContext)
   const addProductToCart=()=>addItemToCart(product)
   console.log(product,"-------------")
   
  return (
    <div className='ProductCArdContainer'>
    <img src={imageUrl} alt={name}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            

        </div>

        <button className='button-container' onClick={addProductToCart}>Add to Card</button>
    
      
    </div>
  )
}

export default ProductCAad

import React from 'react'
import "./ProductCard.scss"
import { useContext  } from 'react'

import { CardContext } from '../../contexts/Cart'

const ProductCAad = ({name,price,imageUrl,id}) => {
  const product={name,price,imageUrl,id}
  

   
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

import React from 'react'
import "./ProductCard.scss"

const ProductCAad = ({name,price,image}) => {
   
   
  return (
    <div className='ProductCArdContainer'>
    <img src={image} alt={name}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            

        </div>

        <button className='button-container'>Add to Card</button>
    
      
    </div>
  )
}

export default ProductCAad

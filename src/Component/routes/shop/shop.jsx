import React from 'react' 
import { useContext } from 'react'
import { ProductContext } from '../../../contexts/PRoduct'
import ProductCAad from '../../Product-card/ProductCAad'
import "./shop.scss"


const Shop = () => {


  const {Products}=useContext(ProductContext)

  return (
    <div className='productContainer'>  

    {  
        Products.map(({name ,price,id,imageUrl})=>(
          
            <ProductCAad name={name} price={price} key={id} image={imageUrl }></ProductCAad>
        ))
    }
      
    </div>
  )
}

export default Shop

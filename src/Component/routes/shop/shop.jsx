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
        Products.map(({name,id,imageUrl,price})=>{
          {/* console.log(name,"------------") */}
          
           return <ProductCAad id={id} name={name} imageUrl={imageUrl} price={price}></ProductCAad>
    })
    }
      
    </div>
  )
 
}

export default Shop

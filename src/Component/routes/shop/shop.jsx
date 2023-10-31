import React from 'react' 
import { useContext } from 'react'
import { CategoriessContext } from '../../../contexts/PRoduct'
// import ProductCAad from '../../Product-card/ProductCAad'
import "./shop.scss"
import CAtegoryPreview from '../../categoryPreview/CAtegoryPreview'


const Shop = () => {


  const {categoryMap}=useContext(CategoriessContext)
  
  return (
    
    <div className='shop-container'>

    

    
      {
        Object.keys(categoryMap).map((title)=>{
          const products=categoryMap[title]
          console.log(products)
          return <CAtegoryPreview key={title} title={title} products={products} ></CAtegoryPreview>

        }
          

        )
      }
    
    </div>
  )
 
}

export default Shop

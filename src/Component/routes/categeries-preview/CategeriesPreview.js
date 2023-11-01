import React from 'react' 
import { useContext } from 'react'
import { CategoriessContext} from '../../../contexts/PRoduct'
// import ProductCAad from '../../Product-card/ProductCAad'
import "./categeriespreview.scss"
import CAtegoryPreview from '../../categoryPreview/CAtegoryPreview'


const CategeriesPreview = () => {


  const {categoryMap}=useContext(CategoriessContext)
  
  return (
    
    <div className='category-preview-container'>

    

    
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

export default CategeriesPreview

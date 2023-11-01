import React from 'react'
import "./categoryPreview.scss"

import { Link } from 'react-router-dom'

import ProductCAad from '../Product-card/ProductCAad'

const CAtegoryPreview = ({title,products}) => {
    

    // console.log(products,"1111111111111111111111")
  return (
    <div className='category-preview-container'>
        <h2><Link className='title' to={title}>{title.toUpperCase()}</Link></h2>
        <div className='preview'>
            {
                products.filter((_,index)=>index<4)
                
                .map((product)=>
                <ProductCAad key={product.id} product={product}></ProductCAad>)

            }

        </div>
      
    </div>
  )
}

export default CAtegoryPreview

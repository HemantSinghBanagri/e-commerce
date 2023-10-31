import React from 'react'
import "./categoryPreview.scss"

import ProductCAad from '../Product-card/ProductCAad'

const CAtegoryPreview = ({title,name,price,id,imageUrl,quantity}) => {
    const products={name,price,id,imageUrl,quantity}
  return (
    <div className='category-preview-container'>
        <h2><span className='title'>{title.toUpperCase()}</span></h2>
        <div className='preview'>
            {
                products.filter((_,index)=>index<4)
                .map((product)=>
                <ProductCAad key={id} product={product}></ProductCAad>)

            }

        </div>
      
    </div>
  )
}

export default CAtegoryPreview

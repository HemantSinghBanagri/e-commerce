import React, { useEffect, useState } from 'react'
import "./category.scss"
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CategoriessContext } from '../../../contexts/PRoduct'
import ProductCAad from '../../Product-card/ProductCAad'

const Category = () => {

    const {category}=useParams()
    const {categoryMap}=useContext(CategoriessContext)

    const [products,setProducts]=useState(categoryMap[category])



    useEffect(()=>{
        setProducts(categoryMap[category])
    },[category,categoryMap])
  return (
    <>
        <h2 className='title'>{category.toUpperCase()}</h2>
    
    <div className='category-container'>
    
    {
       products && products.map((product)=> <ProductCAad key={products.id} product={product}></ProductCAad>
        )

    }
    </div>
    </>
    
  )
}

export default Category

import React from 'react' 



import "./shop.scss"

import { Routes,Route } from 'react-router-dom'
import CategeriesPreview from '../categeries-preview/CategeriesPreview'
import Category from '../caategory/Category'

const Shop = () => {


 
  
  return (
    
    <Routes>
      <Route path="/" element={<CategeriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
 
}

export default Shop

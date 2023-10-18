import React from 'react'
import CategoryItem from './category-item/category-item'
import "./directory.style.scss"

const Directory = ({category}) => {
  return (
    <div className="categories-container">

    {
      category.map(({title ,imageUrl})=>(
        <CategoryItem title={title} image={imageUrl}/>

      ))
    }
   
      
    </div>
  )
}

export default Directory

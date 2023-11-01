import React from 'react'
import DicategoryItem from './dicategory-item/Dicategory-item'
import "./directory.style.scss"

const Directory = ({category}) => {
  return (
    <div className="categories-container">

    {
      category.map(({title ,imageUrl})=>(
        <DicategoryItem title={title} image={imageUrl}/>

      ))
    }
   
      
    </div>
  )
}

export default Directory

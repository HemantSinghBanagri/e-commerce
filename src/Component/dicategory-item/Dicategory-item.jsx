import React from 'react'
import "./dicategory-item.style.scss"

const DicategoryItem = ({title,image}) => {
  return (
    <div className="dicategory-container ">

        <div className='background-image' style={{backgroundImage:`url(${image})`}}></div>
          
          <div className='dicategory-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>

          </div>

        </div>
  )
}

export default DicategoryItem

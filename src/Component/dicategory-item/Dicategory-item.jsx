import React from 'react'
import "./dicategory-item.style.scss"
import { useNavigate } from 'react-router-dom'

const DicategoryItem = ({title,image}) => {

  const navigation=useNavigate()
  const redirecthandler=()=>(
    navigation(`shop/${title}`)
  )
  return (
    <div className="dicategory-container ">

        <div className='background-image' style={{backgroundImage:`url(${image})`}}></div>
          
          <div className='dicategory-body-container' onClick={redirecthandler}>
            <h2>{title}</h2>
            <p>Shop Now</p>

          </div>

        </div>
  )
}

export default DicategoryItem

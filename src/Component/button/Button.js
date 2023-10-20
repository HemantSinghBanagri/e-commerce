import React from 'react'
import "./button.scss"



const BUTTON_TYPE_CLASSES ={
    google:"google-sign-in",
    inverted:'inverted'
}
const Button = ({childern,buttonType,...otherProps}) => {
  return (
   
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
        {childern}
    </button>
      
    
  )
}

export default Button

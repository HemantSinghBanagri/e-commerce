import React from 'react'
import {FormInputLabel,Input,Group} from "./formInput.jsx"

const FormInput = ({label,...otherProps}) => {
  return (
   <Group>
    <Input
       {...otherProps}
    />
   {
    label && (
   
    <FormInputLabel shrink={ otherProps.value.lenth} >
    {label}
    </FormInputLabel>
    
    )}
   
   </Group>
  )
}

export default FormInput

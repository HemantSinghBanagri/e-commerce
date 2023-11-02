import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import {ReactComponent as Crown} from "../../../assest/007 crown.svg"
import {NavigationContainer,NavLinks,NavLink} from "./navigation.jsx"
import { useContext } from 'react'
import { UserContext } from '../../../contexts/user'
import { signOutUser } from '../../../utilies/firebase/firebase'
import Carticon from '../../cart-icon/Carticon'
import CArdDropdown from '../../cardDropdown/CArdDropdown'
import { CardContext } from '../../../contexts/Cart'

const Navigation = () => {

  const {currentUser} =useContext(UserContext)
  const {isCartOpen}=useContext(CardContext)
  
  // console.log(currentUser)
  return (
    <>
    <NavigationContainer>
        <NavLink to="/"><div ><Crown/></div></NavLink>
        
        <NavLinks>
            <NavLink to="/shop">Shop</NavLink>
            {
              currentUser ? (
                <NavLink as="span" asonClick={signOutUser} >Sign Out</NavLink>
              ):(
                  <NavLink to="/signin">Sign-In </NavLink>

              )
            } 
            <Carticon/>
        </NavLinks>
        
        {isCartOpen && <CArdDropdown/>}
    </NavigationContainer>
    <Outlet/>
    </>
  )
}

export default Navigation

import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import {ReactComponent as Crown} from "../../../assest/007 crown.svg"
import "./navigation.scss"
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
    <div className='navigation'>
        <Link className='logo' to="/"><div ><Crown/></div></Link>
        
        <div className='link-container'>
            <Link className="nav-link" to="/shop">Shop</Link>
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser} >Sign Out</span>
              ):(
                  <Link className='nav-link' to="/signin">Sign-In </Link>

              )
            } 
            <Carticon/>
        </div>
        
        {isCartOpen && <CArdDropdown/>}
    </div>
    <Outlet/>
    </>
  )
}

export default Navigation

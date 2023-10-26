import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import {ReactComponent as Crown} from "../../../assest/007 crown.svg"
import "./navigation.scss"
import { useContext } from 'react'
import { UserContext } from '../../../contexts/user'
import { signOutUser } from '../../../utilies/firebase/firebase'

const Navigation = () => {

  const {currentUser} =useContext(UserContext)
 
  console.log(currentUser)
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
        </div>
        
    </div>
    <Outlet/>
    </>
  )
}

export default Navigation

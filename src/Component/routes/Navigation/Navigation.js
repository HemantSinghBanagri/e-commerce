import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import {ReactComponent as Crown} from "../../../assest/007 crown.svg"
import "./navigation.scss"

const Navigation = () => {
  return (
    <>
    <div className='navigation'>
        <Link className='logo' to="/"><div ><Crown/></div></Link>
        
        <div className='link-container'>
            <Link className="nav-link" to="/shop">Shop</Link>
            <Link className='nav-link' to="/signin">Sign-In </Link>
        </div>
        
    </div>
    <Outlet/>
    </>
  )
}

export default Navigation

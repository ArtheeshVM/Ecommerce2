import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import navlogo from '../../assets/nav-logo.svg'
import navprofile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>ARTHWEAR</p>
            
        </div>
        <img className='nav-profile' src={navprofile} alt="" />
    </div>
  )
}

export default Navbar
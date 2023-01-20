import React from 'react'
import logo from '../../Images/nav-logo.png'
import navUser from '../../Images/nav-user.svg'
import hamburger from '../../Images/hamburger.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <div id='navbar'>
            <div className='container'>
                <div className='navbar__logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='navbar__links'>
                    <Link to="/">
                        <span>Marketplace</span>
                    </Link>
                    <Link to="/rankings">
                        <span>Rankigs</span>
                    </Link>
                    <Link to="/addartist">
                        <span>Add Artist</span>
                    </Link>
                    <img class="hamburger" src={hamburger} alt="burger-menu" />
                    <button>
                        <div>
                            <img src={navUser} alt="" />
                            Sign Up
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
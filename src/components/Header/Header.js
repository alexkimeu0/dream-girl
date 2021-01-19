import React from 'react'

import logo from '../../images/logo.png'

import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="header__logo" />
            <p>You had me at 'Hello World'.</p>
        </div>
    )
}

export default Header

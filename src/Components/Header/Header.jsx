import React from 'react'
import '../Header/Header.css'

const Header = () => {
    return (
        <div className='main-header'>

            <a href="#home" className='logo'>XYZ <span>Fitness</span></a>
            <div className='bx bx-menu' id='menu-icon'></div>
            <ul className='nav-link'>
                <li><a href="#Home">Home</a></li>
                <li><a href="#services">Features</a></li>
                <li><a href="#about">Explore</a></li>
                <li><a href="#plans">Plans</a></li>
                <li><a href="#review">Review</a></li>
            </ul>

            <div className='top-btn'>
                <a href="#" className='nav-log'>Register</a>
            </div>
        </div>
    )
}

export default Header
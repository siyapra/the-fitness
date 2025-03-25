import React from 'react'
import '../Footer/Footer.css'
import insta from '../../assets/instagram.png'
import fb from '../../assets/facebook.png'
import li from '../../assets/linkedin.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <img src={insta} alt="" className='all-icon' />
                <img src={fb} alt="" className='all-icon' />
                <img src={li} alt="" className='all-icon' />
            </div>

            <p className='copyright'>
                &copy; Royal Fitenss 2024 - All Rights Reserved
            </p>
        </div>
    )
}

export default Footer
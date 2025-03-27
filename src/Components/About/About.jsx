import React from 'react'
import '../About/About.css'
import run from '../../assets/abs.webp'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about-img'>
                <img src={run} alt="" />
            </div>

            <div className='about-content'>
                <h2 className='heading'>Why Choose Us</h2>
                <p>Our diverse membership base creates a friendly <br />
                    and supportive atmosphere, where you can make <br />
                    friends and stay motivated.
                </p>
                <p>Unlock your potential with our expert Personal
                    Trainers.
                </p>

                <p>Elevate your fitness with practice sessions.</p>
                <p>We provide Supportive management, for your
                    fitness success.

                </p>
                <a href="#" className='btn'>Book a Fre Class</a>
            </div>
        </div>
    )
}

export default About
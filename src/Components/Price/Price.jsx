import React from 'react'
import '../Price/Price.css'

const Price = () => {
    return (
        <div className='plans' id='plans'>
            <h2 className='heading'>Our <span>Plans</span></h2>
            <div className='plans-content'>
                <div className='box'>
                    <h3>BASIC</h3>
                    <h2><span>$100/Month</span></h2>
                    <ul>
                        <li>Smart Workout</li>
                        <li>At Home Workout</li>
                    </ul>
                    <a href="#">
                        Join Now
                    </a>
                </div>
                <div className='box'>
                    <h3>Pro</h3>
                    <h2><span>$150/Month</span></h2>
                    <ul>
                        <li>Pro GYMs</li>
                        <li>Smart Workout</li>
                        <li>At Home Workout</li>
                    </ul>
                    <a href="#">
                        Join Now
                    </a>
                </div>

                <div className='box'>
                    <h3>PREMIUM</h3>
                    <h2><span>$300/Month</span></h2>
                    <ul>
                        <li>ELITE GYMs and Classes</li>
                        <li>Pro GYMs</li>
                        <li>Smart Workout</li>
                        <li>At Home Workout</li>
                    </ul>
                    <a href="#">
                        Join Now
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Price
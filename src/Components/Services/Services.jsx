import React from 'react'
import '../Services/Services.css'
import aram from '../../assets/scot.jpg'
import weight from '../../assets/weight.jpeg'
import gym from '../../assets/gym.jpeg'
import abs from '../../assets/my2.avif'
import gain from '../../assets/my1.avif'
import running from '../../assets/running.jpeg'


const Services = () => {
  return (
    <div className='services' id='sevices'>
      <h2 className='heading'>Our<span className='span'>Services</span></h2>

      <div className='services-content'>
        <div className='row'>
          <img src={aram} alt="/" />
          <h4>Physical Fitness</h4>
        </div>

        <div className='row'>
          <img src={weight} alt="/" />
          <h4> Weight Gain</h4>
        </div>

        <div className='row'>
          <img src={gym} alt="" />
          <h4> Strength Training</h4>
        </div>
      </div>

      <div className='services-cont'>
      <div className='row'>
          <img src={abs} alt="/" />
          <h4> Fat Loss</h4>
        </div>

        <div className='row'>
          <img src={gain} alt="/" />
          <h4>Weight Lifting</h4>
        </div>

        <div className='row'>
          <img src={running} alt="/" />
          <h4>Running</h4>
        </div>
      </div>
    </div>
  )
}

export default Services
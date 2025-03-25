import React from 'react'
import '../Home/Home.css'
import body from '../../assets/body.webp';

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className='home-contact'>
        <h3>Build Your</h3>
        <h1>Dream Physique</h1>
        <h3><span className='multiple-text'>Bodybuilding</span></h3>
        <p>Lorem,asperiores ducimus delectus, vitae dolorum natus odio reiciendis 
          <br/>   obcaecati repellat quisquam! Sequi quasi ipsum ut deleniti?</p>
        <a href="#" className='btn'>Register</a>
        
      </div>
      <div className='home-img'>
          <img src={body} alt="home image"  />
        </div>
    </div>
  )
}

export default Home
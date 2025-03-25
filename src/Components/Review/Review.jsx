import React from 'react'
import '../Review/Review.css'
import boye from '../../assets/boy1.jpeg'
import star from '../../assets/star.png'

const Review = () => {
    return (
        <div className='review' id='review'>
            <div className='review-box'>
                <h2 className='heading'>Client <span>Review</span></h2>

                <div className='wrapper'>
                    <div className='review-item'>
                        <img src={boye} alt="" className='hmmm'/>
                        <h2>Sunny</h2>
                        <div className='rating'>
                            <img src={star} alt="" className='star' width="30px" height="30px" />
                            <img src={star} alt="" className='star' width="30px" height="30px" />
                            <img src={star} alt="" className='star' width="30px" height="30px" />
                            <img src={star} alt="" className='star' width="30px" height="30px" />
                            <img src={star} alt="" className='star' width="30px" height="30px" />

                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas corrupti a totam.</p>
                    </div>

                    <div className='review-item'>
                        <img src={boye} alt="" className='hmmm'/>
                        <h2>Aman</h2>
                        <div className='rating'>
                            <img src={star} alt="" className='star' width="30px" height="30px" />
                            <img src={star} alt="" className='star' width="30px" height="30px" />
                            <img src={star} alt="" className='star' width="30px" height="30px" />
                            <img src={star} alt="" className='star' width="30px" height="30px" />
                            <img src={star} alt="" className='star' width="30px" height="30px" />

                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas corrupti a totam.</p>
                    </div>

                    <div className='review-item'>
                        <img src={boye} alt="" className='hmmm'/>
                        <h2>Lokesh</h2>
                        <div className='rating'>
                            <img src={star} alt="" className='star' width="30px" height="30px" />
                            <img src={star} alt="" className='star' width="30px" height="30px" />
                            <img src={star} alt="" className='star' width="30px" height="30px" />
                            <img src={star} alt="" className='star' width="30px" height="30px" />

                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas corrupti a totam.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
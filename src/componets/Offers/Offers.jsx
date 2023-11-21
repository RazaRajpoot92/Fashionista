import React from 'react'
import "./Offers.css"
import exlusive from "../../assets/exclusive_image.png"

const Offers = () => {
  return (

    <div className='offer-container'>

        <div className='right-offer'>

            <h1>Exclusive Offers For You</h1>
            <p className='offer-p'> ONLY ON BEST SELLERS PRODUCTS</p>
            <div className='offer-btn'>
                Check Now
            </div>

        </div>


        <div className='left-offer'>
            <img src={exlusive} alt="" />
        </div>
    </div>
  )
}

export default Offers

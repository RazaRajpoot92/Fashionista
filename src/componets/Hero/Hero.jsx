import React from 'react'
import "./Hero.css"

import arrow from "../../assets/arrow.png"
import heroImage from "../../assets/hero_image.png"

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='right-hero'>
        <h2 className='hero-heading'>NEW ARRIVALS ONLY</h2>

        <h1 className='hero-collection'>new collections for everyone</h1>

        <button className='hero-latest-btn'>Latest Collection
            <img src={arrow} alt="" />
        </button>

      </div>


      <div className='left-hero'>
            <img src={heroImage} alt="" />
      </div>


    </div>
  )
}

export default Hero

import React from 'react'
import firstimg from '../assets/firstimg.png'

function Firstbox() {
  return (
    <div className='firstbox'>
        <div className="content">
              <span>Let’s Save our Environment</span>
              <h1>Optimize your eco reporting with </h1>
              <span className='carbon'>CARBON CRUNCH</span>
              <p className='details'><span> 95% </span>Accurate Carbon Calculations Trusted by Industry Leaders</p>
              <div className='demosFirst'>
                <p>Free Calculator</p>
                  <button className="bookdemo">Book Demo</button>
              </div>
        </div>
        <div className="img">
              <img src={firstimg} alt="" />
        </div>
      
    </div>
  )
}

export default Firstbox

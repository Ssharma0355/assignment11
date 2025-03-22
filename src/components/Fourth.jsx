import React from 'react'
import last from "../assets/last.png"
import arrow from "../assets/downarrow.png"

function Fourth() {
  return (
    <div className='fourth'>
        <div className="center-heading">
              <p>OUR SERVICES</p>
              <h1>What do <span>we do</span>?</h1>
        </div>  
        <div className='last-box'>
            <div className='last-image'>
                <img src={last} alt="computerimg" />
            </div>
              <div className='last-content'>
                <div className='last-content1'>
                      <h2>GHG Accounting</h2>
                      <p> We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.</p>
                     <button>See More Details</button>
                </div>
                  <div className='last-content2 last-content1'>
                      <h2>GHG Accounting</h2>
                      <p> We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.</p>
                      <button>See More Details</button>
                
                  </div>
                  <div className='downarrow'>
                      <img src={arrow} alt="" />

                  </div>
              </div>
            
            </div>    
    </div>
  )
}

export default Fourth

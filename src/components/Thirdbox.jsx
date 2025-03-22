import React from 'react'
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"


function Third() {
  return (
    <div className='thirdbox'>
      <div className='third'>
        <p>FEATURES</p>
        <h1><span>Why</span> Carbon Crunch?</h1>
      </div>
      <div className="grid-box">
        <div className="grid-item">
          <div className="grid-item">
            <img src={c1} alt="" />
            <p>Automated Data Collection</p>
            <span>Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.</span>

          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item">
            <img src={c2} alt="" />
            <p>Monitoring & Reporting</p>
            <span>Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.</span>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item">
            <img src={c2} alt="" />
            <p>Monitoring & Reporting</p>
            <span>Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.</span>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item">
            <img src={c3} alt="" />
            <p>Simplified Certification Process</p>
            <span>Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.</span>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item">
            <img src={c4} alt="" />
            <p>AI-Driven Insights</p>
            <span>Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.</span>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item">
            <img src={c4} alt="" />
            <p>AI-Driven Insights</p>
            <span>Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.</span>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Third

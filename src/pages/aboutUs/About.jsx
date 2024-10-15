import React from 'react'
import Layout from '../../layout/Layout'
import './about.css'
import aboutFrame from '../../assets/Frame 2448.png'
import aboutFrame2 from '../../assets/Frame 2447.png'
import ContactAbout from './AboutContact/ContactAbout'
import { motion } from 'framer-motion'

const About = () => {
  const routeVariants = {
    initial: {
      y: "-100vh",
    },
    final: {
      y: "-0vh",
      transition: {
        type: "spring",
        mass: 0.8,
      },
    },
  };
  return (

    <Layout>
      <div className='' style={{paddingTop:"4rem"}}>
        <div className='about-image'>
          <div className='about-head'>
            <h1 className='heading'>ABOUT US</h1>
          </div>
        </div>
        <div className=' about-section'>
          <div className="layout-container">
            <div className="about-image-container">
              <div className='about-section-1'>
                <div className='about-wel'>
                  <h1 className='heading' style={{ textAlign: "left" }}>Welcome to [CRICFAST]</h1>
                  <p className='about-para'>At [Your Sports App], we are passionate about sports and dedicated to enhancing your sporting experience through innovative technology. Our mission is to bring sports enthusiasts, and fans closer to the action, no matter where they are in the world</p>
                </div>

                <div className='about-section-image'>
                  <img src={aboutFrame} alt='' />
                </div>
              </div>
              <div className='about-section-1'>
                <div className='about-section-image'>
                  <img src={aboutFrame2} alt='' />
                </div>

                <div className='about'>
                  <div className='about-wel-2'>
                    <h1 className='heading' style={{ textAlign: "left" }}>Who we Are</h1>
                    <p className='about-para'>We are a team of sports aficionados, tech enthusiasts, and creatives who came together with a shared vision - to revolutionize the way people engage with sports. With our deep love for the game and a commitment to excellence, we've developed [Your Sports App] as a one-stop solution for all your sporting needs.</p>
                  </div>
                </div>

              </div>
            </div>
            <ContactAbout />
          </div>
        </div>
      </div>

    </Layout>

  )
}

export default About
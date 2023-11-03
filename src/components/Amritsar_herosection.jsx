import React from 'react'
import Form from './Form'
import Image from 'next/image'
import Navbar from './Navbar'
import { motion } from "framer-motion";

function Herosection(props) {
  const easeOutAnimationVariants = {
    initial: {
      opacity: 0,
      scale: 0.2,
      z: -50,
    },
    animate: {
      opacity: 1,
      scale: 1,
      z: 0,
      transition: {
        duration: 1.5, // Animation duration in seconds
        ease: "easeOut", // Easing curve (easeOut)
      },
    },
  };

  return (
    <>
    {/* <Navbar/> */}
      <div style={{ "backgroundImage": `url(${props.image.src})`, "backgroundPosition": `${props.backgroundPosition}`, "top":"0px" }} className='hero-banner'>
        <motion.div className={`position-relative text-center hero-heading ${props.text_color}`} initial="initial"
      animate="animate"
      variants={easeOutAnimationVariants}>{props.banner_heading}</motion.div>
      </div>
      {/* <Form/> */}
      <div className='d-flex justify-content-center hero-padding'>
        <div className='container'>
          <h1 className='text-center pb-3 section-header'>{props.heading}</h1>
          <div className='text-center section-about'>{props.about}</div>
        </div>
      </div>
    </>
  )
}

export default Herosection

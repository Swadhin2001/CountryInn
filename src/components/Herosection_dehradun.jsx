import React from 'react'
import Form from './Form'
import Image from 'next/image'
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
            duration: 1.5,
            ease: "easeOut",
          },
        },
      };
    return (
        <>
            
            <div style={{ "backgroundImage": `url(${props.image.src})`, "backgroundPosition": `${props.backgroundPosition}`, "top": "0px" }} className='hero-banner d-flex justify-content-center'>
                <motion.div className="container hero-heading text-center" initial="initial"
      animate="animate"
      variants={easeOutAnimationVariants}>
                    <div className="row dehradun-hero">
                        <div className="section-title position-relative text-center">
                            <p className='text-white'>COUNTRY INN PREMIER - THE PROMINENCE, <br /> DEHRADUN</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Form></Form>
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

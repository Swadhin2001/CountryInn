import React from 'react'
import Form from './Form'
import Image from 'next/image'
import Navbar from './Navbar'

function Herosection(props) {
  return (
    <>
    {/* <Navbar/> */}
      <div style={{ "backgroundImage": `url(${props.image.src})`, "backgroundPosition": `${props.backgroundPosition}`, "top":"0px" }} className='hero-banner'>
        <h4 className={`position-relative text-center hero-heading ${props.text_color}`}>{props.banner_heading}</h4>
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

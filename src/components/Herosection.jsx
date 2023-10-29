import React from 'react'
import Form from './Form'
import Image from 'next/image'

function Herosection(props) {
  return (
    <>
      <div style={{"backgroundImage" : `url(${props.image.src})`, "backgroundPosition" : `${props.backgroundPosition}`}} className='hero-banner'>
        <h4 className={`text-center hero-heading ${props.text_color}`}>{props.banner_heading}</h4>
        </div>
          <Form></Form>
          <div className='d-flex justify-content-center hero-padding'>          
            <div className='container-1140'>
              <h1 className='text-center pb-3'>{props.heading}</h1>
              <div className='text-center'>{props.about}</div>
            </div>
        </div>
    </>
  )
}

export default Herosection
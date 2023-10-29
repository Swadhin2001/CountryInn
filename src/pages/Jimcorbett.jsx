import Navbar from '@/components/Navbar'
import React from 'react'
import banner_image from '@/assets/jimcorbettbanner2.jpg'
import Footer from '@/components/Footer'

function prominence_dehradun() {
  return (
    <>
      <Navbar />
      <div style={{"backgroundImage" : `url(${banner_image.src})`}} className='hero-banner1 d-flex justify-content-center align-middle'>
        <div className="container bannercss ">
            <div className="info banner">
              <h1> WE WILL BE BACK SOON</h1>
              <p>We are upgrading our facilities to make it a more enjoyable experience for you.   </p>
            </div>
        </div>
      </div>
      <Footer phno ="+91 886 070 7273" email ="reservations@countryinn.in"/>
    </>
  )
}

export default prominence_dehradun
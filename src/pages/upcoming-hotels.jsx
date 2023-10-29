import React from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import banner_image from '@/assets/upcoming-hotels-banner.jpg'
import image1 from '@/assets/upcoming-hotels-image1.jpg'
import image2 from '@/assets/upcoming-hotels-image2.jpg'
import Footer from '@/components/Footer'

function upcoming_hotels() {
  return (
    <div >
      <Navbar opacity= "0.6"></Navbar>
      <div style={{"backgroundImage" : `url(${banner_image.src})`}} className='hero-banner'/>
            <h2 className='text-center pt-5 mt-5'>OUR UPCOMING HOTELS</h2>
            <div className="container pb-5 my-5">
              <div className="row">
                <div className="col-md-4">
                  <Image src= {image1} alt="" className='upcoming-hotel-image'/>
                  <p>Corbett Patkot, April 2024</p>
                </div>
                <div className="col-md-4">
                  <Image src= {image2} alt="" className='upcoming-hotel-image'/>
                  <p>RAIPUR, DECEMBER 2024</p>
                </div>
              </div>
            </div>
      <Footer/>
    </div>
  )
}

export default upcoming_hotels

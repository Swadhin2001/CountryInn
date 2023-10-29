import React from 'react'
import Navbar from '@/components/Navbar'
import banner_image from '@/assets/hotel-developement-banner.jpg'
import Footer from '@/components/Footer'
import Contact_us_card from '@/components/Contact_us_card'

function contact_us() {
  return (
    <>
      <Navbar></Navbar>
      <div style={{"backgroundImage" : `url(${banner_image.src})`}} className='hero-banner'/>
            <h2 className='text-center pt-5 mt-5'>OUR UPCOMING HOTELS</h2>
      <div className=" text-center">
          <h3 className="my-5 font-Trajan f-s-28">REACH OUR RESORTS</h3>

          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-4">
                      <div className="row mb-3">
                        <Contact_us_card about = {<fragment>
                          Country Inn Nature Resort, Bhimtal: <br />
                          Bhowali - Kutani Road, Mehragaon,
                          <br />
                          Bhimtal, Uttarakhand - 263136
                          <br /> Phone: +91 826 607 1968
                        </fragment>}/>
                      </div>
                  </div>
              </div>
          </div>
    </div>
      <Footer/>
    </>
  )
}

export default contact_us

import React from 'react'
import Navbar from '@/components/Navbar'
import banner_image from '@/assets/get-away1.jpg'
import Footer from '@/components/Footer'

function gallery() {
  return (
    <div >
      <Navbar></Navbar>
      <div style={{"backgroundImage" : `url(${banner_image.src})`}} className='hero-banner'/>
            <h2 className='text-center pt-5 mt-5'>GALLERY</h2>
      
      <Footer/>
    </div>
  )
}

export default gallery

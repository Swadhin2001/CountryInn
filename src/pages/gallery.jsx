import React from 'react'
import Navbar from '@/components/Navbar'
import banner_image from '@/assets/get-away1.jpg'
import Footer from '@/components/Footer'
import Image from 'next/image'
import image1 from '@/assets/gallerypage1.jpg'
import image2 from '@/assets/gallerypage1.jpg'
import image3 from '@/assets/gallerypage1.jpg'
import image4 from '@/assets/gallerypage1.jpg'
import image5 from '@/assets/gallerypage1.jpg'
import image6 from '@/assets/gallerypage1.jpg'
import image7 from '@/assets/gallerypage1.jpg'
import image8 from '@/assets/gallerypage1.jpg'
import image9 from '@/assets/gallerypage1.jpg'

function gallery() {
  return (
    <div >
      <Navbar></Navbar>
      <div style={{ "backgroundImage": `url(${banner_image.src})` }} className='hero-banner' />
      <h2 className='text-center pt-5 pb-4 policy-heading mt-5'>GALLERY</h2>
      <div className="container pb-5 mb-5">
        <div className="row">
          <div className="col-md-6">
            <div className="row pb-3">
              <div className="col-md-6 col-sm-12">
                <Image src={image1} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 col-sm-12">
                <Image src={image2} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-md-6 col-sm-12">
                <Image src={image3} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 col-sm-12">
                <Image src={image4} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12" >
            <Image src={image5} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-md-3 col-sm-12">
            <Image src={image6} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Image src={image7} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Image src={image8} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Image src={image9} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12" >
            <Image src={image10} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="row pb-3">
              <div className="col-md-6 col-sm-12">
                <Image src={image11} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 col-sm-12">
                <Image src={image12} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-md-6 col-sm-12">
                <Image src={image13} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 col-sm-12">
                <Image src={image14} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-md-3 col-sm-12">
            <Image src={image15} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Image src={image16} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Image src={image17} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Image src={image18} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row pb-3">
              <div className="col-md-6 col-sm-12">
                <Image src={image19} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 col-sm-12">
                <Image src={image20} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-md-6 col-sm-12">
                <Image src={image21} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 col-sm-12">
                <Image src={image22} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12" >
            <Image src={image23} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-md-3 col-sm-12">
            <Image src={image24} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Image src={image25} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Image src={image26} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Image src={image27} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default gallery

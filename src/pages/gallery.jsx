import React from 'react'
import Navbar from '@/components/Navbar'
import banner_image from '@/assets/get-away1.jpg'
import Footer from '@/components/Footer'
import Image from 'next/image'
import image1 from '@/assets/gallerypage1.jpg'
import image2 from '@/assets/gallerypage7.jpg'
import image3 from '@/assets/gallerypage18.jpg'
import image4 from '@/assets/gallerypage15.jpg'
import image5 from '@/assets/gallerypage10.jpg'
import image6 from '@/assets/gallerypage12.jpg'
import image7 from '@/assets/gallerypage9.jpg'
import image8 from '@/assets/experiencediningtarika.jpg'
import image9 from '@/assets/gallerypage14.jpg'
import image10 from '@/assets/gallerypage20.jpg'
import image11 from '@/assets/gallerypage2.jpg'
import image12 from '@/assets/gallerypage11.jpg'
import image13 from '@/assets/gallerypage5.jpg'
import image14 from '@/assets/bhimtal-s1.jpg'
import image15 from '@/assets/bhimtal-s2.jpg'
import image16 from '@/assets/bhimtal-s3.jpg'
import image17 from '@/assets/gallerypage1.jpg'
import image18 from '@/assets/bhimtal-s4.jpg'
import image19 from '@/assets/cinjimcorbett2.jpg'
import image20 from '@/assets/cinjimcorbett3.jpg'
import image21 from '@/assets/cinjimcorbett4.jpg'
import image22 from '@/assets/cinjimcorbett5.jpg'
import image23 from '@/assets/cinjimcorbett1.jpg'
import image24 from '@/assets/cinjimcorbett6.jpg'
import image25 from '@/assets/cottage2.jpg'
import image26 from '@/assets/luxurycottage2.jpg'
import image27 from '@/assets/cinjimcorbett9.jpg'
import Gallery_image from '@/components/Gallery_image'

function gallery() {
  return (
    <div >
      <Navbar opacity="0.6"></Navbar>
      <div style={{ "backgroundImage": `url(${banner_image.src})` }} className='hero-banner' />
      <h2 className='text-center pt-5 pb-4 policy-heading mt-5'>GALLERY</h2>
      <div className="container pb-5 mb-5">
        <div className="row">
          <div className="col-md-6">
            <div className="row pb-3">
              <div className="col-md-6 col-sm-12">
                <Gallery_image image={image1} about="country inn  tarika riverside resort, jim corbett" />
              </div>
              <div className="col-md-6 col-sm-12">
                <Gallery_image image={image2} about="country inn  tarika riverside resort, jim corbett" />
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-md-6 col-sm-12">
                <Gallery_image image={image3} about="country inn  tarika riverside resort, jim corbett" />
              </div>
              <div className="col-md-6 col-sm-12">
                <Gallery_image image={image4} about="country inn  tarika riverside resort, jim corbett" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12" >
            <Gallery_image image={image5} about="country inn  tarika riverside resort, jim corbett" />
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-md-3 col-sm-12">
            <Gallery_image image={image6} about="country inn  tarika riverside resort, jim corbett" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Gallery_image image={image7} about="country inn  tarika riverside resort, jim corbett" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Gallery_image image={image8} about="country inn  tarika riverside resort, jim corbett" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Gallery_image image={image9} about="country inn  tarika riverside resort, jim corbett" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12" >
            <Gallery_image image={image10} about="Country Inn Resort, Bhimtal" />
          </div>
          <div className="col-md-6">
            <div className="row pb-3">
              <div className="col-md-6 col-sm-12">
                <Gallery_image image={image11} about="Country Inn Resort, Bhimtal" />
              </div>
              <div className="col-md-6 col-sm-12">
                <Gallery_image image={image12} about="Country Inn Resort, Bhimtal" />
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-md-6 col-sm-12">
                <Gallery_image image={image13} about="Country Inn Resort, Bhimtal" />
              </div>
              <div className="col-md-6 col-sm-12">
                <Gallery_image image={image14} about="Country Inn Resort, Bhimtal" />
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-md-3 col-sm-12">
            <Gallery_image image={image15} about="Country Inn Resort, Bhimtal" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Gallery_image image={image16} about="Country Inn Resort, Bhimtal" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Gallery_image image={image17} about="Country Inn Resort, Bhimtal" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Gallery_image image={image18} about="Country Inn Resort, Bhimtal" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row pb-3">
              <div className="col-md-6 col-sm-12">
                <Gallery_image image={image19} about="Country Inn Resort, Jim Corbett" />
              </div>
              <div className="col-md-6 col-sm-12">
                <Gallery_image image={image20} about="Country Inn Resort, Jim Corbett" />
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-md-6 col-sm-12">
                <Gallery_image image={image21} about="Country Inn Resort, Jim Corbett" />
              </div>
              <div className="col-md-6 col-sm-12">
                <Gallery_image image={image22} about="Country Inn Resort, Jim Corbett" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12" >
            <Gallery_image image={image23} about="Country Inn Resort, Jim Corbett" />
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-md-3 col-sm-12">
            <Gallery_image image={image24} about="Country Inn Resort, Jim Corbett" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Gallery_image image={image25} about="Country Inn Resort, Jim Corbett" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Gallery_image image={image26} about="Country Inn Resort, Jim Corbett" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Gallery_image image={image27} about="Counrty Inn Resort, Jim Corbett" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default gallery
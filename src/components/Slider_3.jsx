import React, { Fragment, useState } from 'react'
import { motion } from 'framer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Slider_one(props) {

    return (
        <div className='slider-1-background'>
            <h2 className='text-center pb-3 slider-heading'>{props.heading}</h2>
            <div className="swiper-button image-swiper-button-next">
        <IoIosArrowForward />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <IoIosArrowBack />
      </div>
            <motion.div initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>

                <Swiper spaceBetween={110} slidesPerView={2} loop={true} navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }} modules={[Navigation]} className="mySwiper mb-5" centeredSlides={true} >
                    <SwiperSlide className='carousel   ' >
                        {({ isActive }) => (
                            <div className='custom-carousel-one'>
                                <Image src={props.image1} alt='' className='img-fluid GB-image'  />
                                <div className="swiper-data my-4">
                                    <h4 className='p-3 carousel-heading'>{isActive ? `${props.heading1}` : ' '}</h4>
                                    <div className='px-3 carousel-about'>{isActive ? `${props.about1}` : ' '} </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className='carousel   '>
                    {({ isActive }) => (
                            <div className='custom-carousel-one'>
                                <Image src={props.image2} alt='' className='img-fluid GB-image'  />
                                <div className="swiper-data my-4">
                                    <h4 className='p-3 carousel-heading'>{isActive ? `${props.heading2}` : ' '}</h4>
                                    <p className='px-3 carousel-about'>{isActive ? `${props.about2}` : ' '} </p>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className='carousel   '>
                    {({ isActive }) => (
                            <div className='custom-carousel-one'>
                                <Image src={props.image3} alt='' className='img-fluid GB-image'  />
                                <div className="swiper-data my-4">
                                    <h4 className='p-3 carousel-heading'>{isActive ? `${props.heading3}` : ' '}</h4>
                                    <p className='px-3 carousel-about'>{isActive ? `${props.about3}` : ' '} </p>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className='carousel   '>
                        {({ isActive }) => (
                            <div className='custom-carousel-one'>
                                <Image src={props.image4} alt='' className='img-fluid GB-image'  />
                                <div className="swiper-data my-4">
                                    <h4 className='p-3 carousel-heading'>{isActive ? `${props.heading4}` : ' '}</h4>
                                    <p className='px-3 carousel-about'>{isActive ? `${props.about4}` : ' '} </p>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className='carousel   '>
                        {({ isActive }) => (
                            <div className='custom-carousel-one'>
                                <Image src={props.image5} alt='' className='img-fluid GB-image'  />
                                <div className="swiper-data my-4">
                                    <h4 className='p-3 carousel-heading'>{isActive ? `${props.heading5}` : ' '}</h4>
                                    <p className='px-3 carousel-about'>{isActive ? `${props.about5}` : ' '} </p>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                    
                </Swiper>
            </motion.div>
        </div>
    )
}

export default Slider_one

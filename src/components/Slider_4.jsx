import React, { Fragment, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Slider_one(props) {
    return (
        <div className='mt-5 pt-5 slider-1-background'>
            <h2 className='text-center slider-heading'>{props.heading}</h2>
            <div className="swiper-button image-swiper-button-next-autoslide">
        <IoIosArrowForward />
      </div>
      <div className="swiper-button image-swiper-button-prev-autoslide">
        <IoIosArrowBack />
      </div>
            <Swiper spaceBetween={80} slidesPerView={2} loop={true} navigation={{
          nextEl: ".image-swiper-button-next-autoslide",
          prevEl: ".image-swiper-button-prev-autoslide",
          disabledClass: "swiper-button-disabled"
        }} modules={[Navigation, Pagination]} className="mySwiper mb-5" centeredSlides={true} >
                <SwiperSlide className='carousel  custom-carousel-one' >
                    {({ isActive }) => (
                        <div>
                            <Swiper
                                slidesPerView={1} loop={true} modules={[Autoplay, Pagination]} centeredSlides={true} autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false
                                }} pagination={{clickable: true}}
                                style={{
                                    "--swiper-pagination-color": "white",
                                    "--swiper-pagination-bullet-inactive-color": "#999999",
                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                    "--swiper-pagination-bullet-size": "10px",
                                    "--swiper-pagination-bullet-horizontal-gap": "5px",
                                    "--swiper-pagination-bullet-width":" 30px",
                                    "--swiper-pagination-bullet-height": "3px"
                                  }}
                                className="mySwiper">
                                <SwiperSlide>
                                    <Image src={props.image1} alt='' className='img-fluid GB-image' ></Image>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={props.image2} alt='' className='img-fluid GB-image' ></Image>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={props.image3} alt='' className='img-fluid GB-image' ></Image>
                                </SwiperSlide>
                            </Swiper>
                            <div className=" my-4">
                                <Fragment>
                                    <h4 className='p-3 carousel-heading'>{isActive ? `${props.heading1}` : ' '}</h4>
                                    <div className='px-3 carousel-about'>{isActive ? `${props.about1}` : ' '} </div>
                                </Fragment>
                            </div>
                        </div>
                    )}

                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one' >
                    {({ isActive }) => (
                        <div>
                            <Swiper slidesPerView={1} loop={true} modules={[Autoplay, Pagination]} centeredSlides={true} autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false
                                }} pagination={{clickable: true}}
                                style={{
                                    "--swiper-pagination-color": "white",
                                    "--swiper-pagination-bullet-inactive-color": "#999999",
                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                    "--swiper-pagination-bullet-size": "10px",
                                    "--swiper-pagination-bullet-horizontal-gap": "5px",
                                    "--swiper-pagination-bullet-width":" 30px",
                                    "--swiper-pagination-bullet-height": "3px"
                                  }}
                                className="mySwiper">
                                <SwiperSlide>
                                    <Image src={props.image4} alt='' className='img-fluid GB-image' ></Image>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={props.image5} alt='' className='img-fluid GB-image' ></Image>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={props.image6} alt='' className='img-fluid GB-image' ></Image>
                                </SwiperSlide>
                            </Swiper>
                            <div className=" my-4">
                                <Fragment>
                                    <h4 className='p-3 carousel-heading'>{isActive ? `${props.heading2}` : ' '}</h4>
                                    <div className='px-3 carousel-about'>{isActive ? `${props.about2}` : ' '} </div>
                                </Fragment>
                            </div>
                        </div>
                    )}

                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one' >
                    {({ isActive }) => (
                        <div>
                            <Swiper slidesPerView={1} loop={true} modules={[Autoplay, Pagination]} centeredSlides={true} autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false
                                }} pagination={{clickable: true}}
                                style={{
                                    "--swiper-pagination-color": "white",
                                    "--swiper-pagination-bullet-inactive-color": "#999999",
                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                    "--swiper-pagination-bullet-size": "10px",
                                    "--swiper-pagination-bullet-horizontal-gap": "5px",
                                    "--swiper-pagination-bullet-width":" 30px",
                                    "--swiper-pagination-bullet-height": "3px"
                                  }}
                                className="mySwiper">
                                <SwiperSlide>
                                    <Image src={props.image7} alt='' className='img-fluid GB-image' ></Image>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={props.image8} alt='' className='img-fluid GB-image' ></Image>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={props.image9} alt='' className='img-fluid GB-image' ></Image>
                                </SwiperSlide>
                            </Swiper>
                            <div className=" my-4">
                                <Fragment>
                                    <h4 className='p-3 carousel-heading'>{isActive ? `${props.heading3}` : ' '}</h4>
                                    <div className='px-3 carousel-about'>{isActive ? `${props.about3}` : ' '} </div>
                                </Fragment>
                            </div>
                        </div>
                    )}

                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one' >
                    {({ isActive }) => (
                        <div>
                            <Swiper slidesPerView={1} loop={true} modules={[Autoplay, Pagination]} centeredSlides={true} autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false
                                }} pagination={{clickable: true}}
                                style={{
                                    "--swiper-pagination-color": "white",
                                    "--swiper-pagination-bullet-inactive-color": "#999999",
                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                    "--swiper-pagination-bullet-size": "10px",
                                    "--swiper-pagination-bullet-horizontal-gap": "5px",
                                    "--swiper-pagination-bullet-width":" 30px",
                                    "--swiper-pagination-bullet-height": "3px"
                                  }}
                                className="mySwiper">
                                <SwiperSlide>
                                    <Image src={props.image10} alt='' className='img-fluid GB-image' ></Image>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={props.image11} alt='' className='img-fluid GB-image' ></Image>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={props.image12} alt='' className='img-fluid GB-image' ></Image>
                                </SwiperSlide>
                            </Swiper>
                            <div className=" my-4">
                                <Fragment>
                                    <h4 className='p-3 carousel-heading'>{isActive ? `${props.heading4}` : ' '}</h4>
                                    <div className='px-3 carousel-about'>{isActive ? `${props.about4}` : ' '} </div>
                                </Fragment>
                            </div>
                        </div>
                    )}

                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Slider_one

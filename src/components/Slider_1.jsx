import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

import { register } from "swiper/element/bundle";
register();

function Slider_one(props) {

    return (
        <div className='my-5 pb-5 slider-1-background'>
            <h2 className='text-center pb-3 slider-heading'>{props.heading}</h2>
            <div className="swiper-button image-swiper-button-next">
                <ArrowForwardIosOutlinedIcon className='swiper-button' />
            </div>
            <div className="swiper-button image-swiper-button-prev">
                <ArrowBackIosOutlinedIcon className='swiper-button' />
            </div>
            <Swiper spaceBetween={110} slidesPerView={2} loop={true} navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled"
            }} modules={[Navigation]} className="mySwiper mb-5" centeredSlides={true} >
                <SwiperSlide className='carousel  custom-carousel-one' >
                    <Image src={props.image1} alt='' className='img-fluid GB-image' ></Image>
                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one'>
                    <Image src={props.image2} alt='' className='img-fluid GB-image'></Image>
                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one'>
                    <Image src={props.image3} alt='' className='img-fluid GB-image'></Image>
                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one'>
                    <Image src={props.image4} alt='' className='img-fluid GB-image'></Image>
                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one'>
                    <Image src={props.image5} alt='' className='img-fluid GB-image'></Image>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider_one

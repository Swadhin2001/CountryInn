import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import image4 from '@/assets/VarcaBeach-4.jpg'
import image1 from '@/assets/TarikaRiversideResortJimCorbett-1.jpg'
import image2 from '@/assets/Bhimtal-2.jpg'
import image3 from '@/assets/Chail-3.jpg'
import image5 from '@/assets/Vrindavan-51.jpg'
import image6 from '@/assets/Amritsar-6.jpg'


function Our_brands_slider1() {
    return (
        <div>
            <Swiper slidesPerView={1} loop={true} modules={[Autoplay, Pagination]} className="mySwiper mb-5 caro-img" centeredSlides={true} autoplay={{
                delay: 1500,
                disableOnInteraction: false
            }} >
                <SwiperSlide className="carousel">
                    <Image src={image1} className='d-block w-100 img-fluid caro-img' alt=""></Image>
                    <div className="our_brands_title"> Country Inn Tarika Riverside Resort, Jim Corbett</div>
                </SwiperSlide>
                <SwiperSlide className="carousel">
                    <Image src={image2} className='d-block w-100 img-fluid caro-img' alt=""></Image>
                    <div className="our_brands_title">  Country Inn Nature Resort, Bhimtal</div>
                </SwiperSlide>
                <SwiperSlide className="carousel">
                    <Image src={image3} className='d-block w-100 img-fluid caro-img' alt=""></Image>
                    <div className="our_brands_title">  Country Inn Maple Resort, Chail</div>
                </SwiperSlide>
                <SwiperSlide className="carousel">
                    <Image src={image4} className='d-block w-100 img-fluid caro-img' alt=""></Image>
                    <div className="our_brands_title">  Country Inn Tarika Goa, Varca Beach</div>
                </SwiperSlide>
                <SwiperSlide className="carousel">
                    <Image src={image5} className='d-block w-100 img-fluid caro-img' alt=""></Image>
                    <div className="our_brands_title"> Country Inn, Vrindavan</div>
                </SwiperSlide>
                <SwiperSlide className="carousel">
                    <Image src={image6} className='d-block w-100 img-fluid caro-img' alt=""></Image>
                    <div className="our_brands_title"> Country Inn Hall of Heritage, Amritsar</div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Our_brands_slider1

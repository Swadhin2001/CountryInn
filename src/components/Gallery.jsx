import React, { useEffect,  useRef, useState } from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import { register } from "swiper/element/bundle";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

register();

function gallery(props) {
    
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);
    const [hover5, setHover5] = useState(false);
    return (
        <div className='my-5 pb-5 slider-1-background'>
            
            <h2 className='text-center slider-heading pb-3'>{props.heading}</h2>
            <div className="swiper-button image-swiper-button-next">
        <IoIosArrowForward />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <IoIosArrowBack />
      </div>
            <Swiper spaceBetween={100} slidesPerView={2} loop={true} navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }} modules={[Navigation]} className="mySwiper mb-5" centeredSlides={true} >
                <SwiperSlide className='carousel  custom-carousel-one' 
                    onMouseEnter={() => (setHover1(true))}
                    onMouseLeave={() => (setHover1(false))}
                >
                    <Image src={props.image1} alt='' className='img-fluid GB-image ' ></Image>
                    <div>
                            {hover1 ?
                                (
                                    <div className="GB-overlay">
                                        <h5 className='text-start'>{props.about1}</h5>
                                    </div>
                                )
                                : " "}

                        </div>
                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one'
                    onMouseEnter={() => (setHover2(true))}
                    onMouseLeave={() => (setHover2(false))}
                >
                    <Image src={props.image2} alt='' className='img-fluid GB-image'></Image>
                    <div>
                            {hover2 ?
                                (
                                    <div className="GB-overlay">
                                        <h5 className='text-start'>{props.about2}</h5>
                                    </div>
                                )
                                : " "}

                    </div>
                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one' 
                    onMouseEnter={() => (setHover3(true))}
                    onMouseLeave={() => (setHover3(false))}
                >
                    <Image src={props.image3} alt='' className='img-fluid GB-image'></Image>
                    <div>
                            {hover3 ?
                                (
                                    <div className="GB-overlay">
                                        <h5 className='text-start'>{props.about3}</h5>
                                    </div>
                                )
                                : " "}

                        </div>
                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one' 
                    onMouseEnter={() => (setHover4(true))}
                    onMouseLeave={() => (setHover4(false))}
                >
                    <Image src={props.image4} alt='' className='img-fluid GB-image'></Image>
                    <div>
                            {hover4 ?
                                (
                                    <div className="GB-overlay">
                                        <h5 className='text-start'>{props.about4}</h5>
                                    </div>
                                )
                                : " "}

                        </div>
                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one'
                    onMouseEnter={() => (setHover5(true))}
                    onMouseLeave={() => (setHover5(false))}
                >
                    <Image src={props.image5} alt='' className='img-fluid GB-image'></Image>
                    <div>
                            {hover5 ?
                                (
                                    <div className="GB-overlay">
                                        <h5 className='text-start'>{props.about5}</h5>
                                    </div>
                                )
                                : " "}

                        </div>
                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one' 
                    onMouseEnter={() => (setHover1(true))}
                    onMouseLeave={() => (setHover1(false))}
                >
                    <Image src={props.image1} alt='' className='img-fluid GB-image' ></Image>
                    <div>
                            {hover1 ?
                                (
                                    <div className="GB-overlay">
                                        <h5 className='text-start'>{props.about1}</h5>
                                    </div>
                                )
                                : " "}

                        </div>
                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one'
                    onMouseEnter={() => (setHover2(true))}
                    onMouseLeave={() => (setHover2(false))}
                >
                    <Image src={props.image2} alt='' className='img-fluid GB-image'></Image>
                    <div>
                            {hover2 ?
                                (
                                    <div className="GB-overlay">
                                        <h5 className='text-start'>{props.about2}</h5>
                                    </div>
                                )
                                : " "}

                    </div>
                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one' 
                    onMouseEnter={() => (setHover3(true))}
                    onMouseLeave={() => (setHover3(false))}
                >
                    <Image src={props.image3} alt='' className='img-fluid GB-image'></Image>
                    <div>
                            {hover3 ?
                                (
                                    <div className="GB-overlay">
                                        <h5 className='text-start'>{props.about3}</h5>
                                    </div>
                                )
                                : " "}

                        </div>
                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one' 
                    onMouseEnter={() => (setHover4(true))}
                    onMouseLeave={() => (setHover4(false))}
                >
                    <Image src={props.image4} alt='' className='img-fluid GB-image'></Image>
                    <div>
                            {hover4 ?
                                (
                                    <div className="GB-overlay">
                                        <h5 className='text-start'>{props.about4}</h5>
                                    </div>
                                )
                                : " "}

                        </div>
                </SwiperSlide>
                <SwiperSlide className='carousel  custom-carousel-one'
                    onMouseEnter={() => (setHover5(true))}
                    onMouseLeave={() => (setHover5(false))}
                >
                    <Image src={props.image5} alt='' className='img-fluid GB-image'></Image>
                    <div>
                            {hover5 ?
                                (
                                    <div className="GB-overlay">
                                        <h5 className='text-start'>{props.about5}</h5>
                                    </div>
                                )
                                : " "}

                        </div>
                </SwiperSlide>
                
                
            </Swiper>
        </div>
    )
}

export default gallery

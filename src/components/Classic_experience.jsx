import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import { useState } from 'react';

function Slider_two(props) {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);
    return (
        <div className=' slider-1-background m-0 p-0'>
            <motion.div initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>

                <Swiper spaceBetween={0} slidesPerView={3} loop={true} navigation={true} modules={[Navigation]} className="mySwiper" slidesPerGroup={1} centeredSlides={true}>
                    <SwiperSlide className='carousel custom-carousel'
                        onMouseEnter={() => (setHover1(true))}
                        onMouseLeave={() => (setHover1(false))}
                    >
                        <Image src= {props.image1} className='carousel-image-two' alt= ""/>
                        <div>
                            {hover1 ?
                                (
                                    <div className="overlay-middle">
                                        <div className="overlay-text">
                                            <p>Dining is about spending a joyful time with your loved ones, while you indulge in your comfort food, prepared with two important ingredients – freshest produce and warmth</p>
                                            <br />
                                            <br />
                                            <div className="me-auto d-flex flex-column">
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Resort, Bhimttal</Link>
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Tarika Reverside Resort, Jim Corbett</Link>
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Resort, Jim Corbett</Link>
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Express, Sajjangarh, Udaipur</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                                : (<Link href="/" className="slider-btn">MOUNTAINS & SERENITY</Link>)}

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='carousel custom-carousel' 
                        onMouseEnter={() => (setHover2(true))}
                        onMouseLeave={() => (setHover2(false))}
                    >   
                        <Image src= {props.image2} className='carousel-image-two' alt= ""/>
                        <div>
                            {hover2 ?
                                (
                                    <div className="overlay-middle">
                                        <div className="overlay-text">
                                            <p>Dining is about spending a joyful time with your loved ones, while you indulge in your comfort food, prepared with two important ingredients – freshest produce and warmth</p>
                                            <br />
                                            <br />
                                            <div className="me-auto d-flex flex-column">
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Resort, Bhimttal</Link>
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Tarika Reverside Resort, Jim Corbett</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                                : (<Link href="/" className="slider-btn">NOT JUST DINING</Link>)}

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='carousel custom-carousel' 
                        onMouseEnter={() => (setHover3(true))}
                        onMouseLeave={() => (setHover3(false))}
                    >   
                        <Image src= {props.image3} className='carousel-image-two' alt= ""/>
                        <div >
                            {hover3 ?
                                (
                                    <div className="overlay-middle">
                                        <div className="overlay-text">
                                            <p>Dining is about spending a joyful time with your loved ones, while you indulge in your comfort food, prepared with two important ingredients – freshest produce and warmth</p>
                                            <br />
                                            <br />
                                            <div className="me-auto d-flex flex-column">
                                    
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Tarika Reverside Resort, Jim Corbett</Link>
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Resort, Jim Corbett</Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                                : (<Link href="/" className="slider-btn">THE WILDERNESS</Link>)}

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='carousel custom-carousel' 
                        onMouseEnter={() => (setHover4(true))}
                        onMouseLeave={() => (setHover4(false))}
                    >
                        <Image src= {props.image4} className='carousel-image-two' alt= ""/>
                        <div >
                            {hover4 ?
                                (
                                    <div className="overlay-middle">
                                        <div className="overlay-text">
                                            <p>Dining is about spending a joyful time with your loved ones, while you indulge in your comfort food, prepared with two important ingredients – freshest produce and warmth</p>
                                            <br />
                                            <br />
                                            <div className="me-auto d-flex flex-column">
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Resort, Vrindavan</Link>
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Hall of Heritage, Amritsar</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                                : (<Link href="/" className="slider-btn">SPIRITUAL ENRICHMENT</Link>)}

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='carousel custom-carousel'
                        onMouseEnter={() => (setHover1(true))}
                        onMouseLeave={() => (setHover1(false))}
                    >
                        <Image src= {props.image1} className='carousel-image-two' alt= ""/>
                        <div>
                            {hover1 ?
                                (
                                    <div className="overlay-middle">
                                        <div className="overlay-text">
                                            <p>Dining is about spending a joyful time with your loved ones, while you indulge in your comfort food, prepared with two important ingredients – freshest produce and warmth</p>
                                            <br />
                                            <br />
                                            <div className="me-auto d-flex flex-column">
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Resort, Bhimttal</Link>
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Tarika Reverside Resort, Jim Corbett</Link>
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Resort, Jim Corbett</Link>
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Express, Sajjangarh, Udaipur</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                                : (<Link href="/" className="slider-btn">MOUNTAINS & SERENITY</Link>)}

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='carousel custom-carousel' 
                        onMouseEnter={() => (setHover2(true))}
                        onMouseLeave={() => (setHover2(false))}
                    >   
                        <Image src= {props.image2} className='carousel-image-two' alt= ""/>
                        <div>
                            {hover2 ?
                                (
                                    <div className="overlay-middle">
                                        <div className="overlay-text">
                                            <p>Dining is about spending a joyful time with your loved ones, while you indulge in your comfort food, prepared with two important ingredients – freshest produce and warmth</p>
                                            <br />
                                            <br />
                                            <div className="me-auto d-flex flex-column">
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Resort, Bhimttal</Link>
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Tarika Reverside Resort, Jim Corbett</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                                : (<Link href="/" className="slider-btn">NOT JUST DINING</Link>)}

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='carousel custom-carousel' 
                        onMouseEnter={() => (setHover3(true))}
                        onMouseLeave={() => (setHover3(false))}
                    >   
                        <Image src= {props.image3} className='carousel-image-two' alt= ""/>
                        <div >
                            {hover3 ?
                                (
                                    <div className="overlay-middle">
                                        <div className="overlay-text">
                                            <p>Dining is about spending a joyful time with your loved ones, while you indulge in your comfort food, prepared with two important ingredients – freshest produce and warmth</p>
                                            <br />
                                            <br />
                                            <div className="me-auto d-flex flex-column">
                                    
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Tarika Reverside Resort, Jim Corbett</Link>
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Resort, Jim Corbett</Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                                : (<Link href="/" className="slider-btn">THE WILDERNESS</Link>)}

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='carousel custom-carousel' 
                        onMouseEnter={() => (setHover4(true))}
                        onMouseLeave={() => (setHover4(false))}
                    >
                        <Image src= {props.image4} className='carousel-image-two' alt= ""/>
                        <div >
                            {hover4 ?
                                (
                                    <div className="overlay-middle">
                                        <div className="overlay-text">
                                            <p>Dining is about spending a joyful time with your loved ones, while you indulge in your comfort food, prepared with two important ingredients – freshest produce and warmth</p>
                                            <br />
                                            <br />
                                            <div className="me-auto d-flex flex-column">
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Resort, Vrindavan</Link>
                                                <Link href='/bhimtal' className='hotel-links'>Country Inn Hall of Heritage, Amritsar</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                                : (<Link href="/" className="slider-btn">SPIRITUAL ENRICHMENT</Link>)}

                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </motion.div>
        </div>
    )
}

export default Slider_two

import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";

function Slider_two(props) {

    return (
        <div className=' slider-1-background m-0 p-0'>
            <motion.div initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>

            <Swiper spaceBetween={0} slidesPerView={3} loop={true} navigation={true} modules={[Navigation]} className="mySwiper" slidesPerGroup={1} centeredSlides={true}>
                <SwiperSlide className='carousel custom-carousel' >
                    <Image src={props.image1} alt='' className='img-fluid' ></Image>
                </SwiperSlide>
                <SwiperSlide className='carousel custom-carousel'>
                    <Image src={props.image2} alt='' className=' img-fluid'></Image>
                </SwiperSlide>
                <SwiperSlide className='carousel custom-carousel'>
                    <Image src={props.image3} alt='' className=' img-fluid'></Image>
                </SwiperSlide>
                <SwiperSlide className='carousel custom-carousel'>
                    <Image src={props.image4} alt='' className=' img-fluid'></Image>
                </SwiperSlide>
                <SwiperSlide className='carousel custom-carousel'>
                    <Image src={props.image5} alt='' className=' img-fluid'></Image>
                </SwiperSlide>
                <SwiperSlide className='carousel custom-carousel'>
                    <Image src={props.image1} alt='' className=' img-fluid'></Image>
                </SwiperSlide>
                <SwiperSlide className='carousel custom-carousel'>
                    <Image src={props.image2} alt='' className=' img-fluid'></Image>
                </SwiperSlide>
                <SwiperSlide className='carousel custom-carousel'>
                    <Image src={props.image3} alt='' className=' img-fluid'></Image>
                </SwiperSlide>
                <SwiperSlide className='carousel custom-carousel'>
                    <Image src={props.image4} alt='' className=' img-fluid'></Image>
                </SwiperSlide>
                <SwiperSlide className='carousel custom-carousel'>
                    <Image src={props.image5} alt='' className=' img-fluid'></Image>
                </SwiperSlide>
            </Swiper>
            </motion.div>
        </div>
    )
}

export default Slider_two

import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import banner_image from '@/assets/getquotebanner.jpg'
import image1 from '@/assets/bnqttabletarika1.jpg'
import image2 from '@/assets/bnqtjimcorbett.jpg'
import image3 from '@/assets/bnqttablebhimtal.jpg'
import image4 from '@/assets/bnqttable.png'
import Get_quote_form from '@/components/Get_quote_form'
import Footer from '@/components/Footer'

function form() {
    return (
        <>
            <Navbar opacity="0.6" />
            <div style={{ "backgroundImage": `url(${banner_image.src})` }} className='hero-banner' />
            <section id="banquettable" className='banquettable'>
                <div class="text-center">
                    <h3 class="mt-3 mb-5 font-Trajan f-s-28 color-gold">GET QUOTE</h3>
                </div>

                <div class="text-center">
                    <Image src = {image1} alt= "" className= "img-fluid"></Image>
                </div>
                <div class="text-center mt-5">
                    <Image src = {image2} alt= "" className= "img-fluid"></Image>
                </div>
                <div class="text-center mt-5">
                    <Image src = {image3} alt= "" className= "img-fluid"></Image>
                </div>
                <div class="text-center mt-5">
                    <Image src = {image4} alt= "" className= "img-fluid"></Image>
                </div>
            </section>
            <Get_quote_form/>
            <Footer/>
        </>
    )
}

export default form
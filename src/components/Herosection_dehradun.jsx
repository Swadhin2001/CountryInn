import React from 'react'
import Form from './Form'
import Image from 'next/image'
import Navbar from './Navbar'

function Herosection(props) {
    return (
        <>
            {/* <Navbar/> */}
            <div style={{ "backgroundImage": `url(${props.image.src})`, "backgroundPosition": `${props.backgroundPosition}`, "top": "0px" }} className='hero-banner d-flex justify-content-center'>
                <div className="container hero-heading text-center">
                    <div className="row dehradun-hero">
                        <div className="section-title position-relative text-center">
                            <p className='text-white'>COUNTRY INN PREMIER - THE PROMINENCE, <br /> DEHRADUN</p>
                        </div>
                    </div>
                </div>
            </div>
            <Form></Form>
            <div className='d-flex justify-content-center hero-padding'>
                <div className='container'>
                    <h1 className='text-center pb-3 section-header'>{props.heading}</h1>
                    <div className='text-center section-about'>{props.about}</div>
                </div>
            </div>
        </>
    )
}

export default Herosection

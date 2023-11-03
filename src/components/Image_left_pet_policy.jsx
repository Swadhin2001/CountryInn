import React from 'react'
import Image from 'next/image'


function Image_left(props) {
  return (
    <div className='container-fluid  p-0'>
        <div className="row mb-5 g-0">
        <div className="col-md-7" >
          <Image src= {props.image} alt='' className="img-fluid "/>
        </div>
        <div className="col-md-5 my-auto ">
        <div className='image-about-left m-5 ps-4'>
            <h4 className='pb-3  image-heading' >{props.heading}</h4>
            <div className='pb-2  image-about'>{props.about}</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Image_left

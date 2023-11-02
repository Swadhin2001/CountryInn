import React from 'react'
import Image from 'next/image'

function Image_right(props) {
  return (
    <div className='container-fluid p-0'>
        <div className="row row-odd">
        <div className="col-md-5 my-auto ">
        <div className='image-about-left my-3'>
            <h4 className='pb-3 body-image-h4-left image-heading' >{props.heading}</h4>
            <div className='pb-2 body-image-p image-about'>{props.about}</div>
            </div>
        </div>
        <div className="col-md-7" >
          <Image src= {props.image} alt='' className="img-fluid"/>
        </div>
        </div>
    </div>
  )
}

export default Image_right

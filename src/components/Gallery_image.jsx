import React, { useState } from 'react'
import Image from 'next/image';

function Gallery_image(props) {
    const [hover, setHover] = useState(false);
    return (
        <div    className='position-relative' 

        onMouseEnter={() => (setHover(true))}
        onMouseLeave={() => (setHover(false))}
        >
            <Image src={props.image} alt='' className='img-fluid ' />
            <div>
                {hover ?
                    (
                        <div className="GB-overlay position-absolute gallery-image-about">
                            <p className='text-start gallery-image-about'>{props.about}</p>
                        </div>
                    )
                    : " "}
            </div>
        </div>
    )
}

export default Gallery_image

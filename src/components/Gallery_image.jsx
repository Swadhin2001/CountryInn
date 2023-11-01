import React, { useState } from 'react'
import Image from 'next/image';

function Gallery_image(props) {
    const [hover, setHover] = useState(false);
    return (
        <div
            onMouseEnter={() => (setHover(true))}
            onMouseLeave={() => (setHover(false))}>
            <Image src={props.image} alt="" className="img-fluid" />
            {/* <div>
                {(hover) ?
                    (
                        <div className="GB-overlay">
                            <h5 className='text-start'>{props.about}</h5>
                        </div>
                    )
                    : " "}
            </div> */}
        </div>
    )
}

export default Gallery_image

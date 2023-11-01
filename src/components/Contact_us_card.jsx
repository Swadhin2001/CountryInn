import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact_us_card(props) {
    return (
        <>
            <div className="row mb-3">
                <div className="col" style={{ "borderLeft": `${props.border}` }}>
                    <a href="/" className='mt-5 text-decoration-none' terget='_blank'>
                        <span className=' d-flex align-items-center justify-content-center'>
                            <div className=' text-start mb-0 color-dgrey contact-about'>{props.about}</div>
                        </span>
                    </a>
                </div>
            </div>
            <hr className="mx-auto" style={{ "width": "60%" }} />
            <div className="m-auto mb-5">

                <span style={{ color: "#98652d" }} className='mx-3'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="2em"
                        viewBox="0 0 384 512"
                        fill="#98652d"
                        {...props}
                    >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 110 128 64 64 0 110-128z" />
                    </svg>
                </span>
                <span style={{ color: "#98652d" }} className='mx-3'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="2em"
                        viewBox="0 0 448 512"
                        fill="#98652d"
                        {...props}
                    >
                        <path d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0048-48V80a48 48 0 00-48-48z" />
                    </svg>
                </span>
                <span style={{ color: "#98652d" }} className='mx-3'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="2em"
                        viewBox="0 0 448 512"
                        fill="#98652d"
                        {...props}
                    >
                        <path d="M224 202.66A53.34 53.34 0 10277.36 256 53.38 53.38 0 00224 202.66zm124.71-41a54 54 0 00-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 00-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0030.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0030.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33zM224 338a82 82 0 1182-82 81.9 81.9 0 01-82 82zm85.38-148.3a19.14 19.14 0 1119.13-19.14 19.1 19.1 0 01-19.09 19.18zM400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88z" />
                    </svg>
                </span>
            </div>

        </>
    )
}

export default Contact_us_card

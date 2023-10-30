import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/cihr-logo.png'

function Navbar(props) {
    const [opacity, setOpacity] = useState(`${props.opacity}`);
    const Scroll = () => {
        if (scrollY >= 100) {
            setOpacity("1");
        }
        else {
            setOpacity(`${props.opacity}`);
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', Scroll);
    }
    return (
        <>
            <div className="navbar navbar-expand-lg bg-body-tertiary sticky-top " style={{ "opacity": `${opacity}` }}>
                <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                    <Link className="navbar-brand " href="/">
                        <Image src={logo} alt='' className='nav-icon' />
                    </Link>


                    <nav id="navbar" className='navbar order-last order-lg-0'>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown navbar-item-padding">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        RESORTS
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item ul-animation" href="/bhimtal">COUNTRY INN NATURE RESORT, BHIMTAL</Link></li>
                                        <li><a className="dropdown-item ul-animation" href="/tarika-riverside">COUNTRY INN TARIKA RIVERSIDE RESORT, JIM CORBETT</a></li>
                                        <li><a className="dropdown-item ul-animation" href="/Jimcorbett">COUNTRY INN RESORT, JIM CORBETT</a></li>
                                        <li><a className="dropdown-item ul-animation" href="/amritsar">COUNTRY INN HALL OF HERITAGE, AMRITSAR</a></li>
                                        <li><a className="dropdown-item ul-animation" href="/tarika-goa">COUNTRY INN TARIKA GOA, VARCA BEACH</a></li>
                                        <li><a className="dropdown-item ul-animation" href="/vrindavan">COUNTRY INN RESORT, VRINDAVAN</a></li>
                                        <li><a className="dropdown-item ul-animation" href="/maple-resort-chail">COUNTRY INN MAPLE RESORT, CHAIL</a></li>
                                        <li><a className="dropdown-item ul-animation" href="/pacific-resort-mussoorie">COUNTRY INN PREMIER PACIFIC RESORT- MUSSOORIE</a></li>
                                        <li><a className="dropdown-item ul-animation" href="/prominence-dehradun">COUNTRY INN PREMIER - THE PROMINENCE, DEHRADUN</a></li>
                                        <li><a className="dropdown-item ul-animation" href="/upcoming-hotels">UPCOMING HOTELS</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">EXPERIENCES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">EVENTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">GALLERY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/our-brands">OUR BRANDS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">CONTACT US</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default Navbar

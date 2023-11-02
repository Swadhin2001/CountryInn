import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/cihr-logo.png'

function Navbar(props) {
    const [opacity, setOpacity] = useState(`${props.opacity}`);
    const [shadow, setShadow] = useState('');
    const Scroll = () => {
        if (scrollY >= 100) {
            setOpacity("1");
            setShadow('0px 2px 10px #555');
        }
        else {
            setOpacity(`${props.opacity}`);
            setShadow("");
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', Scroll);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top " style={{ "opacity": `${opacity}`, "boxShadow": `${shadow}` }}>
                <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                    <Link className="navbar-brand " href="/">
                        <Image src={logo} alt='' className='nav-icon' />
                    </Link>


                    <div id="navbar" className='navbar order-last order-lg-0'>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown ">
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
                                    <a className="nav-link" href="/gallery">GALLERY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/our-brands">OUR BRANDS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">CONTACT US</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav> */}

        </>
    )
}

export default Navbar

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '@/assets/cihr-logo.png'

function Footer(props) {
  return (
    <div className='d-flex justify-content-center pb-5 mb-3'>
        <div className="container-1140">
            <div className="row">
                <div className="col-md-4 footer-div">
                    <Image src = {logo} alt = ''></Image>
                </div>
                <div className="col-md-4 footer-div">
                    <h4 className='footer-h4'>QUICK LINKS</h4>
                    <div className='d-flex flex-column'>                        
                        <Link href = '/aboutus' className='footer-link'>About Us</Link>
                        <Link href = '/hotel-developement' className='footer-link'>Hotel Developement</Link>
                        <Link href = '/contact' className='footer-link'>Contact Us</Link>
                        <Link href = '/gallery' className='footer-link'>Gallery</Link>
                        <Link href = '/petpolicy' className='footer-link'>Pet Policy</Link>
                        <Link href = '/upcoming-hotels' className='footer-link'>Upcoming Hotels</Link>
                        <Link href = '/policy' className='footer-link'>Privacy Policy</Link>
                        <Link href = '/terms-conditions' className='footer-link'>Terms and Conditions</Link>
                    </div>
                </div>
                <div className="col-md-4 footer-div">
                    <h4 className='footer-h4'>CONTACT US</h4>
                    <p className='footer-p'>+91 886 070 7273</p>
                    <p className='footer-p'>reservations@countryinn.in</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

import React from 'react'
import Link from 'next/link'

function Contact_us_card(props) {
  return (
    <>
        <div className="col " style={{ borderLeft: "1px solid #98652d" }}>
            <div className="color-dgrey">
            <Link
                href="https://goo.gl/maps/L3Rv8XT3kVNr86bn8"
                target="_blank"
                className="color-dgrey mt-5"
            >
                <span className="f-s-16 d-flex ">
                <div className="f-s-20 font-Brandon text-start mb-0">{props.about}
                </div>
                </span>
            </Link>
            </div>
        </div>
        <hr className="mx-auto" style={{ width: "60%" }} />
        <div className="m-auto mb-3">
            <Link href="https://goo.gl/maps/L3Rv8XT3kVNr86bn8" target="_blank">
            <i
                className="fas fa-map-marker-alt fa-2x mx-3"
                style={{ color: "#98652d" }}
            />
            </Link>
            <Link
            href="https://www.facebook.com/CountryInnNatureResortBhimtal"
            target="_blank"
            >
            <span style={{ color: "#98652d" }}>
                <i className="fab fa-facebook-square fa-2x mx-3" aria-hidden="true" />
            </span>
            </Link>
            <Link
            href="https://www.instagram.com/countryinnnatureresortbhimtal/"
            target="_blank"
            >
            <span style={{ color: "#98652d" }}>
                <i className="fab fa-instagram-square fa-2x mx-3" aria-hidden="true" />
            </span>
            </Link>
        </div>
    </>
  )
}

export default Contact_us_card

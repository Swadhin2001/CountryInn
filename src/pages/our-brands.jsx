import React, { useState } from 'react'
import banner_image from '@/assets/ourgetwaysbhimtal.jpg'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import logo_image1 from '@/assets/cihr.jpg'
import logo_image2 from '@/assets/ciphr.jpg'
import logo_image3 from '@/assets/ciehr.jpg'
import Footer from '@/components/Footer'
import Our_brands_slider1 from '@/components/Our_brands_slider1'
import image1 from '@/assets/CountryMussooriePremier.png'
import image2 from '@/assets/CountryExpress.jpg'

function our_brands() {
  const jsx1 = (<Our_brands_slider1 />)
  const jsx2 = (
    <div>
      <Image src={image1} className='d-block w-100 img-fluid caro-img' alt="" />
      <div className="our_brands_title">Country Inn Premier Pacific Resort, Mussoorie</div>
    </div>
  )
  const jsx3 = (<Image src={image2} className='d-block w-100 img-fluid caro-img' alt="" />)

  const innerjsxdiv1 = (
    <div id="panelOne" className="panel-body">
      <div className="accordion_mobile_content_img">
        <Image
          src={logo_image1}
          className="lazyload"
          alt=""
        />
      </div>
      <p>
        Country Inn Hotels &amp; Resorts are mid-segment leisure and business hotels
        that are known for offering refreshing stays, delightful experiences and
        redefining family holidays. <br />
        <br />
        Just like the pure lotus that represents the brand, we are known to offer
        hospitality that is heartfelt and intuitive. Country Inn Hotels &amp;
        Resorts are always strategically located in destinations that are best
        suited for convenience, adventure, discovery and at the places that inspire
        the soul. Each leisure resort displays lush green nature in its unique
        backdrop and is set in natural junction flanked by great Himalayan
        mountains, alongside tranquil lakes, in the midst of virgin forests or
        bordering wildlife sanctuaries. Our business hotels are close to key
        business districts, local attractions and shopping centres so there is
        always a work and leisure balance.
        <br />
        <br />
        Country Inn Hotels and Resorts’ purpose is to let you unwind and connect
        with self or strengthen bonds with your family. At each leisure resort, you
        can expect tranquil views, lush green lawns, recreational activities, kids
        play area and excellent cuisine. <br />
        <br />
        A contemporary take to immerse travellers in the local beauty and distinct
        character of the destination.
        <br />
        <br />
      </p>
      <div>
        <div>
          {" "}
          <p> Key Pillars</p>
        </div>
        <ul style={{ listStyleType: "disc" }}>
          <li>Heartfelt and intuitive hospitality</li>
          <li>Strategic location : Convenience · Adventure · Discovery </li>
          <li>Delightful experiences</li>
        </ul>
      </div>
    </div>
  )

  const innerjsxdiv2 = (<div className="panel-body">
    <div className="accordion_mobile_content_img">
      <Image
        src={logo_image2}
        className="lazyload"
        alt=""
      />
    </div>
    <p>
      Country Inn Premier Hotels &amp; Resorts are designed to further elevate the
      Country Inn experience with a tasteful amalgamation of modern aesthetic and
      enriching experiences. Located in high-demand markets, Country Inn Premier
      hotels are travellers’ preferred choice at their most loved travel
      destinations. While maintaining the brand’s core DNA of extending
      hospitality that is heartfelt and intuitive, these hotels feature spacious
      interiors and premium amenities for an inspiring stay.
      <br />
      <br />
      Country Inn Premier Hotels &amp; Resorts caters to the well-travelled guests
      seeking utmost comfort and soul-filling experiences. During your stay at
      these hotels, you will witness spacious accommodation, awe-inspiring views
      eliciting a restful state of mind, personalized services, club facilities,
      experiential dining, flexible meeting spaces and delightful recreational
      experiences. <br />
      <br />
      Immerse yourself in the breath-taking beauty of nature, while staying at a
      hotel that completely reflects the mood of its location. <br />
      <br />
    </p>
    <div>
      <div>
        {" "}
        <p> Key Pillars</p>
      </div>
      <ul style={{ listStyleType: "disc" }}>
        <li>Heartfelt and intuitive hospitality</li>
        <li>Located in famous destinations (high-demand markets)</li>
        <li>
          Spacious interiors and premium amenities <br />
          Welcome amenities · Experiential dining <br />
          Club facilities (ranging from room upgrades, complimentary meals,
          drinks, special welcome amenities to club access at a few locations)
        </li>
      </ul>
    </div>
  </div>
  )

  const innerjsxdiv3 = (<div className="panel-body">
    <div className="accordion_mobile_content_img">
      <Image
        src={logo_image3}
        className="lazyload"
        alt=""
      />
    </div>
    <p>
      Remaining true to the meaning of the brand’s iconic symbol of a pink lotus,
      Country Inn Express Hotels &amp; Resorts represents purity and cleanliness
      at its best. <br />
      <br />
      The brand is targeted to smart, conscious and modern travellers seeking
      comfort and stress-free stays at an affordable price. At Country Inn Express
      hotels, you will experience clean and crisp accommodation, efficient
      service, hearty meals and reliable safety standards, while staying at a
      convenient location. Expect a good night sleep after a busy day of
      exploration or business meetings.
      <br />
      <br />A smarter stay begins here!
    </p>
    <br />
    <br />
    <div>
      <div>
        {" "}
        <p> Key Pillars</p>
      </div>
      <ul style={{ listStyleType: "disc" }}>
        <li>Affordable comfort</li>
        <li>Convenient location</li>
        <li>Crisp accommodation and hearty meals </li>
      </ul>
    </div>
  </div>
  )
  const btnjsxdiv1 = (<div className='border-bottom'>
    <Image
      className="lazyload mb-3 w-25 text-center mx-auto country_brand_img"
      src={logo_image1} alt="" />
  </div>)

  const btnjsxdiv2 = (<div className='border-bottom'>
    <Image
      className="lazyload mb-3 w-25 text-center mx-auto country_brand_img"
      src={logo_image2} alt=""/>
  </div>)

  const btnjsxdiv3 = (<div className='border-bottom'>
    <Image
      className="lazyload mb-3 w-25 text-center mx-auto country_brand_img"
      src={logo_image3} alt="" />
  </div>)


  const [jsx, setJsx] = useState(jsx1);
  const [innerjsx1, setInnerJsx1] = useState(innerjsxdiv1);
  const [innerjsx2, setInnerJsx2] = useState(null);
  const [innerjsx3, setInnerJsx3] = useState(null);
  const [btnjsx1, setBtnJsx1] = useState(btnjsxdiv1);
  const [btnjsx2, setBtnJsx2] = useState(<div>Country Inn Premier</div>);
  const [btnjsx3, setBtnJsx3] = useState(<div>Country Inn Express</div>);
  const [title1, setTitle1] = useState ("pannel-title-collapsed");
  const [title2, setTitle2] = useState ("pannel-title");
  const [title3, setTitle3] = useState ("pannel-title");


  const click1 = () => {
    setJsx(jsx1);
    if (innerjsx1 === null) {
      setInnerJsx1(innerjsxdiv1);
      setBtnJsx1(btnjsxdiv1);
      setTitle1 ("pannel-title-collapsed");
      setTitle2 ("pannel-title");
      setTitle3 ("pannel-title");
      setInnerJsx2(null);
      setBtnJsx2(<div>Country Inn Premier</div>)
      setInnerJsx3(null);
      setBtnJsx3(<div>Country Inn Express</div>)
    }
    else {
      setInnerJsx1(null);
      setTitle1 ("pannel-title");
      setBtnJsx1(
        <div className="d-flex">
            <div className="d-flex">Country Inn Hotels & Resorts 
          </div>
        </div>
      )
    }
  }
  
  const click2 = () => {
    if (innerjsx2 === null) {
      setInnerJsx2(innerjsxdiv2);
      setBtnJsx2(btnjsxdiv2);
      setTitle2 ("pannel-title-collapsed");
      setTitle1 ("pannel-title");
      setTitle3 ("pannel-title");
      setInnerJsx1(null);
      setBtnJsx1(<div>Country Inn Hotels & Resorts</div>)
      setInnerJsx3(null);
      setBtnJsx3(<div>Country Inn Express</div>)
      setJsx(jsx2);
    }
    else {
      setInnerJsx2(null);
      setBtnJsx2(<div>Country Inn Premier</div>)
      setJsx(jsx1);
      setTitle2 ("pannel-title");
    }

  }

  const click3 = () => {
    if (innerjsx3 === null) {
      setInnerJsx3(innerjsxdiv3);
      setBtnJsx3(btnjsxdiv3);
      setTitle3 ("pannel-title-collapsed");
      setTitle1 ("pannel-title");
      setTitle2 ("pannel-title");
      setJsx(jsx3);
      setInnerJsx2(null);
      setBtnJsx2(<div>Country Inn Premier</div>)
      setInnerJsx1(null);
      setBtnJsx1(<div>Country Inn Hotels & Resorts</div>)
    }
    else {
      setInnerJsx3(null);
      setTitle3 ("pannel-title");
      setBtnJsx3(<div>Country Inn Express</div>)
      setJsx(jsx1);
    }

  }


  return (
    <>
      <Navbar></Navbar>
      <div style={{ "backgroundImage": `url(${banner_image.src})` }} className='hero-banner our-brands-banner'  />
      <div className="bg-light pb-4">
        <div className="section-title text-center pb-4 pt-4 mt-5"  >
          <h2 className='our-brands'>Our brands</h2>
        </div>
        <div className="container pb-4">
          <div className="row">
            <div className="col-md-6">
              {jsx}
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 position-relative">   
                  <div className="pannel-group"> 
                      <div onClick={click1} className='our-brands-about mb-0'> <div className = "pannel-heading"> <div className={`${title1}`}> {btnjsx1}
                        </div></div></div>
                        <div onClick={click1} className='our-brands-about pt-0'>
                        {innerjsx1}
                        </div>
                    <div onClick={click2} className='our-brands-about' > <div className = "pannel-heading"> <div className={`${title2}`}> {btnjsx2}
                      </div> </div></div>
                        <div onClick={click1} className='our-brands-about pt-0'>
                        {innerjsx2}
                        </div>

                    <div onClick={click3} className='our-brands-about' > <div className = "pannel-heading"> <div className={`${title3}`}>
                    {btnjsx3} </div> </div></div>
                        <div onClick={click1} className='our-brands-about pt-0'>
                        {innerjsx3}
                        </div>
                  </div>             
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default our_brands

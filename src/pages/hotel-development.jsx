import React from 'react'
import Navbar from '@/components/Navbar'
import banner_image from '@/assets/hotel-developement-banner.jpg'
import Footer from '@/components/Footer'
import Image from 'next/image'
import section_image1 from '@/assets/trusted_icon.png'
import section_image2 from '@/assets/expertise_icon.png'
import section_image3 from '@/assets/skilled_icon.png'
import logo1 from '@/assets/espire_logo.png'
import logo2 from '@/assets/six_senses_logo.png'
import logo3 from '@/assets/ZANA_Logo.png'
import logo4 from '@/assets/country_inn_logo.png'
import image1 from '@/assets/sadhna_rai.jpg'
import image2 from '@/assets/sushil_amlani.jpg'

function hotel_developement() {
  return (
    <div >
      <Navbar opacity="0.6"></Navbar>
      <div style={{ "backgroundImage": `url(${banner_image.src})` }} className='hero-banner' />
      <div className='d-flex justify-content-center hero-padding'>
        <div className='container'>
          <h1 className='text-center pb-3 section-header'>ESPIRE HOSPITALITY GROUP</h1>
          <div className='text-center section-about'>Espire Hospitality Group is a swiftly growing hospitality group with a distinctive portfolio of properties across India. We are the owning company of India's most magnificent luxury resort 'Six Senses Fort Barwara', own and operate a mid-market resort chain 'Country Inn Hotels and Resorts' and have recently launched a new brand 'ZANA - Luxury Escapes' that is a confluence of luxury and top notch hospitality. We are known for crafting thoughtful experiences in India's most sought-after destinations, offering unmatched choices for guests and driving unrivaled value for owners.
            <br /> <br />
            We seek to enter into a long-term association with like-minded owners and developers searching for collaborative partnerships.
          </div>
        </div>
      </div>

      <div className='hero-background d-flex justify-content-center' style={{ "height": "410px" }}>
        <div className="container">
          <h2 className='text-center mid-section-heading mb-3 pt-5'>COMMITED TO YOUR SUCCESS</h2>
          <div class="row text-center">
            <div class="col-md-4">
              <Image src={section_image1} alt="A Trusted Relationship" />
              <h5>A Trusted Relationship</h5>
              <p>Our commitment to communication and transparency builds mutually beneficial long-term relationships.</p>
            </div>
            <div class="col-md-4">
              <Image src={section_image2} alt="A Wealth of Expertise" />
              <h5>A Wealth of Expertise</h5>
              <p>Partnering with us means gaining over three decades of unmatched hospitality expertise.</p>
            </div>
            <div class="col-md-4">
              <Image src={section_image3} alt="A Skilled Team" />
              <h5>A Skilled Team</h5>
              <p>From day one, you are personally connected to a team of hospitality experts.</p>
            </div>
          </div>
        </div>
      </div>

      <section id="portfolio" className="about">
        <div className="container mt-5 py-5" >
          <div className="section-header text-center">
            <div className="section-title text-center">
              <p className = "our-portfolio">OUR PORTFOLIO</p>
            </div>
            <div className="row text-center">
              <div className="col-md-4" />
              <div className="col-md-4">
                <Image src = {logo1} alt = "Espire" className="img-fluid" />
                <div className="vertical-line middle-line" />
              </div>
              <div className="col-md-4" />
            </div>
            <div className="row text-center g-0">
              <div className="col-md-4">
                <div className="horizontal-line line1" />
                <div className="vertical-line" />
                <h4>LUXURY</h4>
                <Image src = {logo2} alt = "Six Senses" className=" brand-logos" />
                <h5>OPERATIONAL</h5>
                <p className='vertical-line-p'>Six Senses Fort Barwara</p>
              </div>
              <div className="col-md-4">
                <div className="horizontal-line line2" />
                <div className="vertical-line" />
                <h4>LUXURY BOUTIQUE RESORT</h4>
                <Image src = {logo3} alt = "ZANA" className="brand-logos" />
                <h5>OPERATIONAL</h5>
                <p className='vertical-line-p'>ZANA Lake Resort, Udaipur</p>
                <p className='vertical-line-p'>ZANA Forest Resort, Ranthambore</p>
                <h5 className="upcoming">UPCOMING</h5>
                <p className='vertical-line-p'>ZANA Jungle Retreat, Jim Corbett</p>
                <p className='vertical-line-p'>ZANA Beach Resort, Goa</p>
                <p className='vertical-line-p'>ZANA Mountain Resort, Rishikesh</p>
              </div>
              <div className="col-md-4">
                <div className="horizontal-line line3" />
                <div className="vertical-line" />
                <h4>MID-SEGMENT</h4>
                <Image src = {logo4} alt = "CountryInn" className=" brand-logos" />
                <h5>OPERATIONAL</h5>
                <p className='vertical-line-p'>Country Inn Nature Resort, Bhimtal</p>
                <p className='vertical-line-p'>Country Inn Tarika Riverside Resort, Jim Corbett</p>
                {/* <p>Country Inn Resort, Jim Corbett</p> */}
                <p className='vertical-line-p'>Country Inn Hall of Heritage, Amritsar</p>
                <p className='vertical-line-p'>Country Inn Tarika Goa Resort, Varca Beach</p>
                <p className='vertical-line-p'>Country Inn, Vrindavan</p>
                <p className='vertical-line-p'>Country Inn Maple Resort, Chail</p>
                <p className='vertical-line-p'>Country Inn Premier Pacific Resort, Mussoorie</p>
                <p className='vertical-line-p'>Country Inn Premier – The Prominence, Dehradun</p>
                <br />
                <h5 className="upcoming">UPCOMING</h5>
                <p className='vertical-line-p'>Country Inn Hotel, Raipur</p>
                <p className='vertical-line-p'>Country Inn Resort, Patkot, Jim Corbett</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery-footer">
            <div class="container">
                <div class="row">
                    <div class="section-title text-center">
                        <p className='our-story'>OUR STORY</p>
                    </div>
                    <div class="container">
                        <div class="row align-items-center ">
                            <div class="col-md-4 pb-5 pb-md-0">
                              <Image src = {image1} alt = "Sadhana Rai" className='img-fluid'/>
                                {/* <img src="assets/images/hotel-development/sadhna_rai.jpg" alt="Sadhana Rai" class="img-fluid"> */}
                            </div>
                            <div class="col-md-8">
                                <p className = "our-story-p">Espire Hospitality Group was founded by Late Mrs. Sadhana Rai over 25 years back, with a vision to craft thoughtful experiences for our guests. Over the years we have endeavoured to provide our guests with friendly experiences and have redefined family holidays to a vast majority of our privileged guests over the years. Creating magical celebrations and extraordinary events is our passion. Our core values are based on our Founder Chairman's belief in providing heartfelt hospitality to our guests and taking exceptional care of our colleagues. </p>
                                <p className = "our-story-p">We plan to open 20 hotels and resorts in next 2 to 3 years.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="grow-with-us">
            <div class="container">
                <div class="row">
                    <div class="section-title text-center">
                        <p className='our-story'>GROW WITH US</p>
                    </div>
                    <div class="container">
                        <div class="row align-items-center ">
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <p class="m-0 our-story-h4"><strong>SUSHIL AMLANI</strong></p>
                                <p class="m-0 our-story-p">Head of Business Development</p>
                                <p class="m-0 our-story-p">Sushil.amlani@espire.in | +91 973 955 4433</p>
                            </div>
                            <div class="col-md-4 pt-5 pt-md-0">
                              <Image src = {image2} alt = "Sadhana Rai" className='img-fluid'/>
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      <Footer />
    </div>
  )
}

export default hotel_developement

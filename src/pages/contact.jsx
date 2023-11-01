import React from 'react'
import Navbar from '@/components/Navbar'
import banner_image from '@/assets/hotel-developement-banner.jpg'
import Footer from '@/components/Footer'
import Contact_us_card from '@/components/Contact_us_card'

function contact_us() {
  return (
    <>
      <Navbar></Navbar>
      <div style={{ "backgroundImage": `url(${banner_image.src})` }} className='hero-banner' />
      <div className=" text-center">
        <h3 className="my-5 contact-us-heading pt-5">REACH OUR RESORTS</h3>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
                <Contact_us_card about={<fragment>Country Inn Hall of Heritage, Amritsar:  <br /> Circular Road, Inside Hall Gate, <br />
                Amritsar - 143001 <br />  Phone: +91 987 883 0559 </fragment>} />
            </div>
            <div className="col-md-4">
                <Contact_us_card about={<fragment>Country Inn Tarika Riverside Resort, Jim Corbett: <br />Ladwa Chaur, Dhikuli,  Ramnagar, <br />Uttarakhand - 244715 <br /> Phone: +91 952 086 6831</fragment>} border= "1px solid #98652d"/>
            </div>
            <div className="col-md-4">
                <Contact_us_card about={<fragment>Country Inn Resort, Jim Corbett: <br />Zero Garjia, P.O. Dhikuli, Nainital <br/> Ramnagar, Uttarakhand - 244715 <br /> Phone: +91 745 485 3286</fragment>} border= "1px solid #98652d"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
                <Contact_us_card about={<fragment>Country Inn Hall of Heritage, Amritsar: <br />Circular Road, Inside Hall Gate,<br/> Amritsar - 143001 <br /> Phone: +91 987 883 0559</fragment>} />
            </div>
            <div className="col-md-4">
                <Contact_us_card about={<fragment>Country Inn Tarika Goa, Varca Beach: <br />Pedda Uttordoxi,Varca, Salcette,<br/>South Goa - 403721<br /> Phone: +91 832 2996144, +91 82394 33385</fragment>} border= "1px solid #98652d"/>
            </div>
            <div className="col-md-4">
                <Contact_us_card about={<fragment>Country Inn Premier – The Prominence, Dehradun: <br />Near Deer Park. Mussoorie Road, Dehradun, <br/>Uttrakhand – 248001 <br /> Phone: +91 13561 70666</fragment>} border= "1px solid #98652d"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
                <Contact_us_card about={<fragment>Country Inn Resort, Vrindavan: <br />Omaxe Eternity, Vrindavan, <br/> Uttar Pradesh – 281121<br /> Phone: +91 886 070 7273</fragment>} />
            </div>
            <div className="col-md-4">
                <Contact_us_card about={<fragment>Country Inn Maple Resort, Chail: <br />Dubloo Road, Dunu,<br/>Himachal Pradesh - 173217<br /> <br /> </fragment>} border= "1px solid #98652d"/>
            </div>
            <div className="col-md-4">
                <Contact_us_card about={<fragment>Country Inn Premier Pacific Resort, Mussoorie: <br /> Camel’s Back Road, The Mall Road, Mussoorie,<br/>Uttrakhand - 248179<br />  Phone: +91 86508 88070, +91 86508 88071</fragment>} border= "1px solid #98652d"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-5 pb-5">
              <p className='text-center contact-p'>
                <strong className='contact-mail-heading'>For hotel and resort development queries:</strong>
                <br />
                 write to sushil.amlani@espire.in
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default contact_us

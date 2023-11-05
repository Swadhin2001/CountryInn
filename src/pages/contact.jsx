import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import banner_image from '@/assets/hotel-developement-banner.jpg'
import Footer from '@/components/Footer'
import Contact_us_card from '@/components/Contact_us_card'

function contact_us() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar></Navbar>
      <div style={{ "backgroundImage": `url(${banner_image.src})` }} className='hero-banner' />
      <div className=" text-center">
        <h3 className="my-5 contact-us-heading pt-5">REACH OUR RESORTS</h3>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <Contact_us_card about={<fragment>Country Inn Nature Resort, Bhimtal: <br />Bhowali - Kutani Road, Mehragaon, Bhimtal, <br /> Uttarakhand - 263136 <br /> Phone: +91 826 607 1968 <br /> </fragment>} map="https://goo.gl/maps/L3Rv8XT3kVNr86bn8" fb="https://www.facebook.com/CountryInnNatureResortBhimtal" insta="https://www.instagram.com/countryinnnatureresortbhimtal/" />
            </div>
            <div className="col-md-4">
              <Contact_us_card about={<fragment>Country Inn Tarika Riverside Resort, Jim Corbett: <br />Ladwa Chaur, Dhikuli,  Ramnagar, <br />Uttarakhand - 244715 <br /> Phone: +91 952 086 6831</fragment>} border="1px solid #98652d" map="https://goo.gl/maps/DZHkBfp1ZLSZFuqn6" fb="https://www.facebook.com/Countryinntarikariversidejimcorbett" insta="https://www.instagram.com/countryinntarikajimcorbett/" />
            </div>
            <div className="col-md-4">
              <Contact_us_card about={<fragment>Country Inn Resort, Jim Corbett: <br />Zero Garjia, P.O. Dhikuli, Nainital <br /> Ramnagar, Uttarakhand - 244715 <br /> Phone: +91 745 485 3286</fragment>} border="1px solid #98652d" map="https://goo.gl/maps/XripnKc3rHfTYqvt5" fb="https://www.facebook.com/CountryInnResorts" insta="https://www.instagram.com/countryinn_resorts/" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Contact_us_card about={<fragment>Country Inn Hall of Heritage, Amritsar: <br />Circular Road, Inside Hall Gate,<br /> Amritsar - 143001 <br /> Phone: +91 987 883 0559</fragment>} map="https://goo.gl/maps/AuVVDw5WXQWSkB9KA" fb="https://www.facebook.com/countryinnhallofheritageamritsar" insta="https://www.instagram.com/countryinn_hallofheritage/" />
            </div>
            <div className="col-md-4">
              <Contact_us_card about={<fragment>Country Inn Tarika Goa, Varca Beach: <br />Pedda Uttordoxi,Varca, Salcette,<br />South Goa - 403721<br /> Phone: +91 832 2996144, +91 82394 33385</fragment>} border="1px solid #98652d" map="https://goo.gl/maps/h4toyQ8dcibDi2XX7" fb="https://www.facebook.com/profile.php?id=100088496560413" insta="https://www.instagram.com/countryinn_goa_varcabeach/" />
            </div>
            <div className="col-md-4">
              <Contact_us_card about={<fragment>Country Inn Premier – The Prominence, Dehradun: <br />Near Deer Park. Mussoorie Road, Dehradun, <br />Uttrakhand – 248001 <br /> Phone: +91 13561 70666</fragment>} border="1px solid #98652d" map="https://goo.gl/maps/5Kv3xf8Jz6CZm5Eu8" fb="https://www.facebook.com/countryinnpremierdehradun" insta="https://www.instagram.com/countryinnpremier_dehradun/" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Contact_us_card about={<fragment>Country Inn Resort, Vrindavan: <br />Omaxe Eternity, Vrindavan, <br /> Uttar Pradesh – 281121<br /> Phone: +91 886 070 7273</fragment>} map="https://goo.gl/maps/93DUkNUiTK9azpun8" fb="/" insta="/" />
            </div>
            <div className="col-md-4">
              <Contact_us_card about={<fragment>Country Inn Maple Resort, Chail: <br />Dubloo Road, Dunu,<br />Himachal Pradesh - 173217<br /> <br /> </fragment>} border="1px solid #98652d" map="https://goo.gl/maps/2BHbkxiw8bade5378" fb="https://www.facebook.com/CountryInnMapleResortChail" insta="https://www.instagram.com/countryinnmapleresortchail/" />
            </div>
            <div className="col-md-4">
              <Contact_us_card about={<fragment>Country Inn Premier Pacific Resort, Mussoorie: <br /> Camel’s Back Road, The Mall Road, Mussoorie,<br />Uttrakhand - 248179<br />  Phone: +91 86508 88070, +91 86508 88071</fragment>} border="1px solid #98652d" map="https://goo.gl/maps/BxAnRNAGqkes7U4G7" fb="https://www.facebook.com/Countryinnpremiermussoorie" insta="https://www.instagram.com/countryinnpremiermussoorie/" />
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

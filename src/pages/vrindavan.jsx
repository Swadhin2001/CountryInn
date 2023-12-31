import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head'
import { motion } from 'framer'
import Vrindavan_slider from '@/components/Slick_slider'
import banner_image from '@/assets/vrindavan-hero-5.jpg'
import image1 from '@/assets/lounge.jpg'
import image2 from '@/assets/panner.jpg'
import Image_left from '@/components/Image_left'
import Image_right from '@/components/Image_right'
import Footer from '@/components/Footer'
import Meeting_and_events_card from '@/components/Meeting_and_events_card'
import card_image1 from '@/assets/vrindavan-ballroom.jpg'
import card_image2 from '@/assets/vrindavan-lawn.jpg'
import slider_image1 from '@/assets/lawn-VRINDAVAN.jpg'
import slider_image2 from '@/assets/COUNTRYINN-1.jpg'
import slider_image3 from '@/assets/MadhubanRooms.jpg'
import slider_image4 from '@/assets/KeshavDhamRooms-1.jpg'
import slider_image5 from '@/assets/KeshavDhamRooms.jpg'
import slider_image6 from '@/assets/NidhivanRooms.jpg'
import slider_image7 from '@/assets/MadhubanRooms.jpg'
import slider_image8 from '@/assets/KeshavDhamRooms.jpg'
import slider_image9 from '@/assets/NidhivanRooms.jpg'
import slider_image10 from '@/assets/MadhubanRooms.jpg'
import slider_image11 from '@/assets/vrindavan-5.jpg'
import slider_image12 from '@/assets/vrindavan-1.jpg'
import slider_image13 from '@/assets/vrindavan-4.jpg'
import slider_image14 from '@/assets/fettucine-polo-funghi-with-vegetable.jpg'
import slider_image15 from '@/assets/letsdine7.jpg'
import Slider_1 from '@/components/Gallery'
import Slider_3 from '@/components/Slider_3'

function vrindavan() {
  return (
    <>
      <Head>
        <title>COUNTRY INN RESORT, VRINDAVAN</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar opacity= "0.6" ></Navbar>
      <Herosection banner_heading= " " backgroundPosition = "bottom center" image= {banner_image} heading = "COUNTRY INN RESORT, VRINDAVAN" about = "In the sacred city of Vrindavan, at a 3-hour drive from New Delhi, Country Inn Resort, Vrindavan is located close to the key temples and tourist attractions. The resort features modern rooms, a multi-cuisine all-day dining restaurant, and an Indian specialty restaurant. It is your perfect base to explore the rich culture of the sacred city."/>

      <Slider_3 heading = "STAY & REJUVENATE" image1 ={slider_image6}
      heading1 ="Nidhivan Rooms" 
      about1 ='Located on the ground floor, Nidhivan Rooms feature modern interiors, wooden flooring, a king-size bed, and all the essential amenities that you require for a good night’s sleep.<br> <br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start px-3"><img src="/Occ.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Upto 2 guests</span></li></ul>' 
      image2 ={slider_image7} heading2= "Madhuban Rooms" 
      about2 ='Our tastefully designed Madhuban Rooms offer you an escape into a harmonious retreat. Located on the first and second floor, these garden-view rooms feature modern amenities and are ideal for your next weekend getaway.<br> <br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start px-3"><img src="/Occ.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Upto 4 guests</span></li></ul>' 
      image3 ={slider_image8} heading3 ="Keshav Dham Rooms" 
      about3= 'Our thoughtfully designed Keshav Dham Rooms are the perfect choice for families, friends or small groups looking to stay together. These spacious rooms overlooking the manicured garden feature three bedrooms, a living area, and a dining area, and all essential amenities to make your stay comfortable. <br> <br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start px-3"><img src="/Occ.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Upto 6 guests</span></li></ul>' 
      image4 ={slider_image9} heading4 = "Nidhivan Rooms" 
      about4 ='Located on the ground floor, Nidhivan Rooms feature modern interiors, wooden flooring, a king-size bed, and all the essential amenities that you require for a good night’s sleep.<br> <br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start px-3"><img src="/Occ.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Upto 2 guests</span></li></ul>' 
      image5 ={slider_image10} heading5 = "Madhuban Rooms" 
      about5 = 'Our tastefully designed Madhuban Rooms offer you an escape into a harmonious retreat. Located on the first and second floor, these garden-view rooms feature modern amenities and are ideal for your next weekend getaway.<br> <br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start px-3"><img src="/Occ.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Upto 4 guests</span></li></ul>'/>

      <div className='hero-background d-flex justify-content-center' style={{"height" : "216px"}}>
        <div className="container">
          <h2 className='text-center mid-section-heading mb-3 pt-5'>LET'S DINE</h2>
          <p className='text-center mid-section-about'>The food and beverage offerings at Country Inn Resort, Vrindavan offers a multisensory experience, through thoughtfully sourced ingredients, locally inspired cuisine, inviting interiors, and heartfelt hospitality.</p>
        </div>
      </div>

      <Image_left image = {image1} heading= "THE LOUNGE" about = {<fragment>
        <div>
          Our all-day dining multi-cuisine restaurant offers an elaborate menu featuring dishes from Indian fare to Asian, Italian, European and more. Warm and welcoming ambience of The Lounge adds up to make your dining experience a perfect one.
        </div>
        <br />
        <p>
          <strong>Cuisine</strong>
          - Multi-Cuisine
        </p>
      </fragment>} />

      <Image_right image = {image2} heading= "MOTI MAHAL" about = {<fragment>
        <div>
          Delve into the authentic flavors of Indian cuisine at this well-renowned pure vegetarian restaurant. Located on the first floor, the specialty restaurant serves a wide array of authentic Indian delicacies in vibrant settings.
        </div>
        <br />
        <p>
          <strong>Cuisine</strong>
          - Indian
        </p>
      </fragment>} />

      <Vrindavan_slider image1 = {slider_image11} image2 = {slider_image12} image3 = {slider_image13} image4 = {slider_image14} image5 = {slider_image15}/>

      <div className='hero-background d-flex justify-content-center' style={{"height" : "271px"}}>
        <div className="container">
          <h2 className='text-center mid-section-heading mb-3 pt-5'>CLASSIC EXPERIENCE</h2>
          <p className='text-center vrindavan-mid-p'>EXPERIENCE VRINDAVAN</p>
          <p className='text-center mid-section-about'>Vrindavan also known as Braj Bhoomi is home to many temples. It is said that the revered Hindu Lord Krishna spent most of his childhood days here. Our team will ensure that your trip to Vrindavan is not only comfortable but also experiential. Whether you plan to explore the famous temples or head out to explore other leisure destinations of the holy city, our team will guide you to make the most of your stay in Vrindavan.</p>
        </div>
      </div>

      {/* Meeting and Events Section */}
      <div className="my-5">
        <h4 className="text-center mb-4 meeting-events-heading">MEETINGS & EVENTS</h4>
        <motion.div initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-4">
                <Meeting_and_events_card image = {card_image1} card_heading ="BALLROOM" card_about ="Our 3,496 sq.ft. ballroom offering state-of-the-art facilities is an ideal venue to host your next event. Whether you are planning a business conference, an intimate wedding or a small social gathering, our skilled team will ensure that your event is successful and memorable."/>
              </div>
              <div className="col-md-4">
                <Meeting_and_events_card image = {card_image2} card_heading ="LAWN" card_about ="The lush green lawn is spaciously spread across an area of 44,100 sq. ft. and is a versatile space for multiple events from wedding ceremonies to conferences, welcome receptions, or product launches."/>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Slider_1 heading = "GALLERY" image1 = {slider_image1} about1 = "COUNTRY INN RESORT, VRINDAVAN" image2 = {slider_image2} about2 = "NIDHIVAN ROOMS" image3 = {slider_image3} about3 = "COUNTRY INN RESORT, VRINDAVAN" image4 = {slider_image4} about4 = "MADHUBAN ROOMS" image5 = {slider_image5} about5 = "KESHAB DHAM ROOMS"/>
      {/* <Slider_2></Slider_2> */}
      <Footer/>
    </>
  )
}

export default vrindavan

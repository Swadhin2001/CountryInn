import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React from 'react'
import { motion } from 'framer'
import logo_image from '@/assets/tarika-goa-logo.png'
import Image from 'next/image'
import banner_image from '@/assets/goa-hero-banner.jpg'
import Footer from '@/components/Footer'
import Image_left from '@/components/Image_left'
import Image_right from '@/components/Image_right'
import Slider_2 from '@/components/Slick_slider'
import Meeting_and_events_card from '@/components/Meeting_and_events_card'
import Gallery from '@/components/Gallery'
import image1 from '@/assets/Restaurant-goa1.jpg'
import image2 from '@/assets/Restaurant-goa5.jpg'
import image3 from '@/assets/poolside7.jpg'
import image4 from '@/assets/poolside-interior.jpg'
import image5 from '@/assets/Restaurant-goa2.jpg'
import image6 from '@/assets/Restaurant-goa3.jpg'
import image7 from '@/assets/Restaurant-goa4.jpg'
import card_image1 from '@/assets/special-event-goa.jpg'
import card_image2 from '@/assets/CBTP-Goa.jpg'
import card_image3 from '@/assets/TheBallRoom-Goa.jpg'
import slider_image1 from '@/assets/Goa-Gallery-New-1.jpg'
import slider_image2 from '@/assets/Goa-Gallery-New-2.jpg'
import slider_image3 from '@/assets/Goa-Gallery-New-3.jpg'
import slider_image4 from '@/assets/Goa-Gallery-New-4.jpg'
import slider_image5 from '@/assets/Goa-Gallery-New-5.jpg'

function tarika_goa() {
  return (
    <>
      <Navbar opacity ="0.6"/>
      <Herosection image = {banner_image} banner_heading = "Country Inn Tarika Goa, Varca Beach" text_color ="text-white" about = {<fragment>
        <div className='section-title text-center mb-2'>
          <Image src ={logo_image} alt="" className='tarika-goa-header-image'/>
        </div>
        <div>
          Located at a leisurely walk from the pristine white sand Varca Beach, Country Inn Tarika, Goa, Varca Beach offers a tranquil escape from the hustle and bustle of city life. This quaint resort offers 48 well-designed rooms, food and beverage offerings, a pillar-less ballroom for social and corporate gatherings and a stunning outdoor swimming pool to unwind and rejuvenate.
        </div>
      </fragment>}/>

      <div className='hero-background' style={{"height" : "167px"}}>
        <h2 className='text-center mid-section-heading py-5 my-5'>LET'S DINE</h2>        
      </div>
      <Image_left image = {image1} heading="Mélange" about = "With a warm welcoming ambiance, this intimate space is the perfect spot to enjoy international flavors and local favorites. This is your one-stop destination to feast on a flavorful breakfast made using the freshest ingredients."/>
      <Image_right image = {image2} heading = "VARCA HIGH – POOLSIDE BAR" about = "Unwind by our poolside bar serving your favorite drinks and small plates. Simply a perfect venue for those lazy mornings and relaxed evenings."/>
      <Slider_2 image1 ={image3} image2 ={image4} image3 ={image5} image4 ={image6} image5 ={image7}/>

      {/* Meeting and Events Section */}
      <div className="my-5">
        <h4 className="text-center mb-4 meeting-events-heading">MEETINGS & EVENTS</h4>
        <motion.div initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-4">
                <Meeting_and_events_card image = {card_image1} card_heading ="SPECIAL EVENTS" card_about ="Located at walking distance from the Varca Beach, Country Inn Tarika Goa, Varca beach is an ideal location for intimate meetings and events. Our skilled and experienced team will ensure that your event is seamlessly executed exactly as you'd like."/>
              </div>
              <div className="col-md-4">
                <Meeting_and_events_card image = {card_image2} card_heading ="CELEBRATIONS BY THE POOL" card_about ="Let your celebrations take centerstage as you enjoy the limelight, while close friends and family join in the joy of celebration. Be it a birthday, anniversary or any other intimate celebration, this exclusive venue is surely an ideal choice to create lasting memories."/>
              </div>
              <div className="col-md-4">
                <Meeting_and_events_card image = {card_image3} card_heading ="THE BALLROOM" card_about ="Our 1700 sq. ft. ballroom is minimalistic yet elegant and forms an ideal meeting venue close to the beach. Our team will ensure a chic setup, and state-of-the-art facilities and will extend every support to ensure your event is a success."/>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Gallery heading = "GALLERY" image1 ={slider_image1} about1 ="Breakfast in Private Balcony" image2 ={slider_image2} about2 ="Breakfast on Bed" image3 ={slider_image3} about3= "Couple walk on the beach" image4 ={slider_image4} about4 ="Swimming Pool" image5 ={slider_image5} about5 ="Facade"/>
      <Footer/>
    </>
  )
}

export default tarika_goa
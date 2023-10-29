import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React from 'react'
import { motion } from 'framer'
import Link from 'next/link'
import Slider_2 from '@/components/Slider_2'
import banner_image from '@/assets/lobby.jpg'
import image1 from '@/assets/roof-top-dining.jpg'
import image2 from '@/assets/experience-amritsar.jpg'
import Image_left from '@/components/Image_left'
import Image_right from '@/components/Image_right'
import Footer from '@/components/Footer'
import Meeting_and_events_card from '@/components/Meeting_and_events_card'
import card_image1 from '@/assets/kitty-hall.jpg'
import card_image2 from '@/assets/celebrations.jpg'
import card_image3 from '@/assets/meetings.jpg'
import slider_image1 from '@/assets/lobby.jpg'
import slider_image2 from '@/assets/reception.jpg'
import slider_image3 from '@/assets/kitty-hall.jpg'
import slider_image4 from '@/assets/heritage-suite-room.jpg'
import slider_image5 from '@/assets/deluxe-room(1).jpg'
import slider_image6 from '@/assets/heritage-suite.jpg'
import slider_image7 from '@/assets/luxury-room.jpg'
import slider_image8 from '@/assets/deluxe-room.jpg'
import slider_image9 from '@/assets/standard-room.jpg'
import slider_image10 from '@/assets/heritage-suite-room.jpg'
import slider_image11 from '@/assets/10.jpg'
import slider_image12 from '@/assets/1.jpg'
import slider_image13 from '@/assets/3.jpg'
import slider_image14 from '@/assets/4.jpg'
import slider_image15 from '@/assets/5.jpg'
import Slider_1 from '@/components/Slider_1'
import Slider_3 from '@/components/Slider_3'

function amritsar() {
  return (
    <>
      <Navbar opacity = "0.6"></Navbar>
      <Herosection banner_heading= "COUNTRY INN HALL OF HERITAGE, AMRITSAR" text_color="text-white" image= {banner_image} heading = "COUNTRY INN HALL OF HERITAGE, AMRITSAR" about = "Located only 800 meters away from the holy shrine, the stunning Golden Temple, Country Inn Hall of Heritage, Amritsar welcomes you to the city draped in rich history, culture, and traditions. The moment you step into the lively by-lanes of Amritsar, you're embraced by the bustling streets, aroma of the local cuisine, and the strain of devotional music. In addition to spiritual enrichment, witness the fervour of the Wagah border, located at a short drive from the hotel. After an unforgettable day of sightseeing, satiate your desire for a wholesome meal, with flavourful cuisine at our multi-cuisine restaurant - Heritage."/>

      <Slider_3 heading = "STAY & REJUVENATE" image1 ={slider_image6} heading1 ="HERITAGE SUITE" about1 ="Elegantly designed with wooden floor and modern interiors, the Heritage Suite offers a spacious accommodation with a separate living area.  It is your perfect abode to unwind and relax after a long day of exploration in the city of Amritsar" image2 ={slider_image7} heading2="DELUXE ROOM" about2 ="Offering a sense of space, our immaculately appointed Deluxe Rooms feature a king-size bed, a built-in closet, and three fixture bathroom to offer enhanced comfort" image3 ={slider_image8} heading3 = "SUPERIOR ROOM" about3 ="Unwind and stay at ease in our Superior Rooms. With modern interiors and a private workstation, these well-appointed rooms are perfect for a relaxing and fulfilling stay" image4 ={slider_image9} heading4 ="STANDARD ROOM" about4 ="With our Standard Rooms, you will get comforting interiors and all the basic amenities that you require for a good night's sleep" image5 ={slider_image10} heading5 ="DELUXE ROOM" about5 ="Offering a sense of space, our immaculately appointed Deluxe Rooms feature a king-size bed, a built-in closet, and three fixture bathroom to offer enhanced comfort"></Slider_3>

      <div className='hero-background' style={{"height" : "245px"}}>
        <h2 className='text-center  mb-3 pt-5'>LET'S DINE - HERITAGE</h2>
        <p className='text-center px-5 mx-5'>Rich cultural influence, unique regional flavors, and diversity are at the heart of our all-day diner, Heritage. Guests can indulge in a medley of flavors - from local favourites like Amritsari Kulcha, and Mutton Rogan Josh to a selection of Continental, Oriental and Italian delicacies. The fare at the Heritage, promises to delight every palate from breakfast through dinner.</p>
      </div>

      <Slider_2 image1 = {slider_image11} image2 = {slider_image12} image3 = {slider_image13} image4 = {slider_image14} image5 = {slider_image15}/>

      <div className='hero-background' style={{"height" : "220px"}}>
        <h2 className='text-center  mb-3 pt-5'>CLASSIC EXPERIENCES</h2>
        <p className='text-center px-5 mx-5'>Amritsar is a beautiful amalgamation of folklore, culture, history, and food. Whether you indulge in the spiritual journey at Golden Temple, witness the emotions at Wagah border or relish the delectable cuisine, you will experience true essence of the rich history and culture that this city has to offer.</p>
      </div>

      <Image_left image = {image1} heading= "ROOFTOP DINING" about = "Indulge in a romantic dinner with your loved one at Country Inn Hall of Heritage, Amritsar. The confluence of a romantic setting under the stars, incredible food prepared by our expert chefs, and our warm service is what makes this dining experience a treasured memory." />

      <Image_right image = {image2} heading= "EXPERIENCE AMRITSAR" about = "Our team will ensure that your trip to Amritsar is not only comfortable but also experiential. Whether you plan to indulge in the gourmet delights at the hotel or head out to explore this vibrant city, our team will guide you to make the most of your stay in Amritsar." />

      {/* Meeting and Events Section */}
      <div className="my-5">
        <h4 className="text-center mb-4">MEETINGS & EVENTS</h4>
        <motion.div initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Meeting_and_events_card image = {card_image1} card_heading ="THE KITTY HALL" card_about ={<fragment>
                  <div>With fresh interiors and contemporary décor, our intimate gathering venue Kitty Hall offers personalized services to host memorable celebrations and pleasant meetings. Our highly skilled team ensures that every detail is executed to perfection.</div>
                  <div className="text-end m-0 p-0">
                  <Link href="/" className="text-end btn-ind">
                    <span>⧁</span>
                    <span>GET QUOTE</span>
                  </Link>
                </div>
                </fragment>}/>
              </div>
              <div className="col-md-4">
                <Meeting_and_events_card image = {card_image2} card_heading ="INTIMATE CELEBRATIONS" card_about ={<fragment>
                  <div>Whether you're planning a birthday event, anniversary party, or an intimate gathering, we have the perfect venue for your celebrations. Our carefully curated menus and warm service will leave your guests delighted.</div>
                  <div className="text-end m-0 p-0">
                  <Link href="/" className="text-end btn-ind">
                    <span>⧁</span>
                    <span>GET QUOTE</span>
                  </Link>
                </div>
                </fragment>}/>
              </div>
              <div className="col-md-4">
                <Meeting_and_events_card image = {card_image3} card_heading ="MEETINGS" card_about ={<fragment>
                  <div>Small corporate get-togethers and business meetings find a new ideal venue in Amritsar. With a variety of packages to suit your requirement and a dedicated team, we will ensure that we meet all your business needs to deliver an extraordinary experience.</div>
                  <div className="text-end m-0 p-0">
                  <Link href="/" className="text-end btn-ind">
                    <span>⧁</span>
                    <span>GET QUOTE</span>
                  </Link>
                </div>
                </fragment>}/>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Slider_1 heading = "GALLERY" image1 = {slider_image1} image2 = {slider_image2} image3 = {slider_image3} image4 = {slider_image4} image5 = {slider_image5}/>
      <Footer/>
    </>
  )
}

export default amritsar

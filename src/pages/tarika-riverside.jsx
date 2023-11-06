import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head'
import { motion } from 'framer'
import Image from 'next/image'
import Link from 'next/link'
import logo_image from '@/assets/travellers-choice.png'
import banner_image from '@/assets/get-away1.jpg'
import image1 from '@/assets/junglesetup2.jpg'
import image2 from '@/assets/experiencediningtarika.jpg'
import image3 from '@/assets/gallerypage1.jpg'
import Image_left from '@/components/Image_left'
import Image_right from '@/components/Image_right'
import Footer from '@/components/Footer'
import Meeting_and_events_card from '@/components/Meeting_and_events_card'
import card_image1 from '@/assets/tarika-ballroom.jpg'
import card_image2 from '@/assets/tarika-lawn.jpg'
import card_image3 from '@/assets/tarika-boardroom.jpg'
import slider_image1 from '@/assets/tarika1.jpg'
import slider_image2 from '@/assets/tarika2.jpg'
import slider_image3 from '@/assets/tarika3.jpg'
import slider_image4 from '@/assets/tarika4.jpg'
import slider_image5 from '@/assets/tarika5.jpg'
import slider_image6 from '@/assets/tarika-s7.jpg'
import slider_image7 from '@/assets/tarika101.jpg'
import slider_image8 from '@/assets/tarika102.jpg'
import slider_image9 from '@/assets/tarika103.jpg'
import slider_image10 from '@/assets/tarika-s4.jpg'
import slider_image11 from '@/assets/letsdine101.jpg'
import slider_image12 from '@/assets/letsdine5.jpg'
import slider_image13 from '@/assets/letsdine10.jpg'
import slider_image14 from '@/assets/letsdine23.jpg'
import slider_image15 from '@/assets/letsdine24.jpg'
import slider_image16 from '@/assets/letsdine26.jpg'
import slider_image17 from '@/assets/letsdine25.jpg'
import slider_image18 from '@/assets/letsdine7.jpg'
import slider_image19 from '@/assets/letsdine4.jpg'
import slider_image20 from '@/assets/letsdine2.jpg'
import Slider_1 from '@/components/Gallery'
import Slider_2 from '@/components/Slider_2'
import Slider_3 from '@/components/Slider_3'

function bhimtal() {
  return (
    <>
      <Head>
        <title>COUNTRY INN TARIKA RIVERSIDE RESORT,JIM CORBETT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar opacity = "0.6"></Navbar>
      <Herosection banner_heading= {<fragment>COUNTRY INN TARIKA RIVERSIDE RESORT, <br /> JIM CORBETT</fragment>}image= {banner_image} text_color="text-white" heading = "COUNTRY INN TARIKA RIVERSIDE RESORT, JIM CORBETT" about = {<fragment>
        <div>
        Set in the natural surroundings of the forest, only 250 metres away from the pristine Kosi River and Himalayas framing the backdrop, Country Inn Tarika Riverside Resort, Jim Corbett is an ideal base to explore the rich diversity of Jim Corbett. With inspirational architecture and landscaped gardens, the resort features an outdoor swimming pool, game arcade, a unique bonfire area and two dining outlets including ‘The Courtyard’, a multi-cuisine restaurant and ‘The Kebab Factory’, an Indian specialty restaurant to relish an unlimited feast of some celebrated kebabs and curries of India.
        </div>
        <br />
        <Link href ="https://www.tripadvisor.com/Hotel_Review-g679051-d736046-Reviews-Country_Inn_Nature_Resort_Bhimtal-Bhimtal_Nainital_District_Uttarakhand.html" target='_blank'>
          <Image src= {logo_image} alt=""></Image>
        </Link>
      </fragment>}/>

      <Slider_3 heading = "STAY & REJUVENATE" 
      image1 ={slider_image6} heading1 = "JIM'S COTTAGE" 
      about1 = 'For a relaxing and serene stay experience in a cottage setting, choose to stay at our selection of Jim’s Cottages. Adorned with the artistic cane furniture, Jim’s Cottages are an ideal choice for your leisurely stay.<br> <br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start"><img src="/Area.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> 155 Sq. ft to 330 Sq. ft.</span></li><li class="text-start px-3"><img src="/Occ.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Upto 2 guests</span></li><li class="text-start px-3"><img src="View.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Multiple Options </span></li></ul>' 
      image2 ={slider_image7} heading2 = "COTTAGE WITH PRIVATE GARDEN" 
      about2 ='These cottages with a private garden are an ideal setting for stress-free holidays. Whether lounging during the day or having a private dinner in the garden, this cottage is our guest’s favourite for its private sit-out area and spacious accommodation<br> <br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start"><img src="/Area.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> 370 Sq. ft.</span></li><li class="text-start px-3"><img src="/Occ.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Upto 2 guests</span></li><li class="text-start px-3"><img src="View.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Pool View </span></li></ul>' 
      image3 ={slider_image8}   heading3 ="COTTAGE WITH TERRACE" 
      about3 = 'The combination of style, space and unfiltered view of the pool from a private terrace make these cottages the most desirable accommodation for a restful stay in Jim Corbett<br> <br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start"><img src="/Area.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> 330 Sq. ft.</span></li><li class="text-start px-3"><img src="/Occ.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Upto 2 guests</span></li><li class="text-start px-3"><img src="View.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Pool View </span></li></ul>' 
      image4 ={slider_image9} heading4 = "COTTAGE WITH PLUNGE POOL" 
      about4 = 'After a day of exploration, all you need is to dip in a plunge pool and relax in your private space for hours. These cottages are beautifully furnished with cane furniture that adds a rustic yet comfortable touch to your stay<br> <br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start"><img src="/Area.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> 370 Sq. ft.</span></li><li class="text-start px-3"><img src="/Occ.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Upto 2 guests</span></li><li class="text-start px-3"><img src="View.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Pool View </span></li></ul>' 
      image5 ={slider_image10} heading5 = "POOL VIEW ROOM" about5 = 'Whether travelling on business or leisure you would want a room that offers plenty of style and comfort. In celebration of your trip, get into a pool of relaxation with a Pool View Room <br> <br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start"><img src="/Area.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> 280 Sq. ft.</span></li><li class="text-start px-3"><img src="/Occ.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Upto 2 guests</span></li><li class="text-start px-3"><img src="View.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> Pool View </span></li></ul>' ></Slider_3>

      <div className='hero-background d-flex justify-content-center' style={{"height" : "244px"}}>
        <div className="container">
          <h2 className='text-center mid-section-heading mb-3 pt-5'>THE KEBAB FACTORY</h2>
          <p className='text-center mid-section-about'>With animal face sculptures on the walls, welcoming ambience and warm lighting, the restaurant has floor to ceiling windows that offer views of the outdoor green pathway and the lawns. At The Kebab Factory, guests can relish an unlimited fare of some of the most scrumptious kebabs like Galuati and Shikampuri kebabs, along with Indian curries, biryanis, the best of seasonal vegetables and desserts.</p>
        </div>
      </div>

      <Slider_2 image1 = {slider_image11} image2 = {slider_image12} image3 = {slider_image13} image4 = {slider_image14} image5 = {slider_image15}/>

      <div className='hero-background d-flex justify-content-center' style={{"height" : "217px"}}>
        <div className="container">
          <h2 className='text-center mid-section-heading mb-3 pt-5'>THE COURTYARD</h2>
          <p className='text-center mid-section-about '>Bright and lively ‘The Courtyard’ is the perfect option for those looking for multi-cuisine options at any time of the day. The natural light entering from the roof, expansive menu offerings and comfortable seating arrangement makes it an ideal venue for laid back lunches or day time quick bites.</p>
        </div>
      </div>

      <Slider_2 image1 = {slider_image16} image2 = {slider_image17} image3 = {slider_image18} image4 = {slider_image19} image5 = {slider_image20}/>

      <div className='hero-background' style={{"height" : "255px"}}>
        <div className="container">
          <h2 className='text-center mid-section-heading mb-3 pt-5'>CLASSIC EXPERIENCES</h2>
          <p className='text-center mid-section-about'>What makes the resort different from others are the exclusive experiences that we have curated to make our guests’ stay engaging and adventurous. Taking a dip in the pool, rejuvenating with the peaceful spa treatment, bonding with friends and family over a game of billiards, velcro football or badminton, dining under the stars, indulging in long conversations over bonfire and grills, every experience at the resort has been set considering an ultimate retreat for our guests.</p>
        </div>
      </div>

      <Image_left image = {image1} heading= "THE JUNGLE WALKTHROUGH" about = "Swing into the jungle as soon as you reach Country Inn Tarika Riverside Resort, Jim Corbett. We welcome the little ones (and adults) by giving a jungle experience on-site. With playful lion and elephant waiting to welcome you, and picture-perfect jungle setting right at the entrance, you will forget the travel fatigue and indulge in creating photographic memories with your loved ones." />

      <Image_right image = {image2} heading= "EXPERIENTIAL DINING" about = "We can plan a candle light ‘Dine under the stars’ experience to surprise your partner at the outdoor lawn or at the private garden if you choose to stay in a Cottage with a Private Garden. A special meal curated by our expert chef, a setting so unique and live music will create magic worth remembering." />

      <Image_left image = {image3} heading= "THE TRADITIONAL BONFIRE" about = "What gives more joy than sipping drinks near the bonfire? After a long, leisurely walk by the Kosi river, our guests love to unwind at the bonfire area while the live guitarist adds a dash of the perfect soothing music to make the evenings complete and even more relaxing." />

      {/* Meeting and Events Section */}
      <div className="my-5">
        <h4 className="text-center mb-4 meeting-events-heading">MEETINGS & EVENTS</h4>
        <motion.div initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
      
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Meeting_and_events_card image = {card_image1} card_heading ="THE BALL ROOM" card_about ={<fragment>
                <div>Country Inn Tarika Riverside Resort, Jim Corbett is where elegance meets professional and warm service. The 2,200 sq. ft. Ballroom features elegant beige interiors that are perfect for a conference, event or a sophisticated social gathering with various on-site amenities and facilities.</div>
                <div className="text-end m-0 p-0">
                <Link href="/form" className="text-end btn-ind">
                  <span>⧁</span>
                  <span>GET QUOTE</span>
                </Link>
              </div>
              </fragment>}/>
            </div>
            <div className="col-md-4">
              <Meeting_and_events_card image = {card_image2} card_heading ="THE LAWNS" card_about ={<fragment>
                <div>
                The expansive 10,000 sq. ft. of lawn is an ideal venue for big celebrations and events. Beautifully adorned by long trees all around, The Lawn is the first choice of our guests planning their ultimate event in Jim Corbett. An elegant outdoor setup and expert support will ensure your event is a success.
                </div>
                <div className="text-end m-0 p-0">
                <Link href="/form" className="text-end btn-ind">
                  <span>⧁</span>
                  <span>GET QUOTE</span>
                </Link>
              </div>
              </fragment>}/>
            </div>
            <div className="col-md-4">
              <Meeting_and_events_card image = {card_image3} card_heading ="EXECUTIVE BOARDROOM" card_about ={<fragment>
                <div>
                For small, intimate meetings and discussions, we have a comfortable Executive Boardroom that is equipped with advanced audio visual systems and technical support so you can complete your critical discussions with complete ease. Our expert team will enhance every element of your event.
                </div><div className="text-end m-0 p-0">
                <Link href="/form" className="text-end btn-ind">
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
      <Slider_1 heading = "GALLERY" image1 = {slider_image1} about1 = "RESORT EXTERIOR" image2 = {slider_image2} image3 = {slider_image3} about2 = "AERIAL VIEW OF THE RESORT" about3 = "SWIMMING POOL" image4 = {slider_image4} about4 = "COTTAGE WITH PRIVATE GARDEN" image5 = {slider_image5} about5 = "PRIVATE GARDEN"/>
      {/* <Slider_2></Slider_2> */}
      <Footer phno ="+91 886 070 7273" email ="reservations@countryinn.in"/>
    </>
  )
}

export default bhimtal

import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer'
import banner_image from '@/assets/bhimtal-banner.jpg'
import logo_image from '@/assets/travellers-choice.png'
import image1 from '@/assets/romanticdinnerbhimtal.jpg'
import image2 from '@/assets/DINE-BY-THE-POOL.jpg'
import image3 from '@/assets/picnicbhimtal.jpg'
import image4 from '@/assets/bhimtal-Adventure.jpg'
import Image_left from '@/components/Image_left'
import Image_right from '@/components/Image_right'
import Footer from '@/components/Footer'
import Meeting_and_events_card from '@/components/Meeting_and_events_card'
import card_image1 from '@/assets/mehfil-1-and-2.jpg'
import card_image2 from '@/assets/mehfil-2.jpg'
import card_image3 from '@/assets/lawns.jpg'
import slider_image1 from '@/assets/resort-exterior.jpg'
import slider_image2 from '@/assets/bhimtal2.jpg'
import slider_image3 from '@/assets/bhimtal3.jpg'
import slider_image4 from '@/assets/bhimtal4.jpg'
import slider_image5 from '@/assets/bhimtal5.jpg'
import slider_image6 from '@/assets/bhimtal-s3.jpg'
import slider_image7 from '@/assets/bhimtal-s1.jpg'
import slider_image8 from '@/assets/bhimtal-s4.jpg'
import slider_image9 from '@/assets/bhimtal-s2.jpg'
import slider_image10 from '@/assets/tarika101.jpg'
import slider_image11 from '@/assets/letsdine12.jpg'
import slider_image12 from '@/assets/letsdine1.jpg'
import slider_image13 from '@/assets/letsdine2.jpg'
import slider_image14 from '@/assets/letsdine3.jpg'
import slider_image15 from '@/assets/letsdine22.jpg'
import Slider_1 from '@/components/Gallery'
import Slider_2 from '@/components/Slider_2'
import Slider_3 from '@/components/Slider_3'

function bhimtal() {
  return (
    <>
      <Navbar opacity ="0.6"></Navbar>
      <Herosection banner_heading= "COUNTRY INN NATURE RESORT, BHIMTAL" text_color ="text-white" image= {banner_image} heading = "COUNTRY INN NATURE RESORT, BHIMTAL" about = {<fragment>
        <div>
        Spread across 13 acres of landscaped area covered by beautiful flora, with over 100 variety of trees and offering views of the scenic mountains, Country Inn Nature Resort, Bhimtal is a melting pot of sublime nature and earthen treasures. With tastefully designed cottages and suites, the resort features expansive landscaped gardens, an outdoor swimming pool, kids activity room, tennis & badminton court and a multi-cuisine all-day dining restaurant, Flames.
        </div>
        <br />
        <Link href ="https://www.tripadvisor.com/Hotel_Review-g679051-d736046-Reviews-Country_Inn_Nature_Resort_Bhimtal-Bhimtal_Nainital_District_Uttarakhand.html" target='_blank'>
          <Image src= {logo_image} alt=""></Image>
        </Link>
      </fragment>}/>

      <Slider_3 heading = "STAY & REJUVENATE" image1={slider_image6} 
      heading1 = "ONE BEDROOM COTTAGE"
      about1 = "For the mountain hideaways, there is nothing more special than staying in cottages that offer a more characterful and private experience. Featuring French windows, wooden flooring and modern amenities, these cottages are spacious, stylish, and an ideal family setting for your next weekend getaway"
        image2 = {slider_image7}
        heading2 = "TWO BEDROOM COTTAGE"
        about2 = "Boasting two bedrooms and a spacious living area, a stay in these cottages make your vacation even more inspiring. Relax in your cottage or spend hours sitting in the adjoining lawns offering expansive views of the valley to soak in the real essence of this unmatched destination"

         image3 ={slider_image8}
          heading3 = "DELUXE ROOM"
          about3 = "Here, you will find the peace and comfort you deserve, along with the charming  views of the mountains. With all the essential amenities, these rooms are the perfect choice for a small family, a couple or corporates looking for simple comfort in an exclusive location"
         image4 ={slider_image9}
          heading4 = "DELUXE SUITE"
          about4 = "The spacious and comfortable Deluxe Suites feature a separate living room where you can relax after a long day of exploration. Unwind with your loved ones while enjoying the breath-taking vistas of the beautiful mountains"
          image5 ={slider_image10}
          heading5 = "TWO BEDROOM COTTAGE"
        about5 = "Boasting two bedrooms and a spacious living area, a stay in these cottages make your vacation even more inspiring. Relax in your cottage or spend hours sitting in the adjoining lawns offering expansive views of the valley to soak in the real essence of this unmatched destination"
          />

      <div className='hero-background d-flex justify-content-center' style={{"height" : "245px"}}>
        <div className="container">
          <h2 className='text-center mid-section-heading mb-3 pt-5'>LET'S DINE</h2>
          <p className='text-center mid-section-about '>Delectable and exquisite. That’s how our guests like to describe their dining experience at Flames. The bold ambience of the restaurant with the walls adorned by some classic paintings and green views make for a perfect spot to enjoy a hearty meal in the hills. The restaurant opens up into an alfresco dining area that brings to life, the true delight of a relaxing holiday.</p>
        </div>
      </div>

      <Slider_2 image1 = {slider_image11} image2= {slider_image12} image_3 ={slider_image13} image4 ={slider_image14} image5 ={slider_image15}/>

      <div className='hero-background d-flex justify-content-center'  style={{"height" : "275px"}}>
        <div className="container">
          <h2 className='text-center mid-section-heading mb-3 pt-5'>CLASSIC EXPERIENCES</h2>
          <p className='text-center mid-section-about '>Bhimtal is a peaceful and calming destination that is most popular among travellers who prefer less crowded locations. Besides the pristine beauty of this place, people also visit Bhimtal for adventure, to experience scenic nature walks and treks. Many devotees flock to Bhimtal as it nestles some of the most famous temples that have great religious significance. At this peaceful hill station, go boating, water zorbing, and paragliding or simply enjoy the rays of glittering sun beaming over your face and watch the beautiful migratory birds. Our resort team has also curated some on-site experiences that our guests simply fall in love with.</p>
        </div>
      </div>

      <Image_left image = {image1} heading= "WEDDINGS" about = "Thinking about your dream wedding in a picture-perfect location? Our resorts provide spaces to suit every occassion in destinations that makes your celebrations unique. Our spacious outdoor venues surrounded with beautiful flora are just apt to celebrate under the stars, by the pool or amidst the hills. From destination weddings to milestone events, our expert team will help you plan every detail and ensure we accommodate all your needs to curate everlasting memories on your special occasions. Explore our banqueting facilities at Bhimtal and Jim Corbett." />

      <Image_right image = {image2} heading= "MEETINGS" about = "If you are looking for inspirational venues to club work and play, then you are simply at the right place. Our resorts feature spacious boardrooms for high intensity brainstorming sessions or business meetings as well as expansive lawns with natural surroundings that are fit for outdoor team activities and corporate social gatherings. Our team of dedicated professionals offer a seamless service from start to finish, to make every meeting a success. For your various business needs, our meeting venues are equipped with the latest technology, to ensure your conferences, events, and meeting arrangements are smooth and hassle-free." />

      <Image_left image = {image3} heading= "CELEBRATIONS" about = "Be it an intimate dinner, a social gathering or a business milestone, every celebration deserves a unique spot and exclusivity. With our multiple unique venues for small and big gatherings, Country Inn Hotels & Resorts are the perfect choice for every kind of celebration. A romantic dinner under the stars or a wedding reception amidst the magnificent mountains at Country Inn Resort, Bhimtal, social gathering with bonfire at Country Inn Tarika Riverside Resort, Jim Corbett, corporate gathering in the ballroom with wilderness all around you at Country Inn Resort, Jim Corbett – we have all this and much more for your next celebration." />

      <Image_right image= {image4} heading = "Experience Adventure and Thrill" about={<fragment>
        <div>
        The retreat offers its guests a range of leisure activities both on and off the premises, making it a destination worth revisiting time and again. The thoughtfully designed experiences and activities cater to individuals of all age groups, ensuring that there is something enjoyable for everyone.
        </div>
        <br />
        <ul>
          <li>Paragliding</li>
          <li>Kayaking</li>
          <li>Archery</li>
          <li>Pine cone painting</li>
          <li>Camping (In-house or outdoors)</li>
          <li>Zip Line</li>
          <li>Water Zorbing</li>
          <li>Cycling</li>
          <li>Cricket</li>
          <li>Badminton</li>
          <li>Hoverboard</li>
          <li>Swim walk</li>
          <li>Burma Bridge</li>
          <li>Commando Net</li>
          <li>Air Gun Shooting</li>
        </ul>
      </fragment>}/>
      {/* Meeting and Events Section */}
      <div className="my-5">
        <h4 className="text-center mb-4 meeting-events-heading">MEETINGS & EVENTS</h4>
        <motion.div initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Meeting_and_events_card image = {card_image1} card_heading ="MEHFIL 1 & 2" card_about={<fragment>
                <div>
                  Our 1500 sq. ft. ballroom with floor to ceiling windows offering green views is ideal for inspiring business conferences, weddings and events. Our team will ensure an elegant setup, state-of-the-art facilities and will extend every support to ensure your event is a successs.
                </div>
                <br />
                <div className="text-end m-0 p-0">
                <Link href="/form" className="text-end btn-ind">
                  <span>⧁</span>
                  <span>GET QUOTE</span>
                </Link>
              </div>
              </fragment>}/>
            </div>
            <div className="col-md-4">
              <Meeting_and_events_card image = {card_image2} card_heading ="MEHFIL 2" card_about ={<fragment>
                <div>
                The smaller ballroom covering a 400 sq.ft. area is apt for intimate meetings, gatherings and celebrations. Select your venue and let the expert team at the resort handle the rest. We are known for our hospitality and our team ensures that every detail is just right.
                </div>
                <br />
                <div className="text-end m-0 p-0">
                <Link href="/form" className="text-end btn-ind">
                  <span>⧁</span>
                  <span>GET QUOTE</span>
                </Link>
              </div>
              </fragment>}/>
            </div>
            <div className="col-md-4">
              <Meeting_and_events_card image = {card_image3} card_heading ="LAWNS" card_about ={<fragment>
                <div>We have multiple lawns with captivating views to accommodate your various functions and make them more lively with the natural décor of beautiful flora that surrounds the resort. Choose from the many outdoor venues and let the nature play its magic.</div>
                <br />
                <div className="text-end m-0 p-0">
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
      <Slider_1 heading = "GALLERY" image1 = {slider_image1} about1= "RESORT EXTERIOR" image2 = {slider_image2} about2= "RESORT EXTERIOR" image3 = {slider_image3} about3 = "SERENE PATHWAY" image4 = {slider_image4} about4 = "SWIMMING POOL" image5 = {slider_image5} about5 = "BEDROOM, DELUXE SUITE"/>
      <Footer phno ="+91 886 070 7273" email ="reservations@countryinn.in"/>
    </>
  )
}

export default bhimtal

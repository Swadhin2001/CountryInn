import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'
import Slider_2 from '@/components/Slider_2'
import banner_image from '@/assets/mussorie-hero-1.jpg'
import image1 from '@/assets/junglesetup2.jpg'
import image2 from '@/assets/experiencediningtarika.jpg'
import image3 from '@/assets/gallerypage1.jpg'
import Image_left from '@/components/Image_left'
import Image_right from '@/components/Image_right'
import Footer from '@/components/Footer'
import Meeting_and_events_card from '@/components/Meeting_and_events_card'
import card_image1 from '@/assets/meetings.jpg'
import card_image2 from '@/assets/tarika-lawn.jpg'
import card_image3 from '@/assets/tarika-boardroom.jpg'
import slider_image1 from '@/assets/mussoorie-lobby.jpg'
import slider_image2 from '@/assets/Valley.jpg'
import slider_image3 from '@/assets/psm-4.jpg'
import slider_image4 from '@/assets/psm-3.jpg'
import slider_image5 from '@/assets/MesmerizingViews.jpg'
import slider_image6 from '@/assets/club-premier-mussoorie-1.jpg'
import slider_image7 from '@/assets/club-premier-mussoorie-2.jpg'
import slider_image8 from '@/assets/club-premier-mussoorie-3.jpg'
import slider_image9 from '@/assets/mountain-view-rooms-1.jpg'
import slider_image10 from '@/assets/mountain-view-rooms-2.jpg'
import slider_image11 from '@/assets/mountain-view-rooms-3.jpg'
import slider_image12 from '@/assets/pacific-room-1.jpg'
import slider_image13 from '@/assets/pacific-room-2.jpg'
import slider_image14 from '@/assets/pacific-room-3.jpg'
import slider_image15 from '@/assets/psm-1.jpg'
import slider_image16 from '@/assets/psm-2.jpg'
import slider_image17 from '@/assets/psm-3.jpg'
import slider_image18 from '@/assets/mb-2.jpg'
import slider_image19 from '@/assets/mussori-food-1.jpg'
import slider_image20 from '@/assets/mb-1.jpg'
import slider_image21 from '@/assets/mussori-food-2.jpg'
import slider_image22 from '@/assets/letsdine26.jpg'
import Gallery from '@/components/Gallery'
import Slider_4 from '@/components/Slider_4'
import Mussoorie_card from '@/components/Mussoorie_card'

function mussoorie() {
  return (
    <>
      <Navbar opacity = "0.6"></Navbar>
      <Herosection banner_heading= "COUNTRY INN PREMIER PACIFIC RESORT, MUSSOORIE" backgroundPosition = "center center" text_color = "text-white" image= {banner_image} heading = "COUNTRY INN PREMIER PACIFIC RESORT, MUSSOORIE" about = "Nestled amidst the picturesque hills, Country Inn Premier - Pacific, Mussoorie is conveniently located at a walking distance of 500 meters from the heart of the town Mall Road and close to the attractions like Gun Hill and Kempty Falls, offering an ease to explore the destination. The mountain resort boasts of 48 well-appointed rooms, awe-inspiring views eliciting a restful state of mind and delightful experiences, promising guests a rejuvenating and soul-filling stay."/>

      <Slider_4 heading= "STAY & REJUVENATE" image1 = {slider_image6} image2 = {slider_image7} image3 = {slider_image8} heading1 = "Pacific Mountain View Suite" about1= "The elegant Pacific Mountain View Suite. offers breath-taking views of the surrounding valley and spectacular hill scenery in the backdrop. The spacious living room with sofa and a dining area is ideal to witness fresh mornings and dreamy sunsets. The suite provides a serene and comfortable retreat for guests seeking a relaxing, upscale experience in the lap of nature" image4 = {slider_image9}  image5 = {slider_image10} image6 = {slider_image11} heading2 = "CLUB PREMIER ROOMS WITH BALCONY" about2 ="Indulge in the breathtaking beauty of Mussoorie with our meticulously designed Club Premier Rooms with Balcony and enjoy an elevated experience with club benefits. These rooms feature a seating area, work desk, LED TV, wooden closet and spacious interiors. With Club Premier Rooms, you will get an exclusive access to the ‘Club Premier’ benefits like welcome drink on arrival, early check-in and late check-out, buffet breakfast and dinner, daily hi-tea and much more, to enhance your stay experience.  " image7 = {slider_image12} image8 = {slider_image13} image9 = {slider_image14}  heading3 = "MOUNTAIN VIEW ROOMS" about3 = "These exquisitely designed rooms offer scenic views of the surrounding mountains. The rooms are comfortably designed with modern interiors, wooden flooring, a working desk, a seating area, LED TV, and a wooden closet to offer an unforgettable experience for guests seeking a peaceful retreat in the mountains." image10 = {slider_image15} image11 = {slider_image16} image12 = {slider_image17} heading4 = "PACIFIC ROOMS" about4 = "Thoughtfully designed with comfort in mind, Pacific Rooms feature tasteful interiors with wooden flooring, a working desk, a seating area, LED TV, and modern amenities for a comfortable stay. These rooms are an ideal abode to rest after a busy day of exploration."/> 

      <div className='hero-background d-flex justify-content-center' style={{"height" : "238px"}}>
        <div className="container">
          <h2 className='text-center mid-section-heading mb-3 pt-5'>LET'S DINE</h2>
          <p className='text-center mid-section-about'>Indulge in a delectable assortment of dishes inspired by both local and international cuisine at our multi-cuisine restaurant Sky High. A carefully selected menu featuring delicacies prepared using the freshest ingredients ensures an appetizing dining experience in a minimalistic and welcoming ambience.</p>
        </div>
      </div>

      <Slider_2 image1 = {slider_image18} image2 = {slider_image19} image3 = {slider_image20} image4 = {slider_image21} image5 = {slider_image22}/>


      <div className="my-5 pt-4">
        <h4 className="text-center mb-4 meeting-events-heading">MEETINGS & EVENTS</h4>
        <Mussoorie_card image1 ={card_image1} heading1="BALLROOM" about1 = {<fragment>
          <div>
          This venue is ideal for guests seeking a combination of the indoor and outdoor venue. An indoor
          area of 1,120 sq. ft., coupled with a sprawling lawn and a pre-function area offers guests ample
          space to socialize and enjoy the natural beauty of the surroundings. A perfect choice for those
          looking to host events in a serene and picturesque setting, where the stunning landscape of
          Mussoorie serves as a backdrop to every occasion to make your event a success.
          </div>
          <div className="text-end m-0 p-0">
            <Link href ='/' className ="text-end btn-ind">
                <span>⧁</span>
                <span>GET QUOTE</span>
            </Link>
          </div>
        </fragment>}
        image2 ={card_image2} heading2 = "LAWN" about2 = {<fragment>
          <div>
          The lush green lawns overlook the serene and picturesque setting of Mussoorie, making it an ideal backdrop for any occasion. Select this venue to ensure a successful event that will impress and leave a lasting impression on your guests.
          </div>
          <div className="text-end m-0 p-0">
            <Link href ='/' className ="text-end btn-ind">
                <span>⧁</span>
                <span>GET QUOTE</span>
            </Link>
          </div>
        </fragment>}/>
      </div>
      <Gallery heading = "GALLERY" image1 = {slider_image1} about1 = "Pacific Mountain View Suite - Living Room View" image2 = {slider_image2} about2 = "Mountain View Room" image3 = {slider_image3} about3 ="Mesmerizing Views" image4 = {slider_image4} about4 ="Facade" image5 = {slider_image5} about5 ="Destination Dining - Dinner under the stars"/>
      {/* <Slider_2></Slider_2> */}
      <Footer phno ="+91 886 070 7273" email ="reservations@countryinn.in"/>
    </>
  )
}

export default mussoorie

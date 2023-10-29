import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React from 'react'
import { motion } from 'framer'
import Meeting_and_events_card from '@/components/Meeting_and_events_card'
import banner_image from '@/assets/Facade_Deharadun-banner.jpg'
import Footer from '@/components/Footer'
import Image from 'next/image'
import logo_image from '@/assets/Dehradun-transparent-logo-new.png'
import Image_right from '@/components/Image_right'
import Image_left from '@/components/Image_left'
import Gallery from '@/components/Gallery'
import Slider_4 from '@/components/Slider_4'
import image1 from '@/assets/DehradunHeart.jpg'
import image2 from '@/assets/Ameya-kitchenbanner.jpg'
import image3 from '@/assets/DehradunCatchup.jpg'
import heading_logo1 from '@/assets/dehradun-Where-the-heart-lies.png'
import heading_logo2 from '@/assets/dehradun-ameyas-Kitchen.png'
import heading_logo3 from '@/assets/dehradun-CatchUp.png'
import card_image1 from '@/assets/TheBallRoom.jpg'
import card_image2 from '@/assets/Arcade.jpg'
import card_image3 from '@/assets/DehradunGaming.jpg'
import slider_image1 from '@/assets/welcome-looby-new-1.jpg'
import slider_image2 from '@/assets/Drink-Lobby.jpg'
import slider_image3 from '@/assets/Staricase.jpg'
import slider_image4 from '@/assets/StaircaseView.jpg'
import slider_image5 from '@/assets/Dehradun-premier.jpg'
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

function prominence_dehradun() {
  return (
    <>
      <Navbar opacity = "0.6"/>
      <Herosection image = {banner_image} banner_heading = "COUNTRY INN PREMIER - THE PROMINENCE, DEHRADUN" about = {<fragment>
        <div className="text-center">
          <Image src= {logo_image} alt= "" className='tarika-goa-header-image'/>
        </div>
        <p className='mt-3'>Conveniently located on the Dehradun - Mussoorie road, ‘Country Inn Premier - The Prominence, Dehradun’ overlooks the tranquil Malsi forest and majestic Himalayan range. The upscale hotel is a tasteful amalgamation of modern aesthetic and enriching experiences that promises an elevated stay in Dehradun. Featuring 42 contemporary guestrooms, destination dining options and with every detail crafted carefully, the hotel is sure to offer lasting memories. At ‘Country Inn Premier - The Prominence, Dehradun’, experience the well-known ‘Country Inn’ hospitality that is heartfelt and intuitive, spacious interiors and premium amenities for an inspiring stay.</p>
      </fragment>}/>

      <Slider_4 heading= "STAY & REJUVENATE" image1 = {slider_image6} image2 = {slider_image7} image3 = {slider_image8} heading1 = "Pacific Mountain View Suite" about1= "The elegant Pacific Mountain View Suite. offers breath-taking views of the surrounding valley and spectacular hill scenery in the backdrop. The spacious living room with sofa and a dining area is ideal to witness fresh mornings and dreamy sunsets. The suite provides a serene and comfortable retreat for guests seeking a relaxing, upscale experience in the lap of nature" image4 = {slider_image9}  image5 = {slider_image10} image6 = {slider_image11} heading2 = "CLUB PREMIER ROOMS WITH BALCONY" about2 ="Indulge in the breathtaking beauty of Mussoorie with our meticulously designed Club Premier Rooms with Balcony and enjoy an elevated experience with club benefits. These rooms feature a seating area, work desk, LED TV, wooden closet and spacious interiors. With Club Premier Rooms, you will get an exclusive access to the ‘Club Premier’ benefits like welcome drink on arrival, early check-in and late check-out, buffet breakfast and dinner, daily hi-tea and much more, to enhance your stay experience.  " image7 = {slider_image12} image8 = {slider_image13} image9 = {slider_image14}  heading3 = "MOUNTAIN VIEW ROOMS" about3 = "These exquisitely designed rooms offer scenic views of the surrounding mountains. The rooms are comfortably designed with modern interiors, wooden flooring, a working desk, a seating area, LED TV, and a wooden closet to offer an unforgettable experience for guests seeking a peaceful retreat in the mountains." image10 = {slider_image15} image11 = {slider_image16} image12 = {slider_image17} heading4 = "PACIFIC ROOMS" about4 = "Thoughtfully designed with comfort in mind, Pacific Rooms feature tasteful interiors with wooden flooring, a working desk, a seating area, LED TV, and modern amenities for a comfortable stay. These rooms are an ideal abode to rest after a busy day of exploration."/> 


      <Image_left image = {image1} heading = {<fragment>
        <Image src= {heading_logo1} alt = "" className='heading-logo'/>
      </fragment>} about = "Unlike the conventional way of dining in a single restaurant, we have curated two different dining scenes at the same venue to match your mood and give you more reasons to keep visiting your favorite dining spot. Thoughtfully designed menu curated by our celebrated chefs, served in an inviting space with elegant aesthetics and soothing colors create a casual and laid-back vibe for a dining experience that leads to never-ending conversations and new connections. This fresh charming diner is sure to become your favorite dining spot in Dehradun where you would want to keep returning. After all, this is ‘where the heart lies’!"/>

      <Image_right image = {image2} heading = {<fragment>
        <Image src ={heading_logo2} alt = "" className='heading-logo'/>
      </fragment>} about = "Celebrate the weekend vibe of spending ample time with your loved ones as you indulge in an unlimited feast of exquisite Indian and Asian delicacies that will leave you satisfied. As the Indian origin word ‘Ameya’ suggests ‘limitless’, your favorite restaurant converts to ‘Ameya’s Kitchen - An unlimited feast’ as you start getting into the weekend mood of indulging in endless dining pleasures. From aromatic Indian kebabs and curries to savory Asian dim sum and stir-fries, our menu showcases the best of both worlds, offering a delightful fusion of flavors. Live music and an elaborate drinks menu adds up to the experience, simply making it a ‘feast’ to relish."/>

      <Image_left image = {image3} heading = {<fragment>
        <Image src = {heading_logo3} alt="" className='heading-logo'></Image>
      </fragment>} about = "Stop for a quick bite at ‘Let’s Catch up’ café offering savories, bite-sized snacks and refreshing beverages. Our cafe is a perfect choice for those seeking a moment of relaxation or a place to catch up with friends. Sit back and relax in the warm and welcoming ambiance as you indulge in a range of delectable treats and beverages."/>

      {/* Meeting and Events Section */}
      <div className="my-5">
        <h4 className="text-center mb-4">MEETINGS & EVENTS</h4>
            <motion.div initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
        transition={{ duration: 1}}>

            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <Meeting_and_events_card image = {card_image1} card_heading ="THE BALLROOM" card_about="Make your events and celebrations delightful at ‘The Ballroom’, a perfect combination of exquisite indoor space and charming outdoor lawn, creating a stunning setting for...."/>
                </div>
                <div className="col-md-4">
                  <Meeting_and_events_card image = {card_image2} card_heading ="ARCADE" card_about ="Whether you're hosting a board meeting, training session or an intimate celebration, our versatile venues Arcade 1 and Arcade 2 can be customized to your needs, to accommodate your events of up to 30 guests."/>
                </div>
                <div className="col-md-4">
                  <Meeting_and_events_card image = {card_image3} card_heading ="GAMING ZONE" card_about ="You can also unleash your playful spirit at our Gaming Zone. Designed to cater to both kids and adults, the Gaming Zone offers exciting gaming options that guarantee hours of fun-filled entertainment."/>
                </div>
              </div>
            </div>
        </motion.div>
      </div>
      <Gallery heading = "GALLERY" image1 = {slider_image1} about1 = "WELCOMING LOBBY" image2 = {slider_image2} about2 = "WELCOMING LOBBY" image3 = {slider_image3} about3 = "INVITING INTERIORS" image4 = {slider_image4} about4 = "TRADITIONAL INTERIORS" image5 = {slider_image5} about5 = "CLASSIC ROOMS"/>
      <Footer/>
    </>
  )
}

export default prominence_dehradun
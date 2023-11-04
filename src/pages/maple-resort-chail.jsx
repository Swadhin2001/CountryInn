import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React from 'react'
import Slider_4 from '@/components/Slider_4'
import banner_image from '@/assets/chail-hero-new.jpg'
import image1 from '@/assets/ma-dine.jpg'
import image2 from '@/assets/ma-fire.jpg'
import image3 from '@/assets/ma-game.jpg'
import Image_left from '@/components/Image_left'
import Image_right from '@/components/Image_right'
import Footer from '@/components/Footer'
import Small_slider from '@/components/Small_slider'
import slider_image1 from '@/assets/chail-g-1.jpg'
import slider_image2 from '@/assets/chail-g-2.jpg'
import slider_image3 from '@/assets/chail-g-3.jpg'
import slider_image4 from '@/assets/chail-g-4.jpg'
import slider_image5 from '@/assets/chail-g-5.jpg'
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
import slider_image18 from '@/assets/chail-Foodshot-3.jpg'
import slider_image19 from '@/assets/mapple-skyhigh-1.jpg'
import slider_image20 from '@/assets/chail-Foodshot-4.jpg'
import slider_image21 from '@/assets/chail-Foodshot-2.jpg'
import slider_image22 from '@/assets/mapple-skyhigh-2.jpg'
import Gallery from '@/components/Gallery'

function maple() {
  return (
    <>
      <Navbar opacity = "0.6"></Navbar>
      <Herosection banner_heading= "COUNTRY INN MAPLE RESORT, CHAIL" image= {banner_image} backgroundPosition= "bottom center" text_color = "text-white" heading = "COUNTRY INN MAPLE RESORT, CHAIL" about = "Country Inn Maple Resort, Chail is conveniently located on Kandaghat Chail Road, amidst snow-clad mountains and picturesque landscapes to become your perfect home in the hills. With 30 spacious rooms, tranquil views, lush green lawns, and excellent cuisine, the resort is a tasteful amalgamation of sublime nature and modern aesthetics. A contemporary take to immerse travellers in the local beauty and distinct character of the destination."/>

      <Slider_4 heading= "STAY & REJUVENATE" image1 = {slider_image6} image2 = {slider_image7} image3 = {slider_image8} heading1 = "Pacific Mountain View Suite" 
      about1= 'The elegant Pacific Mountain View Suite. offers breath-taking views of the surrounding valley and spectacular hill scenery in the backdrop. The spacious living room with sofa and a dining area is ideal to witness fresh mornings and dreamy sunsets. The suite provides a serene and comfortable retreat for guests seeking a relaxing, upscale experience in the lap of nature<br> <br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start"><img src="../assets/Area.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> 440 Sq. ft.</span></li></ul>' 
      image4 = {slider_image9}  image5 = {slider_image10} image6 = {slider_image11} heading2 = "CLUB PREMIER ROOMS WITH BALCONY" 
      about2 ='Indulge in the breathtaking beauty of Mussoorie with our meticulously designed Club Premier Rooms with Balcony and enjoy an elevated experience with club benefits. These rooms feature a seating area, work desk, LED TV, wooden closet and spacious interiors. With Club Premier Rooms, you will get an exclusive access to the ‘Club Premier’ benefits like welcome drink on arrival, early check-in and late check-out, buffet breakfast and dinner, daily hi-tea and much more, to enhance your stay experience.  <br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start"><img src="../assets/Area.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> 400 Sq. ft.</span></li></ul>' 
      image7 = {slider_image12} image8 = {slider_image13} image9 = {slider_image14}  heading3 = "MOUNTAIN VIEW ROOMS" 
      about3 = 'These exquisitely designed rooms offer scenic views of the surrounding mountains. The rooms are comfortably designed with modern interiors, wooden flooring, a working desk, a seating area, LED TV, and a wooden closet to offer an unforgettable experience for guests seeking a peaceful retreat in the mountains.<br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start"><img src="../assets/Area.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> 240 Sq. ft.</span></li></ul>' image10 = {slider_image15} image11 = {slider_image16} image12 = {slider_image17} heading4 = "PACIFIC ROOMS" about4 = 'Thoughtfully designed with comfort in mind, Pacific Rooms feature tasteful interiors with wooden flooring, a working desk, a seating area, LED TV, and modern amenities for a comfortable stay. These rooms are an ideal abode to rest after a busy day of exploration.<br> <ul class="d-flex flex-row justify-content-start room-info mb-2" style="list-style-type: none;"><li class="text-start"><img src="../assets/Area.png" alt="" width="20px" height="20px"> <span class="f-s-16 color-black font-Brandon"> 280 Sq. ft.</span></li></ul>'/> 

      <div className='hero-background d-flex justify-content-center'  style={{"height" : "270px"}}>
        <div className="container">
          <h2 className='text-center mid-section-heading mb-3 pt-5'>LET'S DINE</h2>
          <p className='text-center mid-section-about '>Savour a thoughtfully curated menu at Sky High, our multi-cuisine all-day dining restaurant offering mesmerizing views of the surrounding hills and delectable cuisine. With picturesque settings and a warm welcoming ambiance, Sky High is the perfect spot to relish local and international delicacies made using the freshest produce. The alfresco area of the restaurant offers an indulgent experience under a stunning canopy of stars along with a mesmerizing panoramic view of the mountains and the lush forests.</p>
        </div>
      </div>
      <Small_slider image1 ={slider_image18} image2 ={slider_image19} image3 ={slider_image20} image4 ={slider_image21} image5 ={slider_image22} ></Small_slider>
      <div className='hero-background' style={{"height" : "156px"}}>
        <h2 className='text-center mid-section-heading mb-3 pt-5'>CLASSIC EXPERIENCES</h2>
      </div>

      <Image_left image = {image1} heading= "Dining under the stars" about = "Picture yourself under the starry night sky, amidst the hills with your partner, as the cool breeze brushes against your skin while you savor long conversations and a one-of-a-kind menu crafted by our expert chefs. At Country Inn Maple Resort, Chail, you can feel closer than ever to your loved one while indulging in this extraordinary experience." />

      <Image_right image = {image2} heading= "Embrace the warmth of togetherness" about = "Spend some quality time with your loved ones around our bonfire in Chail in the chilly weather. The warmth from the bonfire amid the cold weather calms the nerves and creates a soothing ambience. So, huddle around the fire with your friends and family to experience an intimate and relaxing moment at Country Inn Maple Resort, Chail." />

      <Image_left image = {image3} heading= "Experience Fun and Excitement" about = "Step into our in-house gaming arcade and immerse yourself in a world of fun and excitement. With a wide range of games and activities, our arcade is the perfect place to unwind and have a blast. Whether you're a kid or a kid at heart, our gaming arcade is sure to keep you entertained for hours on end. So come on down and let the good times roll !" />

      <Gallery heading = "GALLERY" image1 = {slider_image1} about1 = "Aerial view - Country Inn Maple Resort, Chail" image2 = {slider_image2} about2 = "Awe-inspiring views" image3 = {slider_image3} about3 = "Bonfire" image4 = {slider_image4} about4 = "Breakfast - Sky High" image5 = {slider_image5} about5 = "Buffet Breakfast"/>
      <Footer/>
    </>
  )
}

export default maple

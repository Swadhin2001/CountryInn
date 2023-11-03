import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image_right from "@/components/Image_right";
import Image_left from "@/components/Image_left";
import banner_image from '@/assets/ourgetwaysbhimtal.jpg'
import image1 from "@/assets/wedding.jpg";
import image2 from "@/assets/meeting.jpg";
import image3 from "@/assets/celebration.jpg";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Slider_1 from "@/components/Slider_1";
import Classic_experience from "@/components/Classic_experience";
import Slider_3 from "@/components/Slider_3";
import slider_image1 from '@/assets/homepagegallery77.jpg'
import slider_image2 from '@/assets/homegallery2.jpg'
import slider_image3 from '@/assets/homegallery3.jpg'
import slider_image4 from '@/assets/homegallery4.jpg'
import slider_image5 from '@/assets/homegallery5.jpg'
import slider_image6 from '@/assets/img1.jpg'
import slider_image7 from '@/assets/img2.jpg'
import slider_image8 from '@/assets/img3.jpg'
import slider_image9 from '@/assets/Sprituality.jpg'
import slider_image10 from '@/assets/letsdine26.jpg'
import slider_image11 from '@/assets/ourgetwaysbhimtal.jpg'
import slider_image12 from '@/assets/get-away1.jpg'
import slider_image13 from '@/assets/jimcorbettbanner2.jpg'
import slider_image14 from '@/assets/lobby.jpg'
import slider_image15 from '@/assets/hero-banner.jpg'
import { Fragment } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar opacity='1'/>

      <Herosection image = {banner_image} backgroundPosition ="bottom center" heading = "YOUR LEISURE ESCAPES" about = "Revive your love for travel and immerse yourself in the ultimate experience. Country Inn Hotels & Resorts are strategically located in destinations that are best suited for adventure, discovery, and at the places that inspire soul. Each resort display lush green nature in its unique backdrop and is set in natural junction flanked by great Himalayan Mountains, alongside tranquil lakes, in the midst of virgin forests or bordering wildlife sanctuaries to offer friendly experiences and for redefining family holidays."/>

      <Slider_3 heading = "OUR GETAWAYS" 
      
      image1 = {slider_image11} heading1 = "COUNTRY INN NATURE RESORT, BHIMTAL" 
      about1 = "Country Inn Nature Resort, Bhimtal is a melting pot of sublime nature and earthen treasures. It is a haven for those seeking a break from the hustle and bustle of the city to experience a slow, serene life"

      image2 = {slider_image12} heading2 = "COUNTRY INN TARIKA RIVERSIDE RESORT, JIM CORBETT" 
      about2 = "Set in natural surroundings of the forest, only 250 metres away from the pristine Kosi River and Himalayas framing the backdrop, this is an ideal base to explore the rich diversity of Jim Corbett" 

      image3 = {slider_image13} heading3 = "COUNTRY INN RESORT, JIM CORBETT" 
      about3 = "A tranquil getaway designed purely for the wildlife enthusiasts and nature lovers. Find yourself engulfed in natural surroundings as you indulge in the pleasure of responding to all your natural stimuli " 

      image4 = {slider_image14} heading4 = "COUNTRY INN HALL OF HERITAGE, AMRITSAR" about4 ="Located only 800 meters away from the holy shrine, the stunning Golden Temple, Country Inn Hall of Heritage, Amritsar welcomes you to the city draped in rich history, culture, and traditions " 

      image5 = {slider_image15} heading5 = "COUNTRY INN TARIKA GOA, VARCA BEACH" 
      about5 ="Located at a leisurely walk from the pristine white sand Varca Beach, Country Inn Tarika Goa, Varca Beach offers a tranquil escape from the hustle and bustle of city life. This quaint retreat offers 48 well-designed cottages, multiple food and beverage offerings, a pillar-less ballroom for social and corporate gatherings and a stunning outdoor swimming pool to unwind and rejuvenate."

      />

      <div className='hero-background d-flex justify-content-center'>
        <div className="container">
          <h2 className='text-center mid-section-heading mb-3 pt-5'>CLASSIC EXPERIENCES</h2>
          <p className='text-center mid-section-about mb-0'>Relive your passion for the experiences you love, and let your spirit soar to adventures yet unwritten. We offer unique experiences in pioneering serene destinations to make the most of your stays. Be adventurous in the great outdoors, admire breath-taking views, indulge in local cuisine prepared with farm-fresh ingredients or explore the wildlife in their natural habitat.</p>
        </div>
      </div>
      <Classic_experience image1 ={slider_image6} image2 ={slider_image7} image3 ={slider_image8} image4 ={slider_image9}/>
      

      <div className='hero-background d-flex justify-content-center'>
        <div className="container">
          <h2 className='text-center mid-section-heading mb-3 pt-5'>CELEBRATIONS & EVENTS</h2>
          <p className='text-center mid-section-about mb-0'>Whether you envision a celebration that's traditional or trend-setting, festive or formal, intimate or grand-scale, in the ballroom, gardens or by the pool, our resorts featuring a variety of indoor and outdoor settings and a team of experts will give you unlimited options to plan your perfect event.</p>          
        </div>
      </div>
      <Image_left image = {image1} heading= "WEDDINGS" about = {<fragment>
        <div>
          Thinking about your dream wedding in a picture-perfect location? Our resorts provide spaces to suit every occassion in destinations that makes your celebrations unique. Our spacious outdoor venues surrounded with beautiful flora are just apt to celebrate under the stars, by the pool or amidst the hills. From destination weddings to milestone events, our expert team will help you plan every detail and ensure we accommodate all your needs to curate everlasting memories on your special occasions. Explore our banqueting facilities at Bhimtal and Jim Corbett. 
        </div>
        <br /> <br />
            <div className="text-end m-0 p-0">
            <Link href="/form" className="text-end btn-ind">
              <span>⧁</span>
              <span>GET QUOTE</span>
            </Link>
          </div>
      </fragment>}/>

      <Image_right image = {image2} heading= "MEETINGS" about = {<fragment>
        <div>
        If you are looking for inspirational venues to club work and play, then you are simply at the right place. Our resorts feature spacious boardrooms for high intensity brainstorming sessions or business meetings as well as expansive lawns with natural surroundings that are fit for outdoor team activities and corporate social gatherings. Our team of dedicated professionals offer a seamless service from start to finish, to make every meeting a success. For your various business needs, our meeting venues are equipped with the latest technology, to ensure your conferences, events, and meeting arrangements are smooth and hassle-free.
        </div>
        <br /> <br />
            <div className="text-end m-0 p-0">
            <Link href="/form" className="text-end btn-ind">
              <span>⧁</span>
              <span>GET QUOTE</span>
            </Link>
          </div>
      </fragment>}/>

      <Image_left image = {image3} heading= "CELEBRATIONS" about = {<fragment>
        <div>
        Be it an intimate dinner, a social gathering or a business milestone, every celebration deserves a unique spot and exclusivity. With our multiple unique venues for small and big gatherings, Country Inn Hotels & Resorts are the perfect choice for every kind of celebration. A romantic dinner under the stars or a wedding reception amidst the magnificent mountains at Country Inn Resort, Bhimtal, social gathering with bonfire at Country Inn Tarika Riverside Resort, Jim Corbett, corporate gathering in the ballroom with wilderness all around you at Country Inn Resort, Jim Corbett – we have all this and much more for your next celebration.
        </div>
        <br /> <br />
            <div className="text-end m-0 p-0">
            <Link href="/form" className="text-end btn-ind">
              <span>⧁</span>
              <span>GET QUOTE</span>
            </Link>
          </div>
      </fragment>} />

      <Slider_1 heading = "INASTAGRAMMABLE MOMENTS" image1 ={slider_image1} image2 = {slider_image2} image3 = {slider_image3} image4 = {slider_image4} image5 = {slider_image5}></Slider_1>

      <Footer phno = "+91 886 070 7273" email= "reservations@countryinn.in"/>

      
    </>
  );
}

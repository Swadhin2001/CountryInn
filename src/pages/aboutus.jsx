import React from 'react'
import Navbar from '@/components/Navbar'
import banner_image from '@/assets/pacificmussoorie.jpg'
import image1 from '@/assets/mrs_rai.jpg'
import image2 from '@/assets/gallerypage1.jpg'
import image3 from '@/assets/gallerypage2.jpg'
import Image_left from '@/components/Image_left_pet_policy'
import Image_right from '@/components/Image_right_pet_policy'
import Footer from '@/components/Footer'

function aboutus() {
  return (
    <>
      <Navbar opacity = "0.6"></Navbar>
      <div style={{"backgroundImage" : `url(${banner_image.src})`}} className='hero-banner'/>

      <div className='hero-background' style={{"height" : "275px"}}>
        <h2 className='text-center mid-section-heading mb-3 pt-5'>OUR STORY</h2>
        <p className='text-center mid-section-about px-5 mx-5'>Our journey started over 25 years back at Bhimtal (Nainital Distt. Uttarakhand, North India) in a very humble way. Over the years we have endeavoured to provide our guests with the most friendly experiences and have redefined family holidays to a vast majority of our privileged guests over the years. We operate 3 resorts in Jim Corbett and Bhimtal. All our resorts adhere to our vision to provide maximum value to your family. After all, they are the pillars of your success! We endeavour to make every single guest feel at home and passionately work towards achieving the same. All our resorts adhere to our focus on providing high quality holidays to the family and have our services designed to accommodate this aspect.</p>
      </div>

      <Image_left image = {image1} heading= "OUR FOUNDER" about = "Espire Hospitality was founded by Late Mrs. Sadhana Rai who we fondly remember as our Founder Chairman. Our very own brand, carefully nurtured by her, Country Inn Hotels & Resorts commenced operations in 1993. In its first decade, we operated the resorts that were owned by the group (in Bhimtal, Jim Corbett, Mussoorie and Kosi) along with leased properties (in Amritsar and Badaun). The core values of our brand are based on our Founder Chairman’s belief of providing heartfelt hospitality to our guests and to take exceptional care of our colleagues. In the current phase of growth, we are ensuring that the legacy left behind by our Founder Chairman remains at the centre of what we do and how we do things. We are privileged to have the opportunity to take her vision further to other destinations across India through our expansion in markets such as Goa, Vrindavan, Varanasi, Udaipur and Dehradun.." />

      <Image_right image = {image2} heading= "ECO FRIENDLY" about = "The concept of tourism existed since time immemorial when man travelled far and wide in pursuit of pleasure or spirituality. However the tourism boom began with the advent of faster modes of travel. Shipping was the first to come up followed by the locomotive, the motor car and finally the air plane. Each has contributed to travel immensely by cutting down the travel time drastically. The perceivable adverse effects have been so profound that it is today believed that Tourism is a major contributor to environmental degradation. This realization lead to the development of the concept of eco-tourism in 2002 and at Country Inn we are fully aware of our role in the environments that we operate in. From the hills of Bhimtal to the forests of Corbett and further to the lakes at Sattal we are leaving no stone unturned to ensure the lowest possible borrowings from Mother Nature. In fact in all our processes of hotel operations we keep a tab on the environmental implications of what we do." />

      <Image_left image = {image3} heading= "OUR AFFILIATIONS" about = "Association of Domestic Tour Operators of India (ADTOI) | Indian Association of Tour Operators (IATO) | Travel Agents Association of India (TAAI) | Federation of Hotel & Restaurant Association of India (FHRAI) | Hotel & Restaurant Association of Northern India (HRANI) | Hotel Association of India (HAI) | All India Resort Development Association (AIRDA) | Resort Condominiums International (RCI)" />

      

      
      <Footer/>
    </>
  )
}

export default aboutus

import Navbar from '@/components/Navbar'
import React from 'react'
import banner_image from '@/assets/petpolicy-banner.jpg'
import image1 from '@/assets/petpolicynew1.jpg'
import image2 from '@/assets/petpolicyimage7.jpg'
import image3 from '@/assets/petpolicynew2.jpg'
import Image_left from '@/components/Image_left'
import Image_right from '@/components/Image_right'
import Footer from '@/components/Footer'
function bhimtal() {
  return (
    <>
      <Navbar></Navbar>
      <div style={{"backgroundImage" : `url(${banner_image.src})`}} className='hero-banner'/>

      <div className='hero-background' style={{"height" : "218px"}}>
        <h2 className='text-center  mb-3 pt-5'>IF YOU ARE A PET OWNER, YOU ARE AT THE RIGHT PLACE</h2>
        <p className='text-center px-5 mx-5'>We understand the attachment & bonding a pet brings to our lives and we know that it is traumatic for the animal to be left behind while the rest of the family travels. We therefore took the bold step to open up our doors to your pets & have been welcoming pets at our resorts since the past 05 years & more..</p>
      </div>

      <Image_left image = {image1} heading= "PETS AT COUNTRY INN HOTELS & RESORTS" about = "During these years we are proud to have hosted many wonderful beings and feel glad we could make a difference to many families who value the feeling of 'being together'. While we are very passionate about animals, we cannot assume the same about all our guests & hence we request you to please read the Pets Policy carefully & adhere to the same at all times when your pet is in our premises. It will help us make your stay a wonderful experience." />

      <Image_right image = {image2} heading= "PET POLICY" about = {<fragment>
        We will be delighted to have you and your furry friend as our guests. To ensure a comfortable stay for yourself and fellow guests, we will appreciate if you could please take a note of the following guidelines: <br />
        <ul>
            <li>
                The decision of allowing the pets will be on hotel’s discretion and must be approved in advance of your stay. We welcome pets under 30 kgs / 66 lbs. Should your pet weigh more, please raise it to the hotel team in advance for the best solution
            </li>
            <li>
                Only one pet is allowed per room
            </li>
            <li>
                Only dogs (non-aggressive) and caged birds are allowed as pets in the resort
            </li>
            <li>
                A charge of INR 1,000 plus taxes, will be charged per pet, per night and an advance payment will be collected upon check-in. The charges are towards providing a pet bed and food that is naturally available at the resort.
            </li>
        </ul>
      </fragment>} />

      <Image_left image = {image3} heading= "PET POLICY" about = "Should you require any specific pet food, please let our team know in advance and it shall be arranged, subject to availability, at an additional charge" />

      <Footer/>
    </>
  )
}

export default bhimtal

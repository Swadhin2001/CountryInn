import Navbar from '@/components/Navbar'
import React from 'react'
import banner_image from '@/assets/petpolicy-banner.jpg'
import image1 from '@/assets/petpolicynew1.jpg'
import image2 from '@/assets/petpolicyimage7.jpg'
import image3 from '@/assets/petpolicynew2.jpg'
import Image_left from '@/components/Image_left_pet_policy'
import Image_right from '@/components/Image_right_pet_policy'
import Footer from '@/components/Footer'
function bhimtal() {
  return (
    <>
      <Navbar opacity = "0.6"></Navbar>
      <div style={{ "backgroundImage": `url(${banner_image.src})` }} className='hero-banner' />

      <div className='hero-background' style={{ "height": "218px" }}>
        <div className="container">
          <h2 className='text-center mid-section-heading mb-3 pt-5'>IF YOU ARE A PET OWNER, YOU ARE AT THE RIGHT PLACE</h2>
          <p className='text-center mid-section-about'>We understand the attachment & bonding a pet brings to our lives and we know that it is traumatic for the animal to be left behind while the rest of the family travels. We therefore took the bold step to open up our doors to your pets & have been welcoming pets at our resorts since the past 05 years & more..</p>
        </div>
      </div>

      <Image_left image={image1} heading="PETS AT COUNTRY INN HOTELS & RESORTS" about="During these years we are proud to have hosted many wonderful beings and feel glad we could make a difference to many families who value the feeling of 'being together'. While we are very passionate about animals, we cannot assume the same about all our guests & hence we request you to please read the Pets Policy carefully & adhere to the same at all times when your pet is in our premises. It will help us make your stay a wonderful experience." />

      <Image_right image={image2} heading="PET POLICY" about={<fragment>
        We will be delighted to have you and your furry friend as our guests. To ensure a comfortable stay for yourself and fellow guests, we will appreciate if you could please take a note of the following guidelines: <br />
        <ul className='pt-3'>
          <li className='pb-3'>
            The decision of allowing the pets will be on hotel’s discretion and must be approved in advance of your stay. We welcome pets under 30 kgs / 66 lbs. Should your pet weigh more, please raise it to the hotel team in advance for the best solution
          </li>
          <li className='pb-3'>
            Only one pet is allowed per room
          </li>
          <li className='pb-3'>
            Only dogs (non-aggressive) and caged birds are allowed as pets in the resort
          </li>
          <li className='pb-3'>
            A charge of INR 1,000 plus taxes, will be charged per pet, per night and an advance payment will be collected upon check-in. The charges are towards providing a pet bed and food that is naturally available at the resort.
          </li>
        </ul>
      </fragment>} />

      <Image_left image={image3} heading="PET POLICY" about={<fragment>
        <ul>
          <li className='pb-3'>Should you require any specific pet food, please let our team know in advance and it shall be arranged, subject to availability, at an additional charge</li>

          <li className='pb-3'>The guest rooms are subject to damage inspection at any time and upon check out. Any damages will be charged to the guests on actuals</li>

          <li className='pb-3'>Pets must be on a controlled leash at all times while leaving the room</li>

          <li className='pb-3'>We regret that pets are not allowed in our restaurants, banquet, gardens, pool and spa. You may take them for a walk at the designated areas, on the hotel grounds</li>

          <li className='pb-3'>Guests are responsible for the clean-up of the pet’s excretion on the hotel grounds, and for properly disposing the waste in the outside dumpster or at the designated area</li>

          <li className='pb-3'>Pet left unattended in the guest room when the guest leaves the hotel premises must be secured in a proper pet crate or carrier</li>

          <li className='pb-3'>You are required to be present with your pet in the room, when any service is provided</li>

          <li className='pb-3'>Please ensure that the required permits and clearances are obtained from authorities and a copy is given to the hotel team before arrival</li>
          </ul>
      </fragment>} />

      <Footer />
    </>
  )
}

export default bhimtal

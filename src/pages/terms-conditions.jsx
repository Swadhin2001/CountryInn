import React from 'react'
import Navbar from '@/components/Navbar'
import banner_image from '@/assets/terms-banner.jpg'
import Footer from '@/components/Footer'

function terms_conditions() {
    return (
        <div >
            <Navbar></Navbar>
            <div style={{ "backgroundImage": `url(${banner_image.src})` }} className='hero-banner' />
            <h2 className='text-center policy-heading pt-5 mt-5'>TERMS & CONDITIONS</h2>
            <div className='d-flex justify-content-center'>
                <div className='container-1140 my-5 py-4'>
                    <div>
                        <h4 className='policy-h4'>Introduction</h4>
                        <p className='policy-p'>This site is owned and operated by Espire Hospitality Limited, New Delhi. <br /> In accessing and using the Site, you agree to be bound by these Conditions so please carefully read this section before proceeding further as by accessing and using this site, you agree to be bound by these terms & conditions. Please check these terms & conditions periodically for changes, if any as we reserve the right, at our sole discretion, to change, modify, add, or remove portions of these terms & conditions at any time without any intimation. All changes will become effective immediately unless otherwise stated and you should check these terms & conditions from time to time.</p>
                    </div>
                    <h4 className='policy-h4'>Conditions</h4>
                    <div>
                        <h4 className='policy-h4'>1. Use of Website</h4>
                        <p className='policy-p'>The primary guest must be at least 18 years of age to be able to check-in to the hotel. The site and the materials located on or through the site are provided by us for informational purposes only, with the understanding that we are, by the provision of these materials, not engaged in the rendering of legal or other professional advice or service. <br />
                            You may only use this site to make appropriate reservations. You are responsible for maintaining the secrecy of your passwords, login and account information. You will be financially accountable for all uses of the site by you and anyone using your password and login information.</p>
                    </div>
                    <div>
                        <h4 className='policy-h4'>2. Restrictions on the use of materials</h4>
                        <p className='policy-p'>All materials contained in the site are the copyrighted property of Espire Hospitality Limited, or its subsidiaries or affiliated companies and/or third party licensors. Any software that is made available to download from this site is the copyrighted work of Espire Hospitality Limited and/or its various third party licensors.</p>
                    </div>
                    <div>
                        <h4 className='policy-h4'>3. Proprietary Rights Information</h4>
                        <p className='policy-p'>The site contains and references of domain name, trademarks, logos, brand names, service marks, drawings, illustrations, artwork, videos, music, sounds, photographs, trade names, text, graphics, trade dress and devices and other valuable trade or service marks or files found on this site are proprietary to Espire Hospitality Limited or its subsidiaries or affiliated companies and/or third party licensors, are protected by the trademark, copyright and intellectual property laws.</p>
                    </div>
                    <div>
                        <h4 className='policy-h4'>4. Necessary Information</h4>
                        <p className='policy-p'>It is mandatory for guests to present valid photo identification at the time of check-in. According to the government regulations, a valid Photo ID has to be carried by every person above the age of 18 years staying at the hotel. The identification proofs accepted are Aadhaar Card, Driving License, Voter ID Card and Passport. Without an original of a valid ID card, the guest will not be allowed to check-in. The hotel reserves the right, to take action against the guest should any action by a guest be deemed inappropriate by the hotel, or if any inappropriate behaviour is brought to the attention of the hotel,, however, after the allegations have been investigated, to take action against the guest. Certain destinations may have different policies for specific times during the year. <br />
                            Guests shall be liable for any damage, except normal wear and tear to hotel assets. Guest shall keep the hotel room in a good condition and maintain hygiene and cleanliness. <br />
                            Certain policies are booking specific and are informed to the customer while making the booking. <br />
                            Guests may be contacted closer to their check-in date to confirm the arrival status or arrival time through calls or messages. In case, we do not receive a response from the guest after multiple attempts, the booking may be put on hold or cancelled. In case of availability, ZANA Luxury Escapes will try to reinstate your booking when you contact us back or make a payment through our multitude of payment options. <br />
                            As we continue to strive to improve our services, we may reach out to guests to get feedback on their experience through calls or messages.</p>
                    </div>
                    <div>
                        <h4 className='policy-h4'>5. Confidentiality</h4>
                        <p className='policy-p'>The Company will maintain the confidentiality of each transaction and will not disclose the commercially sensitive information, except to the extent necessary for the services.</p>
                    </div>
                    <div>
                        <h4 className='policy-h4'>6. Promotional Information</h4>
                        <p className='policy-p'>We may make information regarding specific programs, offers or promotions, which we are conducting, available on the sites. We reserve the right to alter or withdraw any program, offer or promotion at any such time.</p>
                    </div>
                    <div>
                        <h4 className='policy-h4'>7. Limitation of Liability</h4>
                        <p className='policy-p'>We are not responsible for, and shall have no liability for: (i) telephone, mobile, electronic, network, internet, computer, hardware or software program malfunctions, delays, or failures; (ii) for any injury, loss or damage to your computer or interception or use of credit card information, related to or resulting from use of the site or any sites, services, or materials linked or relating thereto; (iii) any incorrect information, whether caused by other users or by any of the equipment, software, or programming associated with or utilized in the site or as the result of technical or human error which may occur in the processing of information regarding the site.</p>
                    </div>
                    <div>
                        <h4 className='policy-h4'>8. Disclaimers</h4>
                        <p className='policy-p'>Electronic transmissions, including the internet, are public media, and any use of such media is public and not private. Information related to or arising from such use is public, or the property of those collecting information, and not personal or private information. <br />
                            You agree that you use the site at your own risk. The content, services and materials in the site are provided on "as is" and "as available" basis without representations or warranties of any kind, whether express, implied or statutory. <br />
                            We explicitly disclaim any responsibility for the accuracy, content, or availability of information found on sites that link to or from the site. We cannot ensure that you will be satisfied with any products or services that you purchase from the site or from a third-party site that links to or from the site or third party content on the site.</p>
                    </div>
                    <div>
                        <h4 className='policy-h4'>9. Governing Law & Jurisdiction</h4>
                        <p className='policy-p'>The products or services described in and available through the site may not be available in your country. We make no representation that the services or products offered on the site are appropriate or available for use in any particular location. <br />
                            Any disputes arising out of or related to the site shall be governed by and constructed and enforced in accordance with, the laws of India and you shall submit and accept unconditionally to the exclusive jurisdiction of the courts of New Delhi (INDIA).</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default terms_conditions

import React from 'react'
import Navbar from '@/components/Navbar'
import banner_image from '@/assets/privacy-policy-banner.jpg'
import Footer from '@/components/Footer'

function privacy_policy() {
    return (
        <div >
            <Navbar></Navbar>
            <div style={{ "backgroundImage": `url(${banner_image.src})` }} className='hero-banner' />
            <h2 className='text-center pt-5 mt-5 policy-heading'>PRIVACY POLICY</h2>
            <div className='d-flex justify-content-center pb-5 mb-5'>
                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="">

                        <ol>
                            <li>
                                <strong>Scope</strong>
                            </li>
                        </ol>
                        <p>
                            This Privacy Policy (‘Privacy Policy’) applies to personal data that we
                            collect from you when you make a booking (including and not limited to the
                            booking made for accommodations, treatment at one of our spas, events and
                            screenings, restaurants) or visit any of our properties (for booking of
                            accommodation, spa treatment, event and screening, restaurant or any other
                            reason whatsoever), or use any of the services at one of our properties,
                            spas or other facilities.
                        </p>
                        <p>
                            This Privacy Policy provides information on what personal data we collect,
                            why we collect the personal data, how it is used and the lawful basis on
                            which your personal data is processed, and what your rights are under the
                            applicable data protection and privacy laws, including but not limited to
                            the Information Technology Act, 2000 or any other legislation applicable
                            in India, for the time being in force.
                        </p>
                        <ul>
                            <li>
                                ‘Personal data’ as used in this Privacy Policy means any information
                                that relates to you and from which, you can be identified.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                This Privacy Policy supplements the website Privacy Policy provided on
                                the relevant website, you interact with when you make a booking.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                By submitting your personal data, you hereby certify that you have gone
                                through the terms of this Privacy policy and you accept the same.
                            </li>
                        </ul>
                        <ol start={2}>
                            <li>
                                <strong>Data controller</strong>
                            </li>
                        </ol>
                        <p>
                            The data controller responsible for your personal data (as provide by you)
                            is the Espire Hospitality Group company with whom you make a reservation
                            (‘Company’, ‘we’, ‘us’ and/or ‘our’)
                        </p>
                        <ol start={3}>
                            <li>
                                <strong>The personal data that we collect</strong>
                            </li>
                        </ol>
                        <p>
                            We collect the following personal data about you when you make a
                            reservation:
                        </p>
                        <ul>
                            <li>
                                Contact information, such as your first and last name, mailing address,
                                email address, and telephone number;
                            </li>
                        </ul>
                        <ul>
                            <li>Language preference;</li>
                        </ul>
                        <ul>
                            <li>
                                Credit card number or other payment account details, billing address,
                                and other payment and billing information (‘Payment Information);
                            </li>
                        </ul>
                        <ul>
                            <li>Records and copies of your correspondence, if you contact us;</li>
                        </ul>
                        <ul>
                            <li>
                                Guest-stay information, including the properties where you have stayed,
                                date of arrival and departure, and goods and services purchased;
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Depending on the type of reservation, we may also ask for your gender
                                and date of birth, important dates, such as birthdays, anniversaries and
                                special occasions, names of any guests travelling with you and any
                                preferences (such as meal preferences and health conditions) which you
                                advise us when you make your reservation; or which we learn about you
                                during your visit at one of our properties.
                            </li>
                        </ul>
                        <p>
                            <strong>Other information</strong>
                        </p>
                        <p>
                            When you visit the relevant reservation website, we will automatically
                            collect certain information, including through cookies and other
                            technologies. Please read the Privacy Policy made available on the
                            relevant website for information on the types of data that we collect in
                            this context.
                        </p>
                        <p>
                            <strong>Sensitive data:</strong>
                        </p>
                        <p>
                            In some cases, in connection with your reservation, we may need to collect
                            personal data that is considered sensitive data by the law, such as
                            information about your health (for example, allergies or other health
                            conditions). On such occasions, we will only use your personal data for
                            the purposes, which we will explain at that time and we will seek your
                            consent for the said use. Depending on the circumstances, and processing
                            of sensitive data about you, it may also be necessary to protect your or a
                            third party’s vital interest or for reasons of public interest in the area
                            of public health.
                        </p>
                        <p>
                            {" "}
                            If you submit any personal data about other people to us or our service
                            providers (e.g., if you make a reservation for another individual), you
                            represent that you have the authority to do so and you permit us to
                            collect and use such data in accordance with this Privacy Policy.
                        </p>
                        <p>
                            {" "}
                            Some of the personal data we request is necessary for us to perform our
                            contract with you and/or to comply with our legal obligations and if you
                            do not wish to provide us with such personal data, it will affect our
                            ability to provide the services you request to us. If the provision of
                            your personal data is purely voluntary, we will inform you accordingly. In
                            case you do not wish to provide us required information, there will be no
                            implication upon you of this policy
                        </p>
                        <ol start={4}>
                            <li>
                                <strong>Where we obtain personal data from</strong>
                            </li>
                        </ol>
                        <p>We collect your personal data in the following ways:</p>
                        <p>
                            <strong>4.1 When you make a</strong>&nbsp;<strong>reservation</strong>
                        </p>
                        <p>
                            We collect personal data that you provide to us directly when you make a
                            booking through our websites, by email or phone, or communicate with us.
                            If you need to get in touch with our customer service team, or reach out
                            to us through other means (such as through social media), we will collect
                            your personal data from there.
                        </p>
                        <p>
                            <strong> 4.2 Property visits</strong>
                        </p>
                        <p>
                            We collect personal data when you visit our properties or use on-property
                            services and facilities, such as restaurants, concierge services, SPA’s
                            etc.
                        </p>
                        <p>
                            <strong>4.3 Third</strong>
                            <strong> Party Service Providers</strong>
                        </p>
                        <p>
                            You may make a reservation for our services through third-party service
                            providers such as online restaurant-reservation or travel-fare aggregator
                            websites. When you use some of these websites, you provide you’re the
                            reservation details to such third-parties, who in turn forward your such
                            details to us to finalise and administer your reservation. When you make a
                            reservation on a third-party website, we advise you to please also take
                            the time to read their privacy policy/notice, if you wish to understand
                            how these parties may process your personal data.
                        </p>
                        <p>
                            {" "}
                            You are under no legal obligation to furnish any personal data about you,
                            and the furnishing such data is at your discretion and at your own free
                            will. However, if you do not furnish certain information about you, we may
                            not be able to provide our services to you.
                        </p>
                        <ol start={5}>
                            <li>
                                <strong>How we use your personal data</strong>
                            </li>
                        </ol>
                        <p>We use your personal data in the following ways:</p>
                        <ul>
                            <li>
                                To complete and administer your reservation and stay, including
                                processing your payment, ensuring that your room is available, and
                                provide you with related customer service, including sending
                                confirmations or pre-arrival messages, assist you with meetings, events
                                or celebrations etc. Such use of your data is necessary to perform our
                                contract with you or, before a reservation is completed, to take steps
                                at your request prior to entering into a contract.
                            </li>
                            <li>
                                As necessary for our legitimate interests or those of a third party to
                                which we are transferring your personal data, the same include the
                                following:
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Our reservation website may allow you to create a user account. We use
                                the information you give us to administer this account, allowing you to
                                do a number of useful things such as managing your reservation, taking
                                advantage of special offers, make future reservations easily and manage
                                your personal settings etc.;
                            </li>
                        </ul>
                        <ul>
                            <li>
                                To communicate with you in relation to your reservation and stay,
                                including and not limited to respond to and handle any requests you have
                                made, to send you administrative information, such as security alerts,
                                or send you a questionnaire or invite you to provide a review about your
                                experience with us. If you have not finalised a reservation online, we
                                may contact you with a reminder to continue with your reservation. We
                                believe that this additional service benefits you as it allows you to
                                carry on with a reservation without having to fill in your reservation
                                details again;
                            </li>
                        </ul>
                        <ul>
                            <li>
                                To conduct analytics to inform our marketing strategy and enable us to
                                enhance and personalise the experience we offer to our customers and our
                                communications, including and not limited to, by creating customer
                                profiles to enable personalised direct marketing communications;
                            </li>
                        </ul>
                        <ul>
                            <li>
                                To provide you postal communications which we think will be of your
                                interest;
                            </li>
                        </ul>
                        <ul>
                            <li>
                                To administer this website, to better understand how visitors interact
                                with our websites and ensure that our website is presented in the most
                                effective manner for you and for your computer/device;
                            </li>
                        </ul>
                        <ul>
                            <li>
                                If you ask us to delete your data or to remove the same from our
                                marketing lists and we are required to fulfil your request, but we shall
                                keep the basic data to identify you and prevent further unwanted
                                processing;
                            </li>
                        </ul>
                        <ul>
                            <li>
                                To share personal data among our affiliated businesses for
                                administrative purposes and in relation to our sales and marketing
                                activities
                            </li>
                        </ul>
                        <ul>
                            <li>
                                We may anonymise, aggregate and de-identify the data that we collect and
                                use such anonymised, aggregated and de-identified data for our own
                                internal business purposes, for commercial, statistical and market
                                research purposes, including conducting research on demographics,
                                interests and behaviour. We sometimes ask our customers to take part in
                                market research. Please see the information provided when you are
                                invited to participate in market research in order to understand what
                                personal data is collected and how your personal data is used further;
                            </li>
                        </ul>
                        <ul>
                            <li>
                                For internal business/technical operations, including troubleshooting,
                                data analysis, testing, research, statistical and survey purposes and as
                                part of our efforts to keep our website, network and information systems
                                secure;
                            </li>
                        </ul>
                        <ul>
                            <li>
                                To, (a) respond to requests from competent authorities; (b) enforce our
                                house rules, where applicable; (c) protect our operations or those of
                                any of our affiliated businesses; (d) protect our rights, safety or
                                property, and/or that of our affiliated businesses, you or others; and
                                for enforcing or defending legal rights, or preventing damage;
                            </li>
                        </ul>
                        <ul>
                            <li>As necessary to comply with applicable laws and regulations;</li>
                        </ul>
                        <ul>
                            <li>
                                Our Company and our affiliated businesses may provide you, or permit
                                selected third-party service providers to provide you, with information
                                about goods or services, events and other promotions we feel may
                                interest you. We (or such third-party providers) will contact you by
                                email only with your consent, which was given at the time you provided
                                us with the personal data.
                            </li>
                        </ul>
                        <p>
                            As used in this Privacy Policy, ‘Legitimate Interests’ means the interests
                            of our Company and our affiliated businesses in conducting and managing
                            our organisation. When we process your personal data for our legitimate
                            interests, we make sure to consider and balance any potential impact on
                            you, and your rights under data protection laws. Our legitimate interests
                            do not automatically override your interests. We will not use your
                            personal data for activities where our interests are overridden by the
                            impact on you, unless we have your consent or those activities are
                            otherwise required or permitted to by law. You have the right to object at
                            any time to processing of your personal data that is based on our
                            legitimate interests, on grounds relating to your particular situation
                            (for more information on your rights, please see ‘Your Data Protection
                            Rights’ section below).
                        </p>
                        <ol start={6}>
                            <li>
                                <strong>Disclosure of your information</strong>
                            </li>
                        </ol>
                        <p>
                            We share your personal data with third parties in the following
                            situations:
                        </p>
                        <p>
                            <strong>Service providers</strong>
                        </p>
                        <p>
                            Our Company, like many businesses, sometimes hires selected third parties
                            who act on our behalf to support our operations, such as (i) card
                            processing or payment services (see the section below headed ‘Payment
                            Information’), (ii) credit reference agencies to protect against possible
                            fraud, (iii) providers of software management solutions for spa and
                            wellness businesses, (iv) reservation platforms, (v) hosting and other
                            information technology and related infrastructure service providers, (vi)
                            web analytics providers, (vii) providers of digital advertising services
                            and (viii) providers of CRM, marketing and sales software solutions.
                        </p>
                        <p>
                            Pursuant to our instructions, these parties may access, process or store
                            your personal data in the course of performing their duties to us and
                            solely in order to perform the services we have hired them to provide.
                        </p>
                        <p>
                            <strong>Espire Hospitality Group affiliated businesses</strong>
                        </p>
                        <p>
                            We operate on a global scale. In order to provide the services, you
                            request from us, our affiliated businesses may access and process the
                            information which we collect from you for the purposes described above,
                            including to offer products and services to you. Our affiliated businesses
                            will only use your data for the purposes for which we originally collected
                            it.
                        </p>
                        <p>
                            <strong>Business transfers</strong>
                        </p>
                        <p>
                            If we sell our business or our company assets are acquired by a
                            third-party personal data held by us about our members, membership
                            applicants or customers may be one of the transferred assets.
                        </p>
                        <p>
                            <strong> Administrative and legal reasons</strong>
                        </p>
                        <p>
                            If we need to disclose your personal data: (i) To comply with a legal
                            obligation and/or judicial or regulatory proceedings, a court order or
                            other legal process; or (ii) To enforce our Terms &amp; Conditions, house
                            rules or other applicable contract terms that you are subject to; or (iii)
                            To protect us, our members, membership applicants, or contractors against
                            loss or damage. This may include (without limit) exchanging information
                            with the police, courts or law enforcement organisations.
                        </p>
                        <ol start={7}>
                            <li>
                                <strong>Payment information</strong>
                            </li>
                        </ol>
                        <p>
                            Any credit/debit card payments and other payments you make through our
                            website will be processed by our third-party payment providers and the
                            payment data you submit will be securely stored and encrypted by our
                            payment service providers using up to date industry standards. Please note
                            that we do not ourselves directly process or store the debit/credit card
                            data that you submit.
                        </p>
                        <p>
                            {" "}
                            We may arrange that card or payment data you submit in connection with
                            your reservation is stored for the purpose of processing any future
                            payments that you make. We will store this data in accordance with our
                            legal obligations under applicable law and only for so long as legally
                            permitted. You may choose to opt out of us holding your card or payment
                            data although this means that you will need to re-supply us with
                            card/payment details for the purpose of making any future purchases or
                            reservations.
                        </p>
                        <ol start={8}>
                            <li>
                                <strong>Personal data transfers</strong>
                            </li>
                        </ol>
                        <p>
                            Your personal data may be transferred to and stored in countries other
                            than the country in which the information was originally collected, for
                            the purposes described above. Please note that the countries concerned may
                            not provide the same legal standards for protection of your personal data
                            that you have in the country in which the information was originally
                            collected Where we transfer your personal data to countries outside of the
                            country in which the information was originally collected, we will take
                            all steps to ensure that your personal data will continue to be protected.
                            We will implement appropriate safeguards for the transfer of personal data
                            to our service providers in accordance with the applicable laws, such as
                            implementing standard contractual clauses for data transfers. We have
                            implemented data transfer agreements pursuant to applicable data
                            protection law in order to implement appropriate safeguards for the
                            transfer of personal data to Espire Hospitality Group Resorts &amp; Spa
                            group and affiliated companies in countries outside the country in which
                            the information was originally collected.. If you would like to receive
                            more information on the safeguards that we implement, including copies of
                            relevant data transfer contracts, please contact us as indicated below.
                        </p>
                        <ol start={9}>
                            <li>
                                <strong>Tracking and Do Not Track disclosures</strong>
                            </li>
                        </ol>
                        <p>
                            Please be advised that parties other than the Company may collect personal
                            data about the online activities of the users of this website over time
                            and across different websites when a consumer uses this website. We shall
                            not be responsible for any use / misuse of such data by such other party.
                        </p>
                        <p>
                            {" "}
                            Do Not Track (‘DNT’) is a privacy preference you can set in most browsers.
                            If you enable DNT on your browser, we will honour your request not to be
                            tracked across the internet. For more information, including how to turn
                            on DNT, visit <a href="https://allaboutdnt.com/">allaboutdnt.com</a>
                            <u>.</u>
                        </p>
                        <ol start={10}>
                            <li>
                                <strong>Children</strong>
                            </li>
                        </ol>
                        <p>
                            The website is not directed to children who are under the age of 18 years
                            or another legal age determined by the laws of the country where you live
                            (whichever is higher). The Company does not knowingly collect personal
                            data from minors. If you have reason to believe that a child under the
                            applicable legal age has provided personal data to the Company through the
                            website, please contact us and we will endeavour to delete that
                            information from our databases.
                        </p>
                        <ol start={11}>
                            <li>
                                <strong>Security</strong>
                            </li>
                        </ol>
                        <p>
                            Where we have given you (or where you have chosen) a password or login
                            which enables you to access certain restricted parts of our website, you
                            are responsible for doing everything you reasonably can to keep these
                            details secret. You must not share your password or login details with
                            anyone else.
                        </p>
                        <p>
                            {" "}
                            Unfortunately, the transmission of information over the internet or public
                            communications networks can never be completely secure. We will take
                            appropriate technical and organisational security measures to protect the
                            personal data that you submit to us against unauthorised/unlawful access
                            or loss, destruction or damage, although we cannot 100 percent guarantee
                            the security of personal data that you provide to us online.
                        </p>
                        <ol start={12}>
                            <li>
                                <strong>Personal data retention</strong>
                            </li>
                        </ol>
                        <p>
                            We will keep your personal data only for as long as is reasonably
                            necessary for the purposes outlined in this Privacy Policy, or for the
                            duration required by any legal, regulatory, accounting or reporting
                            requirements, whichever is the longer. In particular, we retain membership
                            records for six years after expiration or termination of your membership.
                            We retain information submitted through our website and the other websites
                            we operate for two years following account closure or contact with you, as
                            applicable. When you consent to receive marketing communications, we will
                            keep your data until you unsubscribe.
                        </p>
                        <p>
                            {" "}
                            To determine the appropriate retention period for your personal data, we
                            consider the amount, nature, and sensitivity of the personal data, the
                            purposes for which we process your personal data, applicable legal
                            requirements or operational retention needs, and whether we can achieve
                            those purposes through other means. Upon expiry of the applicable
                            retention period we will securely destroy your personal data in accordance
                            with applicable laws and regulations. In some circumstances, we may
                            anonymise your personal data so that it can no longer be associated with
                            you, in which case it is no longer personal data.
                        </p>
                        <ol start={13}>
                            <li>
                                <strong>Changes to our Privacy Policy</strong>
                            </li>
                        </ol>
                        <p>
                            Any changes we may make to our Privacy Policy in the future will be posted
                            on this page. Please check back frequently to see any updates or
                            modifications. If required by the applicable laws, we will notify you of
                            any material or substantive changes to this Privacy Policy.
                        </p>
                        <ol start={14}>
                            <li>
                                <strong>Cookie Policy</strong>
                            </li>
                        </ol>
                        <p>We use cookies for tracking purposes.</p>
                        <p>
                            You can choose to have your computer warn you each time a cookie is being
                            sent, or you can choose to turn off all cookies. You can do this through
                            your browser (like Internet Explorer) settings. Each browser is a little
                            different from the other browser, so look at your browser’s help menu to
                            learn the correct way to modify your cookies.
                        </p>
                        <p>
                            If you disable cookies, some features will be disabled that make your site
                            experience more efficient and some of our services will not function
                            properly.
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default privacy_policy

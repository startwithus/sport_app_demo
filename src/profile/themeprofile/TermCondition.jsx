import React from 'react';
import './theme.css';
const DisclaimerSection = ({ children }) => (
    <div className="section-content">
        <p className="list-item">{children}</p>
    </div>)

const TermsAndConditions = ({ navigation }) => {


    return (
        <>
            {/* Header Section */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '20px 16px',
                    justifyContent: 'space-between',
                    backgroundColor: '#222222',
                }}
            >
                <div>

                    <h1
                        style={{
                            color: 'white',
                            fontSize: '20px',
                            fontWeight: 600,
                        }}
                    >
                        Terms And Conditions
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div style={{ padding: '16px' }}>
                <p className="listItem">
                    Welcome to Parthtech Developers LLP ("PARTH" or "Parthtech" or
                    "Company" or "We"). <br />
                    <br />
                    We're a software development firm based in Gurugram, Haryana (India).
                </p>

                <h2 style={styles.sectionHeader}>1. DEFINITION</h2>

                <ul>
                    <li className="listItem">
                        <strong>(i) "Act":</strong> It means and includes any of the
                        following (as applicable):
                        <ul>
                            <li className="listItem">(a) 'The Information and Technology Act, 2000';</li>
                            <li className="listItem">(b) 'The Information and Technology (Amendment) Act, 2008';</li>
                            <li className="listItem">(c) 'The Consumer Protection Act, 2019'.</li>
                        </ul>
                    </li>
                    <li className="listItem">
                        <strong>(ii) "Rule":</strong> It means and includes any of the
                        following (as applicable):
                        <ul>
                            <li className="listItem">
                                (a) The Information Technology (Reasonable Security Practices
                                And Procedures And Sensitive Personal Data or Information)
                                Rules, 2011;
                            </li>
                            <li className="listItem">
                                (b) The Consumer Protection (E-Commerce) Rules, 2020;
                            </li>
                        </ul>
                    </li>
                    <li className="listItem">
                        <strong>(iii) "Parthtech":</strong> It shall mean and include
                        Parthtech Developers LLP, its partners, employees, affiliates, key
                        managerial personnel, etc.
                    </li>
                    <li className="listItem">
                        <strong>(iv) "Company":</strong> It shall mean and include Parthtech
                        Developers LLP, its partners, employees, affiliates, key managerial
                        personnel, etc.
                    </li>
                    <li className="listItem">
                        <strong>(v) "We":</strong> It shall mean and include Parthtech
                        Developers LLP, its partners, employees, affiliates, key managerial
                        personnel, etc.
                    </li>
                    <li className="listItem">
                        <strong>(vi) "Website(s)/Mobile Application(s)":</strong> It shall
                        mean and include all websites and mobile applications available for
                        the User(s) owned and managed (directly or indirectly) by Parthtech
                        Developers LLP.
                    </li>
                    <li className="listItem">
                        <strong>(vii) "Service(s)":</strong> It means and includes the
                        various services offered by Parthtech to all its User(s) through the
                        Website(s)/Mobile Application(s) of PARTH.
                    </li>
                    <li className="listItem">
                        <strong>(viii) "User(s)":</strong> It shall mean and include all
                        potential users, subscribers, consumers, registered or unregistered,
                        natural or legal persons, who access, subscribe, or register to our
                        Website(s)/Mobile Application(s) of PARTH.
                    </li>
                    <li className="listItem">
                        <strong>(ix) "Materials":</strong> It means and includes all information,
                        materials, functions, texts, logos, designs, graphics, images, sounds,
                        software, documents, products, and services provided by Parthtech on our
                        Website(s)/Mobile Application(s) of PARTH.
                    </li>
                    <li className="listItem">
                        <strong>(x) "Public Forum":</strong> It means and includes a chat portal
                        for the users, etc., to post or upload comments, feedback, data, links,
                        videos, audios, graphics, images, messages, and other material available in
                        certain sections or pages of the Website(s)/Mobile Application(s) of PARTH.
                    </li>
                    <li className="listItem">
                        <strong>(xi) "User(s) Content":</strong> It means and includes all or any
                        comments, feedback, data, links, videos, audios, graphics, images,
                        messages, and any other materials uploaded by the Users of the said
                        Website(s)/Mobile Application(s) of PARTH.
                    </li>
                    <li className="listItem">
                        <strong>(xii) "Terms of Use":</strong> It shall mean and include all terms
                        and conditions incorporated into this agreement including any updates,
                        modifications done from time to time, and published in our Website(s)/Mobile
                        Application(s) of PARTH.
                    </li>
                    <li className="listItem">
                        <strong>(xiii) "Privacy Policy":</strong> It shall mean and include all
                        terms and conditions incorporated into a document published and available
                        in our Website(s)/Mobile Application(s) of PARTH under the heading called
                        'Privacy Policy'.
                    </li>
                    <li className="listItem">
                        <strong>(xiv) "User(s) Agreement":</strong> It refers to mean and include
                        both documents i.e., the Terms of Use and the Privacy Policy, as published
                        in our Website(s)/Mobile Application(s) of PARTH.
                    </li>
                </ul>

                <div>
                    <h2 style={styles.sectionHeader}>2. INTRODUCTION</h2>

                    <p className="listItem">
                        This user agreement ("Terms of Use") is an electronic record in terms of
                        Information Technology Act, 2000 ("Act") and rules thereunder as applicable and
                        the amended provisions pertaining to electronic records in various statutes as
                        amended by the Information Technology (Amendment) Act, 2008. This Terms of Use
                        is generated by a computer system and does not require any physical or digital
                        signatures.
                    </p>

                    <p className="listItem">
                        This Terms of Use govern your use of our Website(s)/Mobile Application(s) of
                        PARTH, Materials, Our Content and the services offered by PARTH upon the said
                        Website(s)/Mobile Application(s) ("Service(s)").
                    </p>

                    <p className="listItem">
                        For the purpose of this Terms of Use, wherever the context so require, User(s)
                        shall mean any natural or legal person who has agreed to become a member of our
                        Website(s)/Mobile Application(s) of PARTH by voluntarily registering on it as a
                        registered user or otherwise browses/visits our Website(s)/Mobile Application(s)
                        of PARTH without taking registration or subscription of any kind as available
                        during the relevant time. Your access or use of the said Website(s)/Mobile
                        Application(s) is subject to the terms and conditions of use as set out herein
                        under this Terms of Use and the Privacy Policy made available at our
                        Website(s)/Mobile Application(s) of PARTH.
                    </p>

                    <p className="listItem">
                        Please note that by accessing or using the said Website(s)/Mobile Application(s),
                        the User(s) voluntarily agree to be bound by this Terms of Use and, this Terms of
                        Use is a legally binding agreement between the User(s) and Parthtech.
                    </p>
                </div>

                <h2 style={styles.sectionHeader}>3. USER REGISTRATION</h2>

                <p className="listItem">
                    User(s) may use our Website(s)/Mobile Application(s) of PARTH without registration. However, in order to personalize your experience with PARTH, User(s) may create an account or you can login through your Google account or Mobile Number, as per the functionality made available on our Website(s)/Mobile Application(s) of PARTH during the relevant time.
                </p>

                <p className="listItem">
                    User(s) further undertake and agree to:
                </p>

                <ul>
                    <li className="listItem">
                        (a) provide true, accurate, correct and complete information as prompted by the
                        applicable registration form made available at our Website(s)/Mobile
                        Application(s) of PARTH;
                    </li>
                    <li className="listItem">
                        (b) maintain and update the true, accurate, correct and complete information
                        provided by you during the registration process at our Website(s)/Mobile
                        Application(s) of PARTH.
                    </li>
                </ul>

                <p className="listItem">
                    You may be required to choose a password and user name. You are solely responsible for maintaining the confidentiality of your password/user name and the created account.
                </p>

                <p className="listItem">
                    If at any time, Parthtech believe that in case the account and password of any User(s) is being misused in any manner, or that the information provided by such User(s) during the registration process is not true, inaccurate or incomplete, then Parthtech reserves the right to cancel your account and block your access to all platforms of our Website(s)/Mobile Application(s) of PARTH.
                </p>

                <p className="listItem">
                    User(s) are entirely responsible for any and all activities that occur under their account. User(s) also agree to notify with us regarding any prior use or any unauthorized use of their account or any breach of security. Further, We shall not be liable for any loss of User(s) that may incur as a result of someone else using its password or account or User(s) itself failure to comply with this section.
                </p>

                <h2 style={styles.sectionHeader}>4. USE OF OUR WEBSITE(S)/MOBILE APPLICATION(S) OF PARTH</h2>

                <div>
                    <p className="listItem">
                        Materials provided on our Website(s)/Mobile Application(s) of PARTH, including but
                        not limited to all information, materials, functions, texts, logos, designs, graphics,
                        images, sounds, software, documents, products and services ("Materials"), and the
                        selection, arrangement and display thereof, may be the copyrighted works of Parthtech
                        or its vendors or third party service providers.
                    </p>

                    <p className="listItem">
                        All Materials herein and all software are owned by Parthtech/its partners and protected
                        by worldwide copyright and other intellectual property laws as applicable. Except as stated
                        herein, none of the Materials may be modified, copied, reproduced, distributed, republished,
                        downloaded, displayed, sold, compiled, posted or transmitted in any form or by any means,
                        including but not limited to, electronic, mechanical, photocopying, recording or other means,
                        without the prior express written permission of Parthtech.
                    </p>

                    <p className="listItem">
                        We hereby grant all our User(s) the right to access and use our Website(s)/Mobile
                        Application(s) of PARTH only for their personal and non-commercial use. User(s) may not
                        use it for commercial purposes or in any way that is unlawful, or harms us or any other
                        person or entity, as determined in our sole discretion.
                    </p>

                    <p className="listItem">
                        User(s) may post or share any links, images, texts and/or contents from our Website(s)/Mobile
                        Application(s) of PARTH to social platforms like Facebook, Twitter, Google+, Whatsapp, etc.,
                        with appropriate link-back to the original source.
                    </p>

                    <p className="listItem">
                        Our Website(s)/Mobile Application(s) of PARTH including the Materials are made available for
                        public use in general and for non-commercial usage only. The intellectual property (if any)
                        available in our Website(s)/Mobile Application(s) of PARTH, including the Materials, are solely
                        owned by Parthtech/its partners.
                    </p>

                    <p className="listItem">
                        In respect of the contents available within our Website(s)/Mobile Application(s) of PARTH,
                        including the Materials, all User(s) have to:
                    </p>
                    <ul>
                        <li className="listItem">(a) Keep intact all copyright and other proprietary notices;</li>
                        <li className="listItem">
                            (b) Make no modifications to, and do not rent, lease, loan, sell, distribute, copy or create
                            any derivative works based upon the work of Parthtech or the Materials created/developed/ideated
                            by Parthtech, in whole or in part;
                        </li>
                        <li className="listItem">(c) Not transfer any Materials or software or any part thereof to any other computer or mobile device;</li>
                        <li className="listItem">
                            (d) Restrain from any commercial or business use of PARTH or any Materials including the
                            software etc. as the same is expressly prohibited by Parthtech;
                        </li>
                        <li className="listItem">
                            (e) Ensure that none of the all or any functionalities, features etc. available at our
                            Website(s)/Mobile Application(s) of PARTH are replicated or reproduced by our User(s)
                            or by any third person at any other different website, mobile application or any other platform.
                        </li>
                    </ul>

                    <p className="listItem">
                        Except as expressly provided above, nothing contained herein shall be construed as conferring,
                        by implication, estoppel or otherwise, any license or right in respect of any patent, trademark
                        or copyright of Parthtech upon any person.
                    </p>

                    <p className="listItem">
                        User(s) acknowledge and agree that nothing in this Terms of Use shall have the effect of transferring
                        the ownership of any copyrights, trademarks, service marks, trade names or any other proprietary
                        rights available with our Website(s)/Mobile Application(s) of PARTH, other Materials or any part thereof
                        to them or any other third party.
                    </p>
                </div>

                <div>
                    <h2 style={styles.sectionHeader}>5. PROHIBITED USE</h2>
                    <div>
                        <p className="listItem">
                            As a condition of use of our Website(s)/Mobile Application(s) of PARTH by the User(s), they will not use it for any purpose that is unlawful or prohibited by these Terms of Use or by any domestic or international laws, statutes, ordinances, and regulations. It is clarified that the use of our Website(s)/Mobile Application(s) of PARTH by the User(s) is the sole responsibility of the User(s) itself only.
                        </p>

                        <p className="listItem">You shall not display, upload, modify, publish, transmit, update or share any information into our Website(s)/Mobile Application(s) of PARTH, that –</p>

                        <p className="listItem">(a) belongs to another person and to which you do not have any right;</p>
                        <p className="listItem">(b) is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, pedophilic, libelous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner;</p>
                        <p className="listItem">(c) involves the transmission of "junk mail", "chain letters", "unsolicited mass mailing", "spamming" or "unsolicited commercial advertisement";</p>
                        <p className="listItem">(d) harm minors in any way;</p>
                        <p className="listItem">(e) infringes any patent, trademark, copyright or other proprietary rights;</p>
                        <p className="listItem">(f) violates any law for the time being in force;</p>
                        <p className="listItem">(g) deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;</p>
                        <p className="listItem">(h) impersonates another person;</p>
                        <p className="listItem">(i) contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of our resources/contents in general;</p>
                    </div>

                    <h2 style={styles.sectionHeader}>6. USE OF PUBLIC FORUM</h2>
                    <p className="listItem">
                        Certain sections or pages of the Website(s)/Mobile Application(s) of PARTH may contain a provision such as chat portal for users etc. (hereinafter referred to as the "Public Forum") for the users to post or upload comments, feedback, data, links, videos, audios, graphics, images, messages, and other material ("User Content"). Through the Public Forum, any User(s) can communicate with our other users of the Website(s)/Mobile Application(s) of PARTH.

                        User(s) are solely and entirely responsible regarding all their User Content that they upload, post, email, transmit or otherwise make available the same upon the Public Forum. User(s) fully understand and acknowledge that such User Content can be viewed by other users globally and therefore User(s) shall exercise due care to ensure that such User Content does not offend or abuse other users of our Website(s)/Mobile Application(s) of PARTH.

                        Parthtech does not control the User Content posted on the Public Forum and, as such, does not guarantee the accuracy, integrity or quality of such User Content. User(s) understand that by using our Website(s)/Mobile Application(s) of PARTH, they may be exposed to User Content that is offensive, indecent or objectionable.

                        Under no circumstances, Parthtech will be liable in any way for any User Content, including, but not limited to, for any errors or omissions in any User Content, or for any loss or damage of any kind incurred as a result of the use of any User Content posted, emailed, transmitted or otherwise made available on our Website(s)/Mobile Application(s) of PARTH.

                        When our User(s) post or upload their User Content on our Website(s)/Mobile Application(s), they grant Parthtech (and its licensees, distributors, agents, representatives and other authorized persons) the irrevocable rights in perpetual, royalty-free, non-exclusive and a license to reproduce, prepare derivative works based upon such User Content, and to distribute, perform or display such User Content, in whole or in part, in any form, on any media or technology known or hereafter developed.

                        User Content posted by our User(s) shall be subject to the relevant laws and may be disabled, or/and may be subject to investigation under the appropriate laws. User(s) agree that Parthtech may disclose or preserve User Content if required to do so by law or in the good faith belief that such preservation or disclosure is reasonably necessary to:

                        (a) comply with legal process;

                        (b) respond to claims that any User Content violates the rights of third-parties; or

                        (c) protect the rights, property, or personal safety of Parthtech and the public.

                        Furthermore, if any User(s) are found to be in non-compliance with the laws and regulations, these Terms of Use, or the Privacy Policy of our Website(s)/Mobile Application(s) of PARTH, Parthtech may terminate his/her account/block the access and, also further reserve the right to remove any of such User Content that is non-compliant with our policies in general.

                        User(s) agree that Parthtech has no liability or responsibility for the storage or deletion of any User Content and reserves the right to change its general practices and limits at any time in its sole discretion, with or without notice to its User(s).
                    </p>
                </div>

                <div>
                    <h2 style={styles.sectionHeader}>7. COPYRIGHT AND TRADEMARKS</h2>
                    <p className="listItem">
                        Website(s)/Mobile Application(s) of PARTH [including but not limited to text, audio, video or graphical images, or technology, the look and feel of the website/mobile application, trademarks and logos appearing on our Website(s)/Mobile Application(s) of PARTH] may be the property of Parthtech and may be owned and controlled by us or by other parties that have licensed their material to us. Materials on our Website(s)/Mobile Application(s) are solely for your personal, non-commercial use. Some content used on our Website(s)/Mobile Application(s) of PARTH may be taken from public domain and displayed herein. User(s) are bound to respect the respective intellectual property rights that may subsist in such Materials made available on our Website(s)/Mobile Application(s). User(s) must not copy, reproduce, republish, upload, post, transmit or distribute the Materials in any way, including by e-mail or other electronic means and whether directly or indirectly and must not assist any other person to do so. Without the prior written consent of the owner, modification of the Materials, use of the Materials on any other web site or networked computer environment or use of the Materials for any purpose other than personal, non-commercial use is a violation of the copyrights, trademarks and other proprietary rights, and is strictly prohibited. Any use for which the User(s) receive any remuneration, whether in money or otherwise, is a commercial use for the purposes of this clause. User(s) agree not to use any framing techniques to enclose any trademark or logo or other proprietary information of Parthtech/PARTH or remove, conceal or obliterate any copyright or other proprietary notice or any credit-line or date-line on other mark or source identifier included on our Website(s)/Mobile Application(s) of PARTH, including without limitation, the size, colour, location or style of all proprietary marks. Any infringement shall be vigorously defended and pursued to the fullest extent as permitted by the appropriate laws.

                        We respect other people's intellectual property rights and if you believe that any content or material on our Website(s)/Mobile Application(s) of PARTH infringes on your intellectual property rights, the User(s) or any other concerned person are requested to click upon contact us in order to know further details for necessary action.
                    </p>

                    <h2 style={styles.sectionHeader}>8. LINKS</h2>
                    <p className="listItem">
                        We may establish, on our Website(s)/Mobile Application(s) of PARTH, a hypertext link(s) to a third party website from time to time. Such link(s) are provided for information and convenience for our User(s) and does not state or imply any sponsorship or endorsement of third party website. Parthtech has no control over such third party website and use of such third party website or any offsite dealings with such third parties by User(s) is at their own risk and responsibility.
                    </p>

                    <h2 style={styles.sectionHeader}>9. USE OF GOOGLE ANALYTICS</h2>
                    <p className="listItem">
                        Our Website(s)/Mobile Application(s) of PARTH use Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses "cookies", which are text files placed on your computer, to help the website analyze how User(s) use the website or mobile application. The information generated by the cookie about your use of the website/mobile application (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information for the purpose of evaluating your use of the website or mobile application, compiling reports on website activity for website operators and providing other services relating to website activity and Internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. By using this website/mobile application, User(s) consent to the processing of data about you by Google in the manner and for the purposes set out above.
                    </p>

                    <h2 style={styles.sectionHeader}>10. ADVERTISING MATERIAL</h2>
                    <p className="listItem">
                        Some part or portion of our Website(s)/Mobile Application(s) of PARTH may contain advertising information or promotion material or other material submitted to us by third parties.

                        Responsibility for ensuring that the material submitted for inclusion on our Website(s)/Mobile Application(s) of PARTH complies with applicable laws is exclusively on the party providing the information/material. User(s) correspondence or business dealings with, or participation in promotions of advertisers or including payment and delivery of related goods or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between the User(s) and such advertiser. We will not be responsible or liable for any claim, error, omission, inaccuracy in advertising material or any loss or damage of any sort incurred as the result of any such dealings or as the result of the presence of such advertisers on our Website(s)/Mobile Application(s) of PARTH. We reserve the right to omit, suspend or change the position of any advertising material submitted for insertion.

                        We do not guarantee or give any kind of assurance to all or any of the User(s) doing anything in furtherance to or relying upon such advertising materials of third party advertisers.

                        It is expressly clarified that any sponsored content of any goods/service/activity (expressly displayed at respective portions on our Website(s)/Mobile Application(s) of PARTH) displayed are not solicited by Parthtech and it should not be deemed as a promotion made at the behest of Parthtech.
                    </p>

                    <h2 style={styles.sectionHeader}>11. INTERNATIONAL USE</h2>
                    <p className="listItem">
                        Parthtech is a company incorporated as per the laws applicable in India and it makes no representation that our Website(s)/Mobile Application(s) of PARTH is appropriate or available in locations outside of India. Those who choose to access it from other locations do so at their own risk and are solely responsible for compliance with applicable laws.
                    </p>
                </div>

                <div>
                    <h2 className="section-header">12. DISCLAIMER AND LIMITATION OF LIABILITY</h2>

                    <DisclaimerSection>
                        <p className="listItem">(a) By accessing and/or using our Website(s)/Mobile Application(s) of PARTH and its service (hereinafter referred to as the "Service"), User(s) have read, understood and agree to be legally bound by the terms of this disclaimer. User(s) agree that your access to the Service is at your sole risk and at your free will.</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(b) The Service and all material therein contained are distributed and transmitted on an "as is" and "as available" basis.</p>
                    </DisclaimerSection>

                    <DisclaimerSection >
                        <p className="listItem">(c) We disclaim any and all express or implied representations, warranties and/or conditions of any kind, including but not limited to warranties of completeness, accuracy, reliability, suitability, fitness, merchantability, availability, quality, fitness for any purpose, non-infringement, compatibility and/or security;</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(d) We are not responsible or liable for any infection or contamination of your system or device arising out of or in connection with your use of the Service or any connected service and do not warrant that the Service, the server(s) that make the Service available or any connected services are free from viruses, trojan horses, worms, software bombs or similar items or processes or other harmful components;</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(e) We are not responsible or liable for interruptions, delays, inaccuracies, errors, or omissions arising out of your use of the Service or any connected service or with respect to the material and user material thereon;</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(f) We do not warrant that the Service, or any connected service, linked microsites, any materials, third-party content, other services offered will be uninterrupted or error free or accurate or suit your purpose.</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(g) Industry standard efforts are made to keep the Service running smoothly. However, Parthtech takes no responsibility for, and will not be liable for, the Service being unavailable due to any reasons.</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(h) The entire risk as to the quality, accuracy, adequacy, completeness, fitness, correctness and validity of any material and use of and access to the Service or any connected service rests solely with you.</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(i) User(s) may encounter third party applications while using the Service including, without limitation, websites, widgets, software, services that interact with the service. Your/User(s) use of these third party applications shall be subject to such third party terms of use or license terms. Parthtech shall not be liable for any representations or warranties or obligations made by such third party applications to you under contract or law.</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(j) The Service may contain links to other third-party websites/services which are not under the control of Parthtech. Any website/application you visit by a link from the Service is solely the responsibility of the third party providing the website. The content of, including materials and information contained on, any third-party website/application to which you link from the Service is solely the responsibility of the provider of that third party website/application. Any transactions that you enter into with a third party listed in this Service or linked from this Service are solely between you and that third party. We are not responsible for any such third-party content/feature that may be accessed via the Service, nor the organizations publishing those third-party websites/applications, and hereby disclaim any responsibility and liability for such content. The inclusion of any links does not constitute or imply an endorsement or recommendation by us of the third-party, of the quality of any product or service, advice, information or other materials displayed, purchased, or obtained by you as a result of an advertisement/functionality/necessary embedment or integrations, any other information or offer in or in connection with the third party website/application.</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(k) To the fullest extent permissible by law, Parthtech, its affiliates, associates and group companies, and their respective directors, key managerial personnel, employees, officers, shareholders/partners, agents, representatives, sub-contractors, consultants and third-party providers shall not be liable for any loss and/or damage and/or claims of any kind (whether in contract, tort or breach of statutory duty or otherwise) arising out of or in connection with the Service and/or materials and/or user material and/or any connected third party website including without limitation:</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(i) Indirect or consequential loss;</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(ii) Loss of profits or revenue or savings or other economic loss;</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(iii) Incidental, direct, or special loss or similar damages;</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(iv) Loss of or damage to data;</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(v) Loss of business, reputation or goodwill;</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(vi) Loss of use;</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(vii) Wasted or lost management time;</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(viii) Even if advised of the possibility of such loss or damage or if such loss or damage was foreseeable.</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(l) When the User(s) share password or allow a third party to access his/her account, he/she agrees to remain responsible for compliance with this Terms of Use by any such third party. We will not be liable for any loss or damage arising from your failure to adequately safeguard your password or for any actions occurring under your password.</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(m) User(s) agree that Parthtech shall not be liable for any direct, special, incidental, indirect or consequential damages of any kind in connection with this agreement or your use of our Website(s)/Mobile Application(s) of PARTH, even if Parthtech has been informed in advance of the possibility of such damages.</p>                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(n) Notwithstanding the foregoing, in no event shall Parthtech or its affiliates, associates and group companies' liability to you for any and all losses, damages or claims of whatsoever nature (whether in contract, tort, breach of statutory duty or otherwise) including under the Privacy Policy shall exceed the amount paid by you, if any, for accessing the Service provided. However, the maximum liability, in any case, whatsoever, of Parthtech in all instances shall not exceed INR 500 (Indian National Rupees Five Hundred only).</p>
                    </DisclaimerSection>

                    <DisclaimerSection>
                        <p className="listItem">(o) If you are dissatisfied with the Service or with these Terms of Use or the Privacy Policy of our Website(s)/Mobile Application(s) of PARTH, your sole and exclusive remedy is to discontinue accessing or using the Service.</p>
                    </DisclaimerSection>

                    <h2 className="section-header">13. INDEMNITY</h2>
                    <p className="listItem">
                        User(s) agree to indemnify, defend and hold Company, its officers, directors, employees, affiliates or representatives harmless from any claim or action (including legal expenses) arising out of your use of our Website(s)/Mobile Application(s) of PARTH, your breach of the Terms of Use, Privacy Policy and violation of any third party intellectual property rights or privacy in any way.
                    </p>

                    <h2 className="section-header">14. CHANGES OF TERMS OF USE</h2>
                    <p className="listItem">
                        We reserve our right to modify these Terms of Use and the Privacy Policy at any time, at our sole discretion. Any changes to Terms of Use or the Privacy Policy will be posted on our Website(s)/Mobile Application(s) of PARTH and your continued use of the same following a posting of such change is your agreement to all such changes made & updated and, all User(s) are bound by the then-current version of these Terms of Use or the Privacy Policy inserted upon our Website(s)/Mobile Application(s) of PARTH. If any changes to these Terms of Use or the Privacy Policy are unacceptable to you, you must discontinue using our Website(s)/Mobile Application(s) of PARTH.
                    </p>

                    <h2 className="section-header">15. RELATIONSHIP</h2>
                    <p className="listItem">
                        None of the provisions of the Terms of Use and the Privacy Policy shall be deemed to constitute a partnership or agency between the User(s) and Parthtech and, User(s) shall have no authority to bind Parthtech in any manner, whatsoever.
                    </p>

                    <h2 className="section-header">16. TERMINATION</h2>
                    <p className="listItem">
                        We reserve the right, at our discretion, to immediately, with or without notice, suspend or terminate User's access to the Service or any portion thereof or to temporarily suspend or terminate access to the Service or portion thereof for a specific period of time for any violation of the Terms of Use.
                    </p>
                </div>

                <div>
                    <h2 className="section-header">17. MISCELLANEOUS</h2>

                    <div className="sectionContent">
                        <p className="listItem">(a) These Terms of Use contain the entire understanding between User(s) and Parthtech and supersedes all prior understanding between the User(s) and Parthtech in respect of the User(s)'s access and/or use of the Service.</p>

                        <p className="listItem">(b) If any provision of these Terms of Use is found to be illegal, invalid or unenforceable, then to the extent to which such provision is illegal, invalid or otherwise unenforceable, it shall be severed and deleted and the remaining provisions shall survive and remain in full force and effect and continue to be binding and enforceable.</p>

                        <p className="listItem">(c) User(s) confirm that their representations, warranties, undertakings and covenants, and the clauses relating to indemnities, limitation of liability, grant of license, governing law, confidentiality shall survive the efflux of time and the termination of these Terms of Use and the Privacy Policy of our Website(s)/Mobile Application(s) of PARTH.</p>

                        <p className="listItem">(d) Any express waiver or failure to exercise promptly any right under these Terms of Use and the Privacy Policy of our Website(s)/Mobile Application(s) of PARTH will not create a continuing waiver or any expectation of non-enforcement.</p>

                        <p className="listItem">(e) User(s) agree that Parthtech shall be under no liability whatsoever to its User(s) in the event of non-availability of the Service or any portion thereof occasioned by Act of God, pandemic, war, disease, revolution, riot, civil commotion, strike, lockout, flood, fire, satellite failure, network failures, server failures, failure of any public utility, terrorist attack, network maintenance, service maintenance, server maintenance, or any other cause whatsoever beyond the control of Parthtech.</p>

                        <p className="listItem">(f) Unless otherwise specified, the Service is presented solely for the purpose of entertainment and promoting programs. Parthtech makes no representation that the Service is appropriate or available for use in locations other than India. Those who choose to access the Service from locations other than in India, do so on their own initiative and risk, and are solely responsible for compliance with the relevant applicable local laws.</p>

                        <p className="listItem">(g) The Privacy Policy (as also provided in our Website(s)/Mobile Application(s) of PARTH), and any other documents, instructions, etc. included on our Website(s)/Mobile Application(s) of PARTH shall be read into this and shall be a part of these Terms of Use. The Privacy Policy shall form an integral part of the Terms of Use and both these documents constitute the User(s) Agreement and a legally binding contract between Parthtech and the User(s).</p>

                        <p className="listItem">(h) These Terms of Use shall be governed by and construed in accordance with the laws of India and be subject to the exclusive jurisdiction of the Courts at Gurgaon, Haryana (India), without giving effect to any principles of conflicts of law.</p>
                    </div>

                    <h2 className="section-header">18. SUBSCRIPTION AND REFUND POLICY</h2>
                    <div className="sectionContent">
                        <p className="listItem">Subscription Policy for online premium subscription:</p>

                        <p className="listItem">The purchase of a premium subscription will allow you access only to the content available under the category of content for which you have purchased the premium subscription.</p>

                        <p className="listItem">The services offered, and the validity/term of your premium subscription (“Subscription Period”) may vary depending on the plan you may purchase. Hence, before you proceed to purchase any premium subscription, please read and understand the details of the subscription(s) you intend to purchase on the Website(s)/Mobile Application(s). If you are unclear about any part of the Subscription offering or need further clarification, then please feel free to write to us prior to your purchase at the email address support@crex.live.</p>

                        <p className="listItem">We may personalize services and feature them as part of premium subscription, including showing you recommendations on content in the subscribed category, and other related categories that might be of interest to you. We also endeavor to continuously improve the premium subscription offerings to improve your platform experience.</p>

                        <p className="listItem">Subscription Period may be extended upon renewal of your already purchased premium subscription. The terms of renewal, if any, can be found on our Site and/or Application. However, please note that the prices may stand revised from the time of your first purchase of the premium subscription.</p>

                        <p className="listItem">The premium subscription is of a personal nature and is solely for the benefit of the person subscribing and is not allowed to be resold by you or transferred to or shared with any other person for consideration or otherwise. In the event we get to know that any User has resold / transferred / shared premium subscription with another person, then PARTH retains the right to cancel/terminate the premium subscription forthwith.</p>

                        <p className="listItem">Depending on the premium subscription service you have purchased, you may be given access to certain additional services and features. The additional terms applicable to each of these additional services may be made available to you on the platform in the form of terms and conditions or FAQs (Frequently Asked Questions) for that specific service, if any, or may be otherwise communicated to you. Hence, please be sure to go through the platform terms and conditions to understand the additional services, if any made available to you, and how you can avail the same.</p>

                        <h3 className="listItem">Pricing, Payments and Refund Policy for online premium subscriptions:</h3>

                        <h4 className="listItem">1. Pricing and Payments:</h4>
                        <p className="listItem">You can purchase a premium subscription service of your choice for any category(ies) of services/content by following instructions on the Website(s)/Mobile Application(s) and making the payment applicable for the premium subscription you intend to purchase.</p>

                        <p className="listItem">Please read the below terms applicable for the purchase of your platform premium subscription. The below terms are to be read with any other terms communicated to you at the time of purchase of your premium subscription:</p>

                        <ul>
                            <li className="listItem">You agree to pay all premium subscription fees and charges that are attributable to your account on the platform and that you are solely responsible for payment of these fees and charges. The premium subscriptions are payable in full and in advance and are valid until the completion of the applicable Subscription Period or until otherwise cancelled or terminated in accordance with the terms of this Agreement.</li>

                            <li className="listItem">If you have specifically authorized us, then the payments for the applicable premium subscriptions are automatically charged at the beginning of each billing period, unless you withdraw your authorization or submit a cancellation request to us directly through your account prior to the start of the billing period or in writing via email to the email address support@crex.live. The payment for your applicable premium subscription will be charged upon the anniversary of its billing period if the payments for applicable premium subscription are in more than a single tranche. Subject to your specific authorization and applicable laws, you agree that PARTH may charge any recurring service to the credit card or debit card or account that you provide/link at the time of your first purchase of the applicable premium subscription or as updated by you through your account on the Platform, provided such updation takes place prior to upcoming billing period.</li>
                        </ul>

                        <p className="listItem">If you have not completed payments for your applicable premium subscriptions, we may restrict / suspend your access to the Platform until your account becomes current and paid in full.</p>
                        <p className="listItem">We reserve the right to pursue the fee owed to us using collection methods which may include charging other payment methods on file with us and/or retaining collection agencies or legal counsel.</p>

                        <p className="listItem">Your payments to PARTH shall be subject to applicable taxes including without limitation Goods and Service Taxes (GST) or other similar taxes as may be applicable in your country of residence/from where you have created your account on the Platform/ purchased the underlying premium subscriptions.</p>

                        <p className="listItem">We reserve the right to change/revise the pricing of the premium subscriptions. For existing Subscriptions for which the applicable fees have been already received by us, we will implement the price changes during the next billing period or renewal of the premium subscription.</p>

                        <h4 className="listItem">2. Cancellation and Refund Policy:</h4>
                        <p className="listItem">You may cancel your Subscription through your account on the Platform. However, please note that the cancellation will become effective at the end of the then-current billing period; in other words, we will not renew your premium subscription, but the existing subscription will continue until the end of its billing period and there shall be no refund of the fee already paid for the same, unless otherwise specified in the Refund Policy. So, please read these terms and conditions and the Refund Policy carefully before purchasing any subscription plans, as once you have subscribed, you cannot change or cancel your subscription plan. Once you subscribe and make the required payment for any online subscriptions, it shall be final and there cannot be any changes or modifications to the same and neither will there be any refund.</p>

                        <p className="listItem">When you cancel your Subscription, PARTH may disable access to features made available to you upon your purchase of Subscription, while your account may continue to exist on the Platform.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

const styles = {
    container: {
        // margin: '0 auto',
        padding: '20px',
        // maxWidth: '800px',
    },
    header: {
        backgroundColor: '#222',
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
    },
    title: {
        fontSize: '24px',
        margin: '0',
    },
    section: {
        margin: '20px 0',
    },
    sectionContent: {
        padding: '16px',
        color: "gray"
    },
    sectionHeader: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: "white",
        marginTop: "2rem"

    },
    listItem: {
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '6px',
        color: "gray",
    },
};


export default TermsAndConditions;

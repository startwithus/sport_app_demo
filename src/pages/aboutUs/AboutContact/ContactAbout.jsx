import React from 'react'
import '../about.css'
import aboutmap from '../../../assets/maps.png'
import mobicon from '../../../assets/round-local-printshop-24px.svg'
import faxicon from '../../../assets/round-phone-24px.svg'
import ContactForm from './ContactForm'



const ContactAbout = () => {

    return (
        <div className=''>
            <div className='about-contact'>
                <h1>Contact Us</h1>
                <p className='about-para'>If you have any questions, feedback, or suggestions, please don't hesitate to get in touch with us. We love hearing from our users and are always looking for ways to improve our platform.
                    Thank you for being a part of the [Your Sports App] family. Together, we can take sports to new heights!</p>
            </div>

            <div className=''>
                <div className='about-map'>
                    <img src={aboutmap} alt='' />
                </div>

                <div className='map-section'>
                    <div className='company'>
                        <h3>ABC Company, 123 East, 17th Street, St. louis 10001</h3>

                    </div>
                    <div className='icon-section'>
                        <div className='contact-icon'>
                            <img src={faxicon} alt='' />
                            <p>(123) 456-7890</p>
                        </div>
                        <div className='contact-icon'>
                            <img src={mobicon} alt='' />
                            <p>(123) 456-7890</p>
                        </div>

                    </div>
                </div>


            </div>

            <div className='form-section-contact'>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactAbout

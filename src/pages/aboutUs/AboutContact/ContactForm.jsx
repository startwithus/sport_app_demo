import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../about.css'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string(),
});

const ContactForm = () => {
  return (
    <>
      <div>
            <form>
              <div className='name-phone'>
                <input name="firstName" id="firstName" placeholder="Name" autoComplete='off' />
                <input name="phone" id='phone' autoComplete='off' placeholder="Phone" />
              </div>
             
              <div className='email'>
                <input name="email" id="email" type="email" autoComplete='off' placeholder="Email" />
              </div>
              <div className='message'>
                <input name="message" id="message" type="text" autoComplete='off' placeholder="Message*" />
       
              </div>
              <div className='saveButton'>
                <button className='save' type="submit">Send</button>
              </div>
            </form>
      </div>
    </>
  )
}

export default ContactForm

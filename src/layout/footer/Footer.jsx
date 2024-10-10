import React, { useState, useEffect } from 'react'
import '../footer/footer.css'
import logo from '../../assets/logo.png'
import logoIcon from '../../assets/Icon.svg'
import { Link } from 'react-router-dom'
import location from '../../assets/location.svg'
import phone from '../../assets/phone.svg'
import email from '../../assets/email.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import insta from '../../assets/instagram.svg'
import twitt from '../../assets/twitter.svg'
import linkd from '../../assets/linkedin.svg'
import { FcPhoneAndroid } from 'react-icons/fc'
import { selectTranslations } from '../../reduxx/languageSlice'
import { useSelector } from 'react-redux';


const Footer = () => {
  const translations = useSelector(selectTranslations);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change 768 to your desired breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const iconData = [{ iconImg: facebook }, { iconImg: twitt }, { iconImg: linkd }, { iconImg: youtube }, { iconImg: insta }]
  return (
    <>
      <footer>
        <div className='layout-container'>
          <div className="footer-logo flex">
            <div className="footer-logo-img">
              <img src={logoIcon} alt="" className='icon-img' />  <h2 style={{ color: "white" }}>CRICFAST</h2>
            </div>

            <Link to="https://sports-app-web.s3.ap-south-1.amazonaws.com/frontend-pannel/application-70865fa5-09ce-426b-9689-c692927e69b8.apk" className="dwn-apps">
              <FcPhoneAndroid className='mobile-icon' />
              <h2>Download App</h2>
            </Link>

            <div className="footer-icon-container">
              <div className='address-icon-flex'><img src={location} alt="" className='social-icon' /> <span>ABC Company, 123 East, 17th Street, St. louis 10001</span> </div>
              <div className="footer-phone-flex flex">
                <div className='address-icon-flex'><img src={phone} alt="" className='social-icon' /> <span>(123) 456-7890</span> </div>
                <div className='address-icon-flex'><img src={email} alt="" className='social-icon' /> <span>(123) 456-7890</span> </div>
              </div>
              <div className="social-icon-container">
                <p>Social Media</p>
                <div className="social-icon-container">
                  {
                    iconData.map((el, i) => (
                      <div className="" key={i}>
                        <img src={el.iconImg} alt="" className='social-icon' />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="footer-link-container flex">
          <ul>
            <li><Link to="/">{translations['Home']}</Link></li>
            <li><Link to="/series">{translations['Series']}</Link></li>
            <li><Link to="/stats">{translations['Stats']}</Link></li>
            <li><Link to="/fixtures">{translations['Fixtures']}</Link></li>
            <li><Link to="/about">{translations['About']}</Link></li>
          </ul>
          <p>
            Copyright © 2023 • ABC Company.
          </p>
        </div>
        </div>

       
      </footer>

    </>
  )
}

export default Footer
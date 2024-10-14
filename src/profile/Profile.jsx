import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import usericon from '../assets/user-icon.png'
import { motion } from 'framer-motion'
import editicon from '../assets/edit.png'
import themeicon from '../assets/palete.png'
import settingicon from '../assets/setting.png'
import logouticon from '../assets/logout.png'
import downArrow from '../assets/downarrow.svg'
import '../profile/profile.css'
import { selectTranslations } from '../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';
import { CiMail } from "react-icons/ci";


const Profile = ({ setProfileOpen }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const user_name = localStorage.getItem('userName')
  const user_img = localStorage.getItem('userImage')
  const [toggleOpen, setToggleOpen] = useState(false)
  const translations = useSelector(selectTranslations)

  const handleLogout = async () => {
    if (window.confirm('Are You Sure You Want To Logout?')) {
      localStorage.clear();
      navigate('/');
      window.location.reload()
    };
  }
  return (

    <motion.div className="profile-flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}>
      <div className='profile-head'>
        <div className='prof-icon' onClick={() => setProfileOpen(false)}>
          {
            user_img ? <img src={user_img} alt='' /> : <img src={usericon} alt='' />
          }
          <h3>{user_name?.toUpperCase()}</h3>
        </div>
      </div>
      <div className='edit-profile-section'>
        <div className={`icons-profile ${location.pathname.includes('editProfile') ? 'active-side' : null}`} onClick={() => { navigate("/editProfile"); setProfileOpen(false) }}>
          <img src={editicon} alt='' />
          <h4>{translations['EditProfile']}</h4>
        </div>
        <div className={`icons-profile ${location.pathname.includes('themeProfile') ? 'active-side' : null}`} onClick={() => { navigate("/themeProfile"); setProfileOpen(false) }}>
          <img src={themeicon} alt='' />
          <h4>{translations['Theme']}</h4>
        </div>
        <div className={`icons-profile ${location.pathname.includes('mail') ? 'active-side' : null}`} onClick={() => { navigate("/mail"); setProfileOpen(false) }}>
          <CiMail style={{ fontWeight: "900", color: "#f44464" }} />

          <h4>{translations['Email']}</h4>
        </div>
        <div className='icons-profile' >
          <img src={settingicon} alt='' />
          <h4>{translations['Setting']}</h4>
          <div className='downarrow' onClick={() => setToggleOpen(!toggleOpen)}>
            <img src={downArrow} alt="" />
          </div>
        </div>
        {
          toggleOpen && (
            <div className="match-setting-acc" >
              <p className={`icons-profile ${location.pathname.includes('/profileMatchSetting') ? 'active-side' : null}`} onClick={() => { navigate("/profileMatchSetting"); setProfileOpen(false) }}>{translations['MatchSetting']}</p>

              <p className={`icons-profile ${location.pathname.includes('/notification') ? 'active-side' : null}`} onClick={() => { navigate("/notification"); setProfileOpen(false) }}>{translations['NotificationSetting']}</p>
              <div className='section-log-1' onClick={handleLogout} >
                <img src={logouticon} alt='' />
                <h4 >{translations['Logout']}</h4>
              </div>
            </div>
          )
        }
      </div>
      <div className='profile-foot'>
        <p>{translations['AboutUs']}</p>
        <p>{translations['PrivacyPolicy']}</p>
        <p>{translations['TermsAndCondition']}</p>
        <p>{translations['RateUs']}</p>
        <p>{translations['ReportAProblem']}</p>
      </div>
    </motion.div>
  )
}

export default Profile
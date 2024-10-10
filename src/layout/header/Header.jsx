import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../header/header.css'
import logoIcon from '../../assets/Icon.svg'
import userIcon from '../../assets/person-dummy.jpg'
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector'
import { useSelector } from 'react-redux';
import { selectTranslations } from '../../reduxx/languageSlice'
import seriesIcon from '../../assets/seriesIcon.svg'
import home from '../../assets/home.svg'
import fixture from '../../assets/calender.svg'
import { IoIosStats } from 'react-icons/io'

const Header = () => {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false);
  const user_img = localStorage.getItem('userImage')
  const name = localStorage.getItem('userName')
  const [activeItem, setActiveItem] = useState(1); // State to track active item
  const translations = useSelector(selectTranslations)
  const handleClick = (index) => {
    setActiveItem(index);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change 768 to your desired breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);
  const list = document.querySelectorAll('.list');
  function activeLink() {
    list.forEach((item) =>
      item.classList.remove('active'));
    this.classList.add('active');
  }
  list.forEach((item) =>
    item.addEventListener('click', activeLink));
  return (
    <nav className='navbar'>
      <div className={isMobile ? 'navbar-mobile' : 'navbar-container'}>
        <div className="logo-img flex-2" onClick={() => navigate('/')}>
          <img src={logoIcon} alt="" className='icon-img' /> <h2 style={{ color: "white" }}>CRICFAST</h2>
        </div>
        <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
          <li>

            <NavLink to="/" >{translations['Home']}</NavLink>
          </li>
          <li >
            <NavLink to="/series" >{translations['Series']}  </NavLink>
          </li>
          <li>
            <NavLink to="/stats">{translations['Stats']}</NavLink>
          </li>
          <li>
            <NavLink to="/fixtures">{translations['Fixtures']}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{translations['About']}</NavLink>
          </li>
          <li>
            <div className="">
              <LanguageSelector />
            </div>
          </li>
          <li>
            <NavLink to="/editProfile"  >
              {
                user_img ? <img src={user_img} alt="" className='user-icon' /> : <img src={userIcon} alt="" className='user-icon' />
              }
            </NavLink>
          </li>

        </ul>
        {
          isMobile ? <ul className='nav-links-mobile'>

            <li className='list-link'>
              <NavLink to="/series" className={({ isActive, inActive }) => {
                return isActive ? "active" : inActive ? "inactive" : "";
              }}
              >
              
                <img src={seriesIcon} alt="" className='user-icon' />
              </NavLink>
              <NavLink to="/series" style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "#F44464" : "white",
                  backgroundColor: isActive ? "transparent" : "inherit",
                  transition: ".4s all linear",
                  display: isActive ? "block" : "none"
                };
              }}
              >
                Series
              </NavLink>
            </li>
            <li className='list-link'>
              <NavLink to="/stats" className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
              >
                <IoIosStats style={{ width: "1.5rem", height: "1.5rem", color: "white" }} />

              </NavLink>
              <NavLink to="/stats" style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "#F44464" : "white",
                  backgroundColor: isActive ? "transparent" : "inherit",
                  display: isActive ? "block" : "none",
                  transition: ".4s all linear",
                };
              }}
              >
                Stats
              </NavLink>
            </li>
            <li className='list-link'>
              <NavLink to="/" className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
              >
                <img src={home} alt="" className='user-icon' />
              </NavLink>
              <NavLink to="/" style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "#F44464" : "white",
                  backgroundColor: isActive ? "transparent" : "inherit",
                  display: isActive ? "block" : "none",
                  transition: ".4s all linear",
                };
              }}
              >
                Home
              </NavLink>
            </li>
            <li className='list-link'>
              <NavLink to="/fixtures" className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
              >
                <img src={fixture} alt="" className='user-icon' />

              </NavLink>
              <NavLink to="/fixtures" style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "#F44464" : "white",
                  transition: ".4s all linear",
                  display: isActive ? "block" : "none",
                  backgroundColor: isActive ? "transparent" : "inherit",

                };
              }}
              >
                Fixtures
              </NavLink>
            </li>
            <li className='list-link'>
              <NavLink to="/editProfile" className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
              >
                {
                  user_img ? <img src={user_img} alt="" className='user-icon' /> : <img src={userIcon} alt="" className='user-icon' />
                }
              </NavLink>
              <NavLink to="/editProfile" style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "#F44464" : "white",
                  backgroundColor: isActive ? "transparent" : "inherit",
                  display: isActive ? "block" : "none",
                  transition: ".4s all linear",
                  textTransform: "capitalize",
                };
              }}
              >
                {
                  name ? name : "Profile"
                }
              </NavLink>
            </li>
            {/* <div className="indicator"></div> */}
          </ul> : null
        }
      </div>


    </nav>
  )
}

export default Header

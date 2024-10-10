import React from 'react'
import './theme.css'
import radioButton from '../../assets/radio button.svg'
import radiounchecked from '../../assets/radio_button_unchecked.svg'
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';

const ThemeProfile = () => {
  const translations = useSelector(selectTranslations)

  const theme = [{
    name: "Theme Name 01",
    color: "#C7897D",
    status: false
  },
  {
    name: "Theme Name 02",
    color: "#8CC3C4",
    status: false
  },
  {
    name: "Theme Name 02",
    color: "#9586BA",
    status: false
  },
  {
    name: "Theme Name 02",
    color: "#FF8F27",
    status: true
  },
  {
    name: "Theme Name 02",
    color: "#A6A2FF",
    status: false
  }, {
    name: "Theme Name 02",
    color: "#00CEF6",
    status: false
  }, {
    name: "Theme Name 02",
    color: "#F79696",
    status: false
  },
  {
    name: "Theme Name 02",
    color: "#5CA891",
    status: false
  },
  {
    name: "Theme Name 02",
    color: "#D3CB02",
    status: false
  },
  {
    name: "Theme Name 02",
    color: "#2E95CF",
    status: false
  },

  ]

  return (
    <>
        <div className='profile-match-container'>
        <div className='edit-section'>
                            <h3>{translations['']}</h3>
                        </div>
          <div className=''>
            {
              theme.map(e => (
                <div className='theme-section-color'>
                  <div className='theme-section'>
                    <div className='theme-color'>
                      <div className='theme-black' style={{ backgroundColor: e.color }}>
                      </div>
                      <div className='theme-name'>
                        <h4>{e.name}</h4>
                      </div>
                    </div>
                    <div className='radio'>
                      {
                        e.status ? <img src={radioButton} alt='' /> : <img src={radiounchecked} alt="" />
                      }
                    </div>
                  </div>
                </div>

              ))
            }


          </div>
        </div>
  
    </>
  )
}

export default ThemeProfile

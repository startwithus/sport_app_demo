import React from 'react'
import volume from '../../assets/volumn.svg'
// import handle1 from '../../assets/Handle1 container.svg'
import graphic from '../../assets/graphic.svg'
import radio1 from '../../assets/radio.svg'
import radio from '../../assets/radio button.svg'
import timelapse from '../../assets/timelapse.svg'
import line53 from '../../assets/line1.svg'
import line54 from '../../assets/line2.svg'
import line55 from '../../assets/line3.svg'
import "../speechSettings/speechsetting.css"
import { useNavigate } from 'react-router-dom'
import ToggleButton from '../../components/toggleButton/ToggleButton'
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';
import arrowRight from '../../assets/arrow-right.svg'
const SpeechSetting = () => {
  const navigate = useNavigate()
  const translations = useSelector(selectTranslations)

  return (
    <div className='profile-match-container'>
      <div>
        <div className="">
          <div className='edit-section' onClick={() => navigate("/profileMatchSetting")}>
            <img src={arrowRight} alt="" width={20} height={20} />
            <h3>{translations['MatchSetting']}</h3>
          </div>

        </div>
        {/* ******************************** speechsetting-container ******************************  */}
        <div className="speechsetting-container">
          <div className='speech-head'>
            <div className='prof-icon'>
              <h3>{translations['SpeechSettings(Accessibility)']}</h3>
            </div>
            <div className='cross'>
              {/* <RxCross2 /> */}
            </div>
          </div>

          {/* ******** */}
          <div className="speech-sound-container">
            <p>{translations['Speech']}</p>
            <img src={volume} alt="" />
          </div>

          <div className="speech-sound-container">
            <p>{translations['SessionSpeech']}</p>

            <ToggleButton />

          </div>

          <div className="speech-sound-container">
            <div className="speech-line"></div>
          </div>

          {/* ********************************* speechvoice-container **************************** */}
          <div className="speechvoice-container">
            <div className='speech-head'>
              <div className='speech-icon'>
                <h3>{translations['VoiceSelection']}</h3>
              </div>
            </div>

            <div className='voice-container'>
              <div className='speech-voice-box'>
                <div className="group-tab active-group-tab" >
                  <img src={graphic} alt="" />
                </div>
                <p className="speech-voice-nm">01</p>
              </div>
              <div className='speech-voice-box'>
                <div className="group-tab active-group-tab" >
                  <img src={graphic} alt="" />
                </div>
                <p className="speech-voice-nm">02</p>
              </div>
              <div className='speech-voice-box'>
                <div className="group-tab active-group-tab" >
                  <img src={graphic} alt="" />
                </div>
                <p className="speech-voice-nm">03</p>
              </div>
              <div className='speech-voice-box'>
                <div className="group-tab active-group-tab" >
                  <img src={graphic} alt="" />
                </div>
                <p className="speech-voice-nm">04</p>
              </div>
            </div>

            {/* ******************** */}
            <div className="voice-container">
              <div className="point-box">
                <p>{translations['Ball']}</p>
              </div>
              <div className="point-box">
                <p>6</p>
              </div>
              <div className="point-box">
                <p>4</p>
              </div>
              <div className="point-box">
                <p>{translations['Wicket']}</p>
              </div>
              <div className="point-box">
                <p>1</p>
              </div>
            </div>
          </div>

          <div className="speech-sound-container">
            <div className="speech-line"></div>
          </div>

          {/* *************************** Speech Language ************************* */}
          <div className="speech-language-container">
            <div className='speech-icon'>
              <h3>{translations['SpeechLanguage']}</h3>
            </div>

            <div className="language-container">
              <div className="language-box">
                <div className="language-hindi">
                  <p>धनुर्विद्या</p>
                  <p>Hindi</p>
                </div>
                <div className="radio-language">
                  <img src={radio1} alt="" />
                </div>
              </div>
              <div className="language-box">
                <p>English</p>
                <div className="radio-language">
                  <img src={radio} alt="" />
                </div>
              </div>
            </div>
          </div>


          <div className="speech-sound-container">
            <div className="speech-line"></div>
          </div>
          {/* ************************  speech-speed-container ********************* */}
          <div className="speech-speed-container">
            <div className='speech-icon'>
              <h3>{translations['SpeechSpeed']}</h3>
            </div>

            <div className="language-box">
              <div className="radio-language">
                <img src={timelapse} alt="" />
              </div>

              <div className="speed-line-box">
                <div className="speed-line2-box">
                  <div className="speed-line3-box">
                    <img src={line53} alt="" />
                    <img src={line54} alt="" />
                    <img src={line55} alt="" />
                  </div>
                </div>
              </div>

              <h3 className="speed-boost">5x</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpeechSetting

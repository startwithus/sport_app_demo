import React from 'react'
import './profilematch.css'
import Trophy from '../../assets/trophy_FILL0.svg'
import rightArrow from '../../assets/chevron_right_FIL.svg'
import recond_voice from '../../assets/record_voice.svg'
import { useNavigate } from 'react-router-dom'
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';
const ProfileMatchSetting = () => {
    const navigate = useNavigate()
    const translations = useSelector(selectTranslations)

    return (
       
            <div className='profile-match-container' style={{height:"100vh"}}>
                <div>
                        <div className='edit-section'>
                            <h3>{translations['MatchSetting']}</h3>
                        </div>
                    <div className='prob-section'>
                        <div className=''>
                            <div className='tropy-section'>
                                <img src={Trophy} alt='' />
                                <div className='project-view'>
                                    <h4>{translations['WinProbabilityView']}</h4>
                                    <div className='rightArrow-view'>
                                    <p>{translations['CustomizeYourViewWithOptionsForSelectingaViewAndRealTimeScoreprojection']}</p>
                                        <img src={rightArrow} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='prob-section'>
                        <div className=''>
                            <div className='tropy-section' onClick={()=> navigate("/SpeechSetting")}>
                                <img src={recond_voice} alt='' />
                                <div className='project-view' >
                                    <h4>{translations['SpeechSettings(Accessibility)']}</h4>
                                    <div className='rightArrow-view'>
                                    <p>{translations['CustomizeYourViewWithOptionsForSelectingaViewAndRealTimeScoreprojection']}</p>

                                        <img src={rightArrow} alt='' />

                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </div>
       
       
    )
}

export default ProfileMatchSetting

import React from 'react'
import '../matchInfo/matchinfo.css'
import arrowDown from '../../../assets/arrow-down.svg'
import WeatherCondition from './WeatherCondition'
import RecentMatchSlider from './RecentMatchSlider'
import HeadToHead from '../matchInfo/headtohead/HeadToHead'
import { selectTranslations } from '../../../reduxx/languageSlice';
import { useSelector } from 'react-redux';
import WinPrediction from '../matchLive/WinPrediction'
import teamImage from '../../../assets/t.webp'
const MatchInfo = ({ matchInfoData }) => {
    const translations = useSelector(selectTranslations)
    return (
        <div className="match-info">
            <div className="head-wrapper flex">
                <p className='batting-career-name'>{translations['TeamForm']} <span className="fill-player"></span> <span className='batting-style'>{translations['LastMatches']}</span> </p>
            </div>
            <div className="team-form-container">
                <div className="team-main-form">
                    <div className='team-form-content'>
                        <div className='team-logo'>
                        {matchInfoData?.team?.a?.url ? <img src={matchInfoData?.team?.a?.url} alt="" /> : <img src={teamImage} alt="" />}
                        </div>
                        <p className=''>{matchInfoData?.team?.a?.code ?? ""}</p>
                    </div>
                    <div className="loss-box-container">
                        <div className="loss-box">
                            <p>L</p>
                        </div>
                        <div className="loss-box">
                            <p>L</p>
                        </div>
                        <div className="loss-box">
                            <p>W</p>
                        </div>
                        <div className="loss-box">
                            <p>W</p>
                        </div>
                    </div>
                </div>
                <div className="arrow-container">
                    <img src={arrowDown} alt="" />
                </div>
            </div>
            <div className="team-form-container">
                <div className="team-main-form">
                    <div className='team-form-content'>
                        <div className='team-logo'>
                            {matchInfoData?.team?.b?.url ? <img src={matchInfoData?.team?.b?.url} alt="" /> : <img src={teamImage} alt="" />}
                        </div>
                        <p className=''>{matchInfoData?.team?.b?.code ?? ""}</p>
                    </div>
                    <div className="loss-box-container">
                        <div className="loss-box">
                            <p>L</p>
                        </div>
                        <div className="loss-box">
                            <p>L</p>
                        </div>
                        <div className="loss-box">
                            <p>W</p>
                        </div>
                        <div className="loss-box">
                            <p>W</p>
                        </div>
                    </div>
                </div>
                <div className="arrow-container">
                    <img src={arrowDown} alt="" />
                </div>
            </div>
            <WeatherCondition matchInfoData={matchInfoData} />
            <RecentMatchSlider matchInfoData={matchInfoData} />
            <HeadToHead matchInfoData={matchInfoData} />
            <WinPrediction matchInfoData={matchInfoData} />
        </div>


    )
}

export default MatchInfo
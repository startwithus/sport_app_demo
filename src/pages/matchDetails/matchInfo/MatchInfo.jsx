import React, { useEffect, useState } from 'react'
import '../matchInfo/matchinfo.css'
import arrowDown from '../../../assets/arrow-down.svg'
import WeatherCondition from './WeatherCondition'
import RecentMatchSlider from './RecentMatchSlider'
import HeadToHead from '../matchInfo/headtohead/HeadToHead'
import { selectTranslations } from '../../../reduxx/languageSlice'
import { useSelector } from 'react-redux'
import WinPrediction from '../matchLive/WinPrediction'
import teamImage from '../../../assets/t.webp'
import { getCaller } from '../../../services/api'

const MatchInfo = ({ matchInfoData }) => {
    const translations = useSelector(selectTranslations)
    const [lastFiveMatch, setLastFiveMatches] = useState({ teamA: [], teamB: [] })

    const getFiveMatches = async () => {
        const res = await getCaller(`user/v1/get/five/match?short_name=${matchInfoData.short_name}`)
        setLastFiveMatches(res.data)
    }

    useEffect(() => {
        getFiveMatches()
    }, [matchInfoData])

    return (
        <div className="match-info">
            <div className="head-wrapper flex">
                <p className='batting-career-name'>
                    {translations['TeamForm']} 
                    <span className="fill-player"></span> 
                    <span className='batting-style'>{translations['LastMatches']}</span>
                </p>
            </div>

            {/* Team A Form */}
            <div className="team-form-container">
                <div className="team-main-form">
                    <div className='team-form-content'>
                        <div className='team-logo'>
                            {matchInfoData?.team?.a?.url ? 
                                <img src={matchInfoData?.team?.a?.url} alt="" /> : 
                                <img src={teamImage} alt="" />
                            }
                        </div>
                        <p>{matchInfoData?.team?.a?.code ?? ""}</p>
                    </div>
                    <div className="loss-box-container">
                        {lastFiveMatch.teamA.map((match, index) => (
                            <div key={index} className="loss-box">
                                <p>{match.result === 'w' ? 'W' : 'L'}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team B Form */}
            <div className="team-form-container">
                <div className="team-main-form">
                    <div className='team-form-content'>
                        <div className='team-logo'>
                            {matchInfoData?.team?.b?.url ? 
                                <img src={matchInfoData?.team?.b?.url} alt="" /> : 
                                <img src={teamImage} alt="" />
                            }
                        </div>
                        <p>{matchInfoData?.team?.b?.code ?? ""}</p>
                    </div>
                    <div className="loss-box-container">
                        {lastFiveMatch.teamB.map((match, index) => (
                            <div key={index} className="loss-box">
                                <p>{match.result === 'w' ? 'W' : 'L'}</p>
                            </div>
                        ))}
                    </div>
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

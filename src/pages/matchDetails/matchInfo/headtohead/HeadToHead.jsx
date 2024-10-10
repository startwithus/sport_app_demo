import React from 'react'
import arrowDown from '../../../../assets/arrow-down.svg'
import '../headtohead/headtohead.css'
import ProgressBar from '../../../../components/Progress/ProgressBar';
import { selectTranslations } from '../../../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import LastTenMatches from './LastTenMatches';
import teamImage from '../../../../assets/t.webp'
const HeadToHead = ({ matchInfoData }) => {
    const translations = useSelector(selectTranslations)

    const [opentoggle, setopentoggle] = useState(false)
    return (
        <div>
            <div className='Head-section-info'>
                <div className="head-wrapper flex">
                    <p className='batting-career-name'>{translations['HeadToHead']}</p>
                    {/* <Link to="#">View All</Link> */}
                </div>

                <div className='head-back'>
                    <div className="head-team-container">
                        <div className='team-logo'>
                        {matchInfoData?.team?.a?.url ? <img src={matchInfoData?.team?.a?.url} alt="" /> : <img src={teamImage} alt="" />}
                          
                            <p style={{ color: "white",marginLeft:"1rem" }}>{matchInfoData?.team?.a?.code ?? ""}</p>
                        </div>
                        <div className='aus-num'>
                            <p>3</p>
                            <p>-</p>
                            <p>7</p>
                        </div>
                        <div className='team-logo'>
                            <p style={{ color: "white",marginRight:"1rem" }}>{matchInfoData?.team?.b?.code ?? ""}</p>
                            {matchInfoData?.team?.b?.url ? <img src={matchInfoData?.team?.b?.url} alt="" /> : <img src={teamImage} alt="" />}
                        </div>
                    </div>
                </div>

            </div>

            <div className='lastmatches'>
                <p>{translations['ShowLastMatches']} </p>
                <div className="" onClick={() => setopentoggle(!opentoggle)}>
                    <img src={arrowDown} alt="" style={{ cursor: "pointer" }} />
                </div>


            </div>
            {
                opentoggle && (<LastTenMatches matchInfoData={matchInfoData} />)
            }

            
        </div>
    )
}

export default HeadToHead


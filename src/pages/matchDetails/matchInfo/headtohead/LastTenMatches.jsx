import React from 'react'
import { selectTranslations } from '../../../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';
const LastTenMatches = ({ matchInfoData }) => {
    const translations = useSelector(selectTranslations)

    return (
        <div>
            <div className="head-wrapper flex">
                <p className='batting-career-name'>{translations['TeamComparison']} <span Name="fill-player"></span> <span className='batting-style'>{translations['Last 10 Matches']}</span> </p>

            </div>

            <div className='section-comparison'>
                <div className='sec-team'>
                    <div className='aus-para-2'>
                        <div className='team-logo'>
                            <img src={matchInfoData?.team?.a?.url} alt="" />
                        </div>
                        <p>{matchInfoData?.team?.a?.code ?? ""}</p>
                    </div>

                    <div className='aus-para-2'>
                        <p>{matchInfoData?.team?.b?.code ?? ""}</p>
                        <div className='team-logo'>
                            <img src={matchInfoData?.team?.b?.url} alt="" />
                        </div>
                    </div>

                </div>

                <div className='v-teams'>
                    <div className='para-team'>
                        <p>{matchInfoData?.team?.a?.name ?? ""}</p>
                    </div>

                    <div className='para-team'>
                        <p>{matchInfoData?.team?.b?.name ?? ""}</p>
                    </div>

                </div>

                <div className='Matches-played-teams'>
                    <div className='para-team-10'>
                        <p>10</p>
                    </div>
                    <div className='mat-play'>
                        <h3> Matches Played </h3>
                    </div>

                    <div className='para-team-10'>
                        <p>10</p>
                    </div>

                </div>

                <div className='Matches-played-teams'>
                    <div className='para-team-10'>
                        <p style={{ color: 'green' }}>60%</p>
                    </div>
                    <div className='mat-play'>
                        <h3> Win </h3>
                    </div>

                    <div className='para-team-10'>
                        <p>40%</p>
                    </div>

                </div>


                <div className='Matches-played-teams'>
                    <div className='para-team-10'>
                        <p style={{ color: 'green' }}>110%</p>
                    </div>
                    <div className='mat-play'>
                        <h3> Average Score</h3>
                    </div>

                    <div className='para-team-10'>
                        <p>160</p>
                    </div>

                </div>


                <div className='Matches-played-teams'>
                    <div className='para-team-10'>
                        <p style={{ color: 'green' }}>340</p>
                    </div>
                    <div className='mat-play'>
                        <h3> Hightest Score </h3>
                    </div>

                    <div className='para-team-10'>
                        <p>110</p>
                    </div>

                </div>


                <div className='Matches-played-teams' >
                    <div className='para-team-10'>
                        <p>210</p>
                    </div>
                    <div className='mat-play'>
                        <h3> Minimum Score </h3>
                    </div>

                    <div className='para-team-10'>
                        <p>56</p>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default LastTenMatches

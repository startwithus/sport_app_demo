import React, { useEffect, useState } from 'react';
import { selectTranslations } from '../../../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';
import { getCaller } from '../../../../services/api.js';

const LastTenMatches = ({ matchInfoData }) => {
    const translations = useSelector(selectTranslations);
    const [lastTenMatch, setLastTenMatches] = useState(null);

    const getLastTenMatches = async () => {
        try {
            const res = await getCaller(`user/v1/get/tenMatchdetail?short_name=${matchInfoData.short_name}`);
            console.log(res);
            setLastTenMatches(res.data);
        } catch (error) {
            console.error("Error fetching last ten matches data:", error);
        }
    };

    useEffect(() => {
        if (matchInfoData?.match_key) {
            getLastTenMatches();
        }
    }, [matchInfoData?.match_key]);

    return (
        <div>
            <div className="head-wrapper flex">
                <p className='batting-career-name'>
                    {translations['TeamComparison']}
                    <span className="fill-player"></span>
                    <span className='batting-style'>{translations['Last 10 Matches']}</span>
                </p>
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

                {lastTenMatch && (
                    <>
                        <div className='Matches-played-teams'>
                            <div className='para-team-10'>
                                <p>10</p>
                            </div>
                            <div className='mat-play'>
                                <h3>Matches Played</h3>
                            </div>
                            <div className='para-team-10'>
                                <p>10</p>
                            </div>
                        </div>

                        <div className='Matches-played-teams'>
                            <div className='para-team-10'>
                                <p style={{ color: 'green' }}>{lastTenMatch.teamAStats.winPercentage}</p>
                            </div>
                            <div className='mat-play'>
                                <h3>Win</h3>
                            </div>
                            <div className='para-team-10'>
                                <p>{lastTenMatch.teamBStats.winPercentage}</p>
                            </div>
                        </div>

                        <div className='Matches-played-teams'>
                            <div className='para-team-10'>
                                <p style={{ color: 'green' }}>{lastTenMatch.teamAStats.averageScore}</p>
                            </div>
                            <div className='mat-play'>
                                <h3>Average Score</h3>
                            </div>
                            <div className='para-team-10'>
                                <p>{lastTenMatch.teamBStats.averageScore}</p>
                            </div>
                        </div>

                        <div className='Matches-played-teams'>
                            <div className='para-team-10'>
                                <p style={{ color: 'green' }}>{lastTenMatch.teamAStats.highestScore}</p>
                            </div>
                            <div className='mat-play'>
                                <h3>Highest Score</h3>
                            </div>
                            <div className='para-team-10'>
                                <p>{lastTenMatch.teamBStats.highestScore}</p>
                            </div>
                        </div>

                        <div className='Matches-played-teams'>
                            <div className='para-team-10'>
                                <p>{lastTenMatch.teamAStats.minScore}</p>
                            </div>
                            <div className='mat-play'>
                                <h3>Minimum Score</h3>
                            </div>
                            <div className='para-team-10'>
                                <p>{lastTenMatch.teamBStats.minScore}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default LastTenMatches;

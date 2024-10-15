import React, { useEffect, useState } from 'react'

const FinishedMatchDetails = ({ matchInfoData }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Change 768 to your desired breakpoint
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (

        <div className="live-match-details" style={{ paddingTop: "4rem" }}>
            {
                matchInfoData.format === "test" ? <div className="match-socrecard">
                    <div className='match-score-body-test'>
                        <div className="team-logo-test">
                            <img src={matchInfoData?.team?.a?.url} alt="" />
                        </div>
                        <div className="team-main-score">
                            <div className='team-score-test' >
                                <p className='para-name-match' >{matchInfoData?.team?.a?.code}</p>
                                <div className="team-score-body">
                                    <p className="score">{matchInfoData?.play?.innings?.a_1?.score?.runs}/{matchInfoData?.play?.innings?.a_1?.wickets} </p>
                                    {
                                        isMobile ? null : <p className='over-name'>({matchInfoData?.play?.innings?.a_1?.overs[0] + '.' + matchInfoData?.play?.innings?.a_1?.overs[1]})</p>
                                    }
                                </div>
                            </div>
                            <div className="team-score-test">
                                <p className='score' >{matchInfoData?.play?.innings?.a_2?.score?.runs}/{matchInfoData?.play?.innings?.a_2?.wickets} </p>
                                {
                                    isMobile ? null : <p className='over-name' >({matchInfoData?.play?.innings?.a_2?.overs[0] + '.' + matchInfoData?.play?.innings?.a_2?.overs[1]})</p>
                                }
                            </div>
                        </div>

                    </div>
                    <div className="vs-img-container-1">

                    </div>
                    <div className='match-score-body-test'>
                        <div className="team-main-score-1">
                            <div className='team-score-test' >
                                <div className="team-score-body">
                                    {
                                        isMobile ? null : <p className='over-name'>({matchInfoData?.play?.innings?.b_1?.overs[0] + '.' + matchInfoData?.play?.innings?.b_1?.overs[1]})</p>
                                    }
                                    <p className='score'>{matchInfoData?.play?.innings?.b_1?.score?.runs}/{matchInfoData?.play?.innings?.b_1?.wickets} </p>
                                </div>
                                <p className='para-name-match'>{matchInfoData?.team?.b?.code}</p>
                            </div>
                            <div className="team-score-test">
                                {
                                    isMobile ? null : <p className='over-name'>({matchInfoData?.play?.innings?.b_2?.overs[0] + '.' + matchInfoData?.play?.innings?.b_2?.overs[1]})</p>
                                }
                                <p className='score'>{matchInfoData?.play?.innings?.b_2?.score?.runs}/{matchInfoData?.play?.innings?.b_2?.wickets} </p>

                            </div>
                        </div>

                        <div className="team-logo-test">
                            <img src={matchInfoData?.team?.b?.url} alt="" />
                        </div>
                    </div>
                </div> : <div className="match-socrecard">
                    <div className='match-score-body'>
                        <div className='team-logo' >
                            <img src={matchInfoData?.team?.a?.url} alt="" />
                        </div>
                        <div className="mobile-flex">
                            <p className='para-name-match' >{matchInfoData?.team?.a?.code}</p>
                            <div className="team-score-test">
                                <p className='score' >{matchInfoData?.play?.innings?.a_1?.score?.runs}/{matchInfoData?.play?.innings?.a_1?.wickets} </p>
                                <p className='over-name' >({matchInfoData?.play?.innings?.a_1?.overs[0] + '.' + matchInfoData?.play?.innings?.a_1?.overs[1]})</p>
                            </div>
                        </div>

                    </div>
                    <div className="vs-img-container-1">
                    </div>

                    <div className='match-score-body'>
                        <div className="mobile-flex-1">
                            <p className='para-name-match' >{matchInfoData?.team?.b?.code}</p>
                            <div className="team-score-test">
                                <p className='over-name'>({matchInfoData?.play?.innings?.b_1?.overs[0] + '.' + matchInfoData?.play?.innings?.b_1?.overs[1]})</p>
                                <p className='score'>{matchInfoData?.play?.innings?.b_1?.score?.runs}/{matchInfoData?.play?.innings?.b_1?.wickets} </p>

                            </div>


                        </div>

                        <div className='team-logo' >
                            <img src={matchInfoData?.team?.b?.url} alt="" />
                        </div>
                    </div>

                </div>
            }


            {
                matchInfoData.format === "test" ? <div className='complete-winner-name'>
                    <p> {matchInfoData?.play?.result?.winner === "b" ? matchInfoData?.team?.b?.code : matchInfoData?.team?.a?.code} Win By {matchInfoData?.play?.result?.win_by} {matchInfoData?.play?.result?.result_type}</p>
                </div> : <div className='complete-winner-name'>
                    <p>{matchInfoData?.play?.result?.msg}</p>
                </div>
            }


        </div>

    )
}

export default FinishedMatchDetails
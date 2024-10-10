import React from 'react'
import './matchDetails.css'

const LiveMatchDetails = ({ matchInfoData, liveCommentary, liveScore, modifiedOvers }) => {
    const newArray = matchInfoData?.play?.live?.recent_overs_repr

    return (
        <>
            {
                liveScore.length !== 0 ?
                    <div className="live-match-details">
                        <div className="match-socrecard">
                            <div className="match-score-body-section">
                                <div className='match-score-body'>
                                    <div className='team-logo' >
                                        {matchInfoData?.play?.live?.batting_team === "b" ? <img src={matchInfoData?.team?.b?.url} alt="" /> : <img src={matchInfoData?.team?.a?.url} alt="" />}
                                    </div>
                                    <p className='para-name' style={{ fontSize: "1.5rem" }}>{matchInfoData?.play?.live?.batting_team === "b" ? matchInfoData?.team?.b?.code : matchInfoData?.team?.a?.code}</p>
                                    <div className="live-run-rate">
                                        {
                                            matchInfoData.play?.live?.batting_team === "b" ? <>

                                                <div className="live-score-flex">
                                                    <p className='score' style={{ fontSize: "1.5rem" }}>{liveScore?.live?.score?.runs}/{liveScore?.live?.score?.wickets} </p>

                                                    <p className='over-name' style={{ fontSize: "1.5rem" }} >({liveScore?.live?.score?.overs[0]}.{liveScore?.live?.score?.overs[1]})</p>
                                                </div>

                                            </> : <>

                                                <div className="live-score-flex">
                                                    <p className='score' style={{ fontSize: "1.5rem" }}>{liveScore?.live?.score?.runs}/{liveScore?.live?.score?.wickets} </p>
                                                    <p className='over-name'>({liveScore?.live?.score?.overs[0]}.{liveScore?.live?.score?.overs[1]})</p>
                                                </div>

                                            </>
                                        }
                                    </div>

                                </div>
                                <p style={{ color: "white" }}>
                                    {JSON?.parse(matchInfoData?.toss)?.winner ? <>
                                        {JSON?.parse(matchInfoData?.toss)?.winner === "b" ? matchInfoData?.team?.b?.code : matchInfoData?.team?.a?.code} won the toss elected to {JSON?.parse(matchInfoData?.toss)?.elected}
                                    </> : null
                                    }

                                </p>
                            </div>
                            <div className="ball-status" >

                                {liveScore?.live?.match_break?.reason ? <p style={{ textTransform: "capitalize", color: "#F44464", fontSize: "1.5rem", fontWeight: "600" }}>
                                    {liveScore?.live?.match_break?.reason === "day" ? "Stumps" : "Innings"}
                                </p> : <p style={{ color: liveCommentary?.last_ball_key?.team_score?.is_wicket === true ? "#E87070" : liveCommentary?.last_ball_key?.batsman === true || liveCommentary?.last_ball_key?.batsman === true ? "#1B9B46" : "white" }}>
                                    {liveCommentary?.last_ball_key?.team_score?.is_wicket === true ? liveCommentary?.last_ball_key?.wicket?.wicket_type + "W" : liveCommentary?.last_ball_key?.batsman?.runs}</p>
                                }

                            </div>


                            <div className='match-score-body-1'>
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                                    <p className='small-para' style={{ textAlign: "center", fontSize: "1rem" }}>CRR: {matchInfoData?.play?.live?.score?.run_rate}</p>
                                    <div className="" style={{ display: "flex" }}>
                                        {matchInfoData?.play?.target ? <p style={{ textAlign: "center", fontSize: "1rem", color: "white" }}>Target: {matchInfoData?.play?.target.runs}</p> : null}
                                    </div>
                                    {
                                        matchInfoData?.format === "test" ? null : <>
                                            {
                                                matchInfoData?.play?.live?.required_score ? <p className='small-para' style={{ textAlign: "center", fontSize: "1rem" }}>RRR: {liveScore?.live?.required_score?.run_rate}</p> : null
                                            }
                                        </>
                                    }
                                </div>
                                <div className="winner-name">
                                    {matchInfoData?.play?.live?.required_score ?
                                        <p className='' style={{ fontSize: "1rem" }}>
                                            {matchInfoData?.play?.live?.batting_team === "b" ? matchInfoData?.team?.b?.code : matchInfoData?.team?.a?.code} Need {liveScore?.live?.required_score?.title ?? ""}
                                        </p> : null
                                    }
                                </div>

                                <div className="line-over">

                                    <div style={{ textAlign: "center", color: "#35A401", fontWeight: "600" }}>
                                        {matchInfoData?.format === "test" ? <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: ".2rem" }}>
                                                <p>Day {matchInfoData?.play?.day_number}</p>

                                                {
                                                    matchInfoData.play?.innings?.b_2?.index === "b_2" ? null : <>
                                                        {matchInfoData?.play?.live?.score?.msg_trail_by ? <p style={{ textAlign: "center", color: "#35A401", fontWeight: "600", fontSize: 14, marginTop: 0 }}>{matchInfoData?.play?.live?.batting_team === "b" ? matchInfoData?.team?.b?.code : matchInfoData?.team?.a?.code} trail by {matchInfoData?.play?.live?.score?.msg_trail_by}</p> : null}
                                                    </>
                                                }
                                                {matchInfoData?.play?.live?.score?.msg_lead_by ? <p style={{ textAlign: "center", color: "#35A401", fontWeight: "600", fontSize: 14, marginTop: 0 }}>{matchInfoData?.play?.live?.batting_team === "b" ? matchInfoData?.team?.b?.code : matchInfoData?.team?.a?.code} lead by {matchInfoData?.play?.live?.score?.msg_lead_by}</p> : null}
                                            </div>

                                        </div> : null}
                                    </div>


                                </div>
                            </div>

                        </div>


                        <div className='over-stats-container'>
                            {modifiedOvers?.map((over, index) => (
                                <div
                                    key={index}
                                    className='over-stats-body'
                                >
                                    <p style={{ fontSize: "1rem", fontWeight: '600', color: "white" }}>
                                        Over {over.overnumber}
                                    </p>

                                    <div className='over-circle'>
                                        {over.ball_repr.map((ball, ballIndex) => (
                                            <div key={ballIndex} className='over-circle-content' style={{
                                                backgroundColor: ball === 'w' ? "#E87070" : ball?.split('')[1] === '4' ? '#1B9B46' : ball.split('')[1] === '6' ? '#1B9B46' : "rgba(255, 255, 255, 0.23)",


                                            }}>
                                                <p
                                                    key={ballIndex}
                                                    style={{
                                                        color: "white",
                                                        fontWeight: "600",
                                                        fontSize: 12
                                                    }}
                                                >
                                                    {ball.length >= 2 ? (ball.length === 2 ? ball.split('')[1] : ball.split(",")[1]) : ball}


                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>

                    :
                    <div className="live-match-details">
                        <div className="match-socrecard">
                            <div className='match-score-body'>
                                <div className='team-logo' >
                                    {matchInfoData?.play?.live?.batting_team === "b" ? <img src={matchInfoData?.team?.b?.url} alt="" /> : <img src={matchInfoData?.team?.a?.url} alt="" />}

                                </div>
                                <p className='para-name' style={{ fontSize: "1.5rem" }}>{matchInfoData?.play?.live?.batting_team === "b" ? matchInfoData?.team?.b?.code : matchInfoData?.team?.a?.code}</p>
                                <div className="live-run-rate">
                                    {
                                        matchInfoData.play?.live?.batting_team === "b" ? <>
                                            {
                                                matchInfoData.format === "test" ? <div >
                                                    <div className="" style={{ display: "flex", alignItems: "center", gap: ".2rem" }}>
                                                        <p className='score' style={{ fontSize: "1.5rem" }}>{matchInfoData?.play?.innings?.b_1?.score?.runs}/{matchInfoData?.play?.innings?.b_1?.wickets} </p>
                                                        <p className='over-name'>({matchInfoData?.play?.innings?.b_1?.overs[0]}.{matchInfoData?.play?.innings?.b_1?.overs[1]})</p>
                                                    </div>
                                                    <div className="" style={{ display: "flex", alignItems: "center", gap: ".2rem", marginTop: ".5rem" }}>
                                                      <p className='score' style={{ fontSize: "1.5rem" }}>
                                                      {matchInfoData?.play?.innings?.b_2?.score?.runs && matchInfoData?.play?.innings?.b_2?.wickets && (
                                                            <>
                                                                {matchInfoData.play.innings.b_2.score.runs}/{matchInfoData.play.innings.b_2.wickets}
                                                            </>
                                                        )}
                                                      </p>

                                                        {matchInfoData?.play?.innings?.b_2?.overs && matchInfoData.play.innings.b_2.overs.length > 0 && (
                                                            <p className='over-name'>
                                                                ({matchInfoData.play.innings.b_2.overs[0]}{matchInfoData.play.innings.b_2.overs[1] !== undefined && `.${matchInfoData.play.innings.b_2.overs[1]}`})
                                                            </p>
                                                        )}
                                                    </div>

                                                </div> : <div className="live-score-flex">
                                                    <p className='score' style={{ fontSize: "1.5rem" }}>{matchInfoData?.play.live?.score?.runs}/{matchInfoData?.play?.live?.score?.wickets} </p>

                                                    <p className='over-name' style={{ fontSize: "1.5rem" }} >({matchInfoData?.play?.live?.score?.overs[0]}.{matchInfoData?.play?.live?.score?.overs[1]})</p>
                                                </div>
                                            }
                                        </> : <>
                                            {
                                                matchInfoData.format === "test" ? <div >
                                                    <div className="" style={{ display: "flex", alignItems: "center", gap: ".2rem" }}>
                                                        <p className='score' style={{ fontSize: "1.5rem" }}>{matchInfoData?.play?.innings?.a_1?.score?.runs}/{matchInfoData?.play?.innings?.a_1?.wickets} </p>
                                                        <p className='over-name'>({matchInfoData?.play?.innings?.a_1?.overs[0]}.{matchInfoData?.play?.innings?.a_1?.overs[1]})</p>
                                                    </div>
                                                    <div className="" style={{ display: "flex", alignItems: "center", gap: ".2rem", marginTop: ".5rem" }}>
                                                        <p className='score' style={{ fontSize: "1.5rem" }}>{matchInfoData?.play?.innings?.a_2?.score?.runs}/{matchInfoData?.play?.innings?.a_2?.wickets} </p>
                                                        <p className='over-name'>
                                                            ({matchInfoData?.play?.innings?.a_2?.overs[0]}.{matchInfoData?.play?.innings?.a_2?.overs[1]})</p>
                                                    </div>
                                                </div> : <div className="live-score-flex">
                                                    <p className='score' style={{ fontSize: "1.5rem" }}>{matchInfoData?.play?.live?.score?.runs}/{matchInfoData?.play?.live?.score?.wickets} </p>
                                                    <p className='over-name'>({matchInfoData?.play?.live?.score?.overs[0]}.{matchInfoData?.play?.live?.score?.overs[1]})</p>
                                                </div>
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="ball-status" >

                                {matchInfoData?.play?.live?.match_break?.reason ? <p style={{ textTransform: "capitalize", color: "#F44464", fontSize: "1.5rem", fontWeight: "600" }}>
                                    {matchInfoData?.play?.live?.match_break?.reason === "day" ? "Stumps" : "Innings"}
                                </p> : <p style={{ color: liveCommentary?.last_ball_key?.team_score?.is_wicket === true ? "#E87070" : liveCommentary?.last_ball_key?.batsman === true || liveCommentary?.last_ball_key?.batsman === true ? "#1B9B46" : "white" }}>
                                    {liveCommentary?.last_ball_key?.team_score?.is_wicket === true ? liveCommentary?.last_ball_key?.wicket?.wicket_type + "W" : liveCommentary?.last_ball_key?.batsman?.runs}</p>
                                }

                            </div>

                            <div className='match-score-body-1'>
                                <p className='small-para' style={{ textAlign: "center", fontSize: "1rem" }}>CRR: {matchInfoData?.play?.live?.score?.run_rate}</p>
                                {
                                    matchInfoData?.play?.live?.required_score ? <p className='small-para' style={{ textAlign: "center", fontSize: "1rem" }}>RRR: {matchInfoData?.play?.live?.required_score?.run_rate}</p> : null
                                }
                                <div className="line-over">

                                    <div style={{ textAlign: "center", color: "#35A401", fontWeight: "600", fontSize: "1rem" }}>
                                        {matchInfoData?.format === "test" ? <div style={{ display: "flex", alignItems: "center", gap: ".2rem" }}>
                                            <p>Day {matchInfoData?.play?.day_number}:</p>
                                            {matchInfoData?.play?.live?.score?.msg_trail_by ? <p style={{ textAlign: "center", color: "#35A401", fontWeight: "600", fontSize: 14, marginTop: 0 }}>{matchInfoData?.play?.live?.batting_team === "b" ? matchInfoData?.team?.b?.code : matchInfoData?.team?.a?.code} trail by {matchInfoData?.play?.live?.score?.msg_trail_by}</p> : null}
                                            {matchInfoData?.play?.live?.score?.msg_lead_by ? <p style={{ textAlign: "center", color: "#35A401", fontWeight: "600", fontSize: 14, marginTop: 0 }}>{matchInfoData?.play?.live?.batting_team === "b" ? matchInfoData?.team?.b?.code : matchInfoData?.team?.a?.code} lead by {matchInfoData?.play?.live?.score?.msg_lead_by}</p> : null}
                                        </div> : null}
                                    </div>
                                    <div className="winner-name" style={{ marginTop: "auto" }}>
                                        {matchInfoData?.play?.live?.required_score ?
                                            <p className='' style={{ fontSize: "1rem" }}>
                                                {matchInfoData?.play?.live?.batting_team === "b" ? matchInfoData?.team?.b?.code : matchInfoData?.team?.a?.code} Need {matchInfoData?.play?.live?.required_score?.title ?? ""}
                                            </p> : null
                                        }
                                    </div>

                                </div>
                            </div>

                        </div>


                        <div className='over-stats-container'>
                            {newArray?.map((over, index) => (
                                <div
                                    key={index}
                                    className='over-stats-body'
                                >
                                    <p style={{ fontSize: "1rem", fontWeight: '600', color: "white" }}>
                                        Over {over.overnumber}
                                    </p>

                                    <div className='over-circle'>
                                        {over.ball_repr.map((ball, ballIndex) => (
                                            <div key={ballIndex} className='over-circle-content' style={{
                                                backgroundColor: ball === 'w' ? "#E87070" : ball?.split('')[1] === '4' ? '#1B9B46' : ball.split('')[1] === '6' ? '#1B9B46' : "rgba(255, 255, 255, 0.23)",


                                            }}>
                                                <p
                                                    key={ballIndex}
                                                    style={{
                                                        color: "white",
                                                        fontWeight: "600",
                                                        fontSize: 12
                                                    }}
                                                >
                                                    {ball.length >= 2 ? (ball.length === 2 ? ball.split('')[1] : ball.split(",")[1]) : ball}


                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>

            }
        </>

    )
}

export default LiveMatchDetails
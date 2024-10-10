import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../livematch/livematch.css'
import { useSelector } from 'react-redux'
const LiveCard = ({ el, currentTheme }) => {
  const navigate = useNavigate()
  console.log(el.match_key)
  const [isMobile, setIsMobile] = useState(false);
// console.log(el)
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
<Link to={`/getMatchList/${el.match_key}`}>
    <div className="live-match-card">
   
      <div className="turnament-name-container">
        <div className="">
          <p className='t-vanue-name'>{el?.tou_name?.substring(0, 30) + "..."}</p>
          <p className='venue-name'>{el.sub_title.split(" ")[0]} {el.sub_title.split(" ")[1]}  {el?.venue?.name?.substring(0, 20) + "..."}</p>
        </div>
        <div className="live-flex">
          <div className="fill-flex">
            <div className="fill"></div><p className='live'>live</p>
          </div>
          <p className='format-name'>{el.format}</p>
        </div>
      </div>
      <div className="match-completed-container">
        <div className="match-scorecard-upcoming" style={{ gap: "1rem" }} >

          <div className="team-score-card">
            <div className="team-name-container">
              <div className="team-logo">
                <img src={el?.team?.a?.url} alt="" />
              </div>
              <p className='para-name'>{isMobile ? el?.team?.a?.code ?? "" : el?.team?.a?.name?.substring(0, 16) + "..." ?? ""}</p>
            </div>
            {el.format === "test" ? <div className="score-card-container" style={{color:"white"}}>
              {el?.play?.innings?.a_1?.score?.runs && (
                <p className='score'>
                  {el.play.innings.a_1.score.runs}
                  {el?.play?.innings?.a_1?.wickets && (
                    <span> / {el.play.innings.a_1.wickets}</span>
                  )}
                </p>
              )}

              {el?.play?.innings?.a_1?.score?.runs && el?.play?.innings?.a_2?.score?.runs && (
                <p className='score'>&</p>
              )}
               
              {el?.play?.innings?.a_2?.score?.runs && el.play.innings.a_2.score.runs !== "00" && (
                <p className='score' style={{color:"white"}}>
                  {el.play.innings.a_2.score.runs}
                  {el?.play?.innings?.a_2?.wickets && (
                    <span style={{color:"white"}}> / {el.play.innings.a_2.wickets}</span>
                  )}
                </p>
              )}

            </div>
              : <div className="score-card-container" >
                <p className='score'>{el?.play?.innings?.a_1?.score?.runs ?? ""} <span>/ {el?.play?.innings?.a_1?.wickets ?? ""}</span></p>
                <p className='over-name'>
                  ({el?.play?.innings?.a_1?.overs[0] ?? ""}.{el?.play?.innings?.a_1?.overs[1] ?? ""})</p>
              </div>}
          </div>
          <div className="team-score-card">
            <div className="team-name-container">
              <div className="team-logo">
                <img src={el?.team?.b?.url} alt="" />
              </div>
              <p className='para-name'>{el?.team?.b?.name?.substring(0, 16) + "..." ?? "" ?? ""}</p>
            </div>
            {el.format === "test" ? <div className="score-card-container">
              {el?.play?.innings?.b_1?.score?.runs && (
                <p className='score'>
                  {el.play.innings.b_1.score.runs}
                  {el?.play?.innings?.b_1?.wickets && (
                    <span> / {el.play.innings.b_1.wickets}</span>
                  )}
                </p>
              )}

              {el?.play?.innings?.b_1?.score?.runs && el?.play?.innings?.b_2?.score?.runs && (
                <p className='score'>&</p>
              )}

              {el?.play?.innings?.b_2?.score?.runs && (
                <p className='score'>
                  {el.play.innings.b_2.score.runs}
                  {el?.play?.innings?.b_2?.wickets && (
                    <span> / {el.play.innings.b_2.wickets}</span>
                  )}
                </p>
              )}
            </div>

              : <div className="score-card-container" >
                <p className='score'>{el?.play?.innings?.b_1?.score?.runs ?? ""} <span>/ {el?.play?.innings?.b_1?.wickets ?? ""}</span></p>
                <p className='over-name'>
                  ({el?.play?.innings?.b_1?.overs[0] ?? ""}.{el?.play?.innings?.b_1?.overs[1] ?? ""})</p>
              </div>}
          </div>




        </div>

        {

          el.format === "test" ? <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: ".5rem" }}>
            <div className="winner-name" >
              <p> {el?.play?.live?.match_break?.reason == "day" ? "Stumps" : null}{el?.play?.live?.match_break?.reason == "lunch" ? "Lunch Break" : null} {el?.play?.live?.match_break?.reason == "innings" ? "Innings" : null}</p>
              <p>Day:{el?.play?.day_number}</p>
              {
                el?.play?.live?.required_score ? <p style={{ textAlign: "center", color: "#35A401", fontWeight: "600", fontSize: 14 }}>
                  {el?.play?.live?.batting_team === "b" ? el?.team?.b?.code : el?.team?.a?.code} Need {el?.play?.live?.required_score?.title ?? ""}
                </p> : null
              }
              {
                el?.play?.live?.score?.msg_trail_by ? <p style={{ textAlign: "center", color: "#35A401", fontWeight: "600", fontSize: 14, marginLeft: "5px" }} >{el?.play?.live?.batting_team === "b" ? el?.team?.b?.code : el?.team?.a?.code} trail by {el?.play?.live?.score?.msg_trail_by}</p> : null
              }
              {el?.play?.live?.score?.msg_lead_by ? <p style={{ textAlign: "center", color: "#35A401", fontWeight: "600", fontSize: 14, marginLeft: "5px" }}>
                {el?.play?.live?.batting_team === "b" ? el?.team?.b?.code : el?.team?.a?.code} lead by {el?.play?.live?.score?.msg_lead_by ?? ""}
              </p> : null}

            </div>

          </div>
            : null
        }
        {
          el.format === "test" ? null : <>
            {
              el?.play?.live?.required_score ? <>
                <div className="winner-name" style={{ marginTop: ".8rem" }}>
                  <p>

                    {el?.play?.live?.batting_team === "b" ? el?.team?.b?.code : el?.team?.a?.code} Need {el?.play?.live?.required_score?.title ?? ""}</p>

                </div>

              </>
                : <div className="winner-name">
                  <p>
                    {JSON?.parse(el?.toss)?.winner ? <>
                      {JSON?.parse(el?.toss)?.winner === "b" ? el?.team?.b?.code : el?.team?.a?.code} won the toss elected to {JSON?.parse(el?.toss)?.elected}
                    </> : null
                    }

                  </p>
                </div>

            }
          </>
        }

      </div>
    </div>
</Link>

  )
}

export default LiveCard
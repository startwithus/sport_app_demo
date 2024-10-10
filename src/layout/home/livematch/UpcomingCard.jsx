import React, { useState, useEffect } from 'react'
import { changeDateFormat, formateTime } from '../../../utils/helper'
import { Link, useNavigate } from 'react-router-dom'
import '../livematch/livematch.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UpcomingCard = ({ el, currentTheme }) => {
  const matchStartTime = el.start_at;
  const threeHoursInMilliseconds = 3 * 60 * 60 * 1000;
  const navigate = useNavigate()
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState()
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
  function calculateRemainingTime() {
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const timeDifference = matchStartTime - currentTimeInSeconds;

    return Math.max(0, timeDifference);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
      setCurrentTime(new Date());

    }, 5000);

  }, []);



  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  const formattedTime = (time) => (time < 10 ? `0${time}` : time);

  const matchStartDate = new Date(matchStartTime * 1000);
  const currentDate = new Date();
  return (

    <div className="live-match-card" onClick={() => navigate(`getMatchList/${el.match_id}`)} >
            <div className="turnament-name-container">

              <div className="">
                <p className='t-vanue-name'>{el?.tou_name?.substring(0, 30) + "..."}</p>
                <p className='venue-name'>{el?.sub_title?.split(" ")[0]} {el?.sub_title?.split(" ")[1]}  {el?.venue?.name?.substring(0, 20) + "..."}</p>
              </div>
              <p className='format-name'>{el.format}</p>
            </div>
        {
          el.status === "completed" ? <div className="match-completed-container">
            <div className="match-scorecard-upcoming"  >
              <div className="team-score-card">
                <div className="team-name-container">
                  <div className="team-logo">
                    <img src={el?.team?.a?.url} alt="" />
                  </div>
                  <p className='para-name'>{ el?.team?.a?.code ?? ""}</p>
                </div>
                {el.format === "test" ? <div className="score-card-container" >
                  <p className='score-1'>{el?.play?.innings?.a_1?.score?.runs ?? ""} <span>/ {el?.play?.innings?.a_1?.wickets ?? ""}</span></p>
                  <p className='score-1'>&</p>
                  <p className='score-1'>{el?.play?.innings?.a_2?.score?.runs ?? ""} <span>/ {el?.play?.innings?.a_2?.wickets ?? ""}</span></p>

                </div> : <div className="score-card-container" >
                  <p className='score-1'>{el?.play?.innings?.a_1?.score?.runs ?? ""} <span>/ {el?.play?.innings?.a_1?.wickets ?? ""}</span></p>
                  <p className='over-name'>
                    ({el?.play?.innings?.a_1?.overs[0] ?? ""}.{el?.play?.innings?.a_1?.overs[1] ?? ""})</p>
                </div>}
              </div>
              <div className="team-score-card">
                <div className="team-name-container">
                  <div className="team-logo">
                    <img src={el?.team?.b?.url} alt="" />
                  </div>
                  <p className='para-name'>{el?.team?.b?.code }</p>
                </div>
                {el.format === "test" ? <div className="score-card-container" >
                  <p className='score-1'>{el?.play?.innings?.b_1?.score?.runs ?? ""} <span>/ {el?.play?.innings?.b_1?.wickets ?? ""}</span></p>
                  <p className='score-1'>&</p>
                  <p className='score-1'>{el?.play?.innings?.b_2?.score?.runs ?? ""} <span>/ {el?.play?.innings?.b_2?.wickets ?? ""}</span></p>

                </div> : <div className="score-card-container" >
                  <p className='score-1'>{el?.play?.innings?.b_1?.score?.runs ?? ""} <span>/ {el?.play?.innings?.b_1?.wickets ?? ""}</span></p>
                  <p className='over-name'>
                    ({el?.play?.innings?.b_1?.overs[0] ?? ""}.{el?.play?.innings?.b_1?.overs[1] ?? ""})</p>
                </div>}
              </div>
            </div>
            <div className='winner-name'><p>{el?.play?.result?.msg ?? ""}</p> </div>
          </div> : null
        }
        {
          el.status === "not_started" ? <div className="match-upcoming-container">
            <div className="match-scorecard-upcoming">
              <div className="team-name-container">
                <div className="team-logo">
                  <img src={el?.team?.a?.url} alt="" />
                </div>
                <p className='para-name'>{isMobile ? el?.team?.a?.code ?? "" : el?.team?.a?.name ?? ""}</p>
              </div>
              <div className="team-name-container">
                <div className="team-logo">
                  <img src={el?.team?.b?.url} alt="" />
                </div>
                <p className='para-name'>{isMobile ? el?.team?.b?.code ?? "" : el?.team?.b?.name ?? ""}</p>
              </div>
            </div>
            <div className="border-left"></div>
            <div className="">
              <div>
                {remainingTime > 0 ? (
                  <div>
                    {matchStartDate.toDateString() !== currentDate.toDateString() ? (
                      <p className='' style={{ color: "#F44464", fontWeight: "bold" }}>
                        {(new Date(el?.start_at * 1000).toLocaleString('default', { month: 'short', day: "2-digit" }))}
                      </p>
                    ) : (
                      <div>
                        {
                          hours ? <p className='' style={{ color: "#F44464", fontWeight: "bold", fontSize: "1rem" }}>
                            {formattedTime(hours)}h:{formattedTime(minutes)}m
                          </p> : <p className='' style={{ color: "#F44464", fontWeight: "bold", fontSize: "1rem" }}>{formattedTime(minutes)}m:{formattedTime(seconds)}s{' '}</p>
                        }

                      </div>
                    )}

                  </div>
                ) : (
                  null
                )}
              </div>
{}
              <div className='not-start'><p>{formateTime(new Date(el.start_at * 1000))}</p> </div>


            </div>
          </div> : null
        }

    </div>

  )
}

export default UpcomingCard
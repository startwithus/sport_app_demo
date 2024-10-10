import React, { useEffect, useState } from 'react'
import './matchCommentry.css'
import { getCaller } from '../../../services/api'
import { IoVolumeHigh } from "react-icons/io5";
import { IoMdVolumeOff } from "react-icons/io";
import { useSpeechSynthesis } from 'react-speech-kit';
import LiveCommentry from './LiveCommentry';
const MatchCommentry = ({ matchInfoData, liveCommentary, match_id }) => {
  
  const [commentaryData, setCommentaryData] = useState([])
  const [loading, setLoading] = useState(true)
  const [overStats, setOverStats] = useState({})
  const getCommentaryData = async () => {
    setLoading(true)
    const res = await getCaller(`user/v1/get/commentory/?match_id=${match_id}`)
    setLoading(false)
    if (!Array.isArray(res?.data?.related_balls))
      return;
    let data = res?.data?.related_balls
    const sortedCommentary = data?.sort((a, b) => b.entry_time - a.entry_time);
    setCommentaryData(sortedCommentary)
    setOverStats(res?.data)
  }

  const sortedData = liveCommentary?.commentory?.sort((a, b) => b.entry_time - a.entry_time);

  useEffect(() => {
    getCommentaryData()
  }, [])
  let language = "en-US";
  let speed = 1;
  const { speak, cancel } = useSpeechSynthesis();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  const handlePlayStop = () => {
    if (isPlaying) {
      cancel(); 
      setIsPlaying(false);
    } else {
      const currentComment = sortedData[currentCommentIndex];
      speak({
        text: currentComment?.comment,
        lang: language,
        rate: speed,
        onEnd: handleCommentEnd,
      });
      setIsPlaying(true);
    }
  };

  const handleCommentEnd = () => {
    setCurrentCommentIndex((prevIndex) => prevIndex + 1);
    setIsPlaying(false);

    if (currentCommentIndex < sortedData?.length - 1) {
      handlePlayStop();
    }
  };

 
  return (
    <>
      {
        matchInfoData?.status === 'not_started' ? <div className='not-started-container'>
          <div className="">
            <h1> Match hasn’t started yet. Stay tuned!</h1>
          </div>
        </div> : <div className="">
          <div className="head-wrapper flex">
            <p>{matchInfoData?.status === "started" ? "Live" : "Hightlights"}</p>
            {
              matchInfoData?.status === "started" ? <div style={{ cursor: "pointer" }} onClick={handlePlayStop}>
                {
                  isPlaying ? <IoVolumeHigh style={{ fontSize: "1.5rem", color: "white" }} /> : <IoMdVolumeOff style={{ fontSize: "1.5rem", color: "white" }} />
                }
              </div> : null
            }
          </div>

          {
            loading ? <div className="loader-wrapper" >
              <div className='loader'>
              </div>
            </div> : <>
              {matchInfoData?.status === "started" ?
                <div className='container-MatchCommentry'>
                  {
                    sortedData?.map((comm, i) => (
                      <LiveCommentry comm={comm} key={i} />
                    ))
                  }
                  {
                    commentaryData?.map((comm, i) => (
                      <div className='section-commentry' key={i}>
                        {comm?.bowler?.is_wicket === true ? <>
                          <div className='commentry-box'>
                            <div className='comm'>
                            </div>
                            <div className='box-container'>
                              <div className="out-container">
                                <p>OUT</p>
                              </div>
                              <p className='player-key'>{comm?.wicket?.player_key}  {overStats?.live?.recent_players?.striker?.stats?.runs} ({overStats?.live?.recent_players?.striker?.stats?.balls}) [4s-{overStats?.live?.recent_players?.striker?.stats?.fours}] [6s-{overStats?.live?.recent_players?.striker?.stats?.sixes}] </p>
                              <div className='commentry-player-name'>
                                <p>Hightlights</p>
                              </div>

                              <div className='img-comm'>
                                <img src={""} alt='playerImage' className='newImg' />
                              </div>
                            </div>
                          </div>

                        </> : null
                        }
                        <div className='commentry-info'>
                          <div className='over-comm' >
                            <h5 style={{ backgroundColor: comm?.bowler?.is_wicket === true ? "#E87070" : comm?.batsman?.is_six === true || comm?.batsman?.is_four === true ? "#1B9B46" : "#8B8B8B" }}>{comm.bowler.is_wicket === true ? "W" : comm.bowler.runs}</h5>
                            <p>{comm.overs[0]}.{comm.overs[1]}</p>
                          </div>
                          <div className='doe'>
                            <p>{(comm?.comment?.split(":"))[0]}</p>
                          </div>
                          <div className='doe-para' dangerouslySetInnerHTML={{ __html: comm?.comment }}>

                          </div>
                        </div>
                      </div>
                    )
                    )}
                </div> :
                <div className='container-MatchCommentry'>
                  {
                    commentaryData?.map((comm, i) => (
                      <div className='section-commentry' key={i}>
                        {comm?.bowler?.is_wicket === true ? <>
                          <div className='commentry-box'>
                            <div className='comm'>
                            </div>
                            <div className='box-container'>
                              <div className="out-container">
                                <p>OUT</p>
                              </div>
                              <p className='player-key'>{comm?.wicket?.player_key} {comm?.batsman?.runs} </p>
                              <div className='commentry-player-name'>
                                <p></p>
                              </div>

                              <div className='img-comm'>
                                <img src={""} alt='playerImage' className='newImg' />
                              </div>
                            </div>
                          </div>
                        </> : null
                        }
                        <div className='commentry-info'>
                          <div className='over-comm' >
                            <h5 style={{ backgroundColor: comm?.bowler?.is_wicket === true ? "#E87070" : comm?.batsman?.is_six === true || comm?.batsman?.is_four === true ? "#1B9B46" : "#8B8B8B" }}>{comm.bowler.is_wicket === true ? "W" : comm.bowler.runs}</h5>
                            <p>{comm.overs[0]}.{comm.overs[1]}</p>
                          </div>
                          <div className='doe'>
                            <p>{(comm?.comment?.split(":"))[0]}</p>
                          </div>
                          <div className='doe-para' dangerouslySetInnerHTML={{ __html: comm?.comment }}>

                          </div>
                        </div>
                      </div>
                    )
                    )}
                </div>
              }
            </>

          }
        </div>
      }

    </>


  )
}

export default MatchCommentry
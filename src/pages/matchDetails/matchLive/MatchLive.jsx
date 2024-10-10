import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../matchLive/matchlive.css"
import { MdSportsCricket } from "react-icons/md"
import WinPrediction from './WinPrediction'
import playerImg from '../../../assets/playerimg.jpg'
const MatchLive = ({ matchInfoData, liveScore }) => {
  return (
    <div className='match-live-container' >
      {
        matchInfoData?.status === 'not_started' ? <div className='not-started-container'>
          <div className="">
            <h1> Match hasn’t started yet. Stay tuned!</h1>
          </div>
        </div> : <div>
          {
            matchInfoData?.status === "completed" ? <div className=''>
              <div className="head-wrapper">
                <p>Player Of The Match</p>
                 <div className="man-of-match">
                 <div className="man-of-img">
                 <img src={playerImg} alt="" />
                 </div>
                 <div className="">
<p style={{ fontSize: "1rem", color: "white" }}>{matchInfoData?.play?.result?.pom[0]}</p>
</div>
                 </div>
              </div>

            </div> :
              <>
                {liveScore?.length !== 0 ?
                  <div className="match-info">
                    <div className="head-wrapper flex">
                      <p className='batting-career-name'>Batter</p>
                      {/* <Link to="#">View All</Link> */}
                    </div>

                    <div className="acore-section">
                      <table className='score-table score-table-3'>
                        <thead>
                          <tr className='batter-width'>
                            <th>Batter</th>
                            <th>R(B)</th>
                            <th>6s</th>
                            <th>4s</th>
                            <th>SR</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr >
                            <td>
                              <Link to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`}
                                className='liveBatterPlayer'
                                state={{
                                  matchData: matchInfoData,
                                  playerKey: liveScore?.live?.recent_players?.striker?.key
                                }}>
                                {liveScore?.live?.recent_players?.striker?.name}{liveScore?.live?.striker_key ? <MdSportsCricket style={{ fontSize: "1rem" }} /> : null}
                              </Link>

                            </td>
                            <td>
                              {liveScore?.live?.recent_players?.striker?.stats?.runs}({liveScore?.live?.recent_players?.striker?.stats?.balls})
                            </td>
                            <td>{liveScore?.live?.recent_players?.striker?.stats?.sixes}</td>
                            <td>{liveScore?.live?.recent_players?.striker?.stats?.fours}</td>
                            <td>{liveScore?.live?.recent_players?.striker?.stats?.strike_rate}</td>
                          </tr>

                          <tr>
                            <td>
                              <Link to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`}
                                className='liveBatterPlayer'
                                state={{
                                  matchData: matchInfoData,
                                  playerKey: liveScore?.live?.recent_players?.non_striker?.key
                                }}>
                                {liveScore?.live?.recent_players?.non_striker?.name}
                              </Link>

                            </td>
                            <td> {liveScore?.live?.recent_players?.non_striker?.stats?.runs}({liveScore?.live?.recent_players?.non_striker?.stats?.balls})</td>
                            <td>{liveScore?.live?.recent_players?.non_striker?.stats?.sixes}</td>
                            <td>{liveScore?.live?.recent_players?.non_striker?.stats?.fours}</td>
                            <td>{liveScore?.live?.recent_players?.non_striker?.stats?.strike_rate}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="batter-ship flex">
                        {/* <p className='batter-para'>P'ship: 23(12)</p>
        <p className='batter-para'>Last Wicket: R S Singh 34(19)</p> */}
                      </div>
                    </div>


                    <div className="head-wrapper flex">
                      <p className='batting-career-name'>Bowler</p>
                      {/* <Link to="#">View All</Link> */}
                    </div>

      <table className='score-table score-table-1 score-table-3'>
        <thead>
          <tr className='batter-width'>
            <th>Bowler</th>
            <th>W</th>
            <th>O</th>
            <th>R</th>
            <th>E</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
          <Link style={{color:"white",display:"flex",alignItems:"center",gap:".5rem"}} to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`} state={{
                  matchData:matchInfoData,
                  playerKey:liveScore?.live?.recent_players?.bowler?.key
                }}>
                 {liveScore?.live?.recent_players?.bowler?.name}{liveScore?.live?.recent_players?.bowler?"*":null}
                </Link>
            
            </td>
            <td>
              {liveScore?.live?.recent_players?.bowler?.stats?.wickets}
            </td>
            <td> {liveScore?.live?.recent_players?.bowler?.stats?.overs[0]}.{liveScore?.live?.recent_players?.bowler?.stats?.overs[1]}</td>
            <td>{liveScore?.live?.recent_players?.bowler?.stats?.runs}</td>
            <td>{liveScore?.live?.recent_players?.bowler?.stats?.economy}</td>
          </tr>
          <tr>
          <td >
          <Link style={{color:"white",display:"flex",alignItems:"center",gap:".5rem"}} to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`} state={{
                  matchData:matchInfoData,
                  playerKey:liveScore?.live?.recent_players?.prev_over_bowler?.key
                }}>
                      {liveScore?.live?.recent_players?.prev_over_bowler?.name}
                  </Link>
        
          </td>
            <td>
              {liveScore?.live?.recent_players?.prev_over_bowler?.stats?.wickets}
            </td>
            <td> {liveScore?.live?.recent_players?.prev_over_bowler?.stats?.overs[0]}.{liveScore?.live?.recent_players?.prev_over_bowler?.stats?.overs[1]}</td>
            <td>{liveScore?.live?.recent_players?.prev_over_bowler?.stats?.runs}</td>
            <td>{liveScore?.live?.recent_players?.prev_over_bowler?.stats?.economy}</td>
          </tr>
        </tbody>
      </table>
                  </div> : <div className="match-info">
                    <div className="head-wrapper flex">
                      <p className='batting-career-name'>Batter</p>
                      {/* <Link to="#">View All</Link> */}
                    </div>

                    <div className="acore-section">
                      <table className='score-table'>
                        <thead>
                          <tr className='batter-width'>
                            <th>Batter</th>
                            <th>R(B)</th>
                            <th>6s</th>
                            <th>4s</th>
                            <th>SR</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td >
                              <Link to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`}
                                className='liveBatterPlayer'
                                state={{
                                  matchData: matchInfoData,
                                  playerKey: matchInfoData?.play?.live?.striker_key
                                }}>
                                {matchInfoData?.play?.live?.recent_players?.striker?.name}{matchInfoData?.play?.live?.striker_key ? <MdSportsCricket style={{ fontSize: "1rem" }} /> : null}
                              </Link>
                              {/* <p style={{display:"flex",alignItems:"center",gap:".5rem"}}>{matchInfoData?.play?.live?.recent_players?.striker?.name}{matchInfoData?.play?.live?.striker_key?<MdSportsCricket style={{fontSize:"1rem"}}/>:null}</p> */}
                            </td>
                            <td>
                              {matchInfoData?.play?.live?.recent_players?.striker?.stats?.runs}({matchInfoData?.play?.live?.recent_players?.striker?.stats?.balls})
                            </td>
                            <td>{matchInfoData?.play?.live?.recent_players?.striker?.stats?.sixes}</td>
                            <td>{matchInfoData?.play?.live?.recent_players?.striker?.stats?.fours}</td>
                            <td>{matchInfoData?.play?.live?.recent_players?.striker?.stats?.strike_rate}</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`}
                                className='liveBatterPlayer'
                                state={{
                                  matchData: matchInfoData,
                                  playerKey: matchInfoData?.play?.live?.non_striker_key
                                }}>
                                {matchInfoData?.play?.live?.recent_players?.non_striker?.name}
                              </Link>
                            </td>
                            <td> {matchInfoData?.play?.live?.recent_players?.non_striker?.stats?.runs}({matchInfoData?.play?.live?.recent_players?.non_striker?.stats?.balls})</td>
                            <td>{matchInfoData?.play?.live?.recent_players?.non_striker?.stats?.sixes}</td>
                            <td>{matchInfoData?.play?.live?.recent_players?.non_striker?.stats?.fours}</td>
                            <td>{matchInfoData?.play?.live?.recent_players?.non_striker?.stats?.strike_rate}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="batter-ship flex">
                        {/* <p className='batter-para'>P'ship: 23(12)</p>
        <p className='batter-para'>Last Wicket: R S Singh 34(19)</p> */}
                      </div>
                    </div>
                    <div className="head-wrapper flex">
                      <p className='batting-career-name'>Bowler</p>
                      {/* <Link to="#">View All</Link> */}
                    </div>
                    <table className='score-table'>
                      <thead>
                        <tr className='batter-width'>
                          <th>Bowler</th>
                          <th>W</th>
                          <th>O</th>
                          <th>R</th>
                          <th>E</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`}
                              className='liveBatterPlayer'
                              state={{
                                matchData: matchInfoData,
                                playerKey: matchInfoData?.play?.live?.recent_players?.bowler?.key
                              }}>
                              {matchInfoData?.play?.live?.recent_players?.bowler?.name}{matchInfoData?.play?.live?.recent_players?.bowler ? "*" : null}
                            </Link>
                          </td>
                          <td>
                            {matchInfoData?.play?.live?.recent_players?.bowler?.stats?.wickets}
                          </td>
                          <td> {matchInfoData?.play?.live?.recent_players?.bowler?.stats?.overs[0]}.{matchInfoData?.play?.live?.recent_players?.bowler?.stats?.overs[1]}</td>
                          <td>{matchInfoData?.play?.live?.recent_players?.bowler?.stats?.runs}</td>
                          <td>{matchInfoData?.play?.live?.recent_players?.bowler?.stats?.economy}</td>
                        </tr>
                        <tr>
                          <td >
                            <Link to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`}
                              className='liveBatterPlayer'
                              state={{
                                matchData: matchInfoData,
                                playerKey: matchInfoData?.play?.live?.recent_players?.prev_over_bowler?.key
                              }}>
                              {matchInfoData?.play?.live?.recent_players?.prev_over_bowler?.name}
                            </Link>

                          </td>
                          <td>
                            {matchInfoData?.play?.live?.recent_players?.prev_over_bowler?.stats?.wickets}
                          </td>
                          <td> {matchInfoData?.play?.live?.recent_players?.prev_over_bowler?.stats?.overs[0]}.{matchInfoData?.play?.live?.recent_players?.prev_over_bowler?.stats?.overs[1]}</td>
                          <td>{matchInfoData?.play?.live?.recent_players?.prev_over_bowler?.stats?.runs}</td>
                          <td>{matchInfoData?.play?.live?.recent_players?.prev_over_bowler?.stats?.economy}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  }
                   <WinPrediction matchInfoData={matchInfoData}/>
              </>
          }
        </div>
      }

    </div>
  )
}

export default MatchLive
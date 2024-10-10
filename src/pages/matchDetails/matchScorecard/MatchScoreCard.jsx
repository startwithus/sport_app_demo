import React, { useEffect, useState } from 'react'
import './matchScoreCard.css'
import { getCaller } from '../../../services/api'
import TeamOneScoreCard from './TeamOneScoreCard'
import TeamTwoScoreCard from './TeamTwoScoreCard'
import ThirdScoreCard from './ThirdScoreCard'
import FourthScoreCard from './FourthScoreCard'

const MatchScoreCard = ({ matchInfoData, liveScore, match_key }) => {
  const [scoreCardData, setScoreCardData] = useState([])
  const [activeTab, setActiveTab] = useState(0)
  const [loading, setLoading] = useState(true)

  const getScoreCard = async () => {
    setLoading(true)
    const res = await getCaller(`user/v1/scorecard/?match_key=${match_key}`)
    setLoading(false)
    if (matchInfoData?.status === 'started' && liveScore.length !== 0) {
      setScoreCardData(liveScore.players)
    } else {
      setScoreCardData(res?.data)
    }
  }
  useEffect(() => {
    getScoreCard()
  }, [])

 
  return (
    <div>
      {
        matchInfoData?.status === 'not_started' ? <div className='not-started-container'>
          <div className="">
            <h1> Match hasn’t started yet. Stay tuned!</h1>
          </div>
        </div> :
          <div className="">
            <div>
              {
                loading ? <div className="loader-wrapper"
                >
                  <div className='loader'>
                  </div>
                </div> : <div>
                  <div className='Group-series' style={{whiteSpace: "nowrap" ,overflowX:"scroll"}}>
                    {
                      scoreCardData?.nationality?.map((team, index) => (
                        <div className={`group-tab ${activeTab === index ? 'active-group-tab' : ""}`} key={index} onClick={() => setActiveTab(index)} >
                          <p>{team?.code} {team?.score?.score?.runs}/{team?.score?.wickets}
                            ({team?.score?.overs[0]}.{team?.score?.overs[1]})
                          </p>
                        </div>
                      ))
                    }
                  </div>

                  <div className="match-info">
                    {
                      activeTab === 0 && (<div>
                        <TeamOneScoreCard batters={scoreCardData} matchInfoData={matchInfoData} bowlers={scoreCardData} liveScore={liveScore} />
                      </div>)
                    }
                    {
                      activeTab === 1 && (<div>
                        <TeamTwoScoreCard batters={scoreCardData} bowlers={scoreCardData} liveScore={liveScore} matchInfoData={matchInfoData} />
                      </div>)
                    }
                    {
                      activeTab === 2 && (<div>
                        <ThirdScoreCard batters={scoreCardData} bowlers={scoreCardData} liveScore={liveScore} matchInfoData={matchInfoData} />
                      </div>)
                    }
                    {
                      activeTab === 3 && (<div>
                        <FourthScoreCard batters={scoreCardData} bowlers={scoreCardData} liveScore={liveScore} matchInfoData={matchInfoData} />
                      </div>)
                    }
                  </div>
                </div>
              }

            </div>
          </div>
      }
    </div>
  )
}

export default MatchScoreCard
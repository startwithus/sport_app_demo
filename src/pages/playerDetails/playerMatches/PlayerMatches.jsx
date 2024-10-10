import React, { useEffect, useState } from 'react'
import './playerMatches.css'
import AccordianItem from './AccordianItem'
import { getCaller } from '../../../services/api'
import BowlingAccordinaItem from './BowlingAccordinaItem'

const PlayerMatches = ({ playerId }) => {
  const [playerMatchInfo, setPlayerMatchInfo] = useState([])
  const getPlayerMatchInfo = async () => {
    const res = await getCaller(`user/v1/player/info?player_key=${playerId}`)
    setPlayerMatchInfo(res)
  }
  useEffect(() => {
    getPlayerMatchInfo()
  }, [])

  const [activeTab, setActiveTab] = useState('all');
  const [batActive, setbatactive] = useState(0)
  const filterMatches = (format) => {
    if (format === 'all') {
      return playerMatchInfo?.finalData;
    } else {
      return playerMatchInfo?.finalData?.filter(match => match?.formats?.includes(format));
    }
  };


  return (
    <>


      <div className='scroll-padding'>
        <div className="batting-stats-tab flex-2">
          <div className={`batting-stats-tab-card ${batActive === 0 ? "active-stats" : ""}`} onClick={() => setbatactive(0)} > <p>Batting</p></div>
          <div className={`batting-stats-tab-card ${batActive === 1 ? "active-stats" : ""}`} onClick={() => setbatactive(1)} > <p>Bowling</p> </div>
        </div>
        <div className="" hidden={batActive !== 0}>
          <div className="batting-stats-tab flex-2" style={{overflowX:"auto",whiteSpace:"nowrap"}}>
            <div className={`batting-stats-tab-card ${activeTab === 'all' ? "active-stats" : ""}`} onClick={() => setActiveTab('all')}> <p>All</p></div>
            <div className={`batting-stats-tab-card ${activeTab === 'oneday' ? "active-stats" : ""}`} onClick={() => setActiveTab('oneday')}> <p>ODI</p> </div>
            <div className={`batting-stats-tab-card ${activeTab === 't20' ? "active-stats" : ""}`} onClick={() => setActiveTab('t20')}> <p>T20</p> </div>
            <div className={`batting-stats-tab-card ${activeTab === 'test' ? "active-stats" : ""}`} onClick={() => setActiveTab('test')}> <p>Test</p> </div>
          </div>

          <div className='container-player-matches'>
            {filterMatches(activeTab)?.map((match,i )=> (
              <AccordianItem match={match} key={i} />
            ))}
          </div>
        </div>
        <div className="" hidden={batActive !== 1}>
          <div className="batting-stats-tab flex-2">
            <div className={`batting-stats-tab-card ${activeTab === 'all' ? "active-stats" : ""}`} onClick={() => setActiveTab('all')}> <p>All</p></div>
            <div className={`batting-stats-tab-card ${activeTab === 'oneday' ? "active-stats" : ""}`} onClick={() => setActiveTab('oneday')}> <p>ODI</p> </div>
            <div className={`batting-stats-tab-card ${activeTab === 't20' ? "active-stats" : ""}`} onClick={() => setActiveTab('t20')}> <p>T20</p> </div>
            <div className={`batting-stats-tab-card ${activeTab === 'test' ? "active-stats" : ""}`} onClick={() => setActiveTab('test')}> <p>Test</p> </div>
          </div>

          <div className='container-player-matches'>
            {filterMatches(activeTab)?.map((match,i) => (
              <BowlingAccordinaItem key={i} match={match} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayerMatches
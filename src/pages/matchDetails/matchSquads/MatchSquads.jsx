import React, { useEffect, useState } from 'react'
import './matchSquad.css'
import img from '../../../assets/team2.jpg'
import { getCaller } from '../../../services/api'
import { selectTranslations } from '../../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';
import TeamASquads from './TeamASquads'
import TeamBSquads from './TeamBSquads'

const MatchSquads = ({ match_id, matchInfoData }) => {

  const [matchSquad, setMatchSquad] = useState({})
  const translations = useSelector(selectTranslations)

  const [activeTab, setActiveTab] = useState(0)
  const getMatchSquad = async () => {
    const res = await getCaller(`user/v1/get/squad?match_id=${match_id}`)
    setMatchSquad(res)
   
  }

  useEffect(() => {
    getMatchSquad()
  }, [])
  const imgUrla = matchSquad?.team?.a?.name ? matchInfoData?.team?.a?.url : null
  const imgUrlb = matchSquad?.team?.b?.name ? matchInfoData?.team?.b?.url : null
  
  return (
    <>
    { matchInfoData?.status === 'not_started' ? <div className='not-started-container'>
          <div className="">
            <h1> Match hasn’t started yet. Stay tuned!</h1>
          </div>
        </div>: 
      <>
       {
        matchSquad?.team? <div className="">
        <div className='Group-series' style={{ whiteSpace: "nowrap", overflowX: "scroll" }}>
        <div className={`group-tab ${activeTab === 0 ? 'active-group-tab' : ""}`} onClick={() => setActiveTab(0)} >
          <div className='team-logo' >
            <img src={imgUrla} alt="" />
          </div>
          <p>{matchSquad?.team?.a?.name}</p>
        </div>
        <div className={`group-tab ${activeTab === 1 ? 'active-group-tab' : ""}`} onClick={() => setActiveTab(1)} >
          <div className='team-logo' >
            <img src={imgUrlb} alt="" />
          </div>
          <p>{matchSquad?.team?.b?.name}</p>
        </div>
      </div>
      <div className="match-info">
        <div className='squardSection'>
          <div className='Player-eleven'>
            <h2>Player Xl</h2>
          </div>
          {
            activeTab === 0 && (<TeamASquads matchSquad={matchSquad} matchInfoData={matchInfoData} />)
          }
          {
            activeTab === 1 && (<TeamBSquads matchSquad={matchSquad} matchInfoData={matchInfoData} />)
          }
        </div>
      </div>
        </div>:null
}
      </>
}
    
    </>
  )
}

export default MatchSquads
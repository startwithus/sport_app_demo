import React, { useEffect, useState } from 'react'
import "./matchFantasy.css"
import { Link } from 'react-router-dom';
import image_player1 from '../../../assets/image 50.png'

import { getCaller } from '../../../services/api';
import MatchUpdates from './MatchUpdates';
import { selectTranslations } from '../../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';


const MatchFantasy = ({ matchInfoData,match_id }) => {

  // const [fantasyData, setFantasyData] = useState([])
  const translations = useSelector(selectTranslations)

  // const getFantasyData = async () => {
  //   const res = await getCaller(`user/v1/fantasy/point/?match_key=${match_id}&offset=2&limit=2`)
  //   setFantasyData(res?.data)
  
  // }
  // useEffect(() => {
  //   getFantasyData()
  // }, [])


  return (
    <div className=''>
      <div className="head-wrapper flex">
        <p className='batting-career-name'>{translations['TopFantasyPoints']}</p> 
      </div>
      <div className='fantasy-section'>
       <h2 className='coming-soon'>Coming Soon</h2>
        {/* {
          fantasyData?.length > 0 ? fantasyData?.map((el, i) => (
            <div className='sec-fan' key={i}>
              <div className='section-fantasy'>
                <div className='fantasy'>
                  <h3>{el?.rank}</h3>
                  <img src={image_player1} alt='' />
                  <p>{el?.player_name}</p>
                </div>
                <div className='container-fantasy'>
                  <p>{el?.nationality?.name}<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#0080DC" /></svg> Wicket Keeper</p>
                </div>
              </div>

              <div className='fantasy-inn'>
                <p>{el?.points}</p>
                <h3>3 Inn</h3>

              </div>
            </div>
          )) : null
        } */}


      </div>
      <MatchUpdates />
    </div>
  )
}

export default MatchFantasy
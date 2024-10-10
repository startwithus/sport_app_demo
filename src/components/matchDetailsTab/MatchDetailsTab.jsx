import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../matchDetailsTab/matchTab.css'

const MatchDetailsTab = () => {
    const navigate = useNavigate();
    const { state } = useLocation()
    const oneMatchData = state?.matchData ?? {}
    const location = useLocation();

    const resultTabData = [
      {name:"Info",route:"/match/info"},
      {name:"Fantasy",route:"/match/fantasy"},
      {name:"Commentary",route:"/match/commentary"},
      {name:"Live",route:"/match/live"},
      {name:"Scorecard",route:"/match/scorecard"},
      {name:"History",route:"/match/history"},
    ]
  return (
    <>
    
            <section className="match-tab-details">
                <div className="wrapper">
        <ul className="tab-container">
          {
            resultTabData.map((el,i)=>(
              <li key={i}  className={`tab-box ${location?.pathname === el?.route ? 'active-result-tab' : null}`} onClick={() => navigate(el?.route,{
                state:{
                  oneMatchData:oneMatchData
                }
              })} >
              {el.name}
             </li>
            ))
          }
        </ul>
        </div>
                </section>
    </>
  )
}

export default MatchDetailsTab
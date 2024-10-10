import React from 'react'
import './matchCommentry.css'
import OverStatsComponent from './OverStatsComponent';
const LiveCommentry = ({comm,overRuns}) => {
  return (
    <div className='section-commentry'>
          {(comm.overs[1]) % 6===0 &&<div>
            <OverStatsComponent/>
            </div>}
   
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
}

export default LiveCommentry
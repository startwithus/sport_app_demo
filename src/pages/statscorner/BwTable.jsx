import React from 'react'
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';

const BwTable = ({bowlingData}) => {
  const translations = useSelector(selectTranslations)

  const sortedBowlingData = bowlingData?.sort((a, b) => a?.performance?.bowling?.most_wickets?.rank - b?.performance?.bowling?.most_wickets?.rank);
  return (
    <div className='Stats-point-table'  style={{overflowX:"auto",whiteSpace:"nowrap" }}>
   
    <table className='score-table'>
      <thead>
        <tr className='batter-width-stats-player'>
          
          <th>{translations['Player']}</th>
          <th>{translations['Team']}</th>
          <th>{translations['Wickets']}</th>
          <th>{translations['Runs']}</th>
          {/* <th>SR</th> */}
          <th>{translations['Economy']}</th>
          {/* <th>5W+</th>
          <th>3W+</th> */}
          <th>{translations['Maiden']}</th>
        </tr>
      </thead>
      <tbody className='batter-width-stats'>
        { sortedBowlingData?.length> 0 ? sortedBowlingData?.map((player, index) => (
          <tr key={index}>
            <td width={"20%"}>{player?.player_name}</td>
            <td style={{display:"flex",gap:".5rem",alignItems:"center"}}> <div>
            <img src={player?.nationality?.image} style={{width:"36px",height:"36px",objectFit:"contain"}} alt="" />
                </div>
                 {player?.nationality?.name}
                 </td>
            <td>{player?.performance?.bowling?.most_wickets?.value ? player?.performance?.bowling?.most_wickets?.value:"0"}</td>
            <td>{player?.performance?.bowling?.best_bowling?.runs ? player?.performance?.bowling?.best_bowling?.runs:"0"}</td>
            <td>{player?.performance?.bowling?.best_bowling?.economy ? player?.performance?.bowling?.best_bowling?.economy:"0" }</td>
           
            <td>{player?.performance?.bowling?.most_maidens?.value ? player?.performance?.bowling?.most_maidens?.value:"0"}</td>
  </tr>
        )):null
        }
  </tbody>
  </table>
  </div>
  )
}

export default BwTable
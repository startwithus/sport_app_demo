import React from 'react'
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';

const FourTable = ({battingData}) => {
  const translations = useSelector(selectTranslations)

    const filteredBattingData = battingData?.filter(player => player?.performance?.batting?.most_fours?.value);
    const sortedFourData = filteredBattingData?.sort((a, b) => b?.performance?.batting?.most_fours?.value - a?.performance?.batting?.most_fours?.value);

  return (
    <div className='Stats-point-table' style={{overflowX:"auto",whiteSpace:"nowrap" }}>
    <table className='score-table'>
      <thead>
        <tr className='batter-width-stats-player'>
          
          <th>{translations['Player']}</th>
          <th>{translations['Team']}</th>
          <th>{translations['Four']}</th>
          </tr>
      </thead>
      <tbody >
        {sortedFourData?.length>0 ? sortedFourData?.map((player, index) => (
          <tr key={index}>
            <td>{player?.player_name}</td>
            <td >
              <div className='stat-flex'>
              <div className="team-logo">
                                <img src={player?.nationality?.image} alt="" />
                            </div> {player?.nationality?.name}
              </div>
                            </td>
                <td>{player?.performance?.batting?.most_fours?.value ? player?.performance?.batting?.most_fours?.value:"0"}</td>
            
          </tr>
        )):null
      }
      </tbody>
    </table>
  </div>
  )
}

export default FourTable
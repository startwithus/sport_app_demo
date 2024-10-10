import React from 'react'
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';

const SixesTable = ({ battingData }) => {
  const filteredBattingData = battingData?.filter(player => player?.performance?.batting?.most_sixes?.value);
  const sortedSixesData = filteredBattingData?.sort((a, b) => b?.performance?.batting?.most_sixes?.value - a?.performance?.batting?.most_sixes?.value);
  const translations = useSelector(selectTranslations)
  return (
    <div className='Stats-point-table' style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      <table className='score-table'>

        <thead>
          <tr className='batter-width-stats-player'>
            <th>{translations['Player']}</th>
            <th align='left'>{translations['Team']}</th>
            <th>{translations['Sixes']}</th>
          </tr>

        </thead>
        <tbody>
          {sortedSixesData?.length > 0 ? sortedSixesData?.map((player, index) => (
            <tr key={index}>
              <td>{player?.player_name}</td>
              <td >
                <div className='stat-flex'>
                  <div className="team-logo">
                    <img src={player?.nationality?.image} alt="" />
                  </div> {player?.nationality?.name}
                </div>
              </td>
              <td>{player?.performance?.batting?.most_sixes?.value ? player?.performance?.batting?.most_sixes?.value : "0"}</td>
            </tr>
          )) : null
          }
        </tbody>
      </table>
    </div>
  )
}

export default SixesTable
import React from 'react'
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';

   

const Btable = ({ battingData }) => {
    const translations = useSelector(selectTranslations)
 
    const sortedBattingData = battingData?.sort((a, b) => a?.performance?.batting?.most_runs?.rank - b?.performance?.batting?.most_runs?.rank);
    return (
        <div className='Stats-point-table'  style={{overflowX:"auto",whiteSpace:"nowrap" }}>
            <table className='score-table'>
                <thead>
                    <tr className='batter-width-stats-player'>
                        {/* <th>Rank</th> */}
                        <th>{translations['Player']}</th>
                        <th>{translations['Team']}</th>
                        <th>{translations['Runs']}</th>
                        <th>{translations['Four']}</th>
                        <th>{translations['Sixes']}</th>
                    </tr>
                </thead>
                <tbody className='batter-width-stats'>
                    {sortedBattingData?.map((player, index) => (
                        <tr key={index}>
                            <td>{player?.player_name}</td>
                            <td><div className='stat-flex'>
                            <div className="team-logo">
                                <img src={player?.nationality?.image} alt="" />
                            </div> {player?.nationality?.name}
                                </div>
                            </td>
                            <td>{player?.performance?.batting?.most_runs?.value}</td>
                            <td>{player?.performance?.batting?.most_fours?.value ? player?.performance?.batting?.most_fours?.value : "0"}</td>
                            <td>{player?.performance?.batting?.most_sixes?.value ? player?.performance?.batting?.most_sixes?.value : "0"}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Btable
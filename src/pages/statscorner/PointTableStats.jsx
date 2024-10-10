import React from 'react'
import './stats.css'
import img_team from '../../assets/image 57.png'
import { selectTranslations } from '../../reduxx/languageSlice'
import { useSelector } from 'react-redux'

const PointTableStats = ({ seriesStatsData }) => {
  const translations = useSelector(selectTranslations)

  return (

    <div className='Stats-point-table' style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      <table className='score-table score-table-3 score-table-1'>
        <thead>
          <tr className='batter-width-stats-player'>
            <th>{translations['Player']}</th>
            <th>Team</th>
            <th>Runs</th>
            <th>Wicket</th>
            <th>4's</th>
            <th>6's</th>
            <th>30</th>
            <th>50</th>
            <th>100</th>


          </tr>
        </thead>
        {/* Create the table body */}
        <tbody className='batter-width-stats'>
          {
            seriesStatsData?.length > 0 ? seriesStatsData?.map((el, i) => (
              <tr key={i}>
                <td>
                  {el?.player_name}
                </td>
                <td>
                  <div className='team-logo'>

                    <img src={img_team} alt='' />
                    <h4>IND</h4>
                  </div>

                </td>

                <td style={{ color: "#D7A700" }}>
                  {el?.performance?.batting?.most_runs?.value}
                </td>
                <td> {el?.performance?.batting?.most_runs?.value}</td>
                <td>80</td>
                <td>30</td>
                <td>15</td>
                <td>10</td>
                <td>5</td>


              </tr>
            )) : null
          }
        </tbody>
        {/* </div> */}
      </table >
    </div>

  )
}
export default PointTableStats


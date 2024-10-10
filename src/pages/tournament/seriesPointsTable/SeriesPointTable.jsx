import React, { useState } from 'react';
import './seriespoints.css'

import trick from '../../../assets/trick.svg';
import PointsTable from '../../../components/table/PointsTable';
import { selectTranslations } from '../../../reduxx/languageSlice';
import { useSelector } from 'react-redux';
import tournament from '../../../assets/t.webp'
const SeriesPointsTable = ({ matchDataByTou }) => {
  const translations = useSelector(selectTranslations)
  const [activeTab, setActiveTab] = useState(0)
  if (matchDataByTou?.teamsDetails?.tournamentPoints === "" || matchDataByTou?.teamsDetails?.tournamentPoints.length === 0) {
    return (
      <div className='not-started-container' style={{ height: "50vh" }}>
        <h1>No Points Table</h1>
      </div>
    )
  }
  // const [activeTab, setActiveTab] = useState(0);

  const renderTable = (group) => (
    <div className="point-head">
      <h3>{group.group.name}</h3>
      <table className='score-table' style={{ borderRadius: ".5rem" }}>
        <thead>
          <tr>
            <th>Team</th>
            <th>Mat</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NR</th>
            <th>Pts</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {group.points?.map((point, index) => (
            <tr key={index}>
              <td >
                <div className="flag-container">
                  <div className="team-logo">
                    <img src={point?.team?.url ?point?.team?.url :tournament } alt='logo' />
                  </div>
                  <h4>{point.team.name}</h4>
                </div>
              </td>
              <td>{point.played}</td>
              <td>{point.won}</td>
              <td>{point.lost}</td>
              <td>{point.tied}</td>
              <td>{point.no_result}</td>
              <td style={{ color: "#D7A700" }}>{point.points}</td>
              <td>{point.net_run_rate}</td>
            </tr>
          ))
          }
        </tbody>

      </table>
    </div>

  );

  return (
    <div className=''>
      <div className="head-wrapper flex">
        <p className='batting-career-name'>{matchDataByTou?.tournamentName} {translations['PointTable']}</p>
      </div>
      <div>
        <div className='' style={{ whiteSpace: "nowrap", overflowX: "scroll" }}>
          <div className='Group-series' style={{ margin: 0 }}>
            {matchDataByTou?.teamsDetails?.tournamentPoints?.length > 0 ? matchDataByTou?.teamsDetails?.tournamentPoints.map((tournament, index) => (

              <div className={`group-tab ${activeTab === index ? "active-group-tab" : ""}`} key={index} onClick={() => setActiveTab(index)} >
                {activeTab === index ? <img src={trick} alt='' /> : null}
                <p>{tournament.tournament_round.name}</p>
              </div>


            )) : null
            }
          </div>
        </div>


        {matchDataByTou?.teamsDetails?.tournamentPoints[activeTab]?.groups
          .sort((a, b) => {
            const order = { "Final": 1, "Qualifiers": 2, "Eliminator": 3 };
            return order[a.group.name] - order[b.group.name];
          })
          .map((group) => renderTable(group))}
      </div>


    </div>
  )
}

export default SeriesPointsTable
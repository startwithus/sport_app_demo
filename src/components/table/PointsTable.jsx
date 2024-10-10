import React, { useState } from "react";
import '../../pages/tournament/seriesPointsTable/seriespoints.css'

const PointsTable = ({ tableData }) => {
  const [toggleOpen, setToggleOpen] = useState(false)

  if (!tableData || tableData.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <table className='score-table'>
      <thead>
        <tr>
          <th>Name</th>
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
        {tableData?.map((point, index) => (
          <tr key={index}>
            <td >
             <div className="flag-container">
             <div className="team-logo">
                <img src={point.team.url} alt='logo' />
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
    

  );
};

export default PointsTable;
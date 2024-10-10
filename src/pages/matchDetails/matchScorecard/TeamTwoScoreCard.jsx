import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { selectTranslations } from '../../../reduxx/languageSlice.js';

const TeamTwoScoreCard = ({ batters, extraRuns, bowlers, matchInfoData, liveScore }) => {
  const translations = useSelector(selectTranslations)


  return (
    <div>
      <div className="head-wrapper flex">
        <p className='batting-career-name'>{translations['Batter']}</p>
      </div>
     <div style={{whiteSpace: "nowrap" ,overflowX:"scroll"}}> 
      <table className='score-table'>
        <thead>
          <tr className='batter-width'>
          <th>{translations['Name']}</th>
            <th>R</th>
            <th>B</th>
            <th>4s</th>
            <th>6s</th>
            <th>SR</th>
          </tr>
        </thead>
        <tbody>
          {
            batters?.teamB?.batsman?.length > 0 ? batters?.teamB?.batsman.map((bat, i) => (
              <tr key={i}>
                <td style={{ cursor: "pointer" }}>
                  <Link style={{ color: "white" }} to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`} state={{
                    matchData: matchInfoData,
                    playerKey: bat?.player?.key
                  }}>
                    {bat?.player?.name}
                  </Link>
                  <p className='diss-para'>{bat?.score['1']?.batting?.dismissal?.msg}</p>

                </td>
                <td style={{ color: "#D7A700" }}>{bat?.score['1'] ? bat?.score["1"]?.batting?.score?.runs : "N/A"}</td>
                <td>{bat?.score['1'] ? bat?.score["1"]?.batting?.score?.balls : "N/A"}</td>
                <td>{bat?.score['1'] ? bat?.score["1"]?.batting?.score?.fours : "N/A"}</td>
                <td>{bat?.score['1'] ? bat?.score["1"]?.batting?.score?.sixes : "N/A"}</td>
                <td>{bat?.score['1'] ? bat?.score["1"]?.batting?.score?.strike_rate : "N/A"}</td>

              </tr>
            )) : null
          }

        </tbody>
      </table>
      </div>
      <div className="batter-ship flex">
        <p>Extras</p>
        <div className='color-gold flex'>
          <p style={{ color: "#D7A700" }}> {batters?.teamB?.extraRun?.extra} </p> <p> (N-{batters?.teamB?.extraRun?.no_ball}, WB-{batters?.teamB?.extraRun?.wide}, LB-{batters?.teamB?.extraRun?.leg_bye})</p>
        </div>
      </div>
      <div className="head-wrapper flex">
        <p className='batting-career-name'>{translations['Bowler']}</p>

      </div>
      <div style={{whiteSpace: "nowrap" ,overflowX:"scroll"}}> 
      <table className='score-table'>
        <thead>
          <tr className='batter-width'>
            <th>{translations['Name']}</th>
            <th>O</th>
            <th>M</th>
            <th>R</th>
            <th>W</th>
            <th>Eco.</th>
          </tr>
        </thead>
        <tbody>
          {
            bowlers?.teamA?.bowler?.length > 0 ? bowlers?.teamA?.bowler?.map((bat, i) => (
              <tr key={i}>
                <td style={{ cursor: "pointer" }} >
                  <Link style={{ color: "white" }} to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`} state={{
                    matchData: matchInfoData,
                    playerKey: bat?.player?.key
                  }}>
                    {bat?.player?.name}
                    {liveScore?.live?.striker_key ? "*" : null}
                  </Link>
                </td>
                <td style={{ color: "#D7A700" }}> {bat?.score['1'] ? bat?.score["1"]?.bowling?.score?.overs[0] : "N/A"}.{bat?.score["1"]?.bowling?.score?.overs[1]} </td>
                <td>{bat?.score['1'] ? bat?.score["1"]?.bowling?.score?.maiden_overs : "N/A"}</td>
                <td>{bat?.score['1'] ? bat?.score["1"]?.bowling?.score?.runs : "N/A"}</td>
                <td>{bat?.score['1'] ? bat?.score["1"]?.bowling?.score?.wickets : "N/A"}</td>
                <td>{bat?.score['1'] ? bat?.score["1"]?.bowling?.score?.economy : "N/A"}</td>
              </tr>
            )) : null
          }
        </tbody>
      </table>
      </div>
      <div className="head-wrapper flex">
        <p className='batting-career-name'>{translations['FallOfWicket']}</p>
      </div>
      <div style={{whiteSpace: "nowrap" ,overflowX:"scroll"}}> 
      <table className='score-table'>
        <thead>
          <tr className='batter-width'>
          <th>{translations['Batter']}</th>
            <th>{translations['Score']}</th>
            <th>{translations['Over']}</th>
          </tr>
        </thead>
        <tbody>
          {batters?.teamB?.batsman?.length > 0 ? batters?.teamB?.batsman?.map((bat, i) => (
            <tr key={i}>
              {bat?.score['1']?.batting?.dismissal === null ? null : <td>
                <Link style={{ color: "white" }} to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`} state={{
                  matchData: matchInfoData,
                  playerKey: bat?.player?.key
                }}>
                  {bat?.player?.name}
                  {liveScore?.live?.striker_key ? "*" : null}
                </Link>
              </td>}
              {bat?.score['1']?.batting?.dismissal === null ? null : <td style={{ color: "#D7A700" }}>{bat?.score['1']?.batting?.dismissal?.wicket_number} - {bat?.score['1']?.batting?.dismissal?.team_runs}</td>}
              {bat?.score['1']?.batting?.dismissal === null ? null : <td>{bat?.score['1']?.batting?.dismissal?.overs[0]}.{bat?.score['1']?.batting?.dismissal?.overs[1]}</td>}
            </tr>
          )) : null
          }

        </tbody>
      </table>
      </div>
      <div className="head-wrapper flex">
        <p className='batting-career-name'>{translations['Partnership']}</p>

      </div>
      <div className='partnership-container'>
        <div className='batter-part flex'>
        <p>{translations['Batter']} 1</p>
        <p>{translations['Batter']} 2</p>
        </div>
        {
          bowlers?.teamB?.partnerships?.length > 0 ? bowlers?.teamB?.partnerships?.map((part, index) => (
            <div className='partnership-section flex' key={index}>
              <div className='partner-names'>
                <p>
                  <Link to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`}
                    style={{ color: "white" }}
                    state={{
                      matchData: matchInfoData,
                      playerKey: part?.player_a_key
                    }}>
                    {part?.player_a_name}

                  </Link>
                </p>
                <p>{part?.player_a_score?.runs}({part?.player_a_score?.balls})</p>
              </div>
              <div className='section-partner'>
                <div className='part-para'>
                  <p>{part?.score?.runs}({part?.score?.balls})</p>
                  <div className="" style={{ display: "flex", justifyContent: "center", marginTop: ".5rem" }}>
                    <div className="" style={{ backgroundColor: "#E87070", width: part?.player_a_score?.runs, height: ".5rem", borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px", overflow: "hidden" }}>

                    </div>
                    <div className="" style={{ backgroundColor: "#0080DC", width: part?.player_b_score?.runs, height: ".5rem", borderTopRightRadius: "8px", borderBottomRightRadius: "8px", overflow: "hidden" }}>

                    </div>
                  </div>
                </div>
              </div>
              <div className='partner-names'>
                <p>
                  <Link to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`}
                    style={{ color: "white" }}
                    state={{
                      matchData: matchInfoData,
                      playerKey: part?.player_b_key
                    }}>
                    {part?.player_b_name}
                  </Link>
                </p>
                <p>{part?.player_b_score?.runs}({part?.player_b_score?.balls})</p>
              </div>
            </div>
          )) : null

        }
      </div>
    </div>
  )
}

export default TeamTwoScoreCard
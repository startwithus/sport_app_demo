import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './matchtopfantasy.css'; 
import avatarPlaceholder from '../../../assets/undraw_Male_avatar_g98d.png';
import MatchUpdates from './MatchUpdates';
import { getCaller } from '../../../services/api';
import PlayerDetails from '../../playerDetails/PlayerDetails';
import PlayerStatsSeries from './PlayerStatsSeries';

const MatchFantasy = ({ matchInfoData }) => {
  const navigate = useNavigate();
  const [topPoint, setTopPoint] = useState([]);
  const [displayedPlayers, setDisplayedPlayers] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState(null);

  const getTopFantasy = async () => {
    try {
      const res = await getCaller(
        `user/v1/match/fantasy/credits?match_key=${matchInfoData?.match_key}`
      );
      setTopPoint(res?.data?.credits || []);
      setDisplayedPlayers((res?.data?.credits || []).slice(0, 10)); // Show first 10 players
    } catch (err) {
      console.error("Error fetching top fantasy picks:", err);
      setError("Unable to load top fantasy picks.");
    }
  };

  useEffect(() => {
    getTopFantasy();
  }, []);

  const handleSeeAll = () => {
    if (showAll) {
      setDisplayedPlayers(topPoint.slice(0, 10)); // Reset to first 10 players
    } else {
      setDisplayedPlayers(topPoint); // Show all players
    }
    setShowAll(!showAll); // Toggle showAll state
  };

  return (
    <>
      <div className=''>
        <PlayerStatsSeries getTopFantasy={getTopFantasy} matchInfoData={matchInfoData} />
      </div>
      <div className="fantasy-container">
        <div className="fantasy-header">
          <h2>Top Fantasy Picks</h2>
          <button className="see-all-button" onClick={handleSeeAll}>
            {showAll ? "Show Less" : "See All"} <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="fantasy-scroll-container">
          {error ? (
            <p className="error-message">{error}</p>
          ) : displayedPlayers && displayedPlayers.length > 0 ? (
            displayedPlayers.map((player, index) => (
              <div className="fantasy-card-top" key={index} onClick={() =>
                navigate(`/getMatchList/playerInformation`, {
                  state: {
                    matchData: matchInfoData,
                    playerKey: player?.player_key
                  }
                }
                )}>
                <div className="role-section">
                  <div className="fantasy-card-header">
                    <img
                      src={player.url || avatarPlaceholder}
                      className="avatar-player"
                      alt="Player"
                    />
                    <div className="player-info">
                      <p className="player-team">
                        {player?.name || 'Unknown Team'}
                        <div className=''>
                          <p>{player.nationality.name}</p>

                        </div>
                      </p>
                      <p className="player-name">
                        <img
                          src={player.nationality.url || avatarPlaceholder}
                          className="avatar"
                          alt="Nationality"
                        />
                      </p>
                    </div>

                  </div>
                  <div className="player-role-container">
                    {/* <p className='player-role-rank'>{player?.intelligent_rank}</p> */}

                    <p className="player-role">

                      {player?.seasonal_role
                        ? player.seasonal_role
                          .replace(/_/g, ' ')
                          .replace(/\b\w/g, char => char.toUpperCase())
                        : 'Unknown Role'}
                    </p>

                  </div>
                </div>

                <hr className="divider" />
                <div className="runs-section">
                  <div className="fantasy-stats">
                    <h4>T10 Recent Forms {'>'}</h4>
                  </div>
                  {/* <div className="stats-row">
                    {(player.performance || []).map((stat, statIndex) => (
                      <div className="stat-box" key={statIndex}>
                        <p className="stat">
                          {stat?.score?.batting?.score?.runs || '-'} (
                          {stat?.score?.batting?.score?.balls || '-'})
                        </p>
                        <p className="stat-vs"> {stat?.short_name || '-'}</p>
                      </div>
                    ))}
                  </div> */}

                  <div className="stats-row">
                    {(player.performance && player.performance.length > 0) &&
                      player.performance.map((stat, statIndex) => {
                        const role = player?.seasonal_role?.toLowerCase();
                        const isBatsmanOrAllRounder = role === 'batsman' || role === 'all_rounder' || role === "keeper";
                        const isBowler = role === 'bowler';

                        return (
                          <div className="stat-box" key={statIndex}>
                            {isBatsmanOrAllRounder ? (
                              <>
                                <p className="stat">
                                  {stat?.score?.batting?.score?.runs || '-'} (
                                  {stat?.score?.batting?.score?.balls || '-'})
                                </p>
                                {/* <p className="stat-vs">{stat?.short_name || '-'}</p> */}
                              </>
                            ) : isBowler ? (
                              <>
                                <p className="stat">
                                  {stat?.score?.bowling?.score?.wickets || '-'} (
                                  {stat?.score?.bowling?.score?.runs || '-'})
                                </p>
                                <p className="stat-vs">{stat?.short_name || '-'}</p>
                              </>
                            ) : (
                              <p className="stat">Role data not available.</p>
                            )}
                          </div>
                        );
                      })}
                  </div>

                </div>
              </div>
            ))
          ) : (
            <p className="no-players">No players available.</p>
          )}
        </div>
      </div>

      <div className="match-updates">
        <div className="news-card-container">
          <MatchUpdates />
        </div>
      </div>

      {/* <PlayerDetails getTopFantasy={getTopFantasy} matchInfoData={matchInfoData} /> */}

    </>
  );
};

export default MatchFantasy;

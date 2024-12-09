import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './matchtopfantasy.css';
import avatarPlaceholder from '../../../assets/undraw_Male_avatar_g98d.png';
import MatchUpdates from './MatchUpdates';
import { getCaller } from '../../../services/api';

const sumPoint = (performance) => {
    return performance.reduce((acc, item) => acc + item.points, 0);
};

const PlayerCard = ({ player, matchInfoData, navigate }) => (
    <div
        className="fantasy-card-top"
        onClick={() =>
            navigate(`/getMatchList/playerInformation`, {
                state: {
                    matchData: matchInfoData,
                    playerKey: player?.player_key,
                },
            })
        }
    >
        <div className='' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="">
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

                <p className="" style={{ marginTop: "1rem" }}>
                    {player?.seasonal_role
                        ? player.seasonal_role
                            .replace(/_/g, ' ')
                            .replace(/\b\w/g, (char) => char.toUpperCase())
                        : 'Unknown Role'}
                </p>
            </div>

            <div className="player-details">
                <p className="player-points">
                    Points: {sumPoint(player.performance)}
                </p>
            </div>
        </div>

    </div>
);

const PlayerStatsSeries = ({ matchInfoData }) => {
    const navigate = useNavigate();
    const [topPlayers, setTopPlayers] = useState([]);
    const [displayedPlayers, setDisplayedPlayers] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchTopFantasyPlayers = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await getCaller(
                `user/v1/match/fantasy/credits?match_key=${matchInfoData?.match_key}`
            );
            const players = res?.data?.credits || [];
            setTopPlayers(players);
            setDisplayedPlayers(players.slice(0, 10));
        } catch (err) {
            console.error('Error fetching top fantasy picks:', err);
            setError('Unable to load top fantasy picks.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTopFantasyPlayers();
    }, [matchInfoData]);

    const handleToggleShowAll = () => {
        setShowAll((prev) => !prev);
        setDisplayedPlayers(showAll ? topPlayers.slice(0, 10) : topPlayers);
    };

    return (
        <div className="fantasy-container">
            <div className="fantasy-header">
                <h2>Player Stats in Series</h2>
                {topPlayers.length > 10 && (
                    <button
                        className="see-all-button"
                        onClick={handleToggleShowAll}
                        aria-label={showAll ? 'Show Less Players' : 'Show All Players'}
                    >
                        {showAll ? 'Show Less' : 'See All'}
                        <i className={`fas ${showAll ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                )}
            </div>

            <div className="fantasy-scroll-container">
                {loading ? (
                    <p className="loading-message">Loading top players...</p>
                ) : error ? (
                    <div className="error-container">
                        <p className="error-message">{error}</p>
                        <button onClick={fetchTopFantasyPlayers} className="retry-button">
                            Retry
                        </button>
                    </div>
                ) : displayedPlayers.length > 0 ? (
                    displayedPlayers.map((player) => (
                        <PlayerCard
                            key={player.player_key}
                            player={player}
                            matchInfoData={matchInfoData}
                            navigate={navigate}
                        />
                    ))
                ) : (
                    <p className="no-players">No players available.</p>
                )}
            </div>


        </div>
    );
};

export default PlayerStatsSeries;

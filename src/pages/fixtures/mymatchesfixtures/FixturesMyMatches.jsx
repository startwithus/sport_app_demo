import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate for routing
import { getCaller } from '../../../services/api';
import './teamsMyteams.css';

const FixturesMyMatches = () => {
  const [teams, setTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Fetch teams from API
  const fetchTeams = async () => {
    const res = await getCaller('user/v1/get/all/team');
    if (res.status) {
      setTeams(res.data);
    } else {
      alert('Failed to load teams.');
    }
  };

  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.short_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="container">
      <input
        type="text"
        className="search-input"
        placeholder="Search teams..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="team-list">
        {filteredTeams.length ? (
          filteredTeams.map((team) => (
            <div
              key={team.short_name}
              className="profile-list"
              onClick={() => navigate(`/allTeamMatch/${team.short_name}`)}
            >
              <div className="team-container">
                <img
                  src={team.image || require('../../../assets/user-icon.png')}
                  alt={team.name}
                  className="team-image"
                />
                <span className="team-name">{team.name}</span>
              </div>
            </div>
          ))
        ) : (
          <span>No teams available</span>
        )}
      </div>
    </div>
  );
};

export default FixturesMyMatches;

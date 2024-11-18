import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";

// import Icon from 'react-icons/fa';
import './teamsMyteams.css';
import { getCaller } from '../../../services/api';
import Layout from '../../../layout/Layout';

const AllTeamMatch = () => {
    const { match_key } = useParams();
    const navigate = useNavigate();
    const [testTeam, setTestTeam] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); // Error state

    const getAllMatch = async () => {
        try {
            setIsLoading(true);
            const res = await getCaller(`user/v1/get/team/match?team=${match_key}`);
            if (res && res.data) {
                setTestTeam(res.data);
            } else {
                setError('No data found');
            }
        } catch (error) {
            setError('Error fetching data');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAllMatch();
    }, [match_key]); // Re-fetch data when match_key changes

    const renderMatchCard = (item) => (
        <div
            key={item.match_key}
            className="matchCard"
            onClick={() => navigate(`/match/${item.match_key}`)} // Use navigate instead of history.push
        >
            <div className="matchCardHeader">
                <img
                    src={item.teamAImage || '/default-image.png'}
                    alt="Team A"
                    className="teamLogo"
                />
                <span className="matchName">{item.name}</span>
                <img
                    src={item.teamBImage || '/default-image.png'}
                    alt="Team B"
                    className="teamLogo"
                />
            </div>
            <span className="matchShortName">{item.tou_name}</span>
            <p className="matchDescription">{item.msg}</p>
        </div>
    );

    if (isLoading) {
        return (
            <div className="container">
                <div className="loader">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <p className="errorText">{error}</p>
            </div>
        );
    }

    return (
        <Layout>
            <div className="container">
                <div className="header">
                    <div className="headerLeft">
                        <Link to="/" className="backButton">
                            {/* <Icon name="arrow-left" size={22} color="#000" /> */}
                            <FaChevronLeft />

                        </Link>
                        <h1 className="headerTitle">Match Details</h1>
                    </div>
                </div>

                <div className="matchList">
                    {testTeam.map((item) => renderMatchCard(item))}
                </div>
            </div>
        </Layout>
    );
};

export default AllTeamMatch;

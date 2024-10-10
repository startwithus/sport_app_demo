import React, { useState, useEffect } from 'react'
import '../matchDetails/matchDetails.css'
import '../../layout/home/livematch/livematch.css'
import MatchInfo from './matchInfo/MatchInfo'
import MatchFantasy from './matchFantasy/MatchFantasy'
import MatchCommentry from './matchCommentry/MatchCommentry'
import MatchLive from './matchLive/MatchLive'
import MatchScoreCard from './matchScorecard/MatchScoreCard'
import MatchHistory from './matchHistory/MatchHistory'
import TabsItem from '../../components/tab/TabsItem'
import Layout from '../../layout/Layout'
import socketIOClient from "socket.io-client";
import { getCaller } from '../../services/api'
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'

import arrowRight from '../../assets/arrow-right.svg'
import LiveMatchDetails from './LiveMatchDetails'
import UpcomingMatchDetails from './UpcomingMatchDetails'
import FinishedMatchDetails from './FinishedMatchDetails'
import MatchSquads from './matchSquads/MatchSquads'
const ENDPOINT = "wss://247bet.in";
const MatchDetails = () => {
    const navigate = useNavigate()
    const [socket, setSocket] = useState(null);
    const [liveScore, setLiveScore] = useState([]);
    const [liveCommentary, setLiveCommentary] = useState([]);
    const [socketConnected, setSocketConnected] = useState(false);
    const { match_id } = useParams()
    const [matchInfoData, setMatchInfoData] = useState([])
    const [activeTab, setActiveTab] = useState(0);
    const translations = useSelector(selectTranslations)
    useEffect(() => {
        const newSocket = socketIOClient(ENDPOINT, { transports: ['websocket'] });
        setSocket(newSocket);
        return () => newSocket.close();
    }, [setSocket]);

    useEffect(() => {
        if (!socket)
            return;
        socket.on("connect", () => {
            socket.emit("sub", match_id);
            setSocketConnected(true);
        });
        return () => setSocketConnected(false);
    }, [socket]);

    useEffect(() => {
        if (!socketConnected)
            return;

        const handleLiveScore = (newMatchScore) => {
            if (!newMatchScore)
                return;
            setLiveScore(newMatchScore)

        }
        const handleLiveCommentary = (newMatchCommentary) => {
            if (!newMatchCommentary)
                return;
            setLiveCommentary(newMatchCommentary)
        }
        socket.on('score', handleLiveScore);
        socket.on('commentory', handleLiveCommentary);
    }, [socketConnected, setLiveCommentary, setLiveScore, socket]);

    const getMatchInformationData = async () => {
        navigate(`/getMatchList/${match_id}`, { replace: true });
        const res = await getCaller(`user/v1/match/detail?match_id=${match_id}`)
        setMatchInfoData(res?.data)
    }
    useEffect(() => {
        getMatchInformationData()
    }, [])


    let tabData;
    if (matchInfoData?.status === "started" || matchInfoData?.status === "completed") {
        tabData = [
            { label: `${translations['Live']}`, content: <MatchLive matchInfoData={matchInfoData} liveScore={liveScore} match_id={match_id} /> },
            { label: `${translations['Commentary']}`, content: <MatchCommentry matchInfoData={matchInfoData} liveCommentary={liveCommentary} match_id={match_id} /> },
            { label: `${translations['Scoreboard']}`, content: <MatchScoreCard matchInfoData={matchInfoData} liveScore={liveScore} match_id={match_id} /> },
            { label: `${translations['Squads']}`, content: <MatchSquads matchInfoData={matchInfoData} liveScore={liveScore} match_id={match_id} /> },
            { label: `${translations['Info']}`, content: <MatchInfo matchInfoData={matchInfoData} match_id={match_id} /> },
            { label: `${translations['Fantasy']}`, content: <MatchFantasy matchInfoData={matchInfoData} match_id={match_id} /> },
            { label: `${translations['History']}`, content: <MatchHistory matchInfoData={matchInfoData} match_id={match_id} /> },


        ];
    } else {
        tabData = [
            { label: `${translations['Info']}`, content: <MatchInfo matchInfoData={matchInfoData} match_id={match_id} /> },
            { label: `${translations['Fantasy']}`, content: <MatchFantasy matchInfoData={matchInfoData} match_id={match_id} /> },
            { label: `${translations['Commentary']}`, content: <MatchCommentry matchInfoData={matchInfoData} liveCommentary={liveCommentary} match_id={match_id} /> },
            { label: `${translations['Live']}`, content: <MatchLive matchInfoData={matchInfoData} liveScore={liveScore} match_id={match_id} /> },
            { label: `${translations['Scoreboard']}`, content: <MatchScoreCard matchInfoData={matchInfoData} liveScore={liveScore} match_id={match_id} /> },
            { label: `${translations['Squads']}`, content: <MatchSquads matchInfoData={matchInfoData} liveScore={liveScore} match_id={match_id} /> },
            { label: `${translations['History']}`, content: <MatchHistory matchInfoData={matchInfoData} match_id={match_id} /> },

        ];
    }
    const modifiedOvers = liveScore?.live?.recent_overs_repr;
    return (
        <Layout>
        <div className='main-wrapper-container'>
            <div className="match-details-container">
             <div className="match-details-content">
             <div className="tou-name">
             <Link to={`/`}>
                        <img src={arrowRight} alt="" width={20} height={20} />
                    </Link>
                    <p>  {matchInfoData?.tou_name}</p>
                </div>
                {matchInfoData?.status === "started" ? <LiveMatchDetails matchInfoData={matchInfoData}
                    liveCommentary={liveCommentary}
                    liveScore={liveScore}
                    modifiedOvers={modifiedOvers}
                /> : null}
                {matchInfoData?.status === "not_started" ? <UpcomingMatchDetails matchInfoData={matchInfoData}
                    liveCommentary={liveCommentary}
                    liveScore={liveScore}
                    modifiedOvers={modifiedOvers}
                /> : null}
                {matchInfoData?.status === "completed" ? <FinishedMatchDetails matchInfoData={matchInfoData}
                    liveCommentary={liveCommentary}
                    liveScore={liveScore}
                    modifiedOvers={modifiedOvers}
                /> : null}
             </div>
            </div>
            <div className="layout-container">
                <div className="fixture-tab-wrapper">
                    <TabsItem tabData={tabData} activeTab={activeTab} setActiveTab={setActiveTab} matchInfoData={matchInfoData} />
                </div>
            </div>
        </div>
    </Layout>
    )
}

export default MatchDetails
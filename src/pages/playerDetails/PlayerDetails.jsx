import React, { useEffect, useState } from 'react'
import '../playerDetails/player.css'
import arrowRight from '../../assets/arrow-right.svg'
import TabsItem from '../../components/tab/TabsItem'
import PlayerOverview from './playerOverview/PlayerOverview'
import PlayerMatches from './playerMatches/PlayerMatches'
import PlayerNews from './playerNews/PlayerNews'
import PlayerInfo from './playerInfo/PlayerInfo'
import Layout from '../../layout/Layout'
import { Link, useLocation, useParams } from 'react-router-dom'
import { getCaller } from '../../services/api'
import imgP from '../../assets/playerimg.jpg'
const PlayerDetails = () => {
    const { match_id } = useParams()
    const { state } = useLocation()
    const newData = state?.matchData ?? {}
    const playerId = state?.playerKey ?? {}
    const [activeTab, setActiveTab] = useState(0);
    const [playerDetailsData, setPlayerDetails] = useState([])
    const getPlayerData = async () => {
        const item = newData?.association?.code?.toLowerCase()
        const res = await getCaller(`user/v1/player/overview?ass_key=${item}&player_key=${playerId}`)
        setPlayerDetails(res?.data)
    }
    useEffect(() => {
        getPlayerData()
    }, [])
    const tabData = [
        { label: 'Overview', content: <PlayerOverview playerDetailsData={playerDetailsData} /> },
        { label: 'Matches', content: <PlayerMatches playerDetailsData={playerDetailsData} playerId={playerId} /> },
        { label: 'News', content: <PlayerNews playerDetailsData={playerDetailsData} /> },
        { label: 'Player Info', content: <PlayerInfo playerDetailsData={playerDetailsData} /> },
    ];
    return (
        <Layout>
            <div className='player-details-container'>
                <div className="player-circle">
                <Link className="player-details-arrow" to={`/getMatchList/${match_id}`}>
                            <img src={arrowRight} alt="" />
                        </Link>
                    <div className="player-circle-img">
                  
                     <div className="player-details-body">
                     <div className="mobile-img">
                        {
                            playerDetailsData?.player?.image?  <img src={playerDetailsData?.player?.image} alt="" className='player-img' />:  <img src={imgP} alt="" className='player-img' />
                        }
                     
                       </div>
                   
                        <div className="player-content">
                            <h1>{playerDetailsData?.player?.player_name}</h1>
                            <div className="p-inform">
                                <p className='p-country'>{playerDetailsData?.player?.nationality?.code}</p>
                                <div className="fill-player" ></div>
                                <p className='p-country'> {new Date().getFullYear() - new Date(playerDetailsData?.player?.date_of_birth).getFullYear()}</p>
                            </div>
                          
                        </div>
                  
                     </div>
                    </div>
                </div>
              
                <div className="layout-container" style={{marginTop:"1rem"}}>
            <div className="fixture-tab-wrapper">
            <TabsItem tabData={tabData} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
                </div>
            </div>
        </Layout>
    )
}

export default PlayerDetails


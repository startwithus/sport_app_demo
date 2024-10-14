import React, { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import './stats.css'
import rightArrow from '../../assets/rigthArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import Slider from 'react-slick'
import { getCaller } from '../../services/api'
import Btable from './Btable'
import '../tournament/sliderseries.css'
import '../tournament/series.css'
import BwTable from './BwTable'
import SixesTable from './SixesTable'
import { useParams, useNavigate } from 'react-router-dom';
import FourTable from './FourTable'
import tournament from '../../assets/t.webp'
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const StatsWeb = ({ matchDataByTou }) => {
    const [seriesData, setSeriesData] = useState([])
    const [seriesTab, setSeriesTab] = useState(0)
    const [loading, setLoading] = useState(true);
    const [seriesStatsData, setSeriesStatsData] = useState([])
    const [activeTab, setActiveTab] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, setSliderRef] = useState(null)
    const navigator = useNavigate();
    const translations = useSelector(selectTranslations)

    const [statsData, setStatsData] = useState([])
    const handleTabPress = (index) => {
        setActiveTab(index)
    }

    const getStatsByTournament = async () => {
        setLoading(true)
        const res = await getCaller(`user/v1/tournamentwise/player/stats?tou_key=${matchDataByTou?.tournamentKey}`)
        setStatsData(res?.data)
        setLoading(false)
    }
    useEffect(() => {
        getStatsByTournament()
    }, [])

    const tabsData = [
        {
            id: 1,
            title: "Runs",
            // component:<ODI/>
        },
        {
            id: 2,
            title: "Wicket",
        },
        {
            id: 3,
            title: "4's",
        },
        {
            id: 4,
            title: "6's",
        },


    ]

    const battingData = statsData?.filter(player => player?.performance?.batting?.most_runs?.rank);
    const bowlingData = statsData?.filter(player => player?.performance?.bowling?.most_wickets?.rank);
    if (!matchDataByTou) {
        return (
            <div>

            </div>
        )
    }
    return (

        <div className='section-stats'>
            <div className=''>

                {
                    loading ? <div className="loader-wrapper"
                    >
                        <div className='loader'>
                        </div>
                    </div> : <>
                        {
                            statsData?.length > 0 ? <div className="">
                                <div className='Group-series' style={{ marginTop: "3rem", overflowX: "auto", whiteSpace: "nowrap" }}>
                                    <div className={`group-tab ${activeTab === 0 ? "active-group-tab" : ""}`} onClick={() => setActiveTab(0)}>
                                        <p>{translations['Runs']}</p>
                                    </div>
                                    <div className={`group-tab ${activeTab === 1 ? "active-group-tab" : ""}`} onClick={() => setActiveTab(1)} >
                                        <p>{translations['Wickets']}</p>
                                    </div>
                                    <div className={`group-tab ${activeTab === 2 ? "active-group-tab" : ""}`} onClick={() => setActiveTab(2)} >
                                        <p>4's</p>
                                    </div>
                                    <div className={`group-tab ${activeTab === 3 ? "active-group-tab" : ""}`} onClick={() => setActiveTab(3)} >
                                        <p>6's</p>
                                    </div>
                                </div>
                                <div className="" hidden={activeTab !== 0}>
                                    <Btable battingData={battingData} />
                                </div>
                                <div className="" hidden={activeTab !== 1}>
                                    <BwTable bowlingData={bowlingData} />
                                </div>
                                <div className="" hidden={activeTab !== 2}>
                                    <FourTable battingData={battingData} />
                                </div>
                                <div className="" hidden={activeTab !== 3}>
                                    <SixesTable battingData={battingData} />
                                </div>
                                {/* <PointTableStats seriesStatsData={seriesStatsData}/> */}
                            </div> : <div className='not-started-container' style={{ height: "50vh" }}>
                                <h1>Data Not Found</h1>
                            </div>
                        }
                    </>
                }



            </div>
        </div>

    )

}

export default StatsWeb
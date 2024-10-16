import React, { useEffect, useState } from 'react'
import TabsItem from '../../components/tab/TabsItem'
import Layout from '../../layout/Layout'
import './series.css'
import Slider from "react-slick";
import { getCaller } from '../../services/api'
import rightArrow from '../../assets/rigthArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import SeriesOverView from './seriesOverView/SeriesOverView';
import MatchSeries from './matchesSeries/MatchSeries';
import { TeamSquadSeries } from './TeamSquadsSeries/TeamSquadSeries';
import { useParams, useNavigate } from 'react-router-dom';
import MatchUpdates from '../matchDetails/matchFantasy/MatchUpdates';
import SeriesInfoSeries from './seriesinfoseries/SeriesInfoSeries';
import './sliderseries.css'
import SeriesPointsTable from './seriesPointsTable/SeriesPointTable';
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';
import { IoIosNotificationsOutline } from "react-icons/io";
import StatsWeb from '../statscorner/StatsWeb';
const SeriesLeagues = () => {

  const [seriesData, setSeriesData] = useState([])
  const [seriesTab, setSeriesTab] = useState(0)
  const [sliderRef, setSliderRef] = useState(null)
  const [loading, setLoading] = useState(true);
  const [matchDataByTou, setMatchDataByTou] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const navigator = useNavigate();
  const translations = useSelector(selectTranslations)
  let { id } = useParams();
  const getSeries = async () => {
    setLoading(true)
    const res = await getCaller('user/v1/get/all/tournaments')
    if (res?.data?.length > 0) {
      const firstSeries = res?.data[0];
      setSeriesTab(firstSeries?.tou_key);
      getMatchesByTournament(firstSeries);
    }
    setSeriesData(res?.data);
    setLoading(false);
  }
  useEffect(() => {
    getSeries()
  }, [])

  const getMatchesByTournament = async (item) => {
    setLoading(true);
    const key = item?.tou_key;
    if (key !== id)
      navigator(`/series/${key}`, { replace: true });
    setSeriesTab(item?.tou_key);
    const res = await getCaller(`user/v1/get/tournament/${item?.tou_key}`)
    setLoading(false);
    setMatchDataByTou(res?.data)
  }
  const settings = {
    dots: false,
    infinite: seriesData?.length > 4,
    slidesToShow: seriesData?.length >= 4 ? 4 : seriesData?.length,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    initialSlide: 0,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: seriesData?.length >= 3 ? 3 : seriesData?.length,
          slidesToScroll: 1,
          infinite: seriesData?.length > 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: seriesData?.length >= 2 ? 2 : seriesData?.length,
          slidesToScroll: 1,
          infinite: seriesData?.length > 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: seriesData?.length > 1,
        },
      },
    ],
  };
  //  const pointData= matchDataByTou?.teamsDetails?.tournamentPoints.length>0?{ label: 'Points Tables', content: <SeriesPointsTable matchDataByTou={matchDataByTou} /> }:null


  const tabData = [
    { label: `${translations['Overview']}`, content: <SeriesOverView matchDataByTou={matchDataByTou} activeTab={activeTab} setActiveTab={setActiveTab} /> },
    { label: `${translations['Matches']}`, content: <MatchSeries matchDataByTou={matchDataByTou} activeTab={activeTab} setActiveTab={setActiveTab} seriesTab={seriesTab} /> },
    { label: `${translations['Squads']}`, content: <TeamSquadSeries matchDataByTou={matchDataByTou}  /> },
    { label: `${translations['PointTable']}`, content: <SeriesPointsTable matchDataByTou={matchDataByTou} /> },
    { label: `${translations['Stats']}`, content: <StatsWeb matchDataByTou={matchDataByTou} /> },
    { label: `${translations['News']}`, content: <MatchUpdates matchDataByTou={matchDataByTou} /> },
    { label: `${translations['Info']}`, content: <SeriesInfoSeries matchDataByTou={matchDataByTou} /> },

  ];
  console.log(seriesData)

  return (

    <Layout>
      <div className='main-wrapper-container' >
        <div className='layout-container' style={{ paddingTop: "2rem" }}>
          {
            seriesData?.length > 0 ? <div className="icon-series-container">
              <div className="left-arrow-position-1" style={{ display: currentSlide === 0 ? 'none' : 'block', }} >
                <img
                  src={leftArrow}
                  alt=""
                  onClick={sliderRef?.slickPrev}
                />
              </div>
              <div className="right-arrow-position-1" style={{ display: currentSlide === seriesData - 1 ? 'none' : 'block', }} >
                <img
                  src={rightArrow}
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={sliderRef?.slickNext}
                />
              </div>

            </div> : null
          }
          <div className="container-series">
            <Slider {...settings} ref={setSliderRef} >

              {seriesData?.length > 0 ? seriesData?.map((el, i) => (
                <div className={`series-slider-image ${seriesTab === el?.tou_key ? "active-slider" : ""}`} key={i} onClick={() => getMatchesByTournament(el)}>
                  <img src={el?.imgURl} alt="" />
                  <p>{el?.short_name}</p>
                </div>
              )) : <div className='not-started-container' style={{ height: "50vh" }}>
                <h1>Data Not Found</h1>
              </div>
              }
            </Slider>
          </div>
          {loading ? <div className="loader-wrapper">
            <div className='loader'>
            </div>
          </div> :
            <>
              {
                matchDataByTou ? <div>
                  <div className='noti-section-icon'>
                    <div className="t-name">
                      <p>{matchDataByTou?.tournamentName}</p>
                      <h5>{(new Date(matchDataByTou?.startDate * 1000).toLocaleString()).split(',')[0]} - {(new Date(matchDataByTou?.lastScheduledMatchDate * 1000).toLocaleString()).split(',')[0]}</h5>
                    </div>
                    <div className='' style={{ borderRadius: "8px", border: "1px solid white"}}>
                      <p className='noti-icon'><IoIosNotificationsOutline /></p>
                    </div>
                  </div>
                  <div className="fixture-tab-wrapper">
                    <TabsItem tabData={tabData} matchDataByTou={matchDataByTou} activeTab={activeTab} setActiveTab={setActiveTab} />
                  </div>
                </div> : <div className='not-started-container' style={{ height: "60vh" }}>
                  <h1>Data Not Found</h1>
                </div>
              }
            </>
          }




        </div>

      </div>

    </Layout>

  )
}

export default SeriesLeagues

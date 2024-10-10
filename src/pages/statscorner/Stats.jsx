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
const Stats = () => {
  const [seriesData, setSeriesData] = useState([])
  const [seriesTab, setSeriesTab] = useState(0)
  const [loading, setLoading] = useState(true);
  const [seriesStatsData, setSeriesStatsData] = useState([])
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState(null)
  const navigator = useNavigate();
  const translations = useSelector(selectTranslations)

  let { id } = useParams();

  const getSeries = async () => {
    setLoading(true)
    const res = await getCaller('user/v1/get/all/tournaments')
    if (res?.data?.length > 0) {
      const firstSeries = res?.data[0];
      setSeriesTab(firstSeries?.tou_key);
      getStatsByTournament(firstSeries);
    }
    setSeriesData(res?.data);
    setLoading(false);
  }
  useEffect(() => {
    getSeries()
  }, [])


  const getStatsByTournament = async (item) => {
    setLoading(true);
    const key = item?.tou_key;
    if (key !== id)
      navigator(`/stats/${key}`, { replace: true });
    setSeriesTab(item?.tou_key)
    const res = await getCaller(`user/v1/tournamentwise/player/stats?tou_key=${item?.tou_key}`)
    setSeriesStatsData(res?.data)
    setLoading(false);
  }
  // const minSlidesToShow = Math.min(4, seriesData.length);
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
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: seriesData?.length >= 2 ? 2 : seriesData?.length,
          slidesToScroll: 1,
          infinite: seriesData?.length > 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: seriesData?.length > 1,
        }
      },
    ]
  };
  const battingData = seriesStatsData?.filter(player => player?.performance?.batting?.most_runs?.rank);
  const bowlingData = seriesStatsData?.filter(player => player?.performance?.bowling?.most_wickets?.rank);

  return (

    <Layout>
      <div className='section-stats'>
        <div className='layout-container' style={{ paddingTop: "1rem" }}>

          <div className="container-series">
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
            <Slider {...settings} ref={setSliderRef} >

              {seriesData?.length > 0 ? seriesData?.map((el, i) => (
                <div className={`series-slider-image ${seriesTab === el?.tou_key ? "active-slider" : ""}`} key={i} onClick={() => getStatsByTournament(el)}>
                  <img src={!el?.imgURl ? tournament : el?.imgURl} alt="" />
                  <p>{el?.short_name}</p>
                </div>
              )) : null
              }
            </Slider>
          </div>
          {
            loading ? <div className="loader-wrapper"
            >
              <div className='loader'>
              </div>
            </div> : <>
            {
          seriesData?.length>0 ?  <div className="">
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
        </div>:<div className='not-started-container' style={{height:"50vh"}}>
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

export default Stats
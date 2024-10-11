import React, { useEffect, useState } from 'react'
import '../livematch/livematch.css'
import rightArrow from '../../../assets/rigthArrow.png'
import leftArrow from '../../../assets/leftArrow.png'
import Slider from "react-slick";
import { getCaller } from '../../../services/api'
import LiveCard from './LiveCard'

import UpcomingCard from './UpcomingCard'
import { apiPath } from '../../../services/Apipath'
import { selectTranslations } from '../../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const LiveMatchCard = () => {
  const [getMatchListData, setGetMatchListData] = useState([])
  const [sliderRef, setSliderRef] = useState(null)
  const translations = useSelector(selectTranslations)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataAndCache = async (apiEndpoint) => {
    try {
      setLoading(true);
      const result = await getCaller(apiPath.getMatches);
      setGetMatchListData(result?.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchDataAndCache()
  }, []);

  const sortByStatus = (a, b) => {
    const statusOrder = { started: 1, not_started: 2, completed: 3 };
    return statusOrder[a.status] - statusOrder[b.status];
  };

  const sortedMatches = getMatchListData?.sort(sortByStatus);
  const limitedMatches = sortedMatches?.slice(0, 20);
  const settings = {
    dots: true,
    infinite: true,
    // className: "slider variable-width",
    slidesToShow: limitedMatches?.length > 0 ? 3 : 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "button__bar",
    speed: 500,
    initialSlide: 0,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          // className: "center",
          // centerPadding: "0px",
          centerMode: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,

        }
      }
    ]

  };
  const totalStartedMatches = getMatchListData?.filter(match => match.status === 'started').length || 0;

  return (
    <div className="slider-header">
      <div className='layout-container'>
        <div className="head-wrapper" style={{ display: "flex" }}>
          <p>{translations['Matches']} {totalStartedMatches > 0 && <span>({totalStartedMatches})</span>} </p>

        </div>
        <div className="split-gradient"></div>
        {
          getMatchListData?.length > 0 ? <div className="">
            <div className="left-arrow-position" style={{ display: currentSlide === 0 ? 'none' : 'block', }}>
              <img
                src={leftArrow}
                alt=""
                style={{ marginRight: "1rem", cursor: "pointer" }}
                onClick={sliderRef?.slickPrev}
              />

            </div>
            <div className="right-arrow-position" style={{ display: currentSlide === getMatchListData - 1 ? 'none' : 'block', }}>

              <img
                src={rightArrow}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={sliderRef?.slickNext}
              />
            </div>
          </div> : null
        }
        {
          loading ? (<div className="loader-wrapper"
          >
            <div className='loader'>
            </div>
          </div>
          ) : (
            <Slider {...settings} ref={setSliderRef} className='live-slider-container' >

              {limitedMatches?.length > 0 ? limitedMatches.map((el, i) => (
                <div key={i}>
                  {el.status === "started" ? <div className="width">
                    <LiveCard el={el} />
                  </div> :
                    <div className="width" >
                      <UpcomingCard el={el} />
                    </div>
                  }
                </div>
              )) : <SkeletonTheme color="#202020" highlightColor="">
                <div className="skeleton-row">
                  <Skeleton height={192} width={350} className="skeleton-card" />
                  <Skeleton height={192} width={350} className="skeleton-card " />
                  <Skeleton height={192} width={350} className="skeleton-card" />
                </div>

              </SkeletonTheme>

              }
            </Slider>
          )
        }

      </div>
    </div>
  )
}

export default LiveMatchCard
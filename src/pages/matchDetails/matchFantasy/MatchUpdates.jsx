import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { selectTranslations } from '../../../reduxx/languageSlice.js';
import { getCaller } from '../../../services/api';
import '../matchFantasy/matchtopfantasy.css'
import '../matchFantasy/matchFantasy.css'
import '../../news/news.css'
const MatchUpdates = () => {
  const navigate = useNavigate()
  const [newsData, setNewsData] = useState([])
  const translations = useSelector(selectTranslations)
  const getNewsData = async () => {
    const res = await getCaller('user/v1/get/all/news?limit=3&offset=0')
    setNewsData(res?.data)
  }
  useEffect(() => {
    getNewsData()
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
          className: "center",
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
  if (!newsData) {
    return (
      <div></div>
    )
  }
  return (
    <div>
      <div className="head-wrapper flex">
        <p className='batting-career-name'>{translations['MatchUpdate']}</p> <Link to="/news/allNews">{translations['View']}</Link>
      </div>
      <div className='fantasy-player-match'>
        <Slider {...settings} >
          {
            newsData?.length > 0 ? newsData?.map((el, i) => (
              <div className="fantasy-card" key={i} onClick={() => navigate('/news/description', {
                state: {
                  newsDesc: el
                }
              })}>
                <div className="new-img">
                  <img src={el?.cover_image} alt="" />
                </div>
                <div className="match-news-container">
                  <div className="news-title-head flex">
                    <h2 className='regular-para'>{el?.heading.substring(0, 20) + "..."}</h2>
                    <p className='small-para'>{(new Date(el?.created_at)?.toLocaleString()?.slice(0, 9))}</p>
                  </div>
                  <div className="news-title-para">
                    <p className='regular-para-2'>{el?.content.slice(0, 100)}</p>
                  </div>
                </div>
              </div>
            )) : null
          }


        </Slider>
      </div>
    </div>
  )
}

export default MatchUpdates

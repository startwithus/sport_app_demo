import React from 'react'
import team1 from '../../../assets/teamlogo.jpg'
import team2 from '../../../assets/team2.jpg'
import Slider from "react-slick";
import '../matchInfo/matchinfo.css'
import { selectTranslations } from '../../../reduxx/languageSlice';
import { useSelector } from 'react-redux';
import teamImage from '../../../assets/t.webp'
const RecentMatchSlider = ({matchInfoData}) => {
    const translations = useSelector(selectTranslations)

    const liveCardData = ['1', '2', '3', '4', '5', '6']
    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        
        speed: 500,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows: false,
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
  return (
    <div className='recent-main-slider'>
         <div className="head-wrapper flex">
                <p className='batting-career-name'>{translations['RecentMatches']}<span className="fill-player"></span> <span className='batting-style'>on WLC Stadium</span> </p>
            </div>
            <div className="split-gradient"></div>
            <Slider {...settings} >
                {
                    liveCardData.map((el, i) => (
                      <div className="recent-match-card" key={i}>
                      <div className="recent-match-card-body">
                        <p className='recent-schedule'>2nd T20I, IPL, on 6th Aug</p>
                        <div className="recent-match-score" style={{marginTop:"1rem"}}>
                           <div className="recent-match-logo">
                          <div className='team-logo'>
                          {matchInfoData?.team?.a?.url ? <img src={matchInfoData?.team?.a?.url} alt="" /> : <img src={teamImage} alt="" />}
                         
                          </div>
                            <p className='para-name'>{matchInfoData?.team?.a?.code ?? ""}</p>
                           </div>
                           <div className="">
                            <p className='humidity-para'>124 (20.0)</p>
                           </div>
                        </div>
                      </div>
                      <div className="recent-match-card-body">
                   
                       <div className="recent-match-score-2">
                       <div className="recent-match-score">
                           <div className="recent-match-logo">
                           <div className='team-logo'>
                           {matchInfoData?.team?.b?.url ? <img src={matchInfoData?.team?.b?.url} alt="" /> : <img src={teamImage} alt="" />} 
                           </div>
                            <p className='para-name'>{matchInfoData?.team?.b?.code ?? ""}</p>
                           </div>
                           <div className="">
                            <p className='humidity-para'>124/7 (18.0)</p>
                           </div>
                        </div>
                        <div className="">
                            <p className='winner-para'>Won by 3 Wickets</p>
                           </div>
                       </div>
                       
                      </div>
                      </div>
                    ))
                }
            </Slider>
    </div>
  )
}

export default RecentMatchSlider
import React, { useEffect, useState,useRef } from 'react'
import '../reels/reels.css'
import { Link, useNavigate } from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchData } from '../../../services/apiUrl';
import { selectTranslations } from '../../../reduxx/languageSlice';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import rightArrow from '../../../assets/rigthArrow.png'
import leftArrow from '../../../assets/leftArrow.png'
const Reels = () => {
  const translations = useSelector(selectTranslations)
  const navigate = useNavigate()
  const [reelsData, setReelsData] = useState([])
  const [loading, setLoading] = useState(true);
  const [sliderRef, setSliderRef] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0);
  const token = localStorage.getItem('token')
  const [error, setError] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    className: "slider variable-width",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    initialSlide:0,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 0,
        }
      }
    ]

  };
  const fetchReels = async (apiEndpoint) => {
    try {
      setLoading(true);
      const result = await fetchData(apiEndpoint);
      setReelsData(result?.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    if(token){
      fetchReels(`${process.env.REACT_APP_BASE_URL}/user/v1/auth/reels?limit=8&offset=0`);
    }
    else{
      getUnauthReel()
    }
   
  }, []);
  const getUnauthReel=async()=>{
    try{
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user/v1/reels?limit=8&offset=0`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      }).then(response => response.json()).catch(error => console.log(error))
      setReelsData(response?.data)
  }catch(err){
  console.log(err)
  }
  }
const handleReelsNavigation=()=>{
  if(token){
    navigate("/reelsDetails")
  }
  else{
    alert("Please Login To Watch Shorts")
    navigate("/login")
  }
}
  return (
    <div className="reels-container">
      <div className='layout-container'>
        <div className="fixture-tab-wrapper">
          <div className="head-wrapper flex">
            <p>{translations['Reels']}</p>
            <p className='link' onClick={handleReelsNavigation}>{translations['View']}</p>
          </div>
         
         <Slider {...settings} ref={setSliderRef} className='live-slider-container'>
         {/* <div className="image-slider-container"> */}
            {reelsData?.length > 0 ? reelsData?.map((reel, index) => (
              <div className="video-container" key={index} onClick={()=>handleReelsNavigation()}>
                <video className='video-1' controls={false}  >
                  <source src={reel.url} type="video/mp4" />
                  {/* Your browser does not support the video tag. */}
                </video>
                <div className="short-title">
                  <h1 >{reel.title}</h1>
              
                </div>
              </div>

            )) : null
            }
          {/* </div> */}
         </Slider>
        </div>

      </div>

      {/* <VideoUrl/> */}
    </div>
  )
}

export default Reels
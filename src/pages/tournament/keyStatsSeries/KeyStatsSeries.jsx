import React from 'react'
import { Link } from 'react-router-dom'
import right_Arrow from '../../../assets/right arrow.svg';
import img_dhoni from '../../../assets/image 43_prev_ui 1.png'
import Slider from "react-slick";
const KeyStatsSeries = () => {
  const settings = {
    className: "center",
    centerMode: true,
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
  const data = ['1', '2', '3', '4', '5', '6']
  return (
    <>
      <div className="head-wrapper flex">
        <p>Key Stats</p>
        <Link to="#">View</Link>
      </div>


      <Slider {...settings} >
        {
          data.map((el, i) => (
            <div className='key-section'>
              <div className='key-runs'>
                <p>Most runs </p>
                <img src={right_Arrow} alt="" />
              </div>
              <div className='high-runs'>
                <div className="key-stats-high">
                  <h3>Mahendra Singh</h3>
                  <p>India</p>
                  <h4>165</h4>
                </div>

                <div className='player-most-run'>
                  <img src={img_dhoni} alt='' />
                </div>
              </div>


            </div>
          ))
        }


      </Slider>



    </>
  )
}

export default KeyStatsSeries



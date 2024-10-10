import React from 'react'
import { Link } from 'react-router-dom'
import { selectTranslations } from '../../../reduxx/languageSlice';
import { useSelector } from 'react-redux';
export const MoreSeasonsSeries = ({matchDataByTou}) => {
  const translations = useSelector(selectTranslations)

  if(!matchDataByTou){
    return(
      <div></div>
    )
  }
  return (
    <>
      <div className="head-wrapper flex">
        <p className='batting-career-name'>{translations['MoreSeasons']}</p> <Link to="#">View</Link>
      </div>

      <div className='seasons-section'>
        <div className='more-series-container'>
          <div className='series-more'>
            <p>World Series 2022</p>
          </div>
        </div>

        <div className='more-series-container'>
          <div className='series-more'>
            <p>World Series 2022</p>
          </div>
        </div>
      </div>
    </>
  )
}

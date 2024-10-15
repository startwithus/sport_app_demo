import React, { useState } from 'react'
import { selectTranslations } from '../../../reduxx/languageSlice';
import { useSelector } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SeriesInfoSeries = ({ matchDataByTou }) => {
  const translations = useSelector(selectTranslations)
  const [isLoading, setIsLoading] = useState(true)

  if (!matchDataByTou) {
    return (
      <div></div>
    )
  }
  return (
    <div className=''>
      <div className="head-wrapper flex">
        <p className='batting-career-name'>{translations['SeriesInfo']}</p>
      </div>
      <div className='series-info-section'>
        <SkeletonTheme highlightColor='#C0C0C0'>
          {
            matchDataByTou === 0 ?
              <div className="format-series">
                <Skeleton circle={true} width={50} height={50} />
                <h1><Skeleton /></h1>
                <h1><Skeleton /></h1>
                <h1><Skeleton /></h1>

              </div>

              :

              <div className='format-series'>
                <p>{translations['Series']}</p>
                <p>{translations['Duration']}</p>
                <p>{translations['Format']}</p>
                {/* <p>Location</p> */}
              </div>

          }
        </SkeletonTheme>
        <div className='format-series'>
          <h4>{matchDataByTou?.tournamentName}</h4>
          <h4>{(new Date(matchDataByTou?.startDate * 1000).toLocaleString()).split(',')[0]} - {(new Date(matchDataByTou?.lastScheduledMatchDate * 1000).toLocaleString()).split(',')[0]}</h4>
          <div className="" style={{ display: "flex" }} >
            {matchDataByTou?.formats?.map((el, i) => (
              <h4 style={{ textTransform: "capitalize" }} key={i}>{el}</h4>

            ))}
          </div>
        </div>




      </div >

    </div >
  )
}

export default SeriesInfoSeries

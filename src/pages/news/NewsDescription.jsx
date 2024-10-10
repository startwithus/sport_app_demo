import React from 'react'
import back from '../../assets/back-arrow.png'
import '../news/news.css'
import Layout from '../../layout/Layout'
import { Link, useLocation } from 'react-router-dom'
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';

const NewsDescription = () => {
  const { state } = useLocation()
  const translations = useSelector(selectTranslations)

  const newsData = state?.newsDesc ?? {}

  return (

    <Layout>
      <div className="main-wrapper-container">
        <div className='layout-container'>
      <div className="fixture-tab-wrapper">
      <div className="flex-2">
            <Link to="/">
              <img src={back} alt="" />
            </Link>
            <p className='para-news'>{translations['News']}</p>

          </div>
          <div className='all-news-container'>
            <div className="all-news-img-container">
              <img src={newsData?.cover_image} alt=""/>
            </div>
            <div className="news-desc-para all-news-width">
              <div className="news-title">
                <p className='' >{newsData?.heading}</p>
                <span className=''>{(new Date(newsData?.created_at)?.toLocaleString()?.slice(0, 10))}</span>
              </div>
            
              <p className='regular-para-3'>
                {newsData?.description?.p1}
              </p>
              <p className='regular-para-3'>
                {newsData?.description?.p2}
              </p>
              <p className='regular-para-3'>
                {newsData?.description?.p3}
              </p>
              <p className='regular-para-3'>
                {newsData?.description?.p4}
              </p>
              <p className='regular-para-3'>
                {newsData?.description?.p5}
              </p>
              <p className='regular-para-3'>
                {newsData?.description?.p6}
              </p>
             
            
            </div>
          </div>
      </div>
        </div>
      </div>
    </Layout>

  )
}

export default NewsDescription
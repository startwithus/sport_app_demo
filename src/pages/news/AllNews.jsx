import React, { useEffect, useState } from 'react'
import back from '../../assets/back-arrow.png'
import '../news/news.css'
import Layout from '../../layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { getCaller } from '../../services/api'
import TabsItem from '../../components/tab/TabsItem'
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';

const AllNews = () => {
    const navigate = useNavigate()
    const translations = useSelector(selectTranslations)
    const [currentPage, setCurrentPage] = useState(1);
    const pageLimit = 4;
    const [loading, setLoading] = useState(true);
    const [allNewsData, setAllNewsData] = useState([])
    const getAllNewsData = async () => {
        // setLoading(true)
        const offset = (currentPage - 1) * pageLimit;
        const res = await getCaller(`user/v1/get/all/news?limit=${pageLimit}&offset=${offset}`)
        setAllNewsData(res?.data)
        console.log(allNewsData)
        setLoading(false)
    }
    useEffect(() => {
        getAllNewsData()
    }, [currentPage])
    const handleLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };
    const handlePrev = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };
    const tabData = [
        { label: 'Reccommended' },
        { label: 'Trending' },
        { label: 'Latest' },
        { label: 'Most Views' },

    ]

    return (

        <Layout>
            <div className="main-wrapper-container">
                <div className='layout-container'>
                    <div className="news-head">
                        <Link to="/">
                            <img src={back} alt="" />
                        </Link>
                        <p className='para-news'>{translations['News']}</p>
                    </div>
                    <div className='latest-news'>
                        <TabsItem tabData={tabData} ></TabsItem>
                    </div>

                    <div className="all-news-container">
                        {
                            allNewsData?.length > 0 ? allNewsData?.map((el, i) => (
                                <div className='all-news-content' key={i} onClick={() => navigate('/news/description', {
                                    state: {
                                        newsDesc: el
                                    }
                                })}>
                                    <div className="all-new-img">
                                        <img src={el?.cover_image} alt="" />
                                    </div>
                                    <div className="all-news-desc">
                                        <div className="news-title">
                                            <p className=''>{el?.heading}</p>
                                            <span className=''>{(new Date(el?.created_at)?.toLocaleString()?.slice(0, 10))}</span>
                                        </div>
                                        <div className="news-desc-para">
                                            <p className="">{el?.sub_heading}! {el.description.p1} <Link>More</Link></p>
                                        </div>
                                    </div>
                                </div>
                            )) : null
                        }
                    </div>
                    {loading && <div className="loader-wrapper">
              <div className='loader'>
              </div>
            </div> }
                    {!loading && (
                        <div className='More'>
                            <button onClick={handlePrev} disabled={currentPage===1}>Prev</button>
                            <button text="button" onClick={handleLoadMore} disabled={currentPage-1}>Read More</button>
                        </div>
                    )}
                </div>

            </div>
        </Layout>

    )
}

export default AllNews
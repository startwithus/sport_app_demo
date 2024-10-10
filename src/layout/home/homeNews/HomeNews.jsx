import React, { useEffect, useState } from 'react'
import '../homeNews/homeNews.css'
import { Link, useNavigate } from 'react-router-dom'
import { apiPath } from '../../../services/Apipath'
import { fetchData } from '../../../services/apiUrl'
import { selectTranslations } from '../../../reduxx/languageSlice';
import { useSelector } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const HomeNews = () => {
  const translations = useSelector(selectTranslations)

  const navigate = useNavigate()
  const [newsData, setNewsData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0)
  const pageLimit = 5;
  const itemsPerPage = 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const fetchNews = async (apiEndpoint) => {
    try {

      setLoading(true);
      const result = await fetchData(apiEndpoint);
      setNewsData(result?.data);

      setLoading(false)

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {

    const offset = (currentPage - 1) * pageLimit;
    fetchNews(`${process.env.REACT_APP_BASE_URL}/${apiPath.getNews}?limit=${pageLimit}&offset=${offset}`);


  }, []);

  const getOneNews = newsData?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="news-container">

      <div className='layout-container'>
        <div className="head-wrapper flex">
          <p>{translations['News']}</p>
          <Link to="/news/allNews">{translations['View']}</Link>
        </div>
{
  loading?<div className="loader-wrapper"
  >
    <div className='loader'>
    </div>
  </div>: <div className="new-card-container">

<div className="new-card-container">
  {
    getOneNews?.length > 0 ? getOneNews?.map((one, index) => (
      <div className="news-card-left" key={index} onClick={() => navigate('/news/description', {
        state: {
          newsDesc: one
        }
      })}>
        <div className="left-img-container">
          <img src={one?.cover_image} alt="" />
        </div>

        <div className="news-title-container">
          <div className="news-title-head">
            <h2 className='regular-para'>{one?.heading}</h2>
            <p className='small-para' style={{ textAlign: "left" }}>{(new Date(one?.created_at)?.toLocaleString()?.slice(0, 10))}</p>
          </div>
          <div className="news-title-para">
            <p className='regular-para-2'>{one?.content?.slice(0, 200)} <Link>More</Link></p>
          </div>
        </div>
      </div>
    )) :<SkeletonTheme color="#202020" highlightColor="">
    <div className="">
      <Skeleton height={472} width={730} className="skeleton-card-1" />
      
    </div>
   
  </SkeletonTheme>
  }
  <div className="news-card-right">

     {
        newsData?.length > 0 ? newsData?.map((news, i) => (
          <div className="news-card-right-content" key={i}>
            <img src={news?.cover_image} alt="" onClick={() => navigate('/news/description', {
              state: {
                newsDesc: news
              }
            })} />
            <div className="news-card-right-para">
              <p>
                {news?.content?.slice(0, 50)}
              </p>
              <span>{(new Date(news?.created_at).toLocaleString())}</span>
            </div>
          </div>
        )) :  <SkeletonTheme color="#202020" highlightColor="">
        <div className="skeleton-">
          <Skeleton height={80} width={350} className="skeleton-card" />
          <Skeleton height={80} width={350} className="skeleton-card" />
          <Skeleton height={80} width={350} className="skeleton-card " />
          <Skeleton height={80} width={350} className="skeleton-card " />
          <Skeleton height={80} width={350} className="skeleton-card " />
        </div>
       
      </SkeletonTheme>
    }


  </div>


</div>



</div >
}
       
      </div >
    </div >
  )
}

export default HomeNews